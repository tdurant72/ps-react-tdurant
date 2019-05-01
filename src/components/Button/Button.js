import React from "react";
import PropTypes from "prop-types";
import { styles } from "../../utils/styles";

import styled, { css, ThemeProvider } from "styled-components";

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${props =>
    props.secondary ? `${props.theme.secondary}` : `${props.theme.primary}`};
  color: #fff;
  padding: 10px 15px;
  font-size: ${props => {
    if (props.big) return "20px";
    return "16px";
  }};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
  border: 2px solid
    ${props =>
      props.secondary ? `${props.theme.secondary}` : `${props.theme.primary}`};

  ${props => {
    return (
      props.inverse &&
      css`
        background-color: #fff;
        color: #a1cdf1;
      `
    );
  }}
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

  /** Background color*/
  secondary: PropTypes.string,

  /** size */
  big: PropTypes.string,

  /** inverse from background to border */
  inverse: PropTypes.string,

  /** Function to call onClick*/
  onClick: PropTypes.func.isRequired
};
Button.defaultProps = {
  label: "Button"
};
export default Button;
