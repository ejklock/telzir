import React from 'react';

import { Container, SectionIcon } from './styles';

interface SectionProps {
  title: string;
  id: string;
  background?: string;
  padding?: string;
  direction?: string;
  children?: React.ReactNode;
}
const Section: React.FC<SectionProps> = ({
  title,
  direction,
  children,
  padding,
  background,
  id,
}) => {
  return (
    <Container
      background={background}
      id={id}
      direction={direction}
      padding={padding}
    >
      <SectionIcon>
        <h1>{title}</h1>
      </SectionIcon>
      {children}
    </Container>
  );
};

export default Section;
