import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [condition, setCondition] = useState(false);
  // toggle 함수 실행->setCondition 통해 useState(false)를 변경하는 값이: !condition
  const toggle = () => setCondition(!condition);
  useEffect(() => {
    console.log(condition);
  }, [condition]);

  const renderCondition = condition ? "True" : "False";

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div>{renderCondition}</div>

      {/* <div>True</div>
      <div>False</div> */}

      {/* 클릭 할때마다 true->false, false ->true */}
      <button onClick={toggle}>Toogle</button>
    </div>
  );
}
