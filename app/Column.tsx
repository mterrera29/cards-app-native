import { View, StyleSheet, TextInput } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import Title from './components/Title';
import Cards from './components/Cards';
import NewCard from './components/NewCard';
import NewCardForm from './components/NewCardForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from './theme';

type TrelloColumn = {
  title: string;
  cards: string[];
};

type ColumnProps = {
  theme: Theme;
};

export default function Column({ theme }: ColumnProps) {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [cards, setCards] = useState<string[]>([]);
  const [cardContent, setCardContent] = useState<string>('');
  const textInputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    if (openForm) {
      textInputRef.current?.focus();
    }
  }, [openForm]);

  const handleNewForm = () => {
    setOpenForm((prevState) => !prevState);
  };

  const handleSubmitCard = () => {
    if (cardContent.length === 0) {
      setOpenForm((prevState) => !prevState);
      setCardContent('');
    } else {
      setCards([...cards, cardContent]);
      setOpenForm((prevState) => !prevState);
      setCardContent('');
    }
  };

  const handleDeleteCard = (index: number): void => {
    const filterCards = cards.filter((_, i) => i !== index);
    setCards(filterCards);
  };

  return (
    <View style={styles.containerAll}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
          },
        ]}
      >
        <Title theme={theme} />
        <Cards
          cards={cards}
          handleDeleteCard={handleDeleteCard}
          theme={theme}
        />
        <NewCard openForm={openForm} handleNewForm={handleNewForm} />
        <NewCardForm
          openForm={openForm}
          handleNewForm={handleNewForm}
          cardContent={cardContent}
          setCardContent={setCardContent}
          handleSubmitCard={handleSubmitCard}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAll: { margin: 20 },
  container: {
    borderWidth: 1,
    borderColor: '#9198a1',
    borderRadius: 10,
    padding: 10,
    width: 350,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
});
