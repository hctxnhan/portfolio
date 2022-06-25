import { StyledContactForm } from './contact-form.style';
import FormInput, { FormInputType } from '../form-input/form-input';
import {
  ContactFormButton,
  ContactFormEmail,
  ContactFormMessage,
  ContactFormName,
  ContactFormSubject,
} from './contact-form.style';
import Button from '../button/button';
function ContactForm() {
  return (
    <StyledContactForm
      action='https://formsubmit.co/hctxnhan@gmail.com'
      method='POST'
    >
      <ContactFormName>
        <FormInput name='name' isRequired={true} type={FormInputType.PLAINTEXT}>
          Name
        </FormInput>
      </ContactFormName>
      <ContactFormEmail>
        <FormInput name='email' isRequired={true} type={FormInputType.EMAIL}>
          Email
        </FormInput>
      </ContactFormEmail>
      <ContactFormSubject>
        <FormInput
          name='_subject'
          isRequired={true}
          type={FormInputType.PLAINTEXT}
        >
          Subject
        </FormInput>
      </ContactFormSubject>
      <ContactFormMessage>
        <FormInput
          name='message'
          isRequired={true}
          type={FormInputType.MULTILINE}
        >
          Message
        </FormInput>
      </ContactFormMessage>
      <ContactFormButton>
        <Button>Send</Button>
      </ContactFormButton>
    </StyledContactForm>
  );
}

export default ContactForm;
