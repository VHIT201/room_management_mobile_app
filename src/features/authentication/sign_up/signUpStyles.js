import { StyleSheet } from 'react-native';
import colors from '../../../values/colors';

const styles = StyleSheet.create({
  topContainer: {
    marginTop: '30%',
  },
  logo: {
    marginVertical: 30,
    height:100,
    width:100
  },
  promptText: {
    color: colors.primary_blue,
    marginBottom: 10,
  },
  inputContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    borderRadius: 5,
    height: 40,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderColor: colors.primary_blue,
  },
  btnContinue: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary_blue,
    paddingHorizontal: 5,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary_blue,
    marginVertical: 15,
  },
  btnText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 14,
  },
  haveAccountText: {
    color: colors.black,
  },
  loginText: {
    color: colors.primary_blue,
  },
});

export default styles;
