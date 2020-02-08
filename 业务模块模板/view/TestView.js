/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const propTypes = {

};

const defaultProps = {

};

const defaultState = {

};

export default class TestView extends PureComponent {

  constructor(props) {
    super(props);

    this.state = defaultState;
}

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }

}

TestView.propTypes = propTypes;
TestView.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {

  },
  
});
