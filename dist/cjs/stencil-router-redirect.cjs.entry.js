'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f6b314bd.js');
const activeRouter = require('./active-router-b9644968.js');

// Get the URL for this route link without the root from the router
const getUrl = (url, root) => {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
const Redirect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (this.history && this.root && this.url) {
            return this.history.replace(getUrl(this.url, this.root));
        }
    }
    get el() { return index.getElement(this); }
};
activeRouter.ActiveRouter.injectProps(Redirect, [
    'history',
    'root'
]);

exports.stencil_router_redirect = Redirect;
