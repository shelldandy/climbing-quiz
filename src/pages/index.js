import React, { useState } from "react"
import { Quiz } from '../components'
import { Page } from '../containers'

const IndexPage = () => {
  const [showQuiz, setShowQuiz] = useState(true);

  const triggerQuiz = () => {
    setShowQuiz(prev => !prev);
  }
  return (
    <Page title="Climbing Quiz">
      <main>
        {!showQuiz ? (
          <>
            <h1>Climbing Quiz</h1>
            <p>Taken from Eric Hörst's book: <a title="Get the book here" href="https://trainingforclimbing.com/buy-books/the-rock-climbers-exercise-guide/">The Rock Climber's Exercise Guide</a></p>
            <p>Ported to React.js by <a href="https://www.instagram.com/bowlinedandy/" title="@bowlinedandy on Instagram">@BowlineDandy</a></p>
            <button onClick={triggerQuiz}>Start</button>
          </>
        ) : (
          <Quiz />
        )}
      </main>
    </Page>
  )
}

export default IndexPage
