import React from "react"
import PropTypes from "prop-types"

const colors = {
  purple: "#A058B5",
  red: "#A1342B",
  green: "#34752F",
}

const Button = ({ color, text, action }) => (
  <button
    style={{
      backgroundColor: colors[color],
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: ".4em 2em",
    }}
    onClick={action}
  >
    {text.toUpperCase()}
  </button>
)

Button.protoTypes = {
  color: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  action: PropTypes.node.isRequired,
}

export default Button
