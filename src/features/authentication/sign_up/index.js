import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import SignUpContainer from './signUpContainer';
import { ToastMessage } from '../../../utils/MessageUtil';
// import {loaderSelector} from '../../../app/selectors';
import { useTranslation } from 'react-i18next';
export default function SignUpScreen(props) {
  // const dispatch = useDispatch();

//   const isLoading = useSelector(loaderSelector);
  const {t} = useTranslation()
  const signUpContainerProps = {
    // dispatch,
    ToastMessage,
    // isLoading,
    t,
  };
  return <SignUpContainer {...signUpContainerProps} />;
}
