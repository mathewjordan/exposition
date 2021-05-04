import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/style.scss";

import Exposition from "./Exposition";

Array.prototype.forEach.call(
    document.getElementsByClassName('exposition-setting'),
    function(el) {
        let manifest = el.getAttribute('data-manifest');
        ReactDOM.render(<Exposition manifest={manifest} />, el);
    }
);

module.hot.accept();
