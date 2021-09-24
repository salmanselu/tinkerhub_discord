import React from "react";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
const Slideshow = () => {
  return (
    <Container>
      <Slide easing="ease">
        <ContainerImage className="each-slide">
          <Image src={"0.webp"} />
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"1.webp"} />,
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"2.webp"} />,
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"3.webp"} />,
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"4.webp"} />,
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"5.webp"} />,
        </ContainerImage>
        
        
      </Slide>
    </Container>
  );
};

export default Slideshow;

const Image = styled.img`
  height: 90vh;
  border-radius: 20px;
  margin-left: 2vw;
  margin-right: 2vw;
`;
const Container = styled.div`
  background-color: black;
  padding: 10px 10px 0px 10px;
`;
const ContainerImage = styled.div`
  height: 92vh;
  display: grid;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

