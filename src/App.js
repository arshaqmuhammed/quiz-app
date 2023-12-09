import './App.css';
import Home from './components/home/Home';
import Question from './components/questions/Question';
import Result from './components/result/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <h1>Quiz App</h1>

      <Routes>
        <Route path='/' exact element={<Home/>}> </Route>
        <Route path='/questions'  element={<Question/>}> </Route>
        <Route path='/result'  element={<Result/>}> </Route>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
