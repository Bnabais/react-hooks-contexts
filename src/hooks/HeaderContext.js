import React, {
    useMemo,
    useCallback,
    createContext,
    useContext,
    useReducer
} from 'react';
import {COLORS} from '../utils/colors';

const HeaderContext = createContext();

const reducer = (state, action) => {
    if (action.type === 'COLOR') {
        return action.payload;
    }
    return state;
};

export function HeaderProvider(props) {
    const [state, dispatch] = useReducer(reducer, COLORS.grey);

    const setHeaderColor = useCallback((color) => {
        dispatch({type: 'COLOR', payload: color});
    }, []);

    const value = useMemo(
        () => ({
            setHeaderColor,
            headerColorState: state
        }),
        [setHeaderColor, state]
    );

    return <HeaderContext.Provider value={value} {...props} />;
}

/**
 * Uses the context provided by the `MiniCartContext`.
 *
 * @returns {HeaderContextValue} - The provided context values.
 */
export function useHeaderContext() {
    return useContext(HeaderContext);
}

export default HeaderContext;
