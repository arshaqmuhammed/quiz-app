import React, { useState } from 'react'
import "./Question.css"
import Result from '../result/Result';

const quizQuestions = [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Hg"],
      correctAnswer: "Au"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: "Nile"
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
      correctAnswer: "George Washington"
    },
    {
      question: "What does CPU stand for?",
      options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Unit", "Central Processor Unit"],
      correctAnswer: "Central Processing Unit"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the highest-grossing film of all time (as of 2022)?",
      options: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: The Force Awakens"],
      correctAnswer: "Avengers: Endgame"
    },
    {
      question: "In which sport would you perform a slam dunk?",
      options: ["Tennis", "Basketball", "Soccer", "Golf"],
      correctAnswer: "Basketball"
    },
    {
      question: "Who is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Madonna", "Beyoncé"],
      correctAnswer: "Michael Jackson"
    },
    {
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.16", "3.18", "3.20"],
      correctAnswer: "3.14"
    },
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
      correctAnswer: "Tokyo"
    }
  ];

// function Result({score, totalQuestion}){
//   return(
//     <div> 
//       <h1>Quiz End</h1>
//       <h2> Your Score: {score} / {totalQuestion}</h2>

//     </div>
//   )
// }

function Question() {
    const totalQuestion = quizQuestions.length
    const [questCount, setQuestCount] = useState(0);
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    const handleOptionClick = (selectedOption) => {
        // console.log(e.target.value)
            if (selectedOption === quizQuestions[questCount].correctAnswer){
                    setScore(score + 1)
            }
            if (questCount < totalQuestion-1){
                setQuestCount(questCount + 1);
            }
            else{
               setQuizEnd(true)
            } 
    }

  return (
    <div className='main-questions'>
      {quizEnd ? (
        <Result score={score} totalQuestion = {totalQuestion} />
      ): (
        <div className='container-questions'>
        <h4> 
            Question {questCount + 1}: {quizQuestions[questCount].question}
        </h4>
        <ol type='a'>
            {quizQuestions[questCount].options.map((option, index) => (
            <li key={index} style={{cursor:'pointer'}} onClick={() => handleOptionClick(option)}> {option}</li>
            ))}  
        </ol>
        <h3>Score: {score} / {totalQuestion}</h3>
        </div>
         )}
    </div>
  )
}

export default Question