import { Component, h } from '@stencil/core';
export class IpAppHome {
    render() {
        return (h("div", null,
            h("h1", null, "Home Page"),
            h("stencil-route-link", { url: "/about" }, "Go to about page")));
    }
    static get is() { return "ip-app-home"; }
}
