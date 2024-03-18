import { useContext } from "react";

import { RoomsContext } from "../contexts/rooms";

export function useRooms() {
  const context = useContext(RoomsContext);

  if (!context) throw Error("hook with provider not defined");

  return context;
}
