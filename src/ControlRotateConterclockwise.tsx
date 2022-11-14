import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useMapglContext } from './MapglContext';

export function ControlRotateCounterclockwise() {
    const [rootEl, setRootEl] = useState<HTMLDivElement | null>(null);
    const { mapglInstance, mapgl } = useMapglContext();

    useEffect(() => {
        if (!mapglInstance || !mapgl) {
            return;
        }

        const control = new mapgl.Control(mapglInstance, '', {
            position: 'topLeft',
        });

        setRootEl(control.getContainer());

        return () => {
            control.destroy();
        };
    }, [mapglInstance, mapgl]);

    return rootEl ? createPortal(<Button />, rootEl) : null;
}

function Button() {
    const { mapglInstance } = useMapglContext();

    const onClick = useCallback(() => {
        if (!mapglInstance) {
            return;
        }

        mapglInstance.setRotation(mapglInstance.getRotation() - 90);
    }, [mapglInstance]);

    return (
        <div
            onClick={onClick}
            style={{
                cursor: 'pointer',
                width: 24,
                height: 24,
                border: '1px solid gray',
                borderRadius: 4,
                background: 'white',
                fontSize: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            &#8634;
        </div>
    );
}
