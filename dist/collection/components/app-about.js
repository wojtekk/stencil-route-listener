import { Component, h } from '@stencil/core';
export class IpAppAbout {
    render() {
        return (h("div", null,
            h("h1", null, "About Page"),
            h("stencil-route-link", { url: "/" }, "Go to home page")));
    }
    static get is() { return "ip-app-about"; }
}
