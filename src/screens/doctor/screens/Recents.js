import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ripple from 'react-native-material-ripple';
import colors from '../../../styles/colors';
import global from '../../../utility/global';
import constants from '../../../utility/constants';
import CommonInput from '../../../components/CommonInput';
import {useForm} from 'react-hook-form';
// import CustomSwitch from './components/CustomSwitch';
import PrimaryButton from '../../../components/PrimaryButton';
import fonts from '../../../utility/fonts';
import Header from '../../../components/Header';
import SearchBox from '../../../components/SearchBox';
import styles from '../../../styles/styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const apiKey={
  OTP:'otp',
}

const data = [
  {
    id: 1,
    name: 'John Doe',
    img: require('../../../assets/images/logo.png'),
    age: '25 Years',
    phone: '1234567890',
  },
  {
    id: 2,
    name: 'John Doe',
    img: require('../../../assets/images/logo.png'),
    age: '25 Years',
    phone: '1234567890',
  },
  {
    id: 3,
    name: 'John Doe',
    img: require('../../../assets/images/logo.png'),
    age: '25 Years',
    phone: '1234567890',
  },
];

export default function Recents({navigation}) {
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    navigation.setOptions({
      header: () => <Header />,
    });
  }, []);

  const searchProduct = text => {};

  const onSubmit = data => {
    console.log(data);
    console.log(id);
    setVisible(false);
    navigation.navigate('Recents');
  };
  const onOTPGenerator = id => {
    console.log('OTP Generator');
    setId(id);
    setVisible(true);
  };

  const renderRecent = ({item}) => {
    return (
      <View style={[internalstyles.item, {elevation: isVisible ? 0 : 1}]}>
        <View style={internalstyles.itemLeft}>
          <Image source={item.img} style={internalstyles.itemImg} />
          <View style={internalstyles.itemTextContainer}>
            <Text style={internalstyles.itemName}>{item.name}</Text>
            <Text style={internalstyles.text}>Age: {item.age}</Text>
            <Text style={internalstyles.text}>Phone: {item.phone}</Text>
          </View>
        </View>
        <View style={internalstyles.itemRight}>
          <Ripple style={internalstyles.itemBtn} onPress={onOTPGenerator}>
            <Text style={internalstyles.itemBtnText}>Generate OTP</Text>
          </Ripple>
        </View>
      </View>
    );
  };

  const renderCurrent = ({item}) => {
    return (
      <Ripple
      style={[internalstyles.item, {elevation: isVisible ? 0 : 1}]}
        onPress={() => {
          navigation.navigate('PatientsData', {id: item.id});
        }}>
        <View style={internalstyles.itemLeft}>
          <Image source={item.img} style={internalstyles.itemImg} />
          <View style={internalstyles.itemTextContainer}>
            <Text style={internalstyles.itemName}>{item.name}</Text>
            <Text style={internalstyles.text}>Age: {item.age}</Text>
            <Text style={internalstyles.text}>Phone: {item.phone}</Text>
          </View>
        </View>
      </Ripple>
    );
  };

  const getTabViewData = isRecent => {
    return (
      <View style={[internalstyles.container, {opacity: isVisible ? 0.7 : 1}]}>
        <SearchBox
          placeholder={'Search for Patients (Name /Phone Number)...'}
          onIconClick={text => {
            searchProduct(text);
          }}
          style={{
            marginBottom: 12,
            elevation: isVisible ? 0 : 2,
          }}
        />
        {isRecent && (
          <Modal
            visible={isVisible}
            animationType="fade"
            onRequestClose={() => {
              setVisible(false);
            }}
            transparent={true}>
            <View style={internalstyles.modal}>
              <View style={{padding: 10, paddingHorizontal: 20}}>
                <Text
                  style={{
                    fontSize: fonts._18,
                    fontWeight: 'bold',
                    color: colors.BLACK,
                  }}>
                  Enter OTP
                </Text>
                <CommonInput
                  name={apiKey.OTP}
                  title={'OTP'}
                  control={control}
                  errors={errors}
                  starMark={true}
                  rules={{
                    required: true,
                    pattern: global.getPositiveNumberRegex(),
                  }}
                  otherTextInputProps={{
                    editable: !isLoading,
                  }}
                  style={{
                    marginTop: 26,
                  }}
                  requiredError={'OTP is required'}
                  validationError={'OTP is not valid'}
                />
                <PrimaryButton
                  title={'Verify OTP'}
                  onPress={handleSubmit(onSubmit)}
                />
              </View>
            </View>
          </Modal>
        )}
        <View style={internalstyles.flatlistContainer}>
          <FlatList
            data={data}
            renderItem={({item}) =>
              isRecent ? renderRecent({item}) : renderCurrent({item})
            }
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={[styles.styleFull,{alignItems:'stretch'}]}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.BLACK,
          scrollEnabled: true,
          bounces: true,
          style: {
            backgroundColor: 'transparent',
            elevation: 1,
            marginLeft: 10,
          },
          indicatorStyle: {
            backgroundColor: colors.PRIMARY,
            height: 2,
          },
          labelStyle: {
            fontSize: fonts._13,
            fontFamily: fonts.FONT_FAMILY.SemiBold,
            fontWeight: 'bold',
            textTransform: 'none',
          },
        }}>
        <Tab.Screen
          name="Current Access"
          component={() => getTabViewData(false)}
        />
        <Tab.Screen
          name="Recent Access"
          component={() => getTabViewData(true)}
        />
      </Tab.Navigator>
    </View>
  );
}

const internalstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    paddingTop: 22,
    paddingBottom: 0,
    paddingHorizontal: 10,
  },
  modal: {
    backgroundColor: colors.WHITE,
    height: 250,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: '30%',
    elevation: 5,
  },
  flatlistContainer: {
    marginTop: 12,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImg: {
    width: 70,
    height: 70,
    borderRadius: 30,
  },
  itemTextContainer: {
    marginLeft: 12,
  },
  itemName: {
    fontFamily: fonts.FONT_FAMILY.Bold,
    fontSize: fonts._15,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  text: {
    fontFamily: fonts.FONT_FAMILY.Regular,
    fontSize: fonts._9,
    color: colors.GREY,
  },
  itemRight: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  itemBtn: {
    backgroundColor: colors.PRIMARY,
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  itemBtnText: {
    fontFamily: fonts.FONT_FAMILY.Bold,
    fontSize: fonts._8,
    color: colors.WHITE,
  },
});
