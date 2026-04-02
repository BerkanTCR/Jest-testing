import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    render(<ProfileCard name="Piet" age={30} />);
    const heading = screen.getByText('Leeftijd: 30');
    expect(heading).toBeInTheDocument();
  });

  test('toont bio als die er is', () => {
    render(<ProfileCard bio="Ik hou van programmeren" />)
    const heading = screen.getByText("Ik hou van programmeren")
    expect(heading).toBeInTheDocument();
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    render(<ProfileCard/>)
    const heading = screen.getByText("Geen bio beschikbaar")
    expect(heading).toBeInTheDocument();
  });

});
