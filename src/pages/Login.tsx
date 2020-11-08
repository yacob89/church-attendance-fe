import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';

interface TypeProps {
  title: string;
  navigation: NavigationStackProp<{userId: string}>;
}

const Login: FC<TypeProps> = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.containerView}>
      <View style={styles.viewStyle}>
        <Text>Nomer HP</Text>
        <TextInput
          style={styles.textInputStyle}
          keyboardType="numeric"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.textInputStyle}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.loginButtonStyle}
          onPress={() => props.navigation.navigate('Home')}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomViewStyle}>
        <TouchableOpacity
          style={styles.registerButtonStyle}
          onPress={() => props.navigation.navigate('Home')}>
          <Text>Belum Terdaftar?</Text>
          <Text>Daftar Kaum Saleh</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    height: '100%',
  },
  viewStyle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20,
  },
  bottomViewStyle: {
    alignSelf: 'center',
    margin: 20,
  },
  textInputStyle: {
    height: 40,
    width: '75%',
    paddingLeft: 20,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
  },
  loginButtonStyle: {
    marginTop: 4,
    height: 48,
    width: 200,
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: 16,
    alignItems: 'center',
    backgroundColor: '#3283a8',
    borderRadius: 15,
  },
  registerButtonStyle: {
    width: 200,
    textAlign: 'left',
    justifyContent: 'center',
    fontSize: 16,
    alignItems: 'center',
  },
});

export default Login;
