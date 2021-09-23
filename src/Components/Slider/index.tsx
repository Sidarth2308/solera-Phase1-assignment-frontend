import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from "@chakra-ui/slider";
import React, { useState } from "react";
import sliderImage from "../../assets/slider.svg";
import "./styles.css";
interface Props {
  graphic?: string;
}

export const SliderComponent: React.FC<Props> = ({ graphic }) => {
  const [val, setVal] = useState(75);
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
            setVal(newVal);
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
