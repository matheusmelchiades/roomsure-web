import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IRoom } from "../@types/rooms";
import { roomsService } from "../services/api";

interface RoomsContextI {
  loading: boolean;
  rooms: IRoom[];
  fetchData: () => {};
}

export const RoomsContext = createContext<RoomsContextI>({} as any);

export function RoomsProvider({ children }: any) {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data } = await roomsService.list();
    setLoading(false);

    setRooms(data);
  }, []);

  const value = useMemo(
    () => ({ loading, rooms, fetchData }),
    [loading, rooms, fetchData]
  );

  return (
    <RoomsContext.Provider value={value}>{children}</RoomsContext.Provider>
  );
}
