import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uuid from "react-uuid";
import { addTodo } from "../redux/modules/todos";

export default function Input() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
  };

  const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onContentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  return (
    <InputContainer>
      <form onSubmit={onHandler}>
        <InputTitleBox>
          제목 :
          <input
            type="text"
            value={title}
            onChange={onTitleChangeHandler}
          ></input>
        </InputTitleBox>
        <InputContentBox>
          내용 :
          <input
            type="text"
            value={content}
            onChange={onContentChangeHandler}
          ></input>
          <button type="submit">추가</button>
        </InputContentBox>
      </form>
    </InputContainer>
  );
}
const InputContainer = styled.div`
  background-color: yellowgreen;
  padding: 20px;
`;

const InputTitleBox = styled.span`
  margin: 10px;
`;

const InputContentBox = styled.span`
  margin: 10px;
`;
