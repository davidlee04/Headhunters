import React from 'react';

function TextField(props){

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <div>
            <label>
                {props.type}:<br/>
                <input
                    type={!props.hide ? "text" : "password"}
                    value={props.value} 
                    onChange={handleChange}/>
            </label>
        </div>
  );
}

export default TextField;