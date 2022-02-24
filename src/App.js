import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      {/*Header UI and Add a prop to the header for dynamic use */}
      <Header logo="Feedback UI" />
      {/* Container of the body */}
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Feedback form  */}
                <FeedbackForm handleAdd={addFeedback} />
                {/* Feedback stats for each feedback and total of them */}
                <FeedbackStats feedback={feedback} />
                {/* Feedback Item UI */}
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          {/* About page */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  )
}

export default App
