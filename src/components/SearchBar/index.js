// == Import
// npm
import PropTypesLib from 'prop-types';

// Sementic UI React
import { Segment, Form, Input } from 'semantic-ui-react';

// == Composant
function SearchBar({ value, setValue, loadRepos }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Segment>
      <Form onSubmit={() => loadRepos()}>
        <Input
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Search..."
          onChange={handleChange}
          value={value}
        />
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  value: PropTypesLib.string.isRequired,
  setValue: PropTypesLib.func.isRequired,
  loadRepos: PropTypesLib.func.isRequired,
};

// == Export
export default SearchBar;
