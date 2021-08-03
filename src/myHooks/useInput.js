import { useState } from "react";
import { useValidation } from "./useValidations";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    changeValue,
    ...valid,
  };
};
