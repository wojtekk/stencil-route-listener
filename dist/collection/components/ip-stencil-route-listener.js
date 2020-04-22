import { Component, Prop, Event, h } from '@stencil/core';
let lastKey = '';
let lastEvent = '';
let props;
export class IpStencilRouteListener {
    constructor() {
        this.localPageSegments = null;
    }
    get currentPageLocation() {
        return (this.props || props).history.location;
    }
    _callEvent(event, location) {
        if (lastEvent === event && lastKey === location.key)
            return;
        if (event === 'pageEnter') {
            this.pageEnter.emit(location);
        }
        else if (event === 'pageLeave') {
            this.pageLeave.emit(location);
        }
        lastEvent = event;
        lastKey = location.key;
    }
    componentWillLoad() {
        if (!this.props) {
            throw Error('Please add props to <ip-stencil-route-listener />!');
        }
        props = this.props;
        this.localPageSegments = this.currentPageLocation;
        lastKey = this.currentPageLocation.key;
    }
    componentDidLoad() {
        if (lastKey === this.currentPageLocation.key) {
            this._callEvent('pageEnter', this.currentPageLocation);
        }
    }
    componentDidUnload() {
        if (lastKey !== this.currentPageLocation.key) {
            this._callEvent('pageLeave', this.localPageSegments);
        }
    }
    componentWillUpdate() {
        if (lastKey !== this.currentPageLocation.key) {
            this._callEvent('pageLeave', this.localPageSegments);
        }
    }
    componentDidUpdate() {
        if (lastKey !== this.currentPageLocation.key) {
            this._callEvent('pageEnter', this.currentPageLocation);
            this.localPageSegments = this.currentPageLocation;
            lastKey = this.currentPageLocation.key;
        }
    }
    render() {
        return h(this.props.component, Object.assign({}, this.props));
    }
    static get is() { return "ip-stencil-route-listener"; }
    static get properties() { return {
        "props": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "RouteRenderProps | undefined",
                "resolved": "RouteRenderProps",
                "references": {
                    "RouteRenderProps": {
                        "location": "import",
                        "path": "@stencil/router"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get events() { return [{
            "method": "pageEnter",
            "name": "pageEnter",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "LocationSegments",
                "resolved": "LocationSegments",
                "references": {
                    "LocationSegments": {
                        "location": "import",
                        "path": "@stencil/router"
                    }
                }
            }
        }, {
            "method": "pageLeave",
            "name": "pageLeave",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "LocationSegments",
                "resolved": "LocationSegments",
                "references": {
                    "LocationSegments": {
                        "location": "import",
                        "path": "@stencil/router"
                    }
                }
            }
        }]; }
}
