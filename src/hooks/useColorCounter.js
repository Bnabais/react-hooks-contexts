import { useState, useCallback } from 'react';

export default function useColorCounter() {
    const [colorCount, setColorCount] = useState(0);

    const setColorCounter = useCallback(() => {
        setColorCount(colorCount + 1)
    }, [colorCount]);

    return { colorCount, setColorCounter };
}
