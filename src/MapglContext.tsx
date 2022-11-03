import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

const MapglContext = createContext<{
    mapgl?: typeof mapgl;
    mapglInstance?: mapgl.Map;
    setMapglContext: Dispatch<SetStateAction<MapContextState>>;
}>({
    mapgl: undefined,
    mapglInstance: undefined,
    setMapglContext: () => {},
});

interface MapContextState {
    mapglInstance?: mapgl.Map;
    mapgl?: typeof mapgl;
}

export function useMapglContext() {
    return useContext(MapglContext);
}

export function MapglContextProvider({ children }: { children: ReactNode }) {
    const [{ mapglInstance, mapgl }, setMapglContext] = useState<MapContextState>({
        mapglInstance: undefined,
        mapgl: undefined,
    });
    return (
        <MapglContext.Provider value={{ mapgl, mapglInstance, setMapglContext }}>
            {children}
        </MapglContext.Provider>
    );
}
