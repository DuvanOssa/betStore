import { createContext, h } from 'preact';
import { useEffect, useReducer } from 'preact/hooks';

export const HeaderContext = createContext({});

const initialValue = localStorage.getItem('headerContext')
  ? JSON.parse(localStorage.getItem('headerContext'))
  : {
      cartCount: 0,
    };

let inicialState = {
  ...initialValue,
};

let headerReducer = (state, action) => {
  switch (action.type) {
    case 'ADDTOCART':
      return {
        ...state,
        cartCount: action.payload.cartCount,
      };

    default:
      return {
        cartCount: 0,
      };
  }
};

const HeaderProvider = ({ children }) => {
  const [state, Headerdispatch] = useReducer(headerReducer, inicialState);

  useEffect(() => {
    localStorage.setItem('headerContext', JSON.stringify(state));
  }, [state]);

  return (
    <HeaderContext.Provider value={[state, Headerdispatch]}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
