import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import { connect } from 'react-redux';
import Button from '../../Components/Button/Button';
import { MOCK_DATA } from '../../assets/mock-data';
import AnswerOption from '../../Components/AnswerOption/AnswerOption';

function QuizPage({
  question,
  previousQuestion,
  nextQuestion,
  maxQuestions,
  setMaxQuestions,
}) {
  useEffect(() => {
    setMaxQuestions(MOCK_DATA.data.questions.length);
  }, [setMaxQuestions]);

  function renderOption() {
    const currentQuestion = MOCK_DATA.data.questions[question];
    if (currentQuestion.type === 'info') {
      return (
        <AnswerOption type={currentQuestion.type} key={currentQuestion.key}>
          {currentQuestion.description}
        </AnswerOption>
      );
    } else {
      return currentQuestion.options.map(({value, label}) => {
        return (
          <AnswerOption
            type="checkbox"
            keyValue= {value}
          >
            {label}
          </AnswerOption>
        );
      });
    }
  }
  return (
    <div>
      <Header questionNum={question} maxQuestions={maxQuestions}></Header>
      <div className="questionWrapper">
        <h1>{MOCK_DATA.data.questions[question].label}</h1>
        {renderOption()}
      </div>
      <Button onClick={previousQuestion}>Previous</Button>
      <Button onClick={nextQuestion}>Next</Button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    question: state.content.question || 0,
    maxQuestions: state.content.maxQuestions || 0,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    previousQuestion: () => {
      dispatch({ type: 'PREVIOUS_QUESTION' });
    },
    nextQuestion: (e) => {
      dispatch({ type: 'NEXT_QUESTION' });
    },
    setMaxQuestions: (questionCount) => {
      dispatch({ type: 'MAX_QUESTIONS', questionCount });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
