'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f6b314bd.js');

const IpAppHome = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("h1", null, "Home Page"), index.h("stencil-route-link", { url: "/about" }, "Go to about page")));
    }
};

exports.ip_app_home = IpAppHome;
