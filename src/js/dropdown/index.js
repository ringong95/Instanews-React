import React from 'react';

const Dropdown = ({ onChange }) => {
    return (
    <div className="wrapper">
        <p>Choose your selection</p>
        <select id="dropdown" name="category" onChange={onChange}>
            <option value="selction">Sections...</option>
            <option value="home">Home</option>
            <option value="science">Science</option>
            <option value="food">Food</option>
            <option value="arts">Arts</option>
            <option value="technology">Technology</option>
            <option value="fashion">Fashion</option>
        </select>
    </div>
    )
}
export default Dropdown;