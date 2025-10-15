'use client'
import Link from "next/link";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function CourseNavigation(  { children, params }: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
	  const pathname = usePathname();
const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
const breakup1 = pathname.split("/");
const cid = breakup1.at(2);
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
	      {links.map((link) => (
		
        <ListGroupItem key={link} as={Link} href= {`/Courses/${cid}/${link}`}
	
          className={`${pathname.includes(link) ? "list-group-item active border-0" : "list-group-item text-danger border-0"}`}>
         {link}
          <br />

        </ListGroupItem>
	
      ))}
	  
    </div>
);}