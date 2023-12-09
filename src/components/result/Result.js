import React from 'react'
// import Question from '../questions/Question'
import './Result.css'

function Result({score, totalQuestion}) {
  return (
    <div >
      <div className='result-container'>
        <h2>End of Quiz</h2>
        <h3> Your Score is </h3>
        <h1> {score} / {totalQuestion} </h1>
        <div btn-container>
        <button> Try Again </button>
        <button> Home </button>
        </div>
        </div>
    </div>
  )
}

export default Result