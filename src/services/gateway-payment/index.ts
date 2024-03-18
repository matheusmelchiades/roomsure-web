import axios from "axios";
import { PaymentService } from "./factories/payment";

export interface ServiceResponse<T = any | null> {
  data: T;
  error: {
    statusCode: number;
    message: string;
  } | null;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_GATEWAY_PAYMENT_URL || "http://localhost:3001",
});

export const paymentService = new PaymentService(instance);

export default instance;
