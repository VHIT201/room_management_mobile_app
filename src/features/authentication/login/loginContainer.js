import React, {useState} from 'react';
import RootNavigation from '../../../navigation/RootNavigation';
import LoginMainView from './template/LoginMainView';

import Config from '../../../configuration'
import Utils from '../../../utils'
// import {getMyInfo, getMyRole, login} from './loginSlice';

const LoginContainer = props => {
  // console.log("props: ", props)
  const { ToastMessage, t} = props;

  const [showPass, setShowPass] = useState(true);

  const [userAccount, setUserAccount] = useState({
    username: '',
    password: '',
  });

  const [isAccept, setAccept] = useState(false);
  const [isOpenWebView, setOpenWebView] = useState(false);

  const handleUserName = text => {
    if (text != null) {
      setUserAccount({username: text, password: userAccount.password});
    }
  };
  const handlePassword = text => {
    if (text != null) {
      setUserAccount({username: userAccount.username, password: text});
    }
  };

  const handleSetAccount = () => {
    if (
      userAccount.username.length === 0 ||
      userAccount.password.length === 0
    ) {
      ToastMessage({
        title: t('System'),
        message: t('Enter_account'),
        type: 'error',
      });
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    try {
      if (!handleSetAccount()) return;
      // const res = await dispatch(
      //   login({
      //     name: userAccount.username,
      //     pass: encodeURIComponent(userAccount.password),
      //   }),
      // );
      const {success} = Utils.getValues(res, 'payload', false);
      if (success) {
        // dispatch(getMyInfo());
        // dispatch(getMyRole());
        RootNavigation.navigate(Config.APP_NAVIGATE_SCREEN.MAIN);
      } else {
        const {message} = Utils.getValues(
          res,
          'payload',
          'Tài khoản hoặc mật khẩu không đúng',
        );
        ToastMessage({
          title: t('System'),
          message: message,
          type: 'error',
        });
      }
    } catch (e) {
      console.log('error login: ', e);
      ToastMessage({
        title: t('System'),
        message: 'Đã có lỗi xảy ra !!!',
        type: 'error',
      });
    }
  };

  const onCloseWebView = () => {
    setOpenWebView(false);
  };

  const loginProps = {
    showPass,
    handleLogin,
    setShowPass,
    userAccount,
    handleUserName,
    handlePassword,
    isAccept,
    setAccept,
    isOpenWebView,
    setOpenWebView,
    onCloseWebView,
    t
  };
  return <LoginMainView {...loginProps} />;
};

export default LoginContainer;
