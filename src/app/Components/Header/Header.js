import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { connect } from 'react-redux';

function Header({ question, maxQuestions }) {
  return (
    <div className="Header">
      <Link to="/">Back</Link>
      <p>
        {question + 1}/{maxQuestions}
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    question: state.content.question || 0,
  };
}

export default connect(mapStateToProps)(Header);
