import React from 'react';

import { Container, MediaContainer, MediaIconText } from './styles';

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Container>
      <MediaContainer>
        <MediaIconText>{children}</MediaIconText>
      </MediaContainer>
    </Container>
  );
};

export default Card;
