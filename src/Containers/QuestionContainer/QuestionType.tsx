import React from "react";
import RadioButton from "../../Components/RadioButton";
import { SliderComponent } from "../../Components/Slider";

interface Props {
  type: {
    id: number;
    type: string;
    options?: string[];
  };

  graphic?: string;
}

const QuestionType: React.FC<Props> = ({ type, graphic }) => {
  if (type.id === 0) {
    return <RadioButton graphic={graphic} options={type.options} />;
  } else if (type.id === 1) {
    return <SliderComponent graphic={graphic} />;
  } else {
    return <div>I am QuestionType</div>;
  }
};

export default QuestionType;
