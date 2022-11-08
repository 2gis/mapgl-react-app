import { useCallback } from 'react';
import { MAP_CENTER } from './Mapgl';
import { useMapglContext } from './MapglContext';

function ButtonResetMapCenter() {
    const { mapglInstance } = useMapglContext();

    const onClick = useCallback(() => {
        if (!mapglInstance) {
            return;
        }

        mapglInstance.setCenter(MAP_CENTER);
    }, [mapglInstance]);

    return (
        <button style={{ height: '24px' }} onClick={onClick}>
            Reset map center
        </button>
    );
}

export default ButtonResetMapCenter;
