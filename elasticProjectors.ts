import {AnyEventHandlerMap, EventHandler} from "./common";

export const project = <T>(eventType: string, handler: EventHandler<T>): AnyEventHandlerMap => {
    return {eventType, handler}
};

export const index = <T>(eventType: string, handler: (event: T) => { id: string, doc: object }): AnyEventHandlerMap =>
    project<T>(eventType, e => {
        const result = handler(e);
        const doc = JSON.stringify(result.doc);
        return {index: {document: doc, id: result.id}};
    });

export const update = <T>(eventType: string, handler: (event: T) => { id: string, doc: object }): AnyEventHandlerMap =>
    project<T>(eventType, e => {
        const result = handler(e);
        const updateDoc = JSON.stringify(result.doc);
        return {update: {id: result.id, document: updateDoc}};
    });

