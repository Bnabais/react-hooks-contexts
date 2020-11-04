import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

// Hooks
import { useHeaderContext } from '../../hooks/HeaderContext';
import useMatchingColor from '../../hooks/useMatchingColor';
import useColorCounter from '../../hooks/useColorCounter';

// Utils
import {COLORS} from '../../utils/colors';
import Circle from '../../media/Circle';

// Styles
import './HeaderColor.css';

function HeaderColor({ color, onClick }) {
    const { setHeaderColor } = useHeaderContext();
    const { setColorCounter, colorCount } = useColorCounter();

    const matchingColor = useMatchingColor(color);
    const handleColorClick = useCallback(() => {
        setHeaderColor(COLORS[matchingColor]);
        setColorCounter();
        onClick && onClick(color);
    }, [matchingColor, setHeaderColor, setColorCounter, onClick, color]);

    return (
        <button
            className={'color-button'}
            onClick={handleColorClick}>
            <Circle fill={COLORS[matchingColor]}/>
            <p className={'color-count'}>{colorCount}</p>
        </button>
    )
}

HeaderColor.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default HeaderColor;
