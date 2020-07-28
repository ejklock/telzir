import React from 'react';
import { render } from '@testing-library/react';

import Main from '../../pages/Main';

// const apiMock = new MockAdapter(api);

describe('Main Page', () => {
  it('should be render Main Page if has no API response', () => {
    const { debug } = render(<Main />);
  });
});
