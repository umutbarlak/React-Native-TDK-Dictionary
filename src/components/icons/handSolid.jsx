import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const HandSolidSvg = props => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.3533 3.23015C18.1182 4.0178 18.5479 5.08609 18.5479 6.2V13.578L28.2 16.378L26.5415 30H11.0709L3.74342 19.948C3.23292 19.2442 2.97148 18.3819 3.00247 17.504C3.03347 16.6261 3.35504 15.7856 3.91382 15.1219C4.47259 14.4581 5.23497 14.0112 6.07441 13.8551C6.91384 13.6991 7.77985 13.8434 8.5287 14.264L10.3911 15.314V6.2C10.3911 5.08609 10.8208 4.0178 11.5857 3.23015C12.3505 2.4425 13.3879 2 14.4695 2C15.5512 2 16.5885 2.4425 17.3533 3.23015Z"
      fill="currentColor"
    />
  </Svg>
);
export default HandSolidSvg;
