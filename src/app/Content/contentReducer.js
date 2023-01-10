const INITIAL_STATE = {
  question: 0,
  maxQuestions: 0
};

function contentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PREVIOUS_QUESTION':
      return {
        ...state,
        question: state.question > 0 ? state.question - 1 : 0,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        question: state.question + 1 === state.maxQuestions ? state.maxQuestions - 1: state.question + 1 ,
      };
      case 'MAX_QUESTIONS':
        return {
          ...state,
          maxQuestions: action.questionCount,
        };
    default:
      return state;
  }
}

export default contentReducer;
