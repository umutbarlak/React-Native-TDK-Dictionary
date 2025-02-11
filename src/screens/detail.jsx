import React, {useState} from 'react';
import Box from '../components/box';
import Text from '../components/text';
import ActionButton, {
  ActionButtonTitle,
} from '../components/icons/actionButton';
import SoundSvg from '../components/icons/sound';
import HandSvg from '../components/icons/hand';
import FavoriteSolidSvg from '../components/icons/favoriteSolidSvg';
import DetailSummaryItemContainer from '../components/detailSummaryItem';
import {ScrollView} from 'react-native';
import LoaderText from '../components/loaderText';
import FavoriteSvg from '../components/icons/favorite';

const DetailScreen = () => {
  const [data, setData] = useState(null);
  return (
    <Box as={ScrollView} p={16} flex={1} bg="softRed">
      <Box>
        <Text fontSize={32} fontWeight="bold">
          Detay
        </Text>
        <Text color="textLight" mt={10}>
          Arapça kalem
        </Text>
      </Box>
      <Box flexDirection="row" gap={12} mt={24}>
        <ActionButton disabled={!data}>
          <SoundSvg width={24} height={24} color="textLight" />x
        </ActionButton>
        <ActionButton disabled={!data}>
          <FavoriteSvg width={24} height={24} color="textLight" />
        </ActionButton>
        <ActionButton disabled={!data} ml="auto">
          <HandSvg width={24} height={24} />
          <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
        </ActionButton>
      </Box>
      <Box mt={32}>
        {[1, 2, 3].map(index => (
          <DetailSummaryItemContainer border={index !== 1}>
            <LoaderText />
            <LoaderText width={280} mt={10} />
          </DetailSummaryItemContainer>
        ))}

        {/* <DetailSummaryItemContainer border>
          <DetailItemOrderType order="1" type="İSİM" />
          <DetailSummaryItemTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, architecto? Saepe cum quam explicabo
          </DetailSummaryItemTitle>
          <DetailSummaryItemSummary>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            deleniti totam quam praesentium reprehenderit quia consequatur
            accusamus dolorem atque nemo!
          </DetailSummaryItemSummary>
        </DetailSummaryItemContainer>
        <DetailSummaryItemContainer border>
          <DetailSummaryItemTitle>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, architecto? Saepe cum quam explicabo
          </DetailSummaryItemTitle>
          <DetailSummaryItemSummary>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            deleniti totam quam praesentium reprehenderit quia consequatur
            accusamus dolorem atque nemo!
          </DetailSummaryItemSummary>
        </DetailSummaryItemContainer> */}
      </Box>
    </Box>
  );
};

export default DetailScreen;
