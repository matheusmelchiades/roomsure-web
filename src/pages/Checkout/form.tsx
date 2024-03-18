import { useState } from "react";
import { IRoom } from "../../@types/rooms";
import TextFieldComponent from "../../components/inputs/text-field";
import { paymentService } from "../../services/gateway-payment";
import LoaderComponent from "../../components/loader";
import { useNavigate } from "react-router-dom";

interface FormCheckout {
  email: string;
  cardNumber: string;
  cardIssueDate: string;
  cardCVC: string;
}

export default function FormCheckoutComponent({ order }: { order: IRoom }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState<{
    status: string;
    content: string;
  }>();

  const handleSubmit = async (event: any) => {
    setLoader(true);
    event.preventDefault();

    const formData = new FormData(event.target);

    const formObject = {} as FormCheckout;

    formData.forEach(function (value, key) {
      // @ts-ignore
      formObject[key] = value;
    });

    const { data, error } = await paymentService.process({
      cardDetails: {
        number: formObject.cardNumber,
        expireDate: formObject.cardIssueDate,
        cvv: formObject.cardCVC,
      },
      customer: formObject.email,
      purchase: {
        amount: order.price,
        item: {
          roomId: order.id,
          startDate: "",
          endDate: "",
        },
      },
    });

    setResponse({
      status: data && data?.status ? "SUCCESS" : "ERROR",
      content:
        data?.message ||
        error?.message ||
        (data ? "Process with success" : "Error on processing"),
    });

    setLoader(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-xl text-start text-secondary">Payment Details</h1>
      <p className="text-sm text-start mt-2">
        Complete your purchase by providing your payment details.
      </p>

      <div className="space-y-12 mt-16">
        <TextFieldComponent label="Email address" name="email" />

        <div className="w-full border border-solid border-hairline border-smoke" />

        <TextFieldComponent
          label="Card Number"
          placeholder="0000 0000 0000 0000"
          name="cardNumber"
          type="text"
        />

        <div className="flex flex-row justify-between items-start space-x-4">
          <TextFieldComponent
            className="w-full"
            label="Issue Date"
            placeholder="DD / YYYY"
            name="cardIssueDate"
            type="text"
          />
          <TextFieldComponent
            label="CVC"
            placeholder="CVC"
            className="w-full"
            name="cardCVC"
            type="text"
          />
        </div>

        <div>
          {response?.status === "SUCCESS" && (
            <p className="text-sm text-primary">{response.content}</p>
          )}

          {response?.status === "ERROR" && (
            <p className="text-sm text-red-700">{response.content}</p>
          )}

          <button
            type="submit"
            disabled={response?.status === "SUCCESS"}
            className="bg-primary text-white p-3 px-8 rounded-lg cursor-pointer mt-4 text-base text-nowrap w-full disabled:opacity-30"
          >
            {loader ? <LoaderComponent /> : "Pay"}
          </button>

          {response?.status && (
            <button
              type="submit"
              className="bg-secondary text-white p-3 px-8 rounded-lg cursor-pointer mt-4 text-base text-nowrap w-full"
              onClick={() => navigate("/")}
            >
              Go Home
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
