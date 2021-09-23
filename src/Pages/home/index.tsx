import React, { useState } from "react";

import { QuestionData } from "../../Data";
import "./styles/styles.css";

import QuestionContainer from "../../Containers/QuestionContainer";

interface Props {}

const Home: React.FC<Props> = () => {
  const [counter, setCounter] = useState(0);

  const decreaseCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <QuestionContainer
      data={QuestionData[counter]}
      handleNext={increaseCounter}
      handlePrev={decreaseCounter}
    />
  );
};

export default Home;
