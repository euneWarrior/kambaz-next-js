'use client'
import ReduxProvider from "../store/ReduxProvider";
import AddRedux from "./AddRedux/page";
import CounterRedux from "./CounterRedux/page";
import HelloRedux from "./HelloRedux/page";
import TodoList from "./todos/TodoList";
import store from "../store/page";

export default function ReduxExamples(){
  return(
    <div>
	<ReduxProvider>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
	</ReduxProvider>
    </div>
  );
};