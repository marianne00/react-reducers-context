import React, { useRef, useImperativeHandle  } from 'react'

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref ) => {
  const inputRef = useRef();
  
  const focusInput = () => {
    inputRef.current.focus();
  }

  // makes the function accessible outside this component
  useImperativeHandle(ref, () => {
    return {
      focusInput: focusInput
    }
  })

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        ref={inputRef}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
});

export default Input