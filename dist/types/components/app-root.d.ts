import { LocationSegments } from '@stencil/router';
export declare class IpAppRoot {
    pageState: string[];
    onPageEnter(e: CustomEvent<LocationSegments>): void;
    onPageLeave(e: CustomEvent<LocationSegments>): void;
    render(): any;
}
