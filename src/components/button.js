import styled from 'styled-components/native';
import {
  space,
  layout,
  color,
  flexbox,
  borderRadius,
  position,
  border,
  shadow,
} from 'styled-system';

const Button = styled.TouchableOpacity`
  ${space}
  ${color}
  ${flexbox}
  ${layout}
  ${borderRadius}
  ${position}
   ${border}
  ${shadow}
`;

Button.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
};

export default Button;
