import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Theme } from '../theme';

type CardsProps = {
  cards: string[];
  handleDeleteCard: (index: number) => void;
  theme: Theme;
};

export default function Cards({ cards, handleDeleteCard, theme }: CardsProps) {
  return (
    <>
      {cards.map((card, index) => (
        <View
          style={[
            styles.cardContainer,
            { backgroundColor: theme.colors.backgroundCards },
          ]}
          key={index}
        >
          <Text style={[styles.cardText, { color: theme.colors.textCard }]}>
            {card}{' '}
          </Text>
          <Pressable
            style={styles.containerX}
            onPress={() => handleDeleteCard(index)}
          >
            <View style={styles.deleteIcon}>
              <Image
                style={[styles.iconX, { tintColor: theme.colors.textCard }]}
                source={require('../../assets/cancelar.png')}
              />
            </View>
          </Pressable>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  containerX: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: '#b6c1ca',
  },
  iconX: {
    width: 25,
    height: 25,
    marginRight: 2,
    marginTop: 2,
  },
  deleteIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    color: '#b6c1ca',
  },
  cardContainer: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
    width: '100%',
    minHeight: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  cardText: {
    fontSize: 18,
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 30,
    width: '100%',
    flex: 1,
  },
  deleteCard: {
    borderRadius: 5,
    height: 35,
    width: 35,
  },
});
