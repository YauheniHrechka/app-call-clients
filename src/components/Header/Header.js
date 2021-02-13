import React from 'react';
import './Header.scss';

import { useSelector } from 'react-redux';
import { setCategories } from '../../redux/actions/categories'
import { Context } from '../../context/context';

import axios from 'axios';

const Header = () => {

    const dispatch = React.useContext(Context);
    const { categories } = useSelector(({ categories }) => ({
        categories
    }));
    const [active, setActive] = React.useState(1);

    React.useEffect(() => {

        axios.get('http://localhost:3000/categories.json')
            .then(res => dispatch(setCategories(res.data.categories)));

    }, []);

    return (
        <header className="header">
            <ul>
                {categories.map(({ id, name }) =>
                    <li
                        key={id}
                        className={`category ${active === id ? `active` : ``}`}
                        onClick={() => setActive(id)}
                    >{name}</li>
                )}
            </ul>
        </header>
    )
}

export default Header;