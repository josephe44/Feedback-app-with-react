import Header from './components/Header'

function App() {
  return (
    <>
      {/*Header UI and Add a prop to the header for dynamic use */}
      <Header logo='Feedback UI'/>
      {/* Container of the body */}
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  )
}

export default App
