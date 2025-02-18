import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FavoriteSolidSvg = props => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M25.3333 13.5093V12.176V5.50933C25.3333 4.03867 24.1373 2.84267 22.6667 2.84267H9.33332C7.86266 2.84267 6.66666 4.03867 6.66666 5.50933V12.176V13.5093V29.3333L16 23.112L25.3333 29.3333V13.5093Z"
      fill="currentColor"
    />
  </Svg>
);
export default FavoriteSolidSvg;
