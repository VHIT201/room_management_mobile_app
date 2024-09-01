import React from 'react';
import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {CommonImage} from '../../assets/images';
import {Icons} from '../../assets/icons';
import generalStyles from '../../styles/generalStyles';
import colors from '../../values/colors';
import headerStyles from './headerStyles';
import RootNavigation from '../../navigation/RootNavigation';
import Config from '../../configuration';

const Header = props => {
  const onNavigateTo = path => {
    RootNavigation.navigate(path);
  };
  return (
    <SafeAreaView>
      <View style={[generalStyles.flexRow, headerStyles.headerView]}>
        <View style={{...generalStyles.flexRow, flex: 1}}>
          <TouchableOpacity
            onPress={() => onNavigateTo(Config.APP_NAVIGATE_SCREEN.ADD_FRIEND)}>
            <Image  
              source={{uri:'https://i.ibb.co/Pw7xSFB/emPun.jpg'}}
              style={{width: 30, height: 30, borderRadius:30}}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => onNavigateTo(Config.APP_NAVIGATE_SCREEN.ADD_FRIEND)}>
            <Image source={Icons.iconLookup} style={{width: 20, height: 20}} />
          </TouchableOpacity> */}
        </View>
        <View style={{...generalStyles.centerView, flex: 5}}>
          <TouchableOpacity>
            <Image
              source={CommonImage.LogoDefault}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{...generalStyles.flexRow, flex: 1, gap:10}}>
          <TouchableOpacity onPress={()=>onNavigateTo(Config.APP_NAVIGATE_SCREEN.CHAT)}>
            <Image source={Icons.iconSetting} style={{width: 24, height: 24}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>onNavigateTo(Config.APP_NAVIGATE_SCREEN.CHAT)}>
            <Image source={Icons.iconAlarm} style={{width: 24, height: 24}} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
