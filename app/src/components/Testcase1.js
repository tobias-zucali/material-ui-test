// @flow
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  heading: {
    fontWeight: 'normal'
  }
});

type Props = {
  classes: { [key: string]: string }
};

type State = {
};

class Testcase1 extends Component<Props, State> {
  render() {
    let a = 1;
    a = 'bla';
    return (
      <h1 className={ this.props.classes.heading }>Testcase 1</h1>
    );
  }
}

Testcase1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(Testcase1);
