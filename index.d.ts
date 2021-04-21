export declare type TContext<THandlerKey extends string, IAction> = {
    action: IAction;
    stateProxy: {
        [key in THandlerKey]: any;
    };
};
export declare type TStateHandler<IState, THandlerKey extends string> = {
    [key in THandlerKey]: {
        get: (state: IState) => any;
        set: (state: IState, arg: any) => void;
    };
};
export interface IVuezAction {
    [key: string]: (...args: any[]) => void;
}
export interface IVuezState {
    [key: string]: object | number | string | boolean;
}
declare class VuezModule<IAction, IState, IStateHandler> {
    action: IAction;
    stateProxy: {
        [key in keyof IStateHandler]: any;
    };
    constructor(action: {
        [key in keyof IAction]: any;
    }, state: IState, stateHandler: IStateHandler);
}
export declare function createModule<IAction extends IVuezAction, IState extends IVuezState, THandlerKey extends string>(action: {
    [key in keyof IAction]: any;
}, state: IState, stateHandler: TStateHandler<IState, THandlerKey>): VuezModule<IAction, IState, TStateHandler<IState, THandlerKey>>;
export {};
