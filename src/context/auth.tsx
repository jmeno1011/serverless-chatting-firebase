import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

interface State {
  loggedIn: boolean;
  user: string | undefined;
  loading: boolean;
}

const StateContext = createContext<State>({
  loggedIn: false,
  user: undefined,
  loading: true,
});

const DispatchContext = createContext<any>(null);

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    case "STOP_LOADING":
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error("Unknow action type: " + type);
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

const initialState = {
  loggedIn: false,
  user: null,
  loading: true,
};

const handleCredentialResponse=(response: any)=> {
  console.log("Encoded JWT ID token: " + response.credential);
  return response.credential;
}

function googleInit() {
  if (window.google) {
    const response = window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    const data = response;
    console.log(data);
  }
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, defaultDispatch] = useReducer(reducer, initialState);

  const dispatch = (type: string, payload?: any) => {
    defaultDispatch({ type, payload });
  };

  useEffect(() => {
    googleInit();
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
