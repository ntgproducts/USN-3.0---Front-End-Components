// @flow

import React, { Component } from 'react';
import Spinner from './Spinner';

class AsyncRoute extends Component {
  state = {
    // only keep things in state that need rerenders
    loaded: false
  };
  componentDidMount() {
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  component = null;
  props: {
    props: mixed,
    // Need to give it what the promise will return React.Component takes 3 params
    // we aren't validating so we are passing any
    loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }>
  };
render() {
    if (this.state.loaded) {
      // we do have a prop called props it looks super weird but thats 
      // what it is
      return <this.component {...this.props.props} />;
    }
    // if the component isn't currently loaded show our spinner
    return <Spinner />;
  }
}

export default AsyncRoute;
