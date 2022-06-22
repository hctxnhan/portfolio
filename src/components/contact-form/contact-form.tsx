import { StyledContactForm } from './contact-form.style';
import FormInput, { FormInputType } from '../form-input/form-input';
import {
  ContactFormButton,
  ContactFormEmail,
  ContactFormMessage,
  ContactFormName,
} from './contact-form.style';
import Button from '../button/button';
function ContactForm() {
  return (
    <StyledContactForm>
      <ContactFormName>
        <FormInput type={FormInputType.PLAINTEXT}>Name</FormInput>
      </ContactFormName>
      <ContactFormEmail>
        <FormInput type={FormInputType.EMAIL}>Email</FormInput>
      </ContactFormEmail>
      <ContactFormMessage>
        <FormInput type={FormInputType.MULTILINE}>Message</FormInput>
      </ContactFormMessage>
      <ContactFormButton>
        <Button>Send</Button>
      </ContactFormButton>
    </StyledContactForm>
  );
}

export default ContactForm;
