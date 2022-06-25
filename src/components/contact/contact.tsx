import {
  StyledContact,
  ContactOverlay,
  ContactFormContainer,
} from './contact.style';
import Section from '../section/section';
import ContactForm from '../contact-form/contact-form';
import FormInputFocusContext from '../../context/input';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
function Contact() {
  const [isFocus, setFocus] = useState(false);
  return (
    <StyledContact id='contact'>
      <Section
        heading='CONTACT'
        subheading={`Let's talk about you a little bit`}
      >
        <ContactFormContainer>
          <FormInputFocusContext.Provider value={{ isFocus, setFocus }}>
            <ContactForm />
          </FormInputFocusContext.Provider>
        </ContactFormContainer>
        <AnimatePresence>
          {isFocus && (
            <ContactOverlay
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.9,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
      </Section>
    </StyledContact>
  );
}

export default Contact;
