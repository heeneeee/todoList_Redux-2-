import React from "react";
import Input from "../component/Input";
import TodoList from "../component/TodoList";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
      <Footer />
    </div>
  );
};

export default Home;
