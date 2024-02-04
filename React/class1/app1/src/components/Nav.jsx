import React from 'react'
import './Nav.css'
const Nav = (props) => {
    const itemName=props.name;
    const itemColor=props.color
    return (
        <div className='centre'>
            <p>{itemName} is {itemColor}</p>
        </div>
    )
}

export default Nav
