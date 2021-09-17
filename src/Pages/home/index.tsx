import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress';
import React from 'react'
import dotsImage from "../../assets/dotsOnPage.svg";
import arrowIcon from "../../assets/arrow.svg";
import { SliderComponent } from '../../Components/Slider';
import "./styles/styles.css"
interface Props {

}

const Home: React.FC<Props> = ({ }) => {

    return (
        <Flex direction="column" width="1000px" alignItems="center" justifyContent="center" marginLeft="auto" marginRight="auto" marginTop="20px" >
            <Flex alignItems="center" justifyContent="center" marginBottom="40px">
                <Flex alignItems="center" justifyContent="center" marginRight="10px">
                    <CircularProgress value={40} color="#775ef0">
                        <CircularProgressLabel><b>02%</b></CircularProgressLabel>
                    </CircularProgress>
                </Flex>
                <Flex direction="column">

                    <Text fontSize="24px" fontWeight="600" lineHeight="28px">I think</Text>
                    <Text fontSize="sm">Question 1/16</Text>

                </Flex>
            </Flex>
            <div style={{ width: "100%", borderBottom: "2px solid rgba(202, 201, 209, 0.44)" }}></div>


            <Flex alignItems="center" justifyContent="center" marginTop="40px" direction="column" marginBottom="20px" >
                <Text color="#191C2CB2" fontSize="18px" lineHeight="40px" textAlign="center" marginBottom="20px" >Think of individuals like you, people you instinctively compare yourself to.<br /> What is the likelihood that each of the following events will happen to you personally as compared to them?</Text>

                <Text fontWeight="700" color="#000" fontSize="38px" lineHeight="64px" textAlign="center" >Achieve a comfortable lifestyle in<br />retirement.</Text>
            </Flex>
            <Flex marginBottom="20px">
                <Image src={dotsImage} />
            </Flex>
            <SliderComponent />
            <Flex alignItems="center" justifyContent="center">
                <Flex width="50px" height="50px" cursor="pointer" borderRadius="50px" alignItems="center" justifyContent="center" marginRight="20px">

                    <Image width="40%" src={arrowIcon} className="LeftArrow" />
                </Flex>
                <Flex cursor="pointer" width="50px" height="50px" bg="#191C2C" borderRadius="50px" alignItems="center" justifyContent="center">

                    <Image width="40%" src={arrowIcon} className="RightArrow" />
                </Flex>


            </Flex>
        </Flex >
    );
}

export default Home;