import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { RulerControl } from '@2gis/mapgl-ruler';

const MapglContext = createContext<{
    mapgl?: typeof mapgl;
    mapglInstance?: mapgl.Map;
    rulerControl?: RulerControl;
    setMapglContext: Dispatch<SetStateAction<MapContextState>>;
}>({
    mapgl: undefined,
    mapglInstance: undefined,
    rulerControl: undefined,
    setMapglContext: () => {},
});

interface MapContextState {
    mapglInstance?: mapgl.Map;
    mapgl?: typeof mapgl;
    rulerControl?: RulerControl;
}

export function useMapglContext() {
    return useContext(MapglContext);
}

export function MapglContextProvider({ children }: { children: ReactNode }) {
    const [{ mapglInstance, rulerControl, mapgl }, setMapglContext] = useState<MapContextState>({
        mapglInstance: undefined,
        rulerControl: undefined,
        mapgl: undefined,
    });
    return (
        <MapglContext.Provider value={{ mapgl, mapglInstance, rulerControl, setMapglContext }}>
            {children}
        </MapglContext.Provider>
    );
}
