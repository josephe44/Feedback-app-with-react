import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

function App() {
  return (
    <>
      {/*Header UI and Add a prop to the header for dynamic use */}
      <Header logo="Feedback UI" />
      {/* Container of the body */}
      <div className="container">
        {/* Feedback Item UI */}
        <FeedbackItem />
      </div>
    </>
  )
}

export default App
