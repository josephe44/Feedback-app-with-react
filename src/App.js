import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
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
                  <FeedbackForm />
                  {/* Feedback stats for each feedback and total of them */}
                  <FeedbackStats />
                  {/* Feedback Item UI */}
                  <FeedbackList />
                </>
              }
            ></Route>
            {/* About page */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
