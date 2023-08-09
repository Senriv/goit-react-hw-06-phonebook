import Form from './Form/Form';
import ContactList from './Contact-list/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { SectionContainer } from './Phonebook.styled';

function Phonebook() {
  return (
    <SectionContainer>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter></Filter>
        <ContactList></ContactList>
      </Section>
    </SectionContainer>
  );
}

export default Phonebook;
