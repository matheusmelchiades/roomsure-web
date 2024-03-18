import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

interface ITextFieldComponentProps {
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  type?: HTMLInputTypeAttribute;
}

export default function TextFieldComponent({
  label,
  placeholder = "Type here...",
  className,
  name,
  type,
  inputProps,
}: ITextFieldComponentProps) {
  return (
    <div className={clsx(className, "flex flex-col items-start")}>
      <h3 className="text-secondary text-sm">{label}</h3>
      <input
        className="border border-solid border-hairline rounded-md px-4 py-3 mt-4 w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        type={type}
        placeholder={placeholder}
        name={name}
        {...inputProps}
      />
    </div>
  );
}
