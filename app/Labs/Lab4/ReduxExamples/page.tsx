'use client'
import { Provider } from "react-redux";
import AddRedux from "./AddRedux/page";
import CounterRedux from "./CounterRedux/page";
import HelloRedux from "./HelloRedux/page";
import TodoList from "./todos/TodoList";
import store from "../store";

export default async function ReduxExamples() {
  return(
    <div>
	<Provider store = {store}>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
	</Provider>
    </div>
  );
};