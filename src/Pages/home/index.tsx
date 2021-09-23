import React, { useState } from "react";

import { QuestionData } from "../../Data";
import "./styles/styles.css";

import QuestionContainer from "../../Containers/QuestionContainer";

import { StateContext } from "../../Context";
interface Props {}

const Home: React.FC<Props> = () => {
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  console.log(answers);
  const decreaseCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <StateContext.Provider value={{ answers, setAnswers, counter }}>
      <QuestionContainer
        data={QuestionData[counter]}
        handleNext={increaseCounter}
        handlePrev={decreaseCounter}
      />
    </StateContext.Provider>
  );
};

export default Home;
