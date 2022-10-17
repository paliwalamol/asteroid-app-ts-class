import {render,screen} from '@testing-library/react';
import AsteroidInfo from '../AsteroidInfo';

const mockData = {
    name:'test',
    estimated_diameter:{
        kilometers:{
            estimated_diameter_min:1,
            estimated_diameter_max:2
        }
},
is_potentially_hazardous_asteroid:false
}

it('should render header', () => {
    render(<AsteroidInfo data={mockData}/>);
    const header = screen.getByText(/Asteroid Name=test/i);
    expect(header).toBeInTheDocument();
});

it('should render diameter', () => {
    render(<AsteroidInfo data={mockData}/>);
    const diameter = screen.getByTestId('diameter');
    expect(diameter).toBeInTheDocument();
});


it('should render green background color', () => {
    render(<AsteroidInfo data={{...mockData,is_potentially_hazardous_asteroid:false}}/>);
    const green = screen.getByTestId('wrapper');
    expect(green).toHaveStyle('background-color: #5dcb3b91');
});

it('should render red background color', () => {
    render(<AsteroidInfo data={{...mockData,is_potentially_hazardous_asteroid:true}}/>);
    const red = screen.getByTestId('wrapper');
    expect(red).toHaveStyle('background-color: #e93c3c91');
});


