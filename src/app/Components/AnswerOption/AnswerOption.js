import React from 'react';
import './AnswerOption.css';

function AnswerOption({ children, value, type, keyValue }) {
  if (type === 'info') {
    return <div key={keyValue}>{children}</div>;
  } else {
    return (
      <div key={keyValue}>
        <input type={type} className="AnswerBlock" id={keyValue} onChange="" />
        <label>{children}</label>
      </div>
    );
  }
}

export default AnswerOption;
