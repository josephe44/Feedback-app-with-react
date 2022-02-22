import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
  if(!feedback || feedback.length === 0) {
    return <p>No Feedback Yes</p>
  }
  return <div className='feedback-list'>
    {feedback.map(item => <FeedbackItem key={item.id} item={item} />)}
  </div>
}

FeedbackList.prototype = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackList
