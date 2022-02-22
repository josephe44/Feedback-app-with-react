import PropTypes from 'prop-types'

function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

// created a default props for reverse
Card.defaultProps = {
  reverse: false,
}

Card.prototype = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
