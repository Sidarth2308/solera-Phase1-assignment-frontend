import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from "@chakra-ui/slider";
import React, { useContext } from "react";
import sliderImage from "../../assets/slider.svg";
import "./styles.css";

import { StateContext } from "../../Context";
interface Props {
  graphic?: string;
}
interface NotationProps {
  graphic?: string;
  options?: string[];
}

// valueFromContext?.answers[valueFromContext.counter]  || 50

export const SliderComponent: React.FC<Props> = ({ graphic }) => {
  const valueFromContext = useContext(StateContext);
  var val = 50;
  if (valueFromContext != null) {
    val = parseInt(valueFromContext?.answers[valueFromContext.counter]) || 50;
  }

  return (
    <Box marginTop="200px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <div className="DarkAnnotation">You</div>
        <div className="DarkAnnotation-side">Others</div>
        <Image
          zIndex="-10"
          bottom="-14px"
          position="absolute"
          src={graphic}
          height={`${200 - val}px`}
          width={`${200 - val}px`}
        />
        <Image
          zIndex="-10"
          bottom="-14px"
          position="absolute"
          right="-30px"
          src={graphic}
          height={`${100 + val}px`}
          width={`${100 + val}px`}
        />
      </Flex>

      <Flex width="600px" alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal) => {
            if (valueFromContext != null) {
              const tempAnswers = valueFromContext?.answers;
              tempAnswers[valueFromContext.counter] = newVal.toString();
              valueFromContext?.setAnswers([...tempAnswers]);
            }
          }}
        >
          <SliderTrack bgGradient="linear(to-l, #FA94FC,#86BDFE,#FA94FC)">
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
    </Box>
  );
};

export const SliderWithOneGraphic: React.FC<Props> = ({ graphic }) => {
  const valueFromContext = useContext(StateContext);
  var val = 50;
  if (valueFromContext != null) {
    val = parseInt(valueFromContext?.answers[valueFromContext.counter]) || 50;
  }

  return (
    <Box marginTop="200px" marginBottom="30px">
      <Flex position="relative" alignItems="center" justifyContent="center">
        <Image
          zIndex="-10"
          bottom="-14px"
          position="absolute"
          src={graphic}
          height={`${200}px`}
          width={`${200}px`}
        />
      </Flex>

      <Flex width="600px" alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal) => {
            if (valueFromContext != null) {
              const tempAnswers = valueFromContext?.answers;
              tempAnswers[valueFromContext.counter] = newVal.toString();
              valueFromContext?.setAnswers([...tempAnswers]);
            }
          }}
        >
          <SliderTrack bgGradient="linear(to-l, #FA94FC,#86BDFE,#FA94FC)">
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
    </Box>
  );
};

export const SliderWithOneGraphicAndNotation: React.FC<NotationProps> = ({
  graphic,
  options
}) => {
  const valueFromContext = useContext(StateContext);
  var val = 50;
  if (valueFromContext != null) {
    val = parseInt(valueFromContext?.answers[valueFromContext.counter]) || 50;
  }

  return (
    <Box marginTop="200px" marginBottom="30px">
      <Flex position="relative" alignItems="center" justifyContent="center">
        <Image
          zIndex="-10"
          bottom="-14px"
          position="absolute"
          src={graphic}
          height={`${200}px`}
          width={`${200}px`}
        />
      </Flex>

      <Flex width="600px" alignItems="flex-end">
        <Slider
          aria-label="slider-ex-4"
          value={val}
          onChange={(newVal) => {
            if (valueFromContext != null) {
              const tempAnswers = valueFromContext?.answers;
              tempAnswers[valueFromContext.counter] = newVal.toString();
              valueFromContext?.setAnswers([...tempAnswers]);
            }
          }}
        >
          <SliderTrack bgGradient="linear(to-l, #FA94FC,#86BDFE,#FA94FC)">
            <SliderFilledTrack bg="transparent" />
          </SliderTrack>
          <SliderThumb
            background="transparent"
            boxSize={8}
            backgroundImage={sliderImage}
            backgroundSize="50px"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
          >
            <Box color="tomato" />
          </SliderThumb>
        </Slider>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text>{options && options[0]}</Text>
        <Text>{options && options[1]}</Text>
      </Flex>
    </Box>
  );
};
