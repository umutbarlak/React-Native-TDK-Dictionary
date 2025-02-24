import React from 'react';

import Text from './text';
import Box from './box';

const InfoMessage = props => {
  const {title, icon} = props;
  return (
    <Box
      flex={1}
      px={10}
      py={5}
      flexDirection="column"
      gap={20}
      alignItems="center"
      justifyContent="center">
      {icon}
      <Text fontSize={18} color="0A151F">
        {title}
      </Text>
    </Box>
  );
};

export default InfoMessage;
