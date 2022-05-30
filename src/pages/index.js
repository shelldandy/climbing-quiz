import * as React from "react"
import { Quiz } from '../components';

const IndexPage = () => {
  return (
    <main>
      <title>Climbing Quiz</title>
      <h1>Climbing Quiz</h1>
      <p>Taken from Eric Hörst's book: <a title="Get the book here" href="https://trainingforclimbing.com/buy-books/the-rock-climbers-exercise-guide/">The Rock Climber's Exercise Guide</a></p>
      <p>Ported to React.js by <a href="https://www.instagram.com/bowlinedandy/" title="@bowlinedandy on Instagram">@BowlineDandy</a></p>
      <Quiz />
    </main>
  )
}

export default IndexPage
