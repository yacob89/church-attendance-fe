import React, {FC, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

interface TypeProps {
  title: string;
}

const Home: FC<TypeProps> = (props) => {
  const [activity, setActivity] = useState('usa');
  const [name, setName] = useState('');

  return (
    <View style={styles.containerView}>
      <View style={styles.viewStyle}>
        <Text>Aktivitas</Text>
        <DropDownPicker
          items={[
            {
              label: 'USA',
              value: 'usa',
              icon: () => <Icon name="flag" size={18} color="#900" />,
              hidden: true,
            },
            {
              label: 'UK',
              value: 'uk',
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
            {
              label: 'France',
              value: 'france',
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
          ]}
          defaultValue={activity}
          containerStyle={{height: 40}}
          style={styles.dropdownStyle}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => setActivity(item.value)}
          searchable={true}
          searchablePlaceholder="Search for an item"
          searchablePlaceholderTextColor="gray"
          searchableError={() => <Text>Not Found</Text>}
        />
        <Text>Nama Kaum Saleh</Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TouchableOpacity
          style={styles.loginButtonStyle}
          onPress={() => console.log('Hoihoi')}>
          <Text>ABSEN</Text>
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
  dropdownStyle: {
    backgroundColor: '#fafafa',
    width: '75%',
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

export default Home;
