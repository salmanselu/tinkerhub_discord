import styled from "styled-components";

import React from "react";

export default function WhatsApp() {
  return (
    <>
      <Container>
        <Image src={"14.jpg"} />
      </Container>
      <Link className="Link" href="http://bit.ly/thkwhatsapp" target="_blank">
        Join Now
      </Link>
    </>
  );
}

const Image = styled.img`
  height: 90vh;
`;
const Link = styled.a`
  color: white;
  z-index: 100;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  display: grid;
  place-items: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bolder;
`;

const Container = styled.div`
  display: grid;
  place-items: center;
`;