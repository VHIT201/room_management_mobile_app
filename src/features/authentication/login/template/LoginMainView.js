import React from "react";
import {Image, SafeAreaView, Text, View} from 'react-native';
import ButtonComponent from '../../../../components/Button'
import TextInputComponent from '../../../../components/TextInput';
import Config from "../../../../configuration";
import RootNavigation from "../../../../navigation/RootNavigation";
import generalStyles from '../../../../styles/generalStyles';
import colors from '../../../../values/colors';
import { CommonImage } from "../../../../assets/images";
import loginStyles from "../loginStyles";
const LoginScreen = ({

}) => {
    
    return (
        <SafeAreaView style={generalStyles.container}>
            <View style={[{alignItems: 'center',marginTop:'30%'}, generalStyles.container]}>
                <View style={{marginVertical:30}}>
                    <Image source={CommonImage.LogoDefault}
                        style={{height:100,width:100}}
                    />
                </View>
                <View style={loginStyles.viewLogin}>
                    <TextInputComponent
                        styleAreaInput={{
                            borderRadius: 5,
                            height:40,
                            marginVertical: 10
                        }}
                        placeholder={'Email'}
                        keyboardType={'email-address'}
                        borderColor={colors.primary_blue}
                    />
                    <TextInputComponent
                        styleAreaInput={{
                            borderRadius: 5,
                            height:40,
                        }}
                        placeholder={'Password'}
                        keyboardType={'password'}
                        borderColor={colors.primary_blue}
                    />
                </View>
                <ButtonComponent
                        text={'Đăng nhập'}
                        onPress={()=>RootNavigation.navigate(Config.APP_NAVIGATE_SCREEN.MAIN)}
                        style={{height:40,width:"90%", backgroundColor:colors.primary_blue, borderRadius:10, justifyContent:"center", alignItems:"center"}}
                        textStyle={{color:colors.white, fontWeight:'600'}}
                    />
                <Text style={{textDecorationLine:'underline', fontSize:13, marginTop:10, color:colors.light_black}}>Bạn quên mật khẩu?</Text>
                <View style={[generalStyles.container, {width:"100%", paddingHorizontal:20, justifyContent:"flex-end", alignItems:"center", paddingBottom:40}]}>
                    <Text style={{color:colors.light_black}}>Bạn chưa có tài khoản? 
                        <Text onPress={()=>RootNavigation.navigate(Config.APP_NAVIGATE_SCREEN.SIGN_UP)} style={{color:colors.primary_blue}}> Đăng ký ngay!</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;