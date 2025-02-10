import styled from 'styled-components/native';
import {space, color, typography, size} from 'styled-system';

const Text = styled.Text.attrs(props => ({
  placeholderTextColor: props.placeholderTextColor || '#999',
}))`
  ${space}
  ${color}
  ${typography}
  ${size}
`;

export default Text;
