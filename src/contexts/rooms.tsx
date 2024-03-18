import { createContext, useCallback, useMemo, useState } from "react";
import { IRoom } from "../@types/rooms";
import { roomsService } from "../services/api";

interface RoomsContextI {
  loading: boolean;
  rooms: IRoom[];
  fetchData: () => {};
  updateFilters: (updateFilters: any) => void;
}

interface Filters {
  search: string;
}

export const RoomsContext = createContext<RoomsContextI>({} as any);

export function RoomsProvider({ children }: any) {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [filters, setFilters] = useState<Filters>({} as Filters);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const { data } = await roomsService.list({
      q: filters?.search,
    });
    setLoading(false);

    setRooms(data);
  }, [filters]);

  const updateFilters = useCallback((updateFilters: any) => {
    const obj = Object.assign({}, filters, {
      search: updateFilters?.search,
    });

    setFilters(obj);
  }, []);

  const value = useMemo(
    () => ({ loading, rooms, fetchData, updateFilters }),
    [loading, rooms, fetchData]
  );

  return (
    <RoomsContext.Provider value={value}>{children}</RoomsContext.Provider>
  );
}
