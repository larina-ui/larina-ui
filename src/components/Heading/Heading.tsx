import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: string;
  as?: JSX.Element;
};

type HeadingTagProps = {
  level: number;
};

const getFontSize = (level: number): string => {
  const sizes = ['2.5rem', '2rem', '1.8rem', '1.5rem', '1.3rem', '1.2rem'];
  return sizes[level - 1];
};

const HeadingTag = styled.h1<HeadingProps>`
  font-size: ${({ level }) => getFontSize(level)};
  font-weight: bold;
  color: #333;
  /* Add any other styles as needed */
`;

const Heading: React.FC<HeadingProps> = ({ level, children }) => {
  return <HeadingTag level={level}>{children}</HeadingTag>;
};

export default Heading;