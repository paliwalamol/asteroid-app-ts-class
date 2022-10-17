import {screen,render, fireEvent} from '@testing-library/react';
import Home from '../Home';
import {MemoryRouter} from 'react-router-dom';

it('should render header', () => {
    render(<Home/>,{wrapper:MemoryRouter});
    const header = screen.getByText(/Asteroid App/i);
    expect(header).toBeInTheDocument();
});

it('should render input', () => {
    render(<Home/>,{wrapper:MemoryRouter});
    const input = screen.getByPlaceholderText('enter asteroid id');
    expect(input).toBeInTheDocument();
});

it('should be able to type in input', () => {
    render(<Home/>,{wrapper:MemoryRouter});
    const input:HTMLInputElement = screen.getByPlaceholderText('enter asteroid id');
    fireEvent.change(input,{target:{value:'123'}});
    expect(input.value).toBe('123');
});

it('should render asteroid button', () => {
    render(<Home/>,{wrapper:MemoryRouter});
    const button = screen.getByText('Get Asteroid Data');
    expect(button).toBeInTheDocument();
});

it('should render random button', () => {
    render(<Home/>,{wrapper:MemoryRouter});
    const button = screen.getByText('Get Random Asteroid Information');
    expect(button).toBeInTheDocument();
});

it('should render loading', () => {
    render(<Home loading={true}/>,{wrapper:MemoryRouter});
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();   
});



