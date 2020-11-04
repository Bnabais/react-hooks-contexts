import { useMemo } from 'react';
import { COLORS } from '../utils/colors';

const useMatchingColor = (color) => useMemo(() => Object.keys(COLORS).find(name => name === color), [color]);

export default useMatchingColor;
