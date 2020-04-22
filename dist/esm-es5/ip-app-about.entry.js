import { r as registerInstance, h } from './index-92c20e76.js';
var IpAppAbout = /** @class */ (function () {
    function IpAppAbout(hostRef) {
        registerInstance(this, hostRef);
    }
    IpAppAbout.prototype.render = function () {
        return (h("div", null, h("h1", null, "About Page"), h("stencil-route-link", { url: "/" }, "Go to home page")));
    };
    return IpAppAbout;
}());
export { IpAppAbout as ip_app_about };
