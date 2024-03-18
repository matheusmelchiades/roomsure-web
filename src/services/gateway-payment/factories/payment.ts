import axios, { AxiosInstance } from "axios";
import { ServiceResponse } from "..";

// @ts-ignore
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

interface PaymentProcessDTO {
  cardDetails: {
    number: string;
    expireDate?: string;
    cvv?: string;
  };
  customer: string;
  purchase: {
    amount: number;
    item: {
      roomId: string;
      startDate: string;
      endDate: string;
    };
  };
}

export class PaymentService {
  constructor(private api: AxiosInstance) {}

  async process(payload: PaymentProcessDTO): Promise<ServiceResponse> {
    const result = { data: null, error: null };

    try {
      const { data } = await this.api.post(`/payment/process`, {
        cardDetails: {
          number: payload.cardDetails.number,
          expireDate: payload.cardDetails.expireDate || "2025-03-01",
          cvv: payload.cardDetails.cvv || "009",
        },
        customer: payload.customer,
        purchase: {
          amount: payload.purchase.amount,
          item: {
            roomId: payload.purchase.item.roomId,
            startDate:
              payload.purchase.item.startDate || new Date().toISOString(),
            endDate:
              payload.purchase.item.endDate ||
              //@ts-ignore
              new Date().addDays(2).toISOString(),
          },
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
