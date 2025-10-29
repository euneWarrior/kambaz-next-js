"use client"
export const dynamic = 'force-dynamic';
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent"
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent"
import PassingFunctions from "./PassingFunctions"
import ReduxExamples from "./ReduxExamples/page";
import StringStateVariables from "./StringStateVariables";
import store from "./store/page";
import { Provider } from "react-redux";

export default function Lab4() {
	  function sayHello() {
    alert("Hello");
  }
  return ( 
  <Provider store={store}>

  <div id = "wd-lab4">

	<h1>Lab 4</h1>
	<ClickEvent />
	<PassingDataOnEvent />
	<PassingFunctions theFunction={sayHello}/>
	<EventObject />
	<Counter />
	<BooleanStateVariables />
	<StringStateVariables />
	<DateStateVariable />
	<ObjectStateVariable />
	<ArrayStateVariable />
	<h3>
		Parent State Component
	</h3>
	<ParentStateComponent />
	<ReduxExamples />

  </div>
  </Provider>
 )};