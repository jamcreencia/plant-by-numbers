import { render, screen } from '@testing-library/react';

import Page from './page';

describe('Page', () => {
  it('renders correctly', () => {
    render(<Page />);

    expect(screen.getByRole('heading', { name: 'Hello world' })).toBeInTheDocument();
  });
});
