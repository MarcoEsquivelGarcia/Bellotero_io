import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import BelloteroHeader from '../Global/BelloteroHeader';
import Content from '../Global/Content';
// Data




class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <BelloteroHeader/>
        <Content body={children} />

      </div>
    );
  }
}

export default App;
