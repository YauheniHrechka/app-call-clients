import React from 'react';
import './Header.scss';

import { useSelector } from 'react-redux';
import { setCategories } from '../../redux/actions/categories';
import { setFilterByCategory } from '../../redux/actions/filter';
import { Context } from '../../context/context';

import axios from 'axios';

const Header = () => {

    const dispatch = React.useContext(Context);
    const { categories, filter } = useSelector(({ categories, filter: { category } }) => ({
        categories,
        filter: category
    }));

    React.useEffect(() => {

        axios.get('http://localhost:3000/categories.json')
            .then(res => dispatch(setCategories(res.data.categories)));

    }, []);

    return (
        <header className="header">
            <ul>
                {categories.map(({ id, name, category }) =>
                    <li
                        key={id}
                        className={`category ${filter === category ? `active` : ``}`}
                        onClick={() => dispatch(setFilterByCategory(category))}
                    >{name}</li>
                )}
            </ul>
        </header>
    )
}

export default Header;