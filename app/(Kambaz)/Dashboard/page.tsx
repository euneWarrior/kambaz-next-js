import {Col, Row, Button, CardBody, 
	CardTitle, CardText, Card, CardImg} from "react-bootstrap";
import Link from "next/link";
//import Image from "next/image";
export default function Dashboard() {
  return (
<div id="wd-dashboard">
 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
 <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>

   <Card>
     <Link href="/Courses/3210/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/3210.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3210 Artificial Intelligence </CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        AI developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>

   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
   
      <Card>
     <Link href="/Courses/2222/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/2222.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2222 Web Development </CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Front end developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   
         <Card>
     <Link href="/Courses/3333/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/3333.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3333 Operating System Design </CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Architecture Designer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   
    </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   
            <Card>
     <Link href="/Courses/2004/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/2004.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS2004 Assembly Language Programming </CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Assembly Programmer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   
    </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   
               <Card>
     <Link href="/Courses/5010/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/5010.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS5010 Programming Design Principles </CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Back End software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>

    </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   
                  <Card>
     <Link href="/Courses/6720/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/6720.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CY6720 Advance Topics in Cybersecurity </CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Cybersecurity Researcher</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
   
                     <Card>
     <Link href="/Courses/4200/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/4200.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS4200 Algorithms </CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Theory Researcher</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   
    </Col>
  </Row>
</div></div>
);}


