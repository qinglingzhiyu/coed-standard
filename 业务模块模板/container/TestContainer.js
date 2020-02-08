/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import TestView from '../view/TestView';

const propTypes = {

};

const defaultProps = {

};

const defaultState = {

};

class TestContainer extends PureComponent {

  constructor(props) {
    super(props);
    
    this.state = defaultState;
  }

  componentDidMount() {
    // TODO 清除 redux 里的缓存数据
    // TODO 执行逻辑代码
  }

  render() {
    <TestView

    />
  }

}

TestContainer.propTypes = propTypes;
TestContainer.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
  
  };
}

export default connect(mapStateToProps)(TestContainer);
