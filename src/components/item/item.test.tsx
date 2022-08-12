import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductSchema } from '../../schemas/product';
import Item from './item';

test('renders item with custom product', () => {
    const product = new ProductSchema({
        name: 'Orquidea',
        price: 12,
        binomialName: 'Orquideus'
    })
    render(
        <MemoryRouter>
            <Item product={product}/>
        </MemoryRouter>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`${product.price} €`)).toBeInTheDocument();
    expect(screen.getByText(product.binomialName)).toBeInTheDocument();
});