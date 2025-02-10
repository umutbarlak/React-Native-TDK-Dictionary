import React from 'react';
import Box from '../components/box';
import Text from '../components/text';
import ActionButton, {
  ActionButtonTitle,
} from '../components/icons/actionButton';
import SoundSvg from '../components/icons/sound';
import HandSvg from '../components/icons/hand';
import FavoriteSolidSvg from '../components/icons/favoriteSolidSvg';
import DetailSummaryItemContainer, {
  DetailSummaryItemSummary,
  DetailSummaryItemTitle,
} from '../components/detailSummaryItem';
import {ScrollView} from 'react-native';

const DetailScreen = () => {
  return (
    <Box as={ScrollView} p={16} flex={1} bg="softRed">
      <Box>
        <Text fontSize={32} fontWeight="bold">
          Detay
        </Text>
        <Text color="tectLight" mt={10}>
          Arapça kalem
        </Text>
      </Box>
      <Box flexDirection="row" gap={12} mt={24}>
        <ActionButton>
          <SoundSvg width={24} height={24} />
        </ActionButton>
        <ActionButton>
          <FavoriteSolidSvg width={24} height={24} color="red" />
        </ActionButton>
        <ActionButton ml="auto">
          <HandSvg width={24} height={24} />
          <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
        </ActionButton>
      </Box>
      <Box mt={32}>
        <DetailSummaryItemContainer>
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
        </DetailSummaryItemContainer>
      </Box>
    </Box>
  );
};

export default DetailScreen;
