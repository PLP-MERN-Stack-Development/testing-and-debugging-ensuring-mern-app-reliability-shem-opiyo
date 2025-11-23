import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from './BugForm';
import axios from 'axios';

jest.mock('axios');

describe('BugForm', () => {
  test('renders form and submits', async () => {
    axios.post.mockResolvedValue({ data: {} });
    render(<BugForm onBugAdded={() => {}} />);
    fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Desc' } });
    fireEvent.click(screen.getByText('Report Bug'));
    expect(axios.post).toHaveBeenCalled();
  });
});