import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${props =>
    props.secondary ? `${props.theme.color.secondary}` : `${props.theme.color.primary}`};
  color: ${props => props.theme.color.mainWhite};
  padding: 10px 15px;
  font-size: ${props => {
    if (props.big) return "1.5em";
    return "1em";
  }};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
  transition: all 0.3s ease-in-out;
  border: 2px solid
    ${props =>
    props.secondary ? `${props.theme.color.secondary}` : `${props.theme.color.primary}`};

  ${props => {
    return (
      props.inverse &&
      css`
        background-color: ${props => props.theme.color.mainWhite};
        color: ${props => props.theme.color.primary};
      `
    );
  }}
  &:hover {
    box-shadow:0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  },
`;
const Button = ({
  label,
  name,
  secondary,
  big,
  inverse,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      name={name}
      secondary={secondary}
      inverse={inverse}
      big={big}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Label on button */
  label: PropTypes.string.isRequired,

  /** Internal name in button */
  name: PropTypes.string.isRequired,

  /** Secondary color from Primary default*/
  secondary: PropTypes.bool,

  /** Font size increase from 16px to 20px*/
  big: PropTypes.bool,

  /** inverse from background to border */
  inverse: PropTypes.bool,

  /** Function to call onClick*/
  onClick: PropTypes.func.isRequired
};
Button.defaultProps = {
  label: "Button"
};
export default Button;
