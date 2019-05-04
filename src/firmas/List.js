import React from 'react';
import Item from './Item';

export default function List({ items }) {
    if (!items || !items.length) {
        return <p>No hay firmas</p>;
    }

    return (
        <div className="container mx-auto px-5">
            {items.map((item, k) => (
                <Item key={k} {...item} />
            ))}
        </div>
    );
}
