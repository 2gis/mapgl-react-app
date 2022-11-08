import { useCallback } from 'react';
import { useMapglContext } from './MapglContext';

function ButtonRulerAddPreset() {
    const { rulerControl } = useMapglContext();

    const onClick = useCallback(() => {
        if (!rulerControl) {
            return;
        }

        const ruler = rulerControl.getRuler();
        ruler.enable();
        ruler.setPoints([
            [55.26333, 25.22994],
            [55.31826, 25.27667],
            [55.36924, 25.23397],
            [55.30951, 25.18816],
        ]);
    }, [rulerControl]);

    return (
        <button style={{ height: '24px' }} onClick={onClick}>
            Add ruler preset
        </button>
    );
}

export default ButtonRulerAddPreset;
