import React from 'react';
import './Items.scss';

import { useSelector } from 'react-redux';

import Item from '../Item/Item';

const Items = () => {

    const items = useSelector(({ items, filter: { category } }) => {
        return items.filter(item => item.category.includes(category));
    });

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