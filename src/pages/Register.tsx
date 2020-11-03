import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TypeProps {
  title: string;
}

const Register: FC<TypeProps> = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Register Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  buttonLanguage: {
    marginBottom: 4,
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 15,
  },
  textLanguage: {},
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    padding: 8,
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flagStyle: {
    width: '100%',
    height: 64,
  },
  pickerContainer: {
    textAlign: 'center',
    width: '100%',
  },
  pickerContainerInner: {
    textAlign: 'center',
    width: '70%',
  },
  pickerStyle: {
    textAlign: 'center',
    width: '70%',
    alignSelf: 'stretch',
  },
  scrollView: {
    marginHorizontal: 2,
    height: '100%',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
    marginTop: 8,
    marginBottom: 8,
  },
  textStyle: {
    textAlign: 'center',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});

export default Register;
