import { useCallback, useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { useMapglContext } from './MapglContext';

export function useControlRotateClockwise() {
    const { mapglInstance, mapgl } = useMapglContext();

    const onClick = useCallback(() => {
        if (!mapglInstance) {
            return;
        }

        mapglInstance.setRotation(mapglInstance.getRotation() + 90);
    }, [mapglInstance]);

    useEffect(() => {
        if (!mapglInstance || !mapgl) {
            return;
        }

        const control = new mapgl.Control(mapglInstance, renderToStaticMarkup(<Button />), {
            position: 'bottomLeft',
        });

        const rootEl = control.getContainer();
        rootEl.addEventListener('click', onClick);

        return () => {
            rootEl.removeEventListener('click', onClick);
            control.destroy();
        };
    }, [mapglInstance, mapgl, onClick]);
}

function Button() {
    return (
        <div
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
            &#8635;
        </div>
    );
}
