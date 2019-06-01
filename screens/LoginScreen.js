import React from 'react';
import {
  Image,
  Button,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {
  LoginText,
  PhoneNumberInputPlaceholder,
  SecurityCodeInputPlaceholder,
} from '../constants/Strings';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      securityCode: '',
    };
  }

  _handleLoginPressed = () => {
    // TODO: handle login
    console.log('Login pressed');
    console.log('Proceed to login');
  };

  _handlePhoneNumberChange = value => {
    this.setState({ phoneNumber: value });
  };

  _handleSecurityCodeChange = value => {
    this.setState({ securityCode: value });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.screen} behavior="padding" enabled>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/dsu-logo.png')}
              style={styles.logo}
            />
          </View>

          <TextInput
            style={styles.phoneNumberInput}
            value={this.state.phoneNumber}
            onChangeText={this._handlePhoneNumberChange}
            placeholder={PhoneNumberInputPlaceholder}
            keyboardType="numeric"
          />

          <TextInput
            style={styles.securityCodeInput}
            value={this.state.securityCode}
            onChangeText={this._handleSecurityCodeChange}
            placeholder={SecurityCodeInputPlaceholder}
          />
        </ScrollView>
        <View style={styles.loginButtonContainer}>
          <Button
            style={styles.loginButton}
            title={LoginText}
            color={'#FFCC00'}
            onPress={this._handleLoginPressed}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const LogoBorderRadius = 180;

const inputStyles = {
  height: 40,
  color: '#FFF',
  width: '100%',
  fontSize: 17,
  height: 80,
  padding: 22,
  textDecorationColor: '#FFF',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#264998',
  },
  contentContainer: {
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: LogoBorderRadius / 2,
    width: LogoBorderRadius,
    height: LogoBorderRadius,
    backgroundColor: '#FFF',
    marginVertical: 147,
  },
  logo: {},
  loginButton: {},
  loginButtonContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: '#FFCC00',
  },

  phoneNumberInput: {
    ...inputStyles,
  },

  securityCodeInput: {
    ...inputStyles,
  },
});
