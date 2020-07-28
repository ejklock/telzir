import React from 'react';

import { Container } from './styles';

const InputContainer: React.FC = ({ children = '' }) => {
  return <Container>{children}</Container>;
};

export default InputContainer;
