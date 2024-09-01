import React, {useState} from 'react';
import RootNavigation from '../../../navigation/RootNavigation';
import SignUpMainView from './template/SignUpMainView';

import Config from '../../../configuration';
import Utils from '../../../utils';
// import {getMyInfo, getMyRole, login} from './loginSlice';

const SignUpContainer = props => {
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



  const onCloseWebView = () => {
    setOpenWebView(false);
  };

  const signUpProps = {
    showPass,
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
  return <SignUpMainView {...signUpProps} />;
};

export default SignUpContainer;
