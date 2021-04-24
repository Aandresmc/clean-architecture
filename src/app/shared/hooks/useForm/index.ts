import { InputHTMLAttributes, reactive, readonly, Ref, ref } from "vue";

type Props = {
  initialValues: any;
  validateOnChange: boolean;
  validate: (arg?: any) => void;
};

export const useForm = ({
  initialValues,
  validateOnChange = false,
  validate,
}: Props) => {
  const values = reactive<any>({ ...initialValues });
  const errors = reactive<any>({});
  const isLoading: Ref<boolean> = ref(false);

  const setValues = (payload: any) => {
    Object.entries(payload).forEach(([k, v]) => (values[k] = v));
  };

  const setErrors = (payload: any) => {
    Object.entries(payload).forEach(([k, v]) => (errors[k] = v));
  };

  const setLoading = (value: boolean) => {
    isLoading.value = value;
  };

  const handleInputChange = (event: InputHTMLAttributes) => {
    const { name = "", value } = event;
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
    values: readonly(values),
    setValues,
    errors: readonly(errors),
    setErrors,
    isLoading: readonly(isLoading),
    setLoading,
    handleInputChange,
    resetForm,
  };
};
