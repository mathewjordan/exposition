import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/style.scss";

import Kamiah from './Kamiah';

Array.prototype.forEach.call(
    document.getElementsByClassName('kamiah'),
    function(el) {
        ReactDOM.render(<Kamiah />, el);
    }
);

module.hot.accept();
