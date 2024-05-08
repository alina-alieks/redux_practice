import { nanoid } from "nanoid";

export const addTask = (text) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
};

export const deleteTask = (taskID) => {
  return {
    type: "tasks/deleteTask",
    payload: taskID,
  };
};

export const toggleCompleted = (taskID) => {
  return {
    type: "tasks/toggleCompleted",
    payload: taskID,
  };
};
