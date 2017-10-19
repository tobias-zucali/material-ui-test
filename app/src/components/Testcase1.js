// @flow
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';


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
    return (
      <section>
        <h1 className={ this.props.classes.heading }>Testcase 1</h1>
        <Button>
          Hello Wor
        </Button>
      </section>
    );
  }
}

Testcase1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Testcase1);
