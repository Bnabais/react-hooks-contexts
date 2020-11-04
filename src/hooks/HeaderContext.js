import React, {
    useMemo,
    useState,
    useCallback,
    createContext,
    useContext
} from 'react';
import {COLORS} from '../utils/colors';

const HeaderContext = createContext();

export function HeaderProvider(props) {
    const [headerColorState, setHeaderColorState] = useState(COLORS.grey);

    const setHeaderColor = useCallback((color) => {
        setHeaderColorState(color);
    }, []);

    const value = useMemo(
        () => ({
            setHeaderColor,
            headerColorState
        }),
        [setHeaderColor, headerColorState]
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
