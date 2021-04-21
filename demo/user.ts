import { createModule, IVuezAction, IVuezState, TContext, TStateHandler } from "..";

interface IUserState extends IVuezState {
  username: string;
  userInfo: {
    icon: string;
  },
  func: () => void;
}

interface IUserAction extends IVuezAction {
  login: (username: string, password: string) => void;
  logout: (test: string) => void;
  updateInfo: () => void;
}

type TUserHandlerKey = 'username' | 'usericon';

const userState: IUserState = {
  username: 'yubi',
  userInfo: {
    icon: 'icon_url',
  },
  func: () => {}
}

const userAction = {
  login: (context: TContext<TUserHandlerKey, IUserAction>, username: string, password: string) => {
    // context.dispatch('updateInfo')()
    context.stateProxy.username = 'AAA '
    
    console.log('login Action');
    console.log(context);
    console.log(username); 
    console.log(password);
  },
  logout: () => {},
  updateInfo: () => {},
}

const userStateHandler: TStateHandler<IUserState, TUserHandlerKey> = {
  username: {
    get: (state) => state.username,
    set: (state, username) => {
      state.username = username;
    },
  },
  usericon: {
    get: (state) => state.userInfo.icon,
    set: (state, icon) => state.userInfo.icon = icon,
  }
}

const userModule = createModule<IUserAction, IUserState, TUserHandlerKey>(userAction, userState, userStateHandler);

userModule.action.login('user', 'pass');
userModule.action.logout('test');
userModule.action.updateInfo();

// export default userModule;