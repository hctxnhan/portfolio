import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

type FormInputFocusType = {
  isFocus: boolean;
  setFocus: Dispatch<SetStateAction<boolean>> | null;
};

const FormInputFocusContext = createContext<FormInputFocusType>({
  isFocus: false,
  setFocus: null,
});

export default FormInputFocusContext;
