import uuid from "react-uuid";

const initialState = [
  {
    id: uuid(),
    title: "리액트",
    content: "이해하기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리덕스",
    content: "사용하기",
    isDone: false,
  },
  {
    id: uuid(),
    title: "열심히",
    content: "공부하기",
    isDone: true,
  },
];

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todos;
