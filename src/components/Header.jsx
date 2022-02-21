import PropTypes from 'prop-types'

function Header({ logo, bgColor, textColor }) {
  // Created a HeaderStyle with the style prop
  const headerStyle = {
    background: bgColor,
    color: textColor,
  }
  return (
    // created a HeaderStyle and added it to the header(with default props)
    <header style={headerStyle}>
      <div className="container">
        <h2>{logo}</h2>
      </div>
    </header>
  )
}

// created a default props for Header
Header.defaultProps = {
  logo: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

// created a prop type checking for the logo
Header.prototype = {
  logo: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
