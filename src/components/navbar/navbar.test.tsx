import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar, { NavbarNavigationItems } from './navbar';

test('renders item with custom product', () => {
    render(
        <MemoryRouter>
            <Navbar/>
        </MemoryRouter>
    );

    
    Object.keys(NavbarNavigationItems).forEach( key =>
        expect(screen.getByText(NavbarNavigationItems[key as keyof typeof NavbarNavigationItems])).toBeInTheDocument()
    )
});