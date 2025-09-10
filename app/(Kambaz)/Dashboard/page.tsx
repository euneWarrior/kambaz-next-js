import Link from "next/link";
//import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
	<div className="wd-dashboard-course">
          <Link href="/Courses/3210/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/3210.jpg" width={200} />
            <div>
              <h5> CS3210 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                AI developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
	<div className="wd-dashboard-course">
          <Link href="/Courses/2222/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/2222.jpg" width={200} />
            <div>
              <h5> CS2222 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Front end developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
	<div className="wd-dashboard-course">
          <Link href="/Courses/3333/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/3333.jpg" width={200} />
            <div>
              <h5> CS3333 Operating System Design </h5>
              <p className="wd-dashboard-course-title">
                Architecture Designer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
	<div className="wd-dashboard-course">
          <Link href="/Courses/2004/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/2004.jpg" width={200} />
            <div>
              <h5> CS2004 Assembly Language Programming </h5>
              <p className="wd-dashboard-course-title">
                Assembly Programmer </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
	<div className="wd-dashboard-course">
          <Link href="/Courses/5010/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/5010.jpg" width={200} />
            <div>
              <h5> CS5010 Programming Design Principles </h5>
              <p className="wd-dashboard-course-title">
                Back End software developer </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
	<div className="wd-dashboard-course">
          <Link href="/Courses/6720/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/6720.jpg" width={200} />
            <div>
              <h5> CY6720 Advance Topics in Cybersecurity </h5>
              <p className="wd-dashboard-course-title">
                Cybersecurity Researcher </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
	<div className="wd-dashboard-course">
          <Link href="/Courses/4200/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/4200.jpg" width={200} />
            <div>
              <h5> CS4200 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Theory Researcher </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
