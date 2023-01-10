import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import HomePage from './Pages/HomePage/HomePage';
import QuizPage from './Pages/QuizPage/QuizPage';
import store from './State';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quizpage" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
