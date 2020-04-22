import { Component, h, Listen, State } from '@stencil/core';
export class IpAppRoot {
    constructor() {
        this.pageState = [];
    }
    onPageEnter(e) {
        this.pageState = [...this.pageState, `Page enter ${e.detail.pathname}`];
    }
    onPageLeave(e) {
        this.pageState = [...this.pageState, `Page leave ${e.detail.pathname}`];
    }
    render() {
        return (h("main", null,
            h("stencil-router", null,
                h("stencil-route-switch", { scrollTopOffset: 0 },
                    h("stencil-route", { url: "/", component: "ip-app-home", exact: true, routeRender: props => h("ip-stencil-route-listener", { props: props }) }),
                    h("stencil-route", { url: "/about", exact: true, component: "ip-app-about", routeRender: props => h("ip-stencil-route-listener", { props: props }) }))),
            h("ul", null, this.pageState.map(page => (h("li", null, page))))));
    }
    static get is() { return "ip-app-root"; }
    static get states() { return {
        "pageState": {}
    }; }
    static get listeners() { return [{
            "name": "pageEnter",
            "method": "onPageEnter",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "pageLeave",
            "method": "onPageLeave",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
