import React from "react";
import { Slide } from "react-slideshow-image";
import styled from "styled-components";
const Slideshow = () => {
  return (
    <Container>
      <LinkContainer>
        <Link href="https://join.tinkerhub.org/" target="_blank">
          join.tinkerhub.org
        </Link>
      </LinkContainer>
      <Slide easing="ease">
        <ContainerImage className="each-slide">
          <Image src={"0.png"} />
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"1.png"} />,
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"3.png"} />,
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"4.png"} />,
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"5.png"} />,
        </ContainerImage>
        <ContainerImage className="each-slide">
          <Image src={"6.png"} />,
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
const Link = styled.a`
  color: wheat;
  padding: 8px;
  font-weight: bolder;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
`;

const LinkContainer = styled.div`
  background-color: gray;
  display: grid;
  justify-content: center;
  height: 5vh;
  width: 300px;
  margin: 0 auto 1.2vh auto;
  border-radius: 20px;
  &&&{
    :hover{
    background-color:darkblue;
    color:wheat;
  }
  }
`;
