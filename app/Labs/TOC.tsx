'use client'
import Link from "next/link";
import {Nav, NavItem, NavLink} from "react-bootstrap";
export default function TOC() {
 return (
   <Nav variant="pills">
     <NavItem>
       <Nav.Link href="/Labs" as={Link}>Labs</Nav.Link>
     </NavItem>
     <NavItem>
       <Nav.Link href="/Labs/Lab1" as={Link}>Lab 1</Nav.Link>
     </NavItem>
     <NavItem>
       <Nav.Link href="/Labs/Lab2" as={Link} active>Lab 2</Nav.Link>
     </NavItem>
     <NavItem>
       <Nav.Link href="/Labs/Lab3" as={Link}>Lab 3</Nav.Link>
     </NavItem>
     <NavItem>
       <Nav.Link href="/Account/Signin" as={Link}>Kambaz</Nav.Link>
     </NavItem>
     <NavItem>
       <Nav.Link href="https://github.com/euneWarrior/kambaz-next-js/tree/a2">My GitHub</Nav.Link>
     </NavItem>
   </Nav>
);}
