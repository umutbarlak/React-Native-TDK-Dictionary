import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const MoreSvg = props => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16 13C14.35 13 13 14.35 13 16C13 17.65 14.35 19 16 19C17.65 19 19 17.65 19 16C19 14.35 17.65 13 16 13ZM25 13C23.35 13 22 14.35 22 16C22 17.65 23.35 19 25 19C26.65 19 28 17.65 28 16C28 14.35 26.65 13 25 13ZM7 13C5.35 13 4 14.35 4 16C4 17.65 5.35 19 7 19C8.65 19 10 17.65 10 16C10 14.35 8.65 13 7 13Z"
      fill="currentColor"
    />
  </Svg>
);
export default MoreSvg;
