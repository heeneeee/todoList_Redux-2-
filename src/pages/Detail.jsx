import styled from "styled-components";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Detail = () => {
  const navigate = useNavigate();
  const paramId = useParams().id;
  const todos = useSelector((state) => state.todos);
  const filteredTodo = todos.filter((item) => item.id === paramId)[0];
  return (
    <StDetailBox>
      <div>Detail</div>
      <h2 styled={{ marginBottom: "10px" }}>상세페이지</h2>
      <br />
      제목 : {filteredTodo.title}
      <br />
      내용 : {filteredTodo.content}
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전 페이지 이동
      </button>
    </StDetailBox>
  );
};

export default Detail;

const StDetailBox = styled.div`
  background-color: lightcoral;
  padding: 20px;
`;
