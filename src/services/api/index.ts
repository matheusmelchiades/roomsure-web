import axios from "axios";
import { RoomsService } from "./factories/rooms";

export interface ServiceResponse<T = any | null> {
  data: T;
  error: {
    statusCode: number;
    message: string;
  } | null;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

export const roomsService = new RoomsService(instance);

export default instance;
