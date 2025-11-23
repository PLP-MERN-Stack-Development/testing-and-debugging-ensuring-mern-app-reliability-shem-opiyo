// src/components/BugList.test.jsx
import { render, screen } from '@testing-library/react';
import BugList from './BugList';
import axios from 'axios';

jest.mock('axios');

describe('BugList', () => {
  test('renders empty list initially', () => {
    axios.get.mockResolvedValue({ data: [] });
    render(<BugList />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});