import React from "react";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
import Roll from "react-reveal/Roll";
const Slideshow = () => {
  return (
    <Container>
      <Roll>
        <Slide easing="ease">
          <ContainerImage className="each-slide">
            <Image src={"0.jpeg"} />
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"1.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"3.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"4.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"5.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"6.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"7.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"8.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"9.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"10.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"11.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"12.jpeg"} />,
          </ContainerImage>
          <ContainerImage className="each-slide">
            <Image src={"13.jpeg"} />,
          </ContainerImage>
        </Slide>
      </Roll>
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
`;
const ContainerImage = styled.div`
  height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
