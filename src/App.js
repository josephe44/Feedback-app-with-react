import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  return (
    <>
      {/*Header UI and Add a prop to the header for dynamic use */}
      <Header logo="Feedback UI" />
      {/* Container of the body */}
      <div className="container">
        {/* Feedback Item UI */}
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
