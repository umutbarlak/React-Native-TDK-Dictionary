import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const RightArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
    {...props}>
    <Path d="m9 18 6-6-6-6" />
  </Svg>
);
export default RightArrow;
