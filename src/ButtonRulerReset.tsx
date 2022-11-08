import { useCallback } from 'react';
import { useMapglContext } from './MapglContext';

function ButtonRulerReset() {
    const { rulerControl } = useMapglContext();

    const onClick = useCallback(() => {
        if (!rulerControl) {
            return;
        }

        const ruler = rulerControl.getRuler();
        ruler.setPoints([]);
    }, [rulerControl]);

    return (
        <button style={{ height: '24px' }} onClick={onClick}>
            Reset ruler
        </button>
    );
}

export default ButtonRulerReset;
