import React from 'react';
import Box from './box';
import Text from './text';

const DetailSummaryItem = ({data, children, border, ...props}) => {
  const type = data?.ozelliklerListe ? data.ozelliklerListe[0].tam_adi : 'İsim';

  return (
    <Box bg="white" px={26} {...props}>
      <Box py={20} borderTopWidth={border ? 1 : 0} borderColor="light">
        {data ? (
          <Box>
            <Box flexDirection="row">
              <Text color={'textLight'} ml={-12}>
                {data.anlam_sira}
              </Text>
              <Text color="red" ml={5}>
                {type}
              </Text>
            </Box>

            <Box mt={8}>
              <Text fontWeight="600">{data.anlam}</Text>
              {data?.orneklerListe?.map((item, index) => (
                <Text
                  key={index}
                  fontWeight="500"
                  ml={10}
                  mt={12}
                  color="textLight">
                  {item?.ornek}
                  {'  '}
                  {item.yazar &&
                    item.yazar.map((i, index) => (
                      <Text
                        key={index}
                        m={10}
                        color="textLight"
                        fontWeight="bold">
                        -{i.tam_adi}
                      </Text>
                    ))}
                </Text>
              ))}
            </Box>
          </Box>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};

export default DetailSummaryItem;

// export const DetailItemOrderType = ({order, type}) => {
//   return (
//     <Box flexDirection="row">
//       <Text color={'textLight'} ml={-12}>
//         {order}
//       </Text>
//       <Text color="red" ml={5}>
//         {type}
//       </Text>
//     </Box>
//   );
// };

// export const DetailSummaryItemTitle = ({children, ...props}) => {
//   return (
//     <Text fontWeight="600" {...props}>
//       {children}
//     </Text>
//   );
// };

// export const DetailSummaryItemSummary = ({children, ...props}) => {
//   return (
//     <Text fontWeight="500" ml={10} mt={12} color="textLight" {...props}>
//       {children}
//     </Text>
//   );
// };

// export default DetailSummaryItemContainer;
