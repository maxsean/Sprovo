import React from 'react';

// used in form containers
const TextInputField = props => {
  return(
    <label  onChange={props.handleChange}>{props.label}
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.content}
    />
    </label>
  );
};

export default TextInputField;
