import React, {useCallback} from "react";
import {Image, SafeAreaView, Text, View} from 'react-native';
import ButtonComponent from "../../../../components/Button";
import TextInputComponent from '../../../../components/TextInput';
import Config from '../../../../configuration';
import RootNavigation from '../../../../navigation/RootNavigation';
import generalStyles from '../../../../styles/generalStyles';
import colors from '../../../../values/colors';
import { CommonImage } from "../../../../assets/images";
import { Icons } from "../../../../assets/icons";
import styles from '../signUpStyles';
const SignUpMainView = ({
    t,
    setShowPass,
    showPass
}) => {
    const toggleShowPass = useCallback(() => {
        setShowPass(prevShowPass => !prevShowPass);
      }, [setShowPass]);
    
      const navigateToLogin = useCallback(() => {
        RootNavigation.navigate(Config.APP_NAVIGATE_SCREEN.LOGIN);
      }, []);
    return (
        <SafeAreaView style={generalStyles.container}>
            <View style={[generalStyles.centerView, styles.topContainer]}>
                <Image source={CommonImage.LogoDefault} style={styles.logo} />
                <Text style={styles.promptText}>{t('Use_your_email')}</Text>
                <View style={styles.inputContainer}>
                <TextInputComponent
                    styleAreaInput={styles.input}
                    placeholder={t('Enter_your_email')}
                    keyboardType="email-address"
                    borderColor={colors.primary_blue}
                    // onChangeText={handleUserName}
                    // value={userAccount.email}
                />
                <TextInputComponent
                    styleAreaInput={styles.input}
                    placeholder={t('Password')}
                    // onChangeText={handlePassword}
                    // value={userAccount.password}
                    rightIcon={showPass ? Icons.iconShowPassword : Icons.iconHidePassword}
                    onPressRightIcon={toggleShowPass}
                    secureTextEntry={showPass}
                    borderColor={colors.primary_blue}
                />
                </View>
                <ButtonComponent
                style={styles.btnContinue}
                text={t('SignUp').toUpperCase()}
                textStyle={styles.btnText}
                // onPress={onSubmitAddNewAlbum}
                backgroundColor={colors.white}
                />
                <View style={generalStyles.flexRow}>
                <Text style={styles.haveAccountText}>{t('Have_account')}</Text>
                <Text onPress={navigateToLogin} style={styles.loginText}>{t('Login')}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpMainView;