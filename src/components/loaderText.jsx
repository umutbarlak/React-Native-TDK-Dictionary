import {View, Text} from 'react-native';
import React from 'react';
import Box from './box';
import {borderRadius} from 'styled-system';

const LoaderText = ({...props}) => {
  return (
    <Box bg="light" width={120} height={16} borderRadius="full" {...props} />
  );
};

export default LoaderText;
