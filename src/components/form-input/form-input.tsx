import {
  StyledFormInput,
  EmailFormInput,
  MessageFormInput,
} from './form-input.style';
import { FunctionComponent } from 'react';
import useHover from '../withHover/withHover';
type Props = {
  children: string;
  type: FormInputType;
};

export enum FormInputType {
  PLAINTEXT,
  EMAIL,
  MULTILINE,
}

const FormInput: FunctionComponent<Props> = ({ children, type }) => {
  const hoverEvent = useHover();
  switch (type) {
    case FormInputType.EMAIL:
      return (
        <EmailFormInput {...hoverEvent} type='email' placeholder={children} />
      );
    case FormInputType.MULTILINE:
      return (
        <MessageFormInput
          {...hoverEvent}
          onClick={() => console.log()}
          placeholder={children}
        />
      );
    default:
      return <StyledFormInput {...hoverEvent} placeholder={children} />;
  }
};

export default FormInput;
