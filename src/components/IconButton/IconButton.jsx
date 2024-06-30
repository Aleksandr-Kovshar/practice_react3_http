import React, { Children } from "react";
import PropTypes from 'prop-types'
import './IconButton.css'

const IconButton = ({ Children, onClick, ...allyProps }) => (
  <button
    type="button"
    className="IconButton"
    onClick={onClick}
    {...allyProps}
  ></button>
);

IconButton.defaultProps = {
    onClick: () => null,
    Children:null,
}

IconButton.propTypes = {
  onClick: PropTypes.func,
  Children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;