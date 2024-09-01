import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import LoginContainer from './loginContainer';
import { ToastMessage } from '../../../utils/MessageUtil';
// import {loaderSelector} from '../../../app/selectors';
import { useTranslation } from 'react-i18next';
export default function LoginScreen(props) {
  // const dispatch = useDispatch();

//   const isLoading = useSelector(loaderSelector);
  const {t} = useTranslation()
  const loginContainerProps = {
    // dispatch,
    ToastMessage,
    // isLoading,
    t,
  };
  return <LoginContainer {...loginContainerProps} />;
}
