'use client'
import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../ReduxExamples/AddRedux/addReducer";
import todosReducer from "../ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: { helloReducer,
	 addReducer, 
	 counterReducer, 
	 todosReducer, }

  });
  // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { add: AddState }
export type AppDispatch = typeof store.dispatch;
export default store;