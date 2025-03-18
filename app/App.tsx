import {
  SafeAreaView,
  Text,
  View,
  Button,
  Pressable,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Column from './Column';
import { useState, useEffect } from 'react';
import { darkTheme, lightTheme, Theme } from './theme';

export default function App() {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const [isDarkIcon, setIsDarkIcon] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchCities = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchCities();
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme.dark ? lightTheme : darkTheme));
    setIsDarkIcon((prevTheme) => !prevTheme);
  };
  if (loading) {
    return (
      <View
        style={[
          styles.centerContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <ActivityIndicator size='large' color={theme.colors.primary} />
      </View>
    );
  }
  return (
    <SafeAreaView
      style={[
        styles.containerAll,
        {
          backgroundColor: theme.colors.background,
          flex: 1,
        },
      ]}
    >
      <View
        style={[styles.appBar, { backgroundColor: theme.colors.background }]}
      >
        <Text style={[styles.appBarTitle, { color: theme.colors.text }]}>
          Terre Starter Pack 🔥
        </Text>
        <TouchableOpacity style={styles.iconButton} onPress={toggleTheme}>
          <Text style={styles.iconButtonText}>{isDarkIcon ? '🌞' : '🌙'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
        <Column theme={theme} />
      </ScrollView>
      <Pressable style={styles.button} pointerEvents='box-none'>
        <View style={styles.icon}>
          <Image
            style={styles.iconX}
            source={require('../assets/agregar.png')}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBar: {
    width: '100%',
    height: 60,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  iconButton: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonText: { fontSize: 18 },
  scrollContainer: { paddingBottom: 100 },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#b6c1ca',
    backgroundColor: '#b6c1ca',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    color: 'black',
  },
  iconX: {
    width: 25,
    height: 25,
    tintColor: 'black',
    marginRight: 2,
  },
});
