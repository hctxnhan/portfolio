import { StyledContact, ContactFormContainer } from './contact.style';
import Section from '../section/section';
import ContactForm from '../contact-form/contact-form';
function Contact() {
  return (
    <StyledContact>
      <Section
        heading='CONTACT'
        subheading={`Let's talk about you a little bit`}
      >
        <ContactFormContainer>
          <ContactForm />
        </ContactFormContainer>
      </Section>
    </StyledContact>
  );
}

export default Contact;
