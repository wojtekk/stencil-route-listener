'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f6b314bd.js');

const IpAppAbout = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", null, index.h("h1", null, "About Page"), index.h("stencil-route-link", { url: "/" }, "Go to home page")));
    }
};

exports.ip_app_about = IpAppAbout;
