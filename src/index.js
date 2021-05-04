import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/style.scss";

import Kamiah from './Kamiah';

Array.prototype.forEach.call(
    document.getElementsByClassName('kamiah'),
    function(el) {
        let manifest = el.getAttribute('data-manifest');
        ReactDOM.render(<Kamiah manifest={manifest} />, el);
    }
);

module.hot.accept();
