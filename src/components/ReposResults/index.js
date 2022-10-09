// == Import
// Sementic UI React
import { Card } from 'semantic-ui-react';

// npm
import PropTypesLib from 'prop-types';

// == Composant
function ReposResults({ repos }) {
  return (
    <Card.Group itemsPerRow={3} stackable>
      {
        repos.map((repo) => (
          <Card
            image={repo.owner.avatar_url}
            header={repo.name}
            meta={repo.owner.login}
            description={repo.description}
            key={repo.id}
          />
        ))
      }
    </Card.Group>
  );
}

ReposResults.propTypes = {
  repos: PropTypesLib.arrayOf(
    PropTypesLib.shape({
      owner: PropTypesLib.shape({
        login: PropTypesLib.any.isRequired,
        avatar_url: PropTypesLib.string.isRequired,
      }).isRequired,
      name: PropTypesLib.string.isRequired,
      description: PropTypesLib.string,
      id: PropTypesLib.number.isRequired,
    }).isRequired,
  ),
};

ReposResults.defaultProps = {
  repos: [{
    description: '',
  }],
};

// == Export
export default ReposResults;
