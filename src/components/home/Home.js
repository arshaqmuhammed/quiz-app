import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='main'>
        <div className='container'>
        <h2 >Welcome</h2>
        <button id='start-quiz'><Link to='/questions'>Start Quiz</Link></button>
        </div>
    </div>
  )
}

export default Home