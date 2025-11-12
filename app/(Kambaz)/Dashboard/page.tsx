"use client"
import { useEffect, useState } from "react";
import {FormControl, Row, Card, Col, CardImg, CardBody, CardTitle, CardText, Button} from "react-bootstrap";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses, setAllCourses } from "../Courses/reducer";
import * as client from "../Courses/client";
import * as courseList from "../Courses/reducer";
export default function Dashboard() {
 const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "../reactjs.jpg", description: "New Description"
  });
  const [enrolling, setEnrolling] = useState(false)
    const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(addNewCourse(newCourse));
  };

      const onAddEnrollment = async (courseData: any) => {
    dispatch(addNewCourse(courseData));
  };
   const { courses } = useSelector((state: any) => state.coursesReducer);
   const { allCourses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};
  const fetchCourses = async () => {
	if(!currentUser?._id)return;
    try {
      const courses = await client.findMyCourses(currentUser._id);
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

const addEnroll = async (courseId: string) => {
	try {
		await client.addMyCourses(currentUser._id, courseId);
		fetchCourses();
	} catch (error) {
		console.error(error);
	}
};

    const fetchListCourses = async () => {
    try {
      const allCourses = await client.fetchAllCourses();
      dispatch(setAllCourses(allCourses));
    } catch (error) {
      console.error(error);
    }
  };
    useEffect(() => {
    fetchListCourses();
  }, []);
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={onAddNewCourse} > Add </button>
	<button className="btn btn-warning float-end me-2"
                onClick={onUpdateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <FormControl value={course.name} className="mb-2" 
       onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl value={course.description} rows={3}
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      	<button className="btn btn-warning float-end me-2"
                onClick={() => setEnrolling(!enrolling)} id="wd-update-course-click">
          Enroll in Courses
        </button>
      {enrolling && 

<div id="wd-dashboard-courses"> 
	      <h2 id="wd-dashboard-published">All Courses ({allCourses.length})</h2> <hr />
        <Row xs={1} md={5} className="g-4">
          {allCourses?.map((course) => (
            <Col key = {course?._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>

                  <CardImg src={`/images/${course._id}.jpg`} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
		<button onClick={(event) => {
                      event.preventDefault();
                       onDeleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
	    <button id="wd-add-course-click"
  onClick={() => onAddEnrollment(course)}
  className="btn btn-warning me-2 float-end" >
  Add Course
</button>


                  </CardBody>
                
              </Card>
            </Col>
          ))}
        </Row>
      </div>

	}
      {!enrolling &&
	      <div id="wd-dashboard-courses"> 
	      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key = {course?._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src={`/images/${course._id}.jpg`} variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                    <Button variant="primary"> Go </Button>


		<button onClick={(event) => {
                      event.preventDefault();
                       onDeleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
	    <button id="wd-edit-course-click"
  onClick={(event) => {
    event.preventDefault();
    setCourse(course);
  }}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>


                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

	}

    </div>
    );
}