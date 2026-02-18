/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, StyleSheet } from 'react-native';
import { Button } from '@example/ui';

export default function App() {
  return (
    <View style={styles.container}>
      <Button label="Hello from Mobile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
