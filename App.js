import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const currencyPerRupee = {
  DOLLER: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  ASDOLLER: 0.2,
  CANDOLLER: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};
const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const buttonPressed = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'please enter a value',
        backgroundColor: '#EB6440',
        textColor:'#000'
      });
    }
    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    setResultValue(result.toFixed(2));
    setInputValue(0);
  };
  return (
    <>
      <ScrollView
        backgroundColor="#393E46"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resultValue}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value"
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={inputValue =>
                setInputValue(inputValue)
              }></TextInput>
          </View>

          <View style={styles.btnContainer}>
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity key={currency}
                style={styles.converterButton}
                onPress={()=> buttonPressed(currency)}>
                <Text style={styles.convertButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    marginHorizontal:20
  },
  resultValue: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor:'#bbe1fa',
    borderBottomWidth:4,
    marginHorizontal:20,
    marginTop: 10
    
  },
  input: {
    alignItems: 'center',
    fontSize: 10,
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  converterButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '33.33%',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    marginTop: 20,
    backgroundColor: '#0f4c7',
  },
  convertButtonText: {
    color: '#fff',
    fontSize: 17,
    letterSpacing: 1,
  },
});

export default App;
