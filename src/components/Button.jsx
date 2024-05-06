import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'
const STYLES=['btn--primary','btn--outline'];
const SIZES=['btn--medium','btn--large'];

export default function Button({children,type,onclick,btnStyle,btnSize})
{
  const checkButtonStyle=STYLES.indexOf(btnStyle) >-1 ? btnStyle: STYLES[0];
  const checkButtonSize=SIZES.indexOf(btnSize) >-1 ? btnSize:SIZES[0];

  return (
    <Link to="/sign-up" className='btn-mobile'>
      <button className={`btn ${checkButtonSize} ${checkButtonStyle}`}
      type={type}
      onClick={onclick}
      >
        {children}
      </button>
    </Link>
  )
}