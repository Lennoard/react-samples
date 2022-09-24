import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export const FormInput = ({ name, type, value, onChange }: BmiFormProps) => {
  return (
    <div className="input-control">
      <label>{name}: </label>
      <input autoComplete="off" type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default interface BmiFormProps {
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange?: ChangeEventHandler<any> | undefined;
}
