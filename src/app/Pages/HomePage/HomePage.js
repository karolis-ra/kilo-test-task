import React from 'react';
import Button from '../../Components/Button/Button';

function HomePage({question}) {
  return (
    <div className="content">
      <div className='leftBlock'>
        <p>Get back in shape.</p>
        <Button to="/quizpage" className="PurpleBtn">Start Quiz</Button>
      </div>
    </div>
  );
}



  export default HomePage;
