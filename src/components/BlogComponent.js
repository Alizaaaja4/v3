import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Box = styled(motion.a)`
  width: 16rem;
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;
  overflow: hidden; /* Ensure content stays within the box */

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 14rem; /* Adjust width for smaller screens */
    height: auto; /* Allow height to adjust based on content */
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  background-position: center;
  border: 1px solid transparent;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }

  @media (max-width: 768px) {
    height: 50%; /* Adjust the height for smaller screens */
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
  white-space: nowrap; /* Prevent tags from wrapping to the next line */
  overflow: hidden; /* Hide overflow if the content is too long */
  text-overflow: ellipsis; /* Show ellipsis if the content overflows */

  @media (max-width: 768px) {
    white-space: normal; /* Allow wrapping on smaller screens */
  }
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={`${link}`}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
