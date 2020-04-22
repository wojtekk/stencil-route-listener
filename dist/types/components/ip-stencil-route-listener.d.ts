import { EventEmitter } from '../stencil-public-runtime';
import { RouteRenderProps, LocationSegments } from '@stencil/router';
export declare class IpStencilRouteListener {
    props: RouteRenderProps | undefined;
    pageEnter: EventEmitter<LocationSegments>;
    pageLeave: EventEmitter<LocationSegments>;
    private localPageSegments;
    private get currentPageLocation();
    private _callEvent;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    render(): any;
}
