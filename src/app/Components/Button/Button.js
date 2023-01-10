import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ to, className, children, onClick }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
