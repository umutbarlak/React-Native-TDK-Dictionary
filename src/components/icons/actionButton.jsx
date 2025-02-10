import React from 'react';
import Button from '../button';
import Text from '../text';
import theme from '../../utils/theme';

const ActionButton = ({children, ...props}) => {
  return (
    <Button
      style={{
        shadowColor: '#858383',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 14,
      }}
      bg="white"
      borderRadius="full"
      minWidth="actionButton"
      height="actionButton"
      px={8}
      {...props}>
      {children}
    </Button>
  );
};

export const ActionButtonTitle = ({children, ...props}) => {
  return (
    <Text color="textLight" fontWeight="bold" ml={8} mr={8} {...props}>
      {children}
    </Text>
  );
};

export default ActionButton;
