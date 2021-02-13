import React from 'react';
import './Items.scss';

import { useSelector } from 'react-redux';

import Item from '../Item/Item';

const Items = () => {
    console.log('items');
    const { items } = useSelector(({ items }) => ({
        items
    }));

    return (
        <div className="items">
            {items.map(item => (
                <Item
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}

export default Items;