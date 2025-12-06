import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  quizzes: quizzes,
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: module }) => {
      const newModule: any = {
	_id: module._id,
	description: module.description,
	title: module.title,
	points: module.points,
	course: module.course,
	available: module.available,
	due: module.due,
	until: module.until,
	due_dateform: module.due_dateform,
	available_dateform: module.available_dateform,
	until_dateform: module.until_dateform}
	state.quizzes = [...state.quizzes, newModule] as any;
    },
    deleteQuiz: (state, { payload: moduleId }) => {
      state.quizzes = state.quizzes.filter(
	(m: any) =>  m._id !== moduleId);
    },
    updateQuiz: (state, { payload: module }) => {
      state.quizzes = state.quizzes.map((m: any) =>
	m._id === module._id ? module : m
      ) as any;
    },
	    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, setQuizzes } =
  quizzesSlice.actions;
export default quizzesSlice.reducer;