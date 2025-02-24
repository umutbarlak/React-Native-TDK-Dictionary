import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  layout,
  color,
  flexbox,
  borderRadius,
  shadow,
  border,
} from 'styled-system';

const Box = styled.View`
  ${space}
  ${color}
  ${flexbox}
  ${layout}
  ${borderRadius}
  ${shadow}
  ${border}
`;

export default Box;

const sty = StyleSheet.create({
  c: {
    shadowColor: '#858383',
    shadowOffset: {
      width: -2,
      height: 33,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 66,
    outlineColor: 'red',
  },
});
