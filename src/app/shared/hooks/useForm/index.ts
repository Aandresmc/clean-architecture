import { useState } from "react";

type Props = {
  initialValues: any;
  validateOnChange: boolean;
  validate: Function;
};
export const useForm = ({
  initialValues,
  validateOnChange = false,
  validate,
}: Props) => {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    isLoading,
    setLoading,
    handleInputChange,
    resetForm,
  };
};
