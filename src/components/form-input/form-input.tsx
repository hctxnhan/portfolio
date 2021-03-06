import {
  StyledFormInput,
  EmailFormInput,
  MessageFormInput,
} from './form-input.style';
import { FunctionComponent } from 'react';
import useHover from '../useHover/withHover';
import { useContext } from 'react';
import FormInputFocusContext from '../../context/input';

type Props = {
  children: string;
  type: FormInputType;
  isRequired?: boolean;
  name?: string;
};

export enum FormInputType {
  PLAINTEXT,
  EMAIL,
  MULTILINE,
}

const getFormInput = (type: FormInputType): typeof StyledFormInput =>
  ({
    [FormInputType.PLAINTEXT]: StyledFormInput,
    [FormInputType.EMAIL]: EmailFormInput,
    [FormInputType.MULTILINE]: MessageFormInput,
  }[type]);

const FormInput: FunctionComponent<Props> = ({
  children,
  type,
  isRequired = false,
  name,
}) => {
  const hoverEvent = useHover();
  const { setFocus } = useContext(FormInputFocusContext);
  const CustomFormInput = getFormInput(type);

  return (
    <CustomFormInput
      required={isRequired}
      name={name}
      onFocus={() => setFocus?.(true)}
      onBlur={() => setFocus?.(false)}
      {...hoverEvent}
      placeholder={children}
      as={type === FormInputType.MULTILINE ? 'textarea' : ''}
    />
  );
};

export default FormInput;
