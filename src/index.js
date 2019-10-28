import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const oomph = () => null;
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={oomph} />
  </div>,
  document.getElementById('root')
);
