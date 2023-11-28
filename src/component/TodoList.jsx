import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
export default function TodoList({ isActive }) {
  // store에 있는 todos를 가지고 온다
  // state 는 store에 있는 모든 모듈을 가져오기 때문에
  // 해당되는 모듈만 들고와야 한다 state.todos
  const todos = useSelector((state) => state.todos);
  //   console.log(todos);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ondeleteClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const HandelSwitchBtn = (id) => {
    dispatch(switchTodo(id));
  };

  return (
    <StyledListBox>
      <h4>{isActive ? "해야할 일💥" : "완료된 일💡"}</h4>
      {todos
        .filter((data) => data.isDone === !isActive)
        .map((item) => {
          return (
            <>
              <StyledTodoBox key={item.id}>
                <h4>{item.title}</h4>
                <div>{item.content}</div>

                <button onClick={() => HandelSwitchBtn(item.id)}>
                  {isActive ? "완료" : "취소"}
                </button>
                <button onClick={() => ondeleteClick(item.id)}>삭제</button>
                <br />
                <button
                  onClick={() => {
                    navigate(`/${item.id}`);
                  }}
                >
                  상세보기
                </button>
              </StyledTodoBox>
            </>
          );
        })}
    </StyledListBox>
  );
}

const StyledListBox = styled.div`
  background-color: lightblue;
  padding: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: lightgray;
  padding: 20px;
  margin: 10px;
`;
