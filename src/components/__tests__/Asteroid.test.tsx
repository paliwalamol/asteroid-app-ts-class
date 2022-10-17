import {render,screen} from '@testing-library/react';
import Asteroid from '../Asteroid';
import {MemoryRouter} from 'react-router-dom';

const mockData = {
    name:'test',
    estimated_diameter:{
        kilometers:{
            estimated_diameter_min:1,
            estimated_diameter_max:2
        }
}
}

it('should render error', () => {
    render(<Asteroid data={{code:405}}/>,{wrapper:MemoryRouter});
    const error = screen.getByText(/something went wrong/i);
    expect(error).toBeInTheDocument();
});

it('should render back button', () => {
    render(<Asteroid data={{code:405}}/>,{wrapper:MemoryRouter});
    const button = screen.getByText(/back to home/i);
    expect(button).toBeInTheDocument();
});

it('should render AsteroidInfo', () => {
    render(<Asteroid data={mockData}/>,{wrapper:MemoryRouter});
    const asteroidInfo = screen.getByText(/Asteroid Name=test/i);
    expect(asteroidInfo).toBeInTheDocument();   
});