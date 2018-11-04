import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { GlobalStyles } from 'ui/theme';


class App extends React.Component {

  render = () => {

    return (
      <React.Fragment>
        <GlobalStyles/>
        <div>I'm Follow :)</div>
      </React.Fragment>
    );
  };
}


ReactDOM.render(<App/>, document.getElementById('root'));
