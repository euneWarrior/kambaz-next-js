'use client'
import {Row, Col, ListGroup, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { MdSearch } from "react-icons/md";
export default function AssignmentTopButtons() {
 return (
   <div id="wd-assignment-controls" className="d-flex position-relative text-nowrap">
	<Col>

	<Form.Control id = "wd-search" className = "d-flex flex-row w-50 " type="textarea" placeholder="Search..." />

	</Col>

	
     <Button  size = "lg" className="position-relative float-right" id="wd-add-assignment">
       <FaPlus />Group
     </Button>

	 <Button className = "float-right" style={{backgroundColor: '#f0f0f0'}} 
	 size = "lg" id="wd-add-group">
		<FaPlus className="align-mid"/>
       Assignment
     </Button>


<MdSearch className="position-absolute  d-sm-block d-md-none" style = {{top: "10", left: 15}}/>
<MdSearch className="position-absolute  d-sm-none d-md-block" style = {{top: "10", left: 15}}/>

              
   </div>
);}
