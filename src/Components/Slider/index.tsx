import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/slider';
import React, { useState } from 'react'
import chairImage from "../../assets/chair.svg"
import DarkAnnotation from "../../assets/DarkAnnotation.svg"
import sliderImage from "../../assets/slider.svg"
import "./styles.css"
interface Props {

}

export const SliderComponent: React.FC<Props> = ({ }) => {

        const [val, setVal] = useState(75);
        return (
                <Box marginTop="200px" marginBottom="30px" >
                        <Flex position="relative" alignItems="flex-end" justifyContent="space-between">
                                <div className="DarkAnnotation">
                                        You
                                </div>
                                <div className="DarkAnnotation-side">
                                        Others
                                </div>
                                <Image zIndex="-10" bottom="-14px" position="absolute" src={chairImage} height={`${(218 - val)}px`} width={`${(218 - val)}px`} />
                                <Image zIndex="-10" bottom="-14px" position="absolute" right="-30px" src={chairImage} height={`${(118 + val)}px`} width={`${(118 + val)}px`} />
                        </Flex>

                        <Flex width="600px" alignItems="flex-end">
                                <Slider aria-label="slider-ex-4" value={val} onChange={(newVal) => { setVal(newVal) }}  >
                                        <SliderTrack bgGradient="linear(to-l, #FA94FC,#86BDFE,#FA94FC)">
                                                <SliderFilledTrack bg="transparent" />
                                        </SliderTrack>
                                        <SliderThumb boxSize={8} backgroundImage={sliderImage} backgroundSize="50px" backgroundRepeat="no-repeat" backgroundPosition="center center" >
                                                <Box color="tomato" />
                                        </SliderThumb>
                                </Slider>
                        </Flex>
                </Box>
        );
}