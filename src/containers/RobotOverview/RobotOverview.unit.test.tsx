import React from 'react';
import { render } from '@testing-library/react';
import RobotOverview from './RobotOverview';

import { mockStateProvider } from '../../../__tests__/utils/mockStateProvider';

describe('<RobotOverview />', () => {
  it('should render the component', () => {
    const { debug } = render(mockStateProvider(<RobotOverview />));
    debug();
  });
});
