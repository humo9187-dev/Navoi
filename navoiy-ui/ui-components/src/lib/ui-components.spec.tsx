import { render } from '@testing-library/react';

import NavoiyWorkspaceUiComponents from './ui-components';

describe('NavoiyWorkspaceUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavoiyWorkspaceUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
