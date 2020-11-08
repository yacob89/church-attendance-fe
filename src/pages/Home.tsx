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
  const [name, setName] = useState('yacob');

  return (
    <View style={styles.containerView}>
      <View style={styles.viewStyle}>
        <Text style={styles.textLabelStyle}>Aktivitas</Text>
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
        <Text style={styles.textLabelStyle}>Nama Kaum Saleh</Text>
        <DropDownPicker
          items={[
            {
              label: 'Yacob',
              value: 'yacob',
              icon: () => <Icon name="flag" size={18} color="#900" />,
              hidden: true,
            },
            {
              label: 'Han-han',
              value: 'hanhan',
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
            {
              label: 'Johan Lucianus',
              value: 'JohanLucianus',
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
            {
              label: 'Gery',
              value: 'Gery',
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
            {
              label: 'Riswartono',
              value: 'Riswartono',
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
            {
              label: 'Alfian',
              value: 'Alfian',
              icon: () => <Icon name="flag" size={18} color="#900" />,
            },
          ]}
          defaultValue={name}
          containerStyle={{height: 40}}
          style={styles.dropdownStyle}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => setName(item.value)}
          searchable={true}
          searchablePlaceholder="Search for an item"
          searchablePlaceholderTextColor="gray"
          searchableError={() => <Text>Not Found</Text>}
        />
        <TouchableOpacity
          style={styles.absenButtonStyle}
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
  textLabelStyle: {
    marginTop: 20,
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
  absenButtonStyle: {
    marginTop: 20,
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
