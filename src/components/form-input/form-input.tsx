import {
  StyledFormInput,
  EmailFormInput,
  MessageFormInput,
} from './form-input.style';
import { FunctionComponent } from 'react';
import withHover from '../withHover/withHover';
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
  switch (type) {
    case FormInputType.EMAIL:
      return <EmailFormInput type='email' placeholder={children} />;
    case FormInputType.MULTILINE:
      return <MessageFormInput placeholder={children} />;
    default:
      return <StyledFormInput placeholder={children} />;
  }
};

export default withHover(FormInput);
