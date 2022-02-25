import {useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  // Calculing the rating total
  let average =
    feedback.reduce((total, item) => total + item.rating, 0) / feedback.length
  // seting the average to one decimal place
  average = average.toFixed(1)
  // rounding it up to the nearest whole number
  average = Math.round(average * 10) / 10

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}


export default FeedbackStats
