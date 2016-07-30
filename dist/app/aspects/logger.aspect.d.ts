import { Metadata } from 'aspect.js/dist/lib/aspect';
export declare class LoggerAspect {
    beforeStatic(meta: Metadata): void;
    before(meta: Metadata): void;
    after(meta: Metadata): void;
    afterStaticMethod(meta: Metadata): void;
}
