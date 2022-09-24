import { useState } from "react";
import { FormInput } from "./FormInput";

interface FormData {
  name: string;
  weight?: number;
  height?: number;
}

interface FormProps {
  initialValues?: FormData;
  onCalculate: (value: number) => void;
}

export const BmiForm = (props: FormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    weight: 0.0,
    height: 0.0,
  });

  const calculate = () => {
    const h = formData.height || 0.0;
    const bmi = (formData.weight || 0) / (h * h);

    props.onCalculate(bmi);
  };

  return (
    <form>
      <FormInput
        name="Name"
        type="text"
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <FormInput
        name="Weight"
        type="number"
        value={(formData.weight || "").toString()}
        onChange={(e) => {
          setFormData({ ...formData, weight: parseFloat(e.target.value) });
        }}
      />
      <FormInput
        name="Height"
        type="number"
        value={(formData.height || "").toString()}
        onChange={(e) => {
          setFormData({ ...formData, height: parseFloat(e.target.value) });
        }}
      />
      <button type="button" onClick={calculate}>Calculate</button>
    </form>
  );
};
