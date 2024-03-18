import axios, { AxiosInstance } from "axios";
import { ServiceResponse } from "..";

interface RoomsListParamsDTO {
  q: string;
}

export class RoomsService {
  constructor(private api: AxiosInstance) {}

  async list(params: RoomsListParamsDTO): Promise<ServiceResponse> {
    const result = { data: null, error: null };

    try {
      const { data } = await this.api.get(`/rooms`, {
        params: {
          limit: 6,
          ...params,
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
