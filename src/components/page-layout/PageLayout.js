import React, { Fragment, useState, useCallback, useMemo } from 'react';

// Components
import HeaderColor from '../header-color';

// Hooks
import usePrevious from '../../hooks/usePrevious';

// Utils
import { COLORS } from '../../utils/colors';

// Styles
import './PageLayout.css';

function PageLayout() {
    const [actualColor, setActualColor] = useState(null);

    const previousColor = usePrevious(actualColor);

    const previousSelectedColor = useMemo(() => (
        `Previous Color: ${previousColor?.toUpperCase()}`
    ), [previousColor]);

    const actualSelectedColor = useMemo(() => (
        `Actual Color: ${actualColor?.toUpperCase()}`
    ), [actualColor]);

    const handleClick = useCallback(color => {
        setActualColor(color);
    }, []);

    return (
        <div className={'page-layout'}>
            <section className={'page-layout-section'}>
                <h3>Change Header Color</h3>
                    <div className={'page-layout-colors-wrapper'}>
                        { Object.keys(COLORS).map((color, index) =>
                            <Fragment key={index}>
                                <HeaderColor onClick={handleClick} color={color} />
                            </Fragment>
                        )}
                    </div>
                    <div className={'page-layout-color-wrapper'}>
                        {previousColor && (
                            <p className={'page-layout-color-info'}>{previousSelectedColor}</p>
                        )}
                        {actualColor && (
                            <p className={'page-layout-color-info'}>{actualSelectedColor}</p>
                        )}
                    </div>
            </section>
        </div>
    );
}

export default PageLayout;
