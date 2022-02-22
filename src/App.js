import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      {/*Header UI and Add a prop to the header for dynamic use */}
      <Header logo="Feedback UI" />
      {/* Container of the body */}
      <div className="container">
        {/* Feedback Item UI */}
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
