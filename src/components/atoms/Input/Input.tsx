import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
}

export const Input = ({ name, label, register, ...props }: InputProps) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} {...register(name)} {...props} />
    </div>
  );
};
