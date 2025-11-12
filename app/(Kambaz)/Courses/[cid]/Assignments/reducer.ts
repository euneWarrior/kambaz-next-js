import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: module }) => {
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
	state.assignments = [...state.assignments, newModule] as any;
    },
    deleteAssignment: (state, { payload: moduleId }) => {
      state.assignments = state.assignments.filter(
        (m: any) =>  m._id !== moduleId);
    },
    updateAssignment: (state, { payload: module }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    	    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;