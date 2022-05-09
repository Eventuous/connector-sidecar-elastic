import {AnyEventHandlerMap, EventHandler, WrapToAny} from "./common";
import {Delete, Ignore, Index, Update, UpdateScript} from "./compiled/proto/project";

export type ValidResult = Index | Update | Delete | Ignore | UpdateScript;

export function project<T>(eventType: string, handler: EventHandler<T>): AnyEventHandlerMap {
    // @ts-ignore
    return {eventType, handler: x => handler(x as T)};
}

export function index<T>(eventType: string, handler: (event: T) => { id: string, document: object }): AnyEventHandlerMap {
    return project<T>(eventType, e => {
        const idx = Index.fromPartial(handler(e));
        return WrapToAny(idx);
    });
}

export const update = <T>(eventType: string, handler: (event: T) => { id: string, document: object }): AnyEventHandlerMap =>
    project<T>(eventType, e => {
        const result = Update.fromPartial(handler(e));
        return WrapToAny(result);
    });

