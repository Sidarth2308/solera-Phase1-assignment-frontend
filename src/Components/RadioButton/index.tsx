import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import "./styles/styles.css";
interface Props {
  options?: string[];
  graphic?: string;
}

const RadioButton: React.FC<Props> = ({ options, graphic }) => {
  return (
    <Box marginTop="30px" marginBottom="30px">
      <Flex
        position="relative"
        alignItems="center"
        direction="column"
        justifyContent="space-between"
      >
        <Image src={graphic} />
        <Flex className="RadioButtonsContainer">
          {options?.map((option, index) => {
            return (
              <Flex key={index} className="RadioButton">
                {option}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Box>
  );
};

export default RadioButton;
