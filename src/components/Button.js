// eslint no-nested-ternary: 0 */
import Link from "gatsby-link";
import styled from "@emotion/styled";

const getColor = btnType => {
  if (btnType.primary) return "red";
  if (btnType.secondary) return "#666";
  if (btnType.tertiary) return "blue";
  return "#ccc";
};
const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 30px;
  color: ${props =>
    props.primary || props.secondary || props.tertiar ? "#fff" : "#111"};
  background-color: ${props => getColor(props)};
  border: 2px solid ${props => getColor(props)};
`;

export default StyledButton;
