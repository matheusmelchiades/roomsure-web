import axios, { AxiosInstance } from "axios";
import { ServiceResponse } from "..";

export class RoomsService {
  constructor(private api: AxiosInstance) {}

  async list(): Promise<ServiceResponse> {
    const result = { data: null, error: null };

    try {
      const { data } = await this.api.get(`/rooms`, {
        params: {
          limit: 6,
        },
      });

      result.data = data || {};
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        result.error = error.response?.data;
      } else {
        result.error = error;
      }
    } finally {
      return result;
    }
  }
}
