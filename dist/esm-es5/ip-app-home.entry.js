import { r as registerInstance, h } from './index-92c20e76.js';
var IpAppHome = /** @class */ (function () {
    function IpAppHome(hostRef) {
        registerInstance(this, hostRef);
    }
    IpAppHome.prototype.render = function () {
        return (h("div", null, h("h1", null, "Home Page"), h("stencil-route-link", { url: "/about" }, "Go to about page")));
    };
    return IpAppHome;
}());
export { IpAppHome as ip_app_home };
