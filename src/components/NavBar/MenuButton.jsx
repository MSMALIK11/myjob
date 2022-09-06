import React from 'react';
import menubtn from '../../images/String-icon-waffle.png'

const MenuButton = ({ active, setActive }) => {
    return (
<div>
            <img src={menubtn} alt="" onClick={() => setActive(!active)} />
        </div>
    )
}

export default MenuButton