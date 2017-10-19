// @flow
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';

import {
  FormLabel,
  FormControl,
  FormHelperText
} from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';


const styles = (theme) => ({
  heading: {
    fontWeight: 300,
  },
  form: {
    display: 'block',
    maxWidth: '400px',
    position: 'relative',
    margin: 'auto'
  },
  textField: {
    marginBottom: '16px',
    maxWidth: '400px',
  },
  inputField: {
    '&:before': {
      backgroundColor: theme.palette.common.transparent,
    },
    '&:hover:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.2) !important',
      height: '1px !important',
    },
    '&:after': {
      transformOrigin: '0 0',
    }
  },
  helperText: {
    textAlign: 'right',
    marginTop: 0,
    top: 0,
    right: 0,
    position: 'absolute',
  }
});

type Props = {
  classes: { [key: string]: string }
};

type State = {
  one: string,
  two: string,
  three: string
};

class Testcase1 extends Component<Props, State> {
  state = {
    one: '',
    two: '',
    three: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { one, two, three } = this.state;
    

    return (
      <form className={ classes.form }>

        <TextField
          className={ classes.textField }
          InputClassName={ classes.inputField }
          error={ this.hasError('one') }
          fullWidth
          helperText={ this.getError('one') }
          helperTextClassName={ classes.helperText }
          label="Text field with adaptions"
          onChange={ this.handleChange('one') }
          value={ one }
        />

        <FormControl
          className={ classes.textField }
          error={ this.hasError('two') }
          fullWidth
        >
          <InputLabel
            htmlFor="how-to-get-a-fucking-unique-id"
          >
            Self composed field
          </InputLabel>
          <Input
            id="how-to-get-a-fucking-unique-id"
            value={ two }
            onChange={ this.handleChange('two') }
            className={ classes.inputField }
          />
          { this.hasError('two') ? (
            <FormHelperText
              className={ classes.helperText }
            >
              { this.getError('two') }
            </FormHelperText>
          ) : null }
          
        </FormControl>

        <TextField
          className={ classes.textField }
          fullWidth
          error={ this.hasError('three') }
          helperText={ this.getError('three') }
          label="Standard field"
          onChange={ this.handleChange('three') }
          value={ three }
        />

        <FormLabel
          className={ classes.heading }
          component="h2"
        >
          Some input tests
        </FormLabel>
      </form>
    );
  }

  getError(name) {
    return this.state[name].length === 1 ? 'C\'mon, write more!' : null;
  }

  hasError(name) {
    return !!this.getError(name);
  }
}

Testcase1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Testcase1);
