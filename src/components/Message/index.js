// == Import
// Sementic UI React
import { Message as MsgSemanticUi } from 'semantic-ui-react';

// npm
import PropTypesLib from 'prop-types';

// == Composant
function Message({ count }) {
  return (
    <MsgSemanticUi visible>
      {count === 0 ? 'Aucun résultat trouvé' : `La recherche à donné ${count} résultat${count > 1 ? 's' : ''}`}
    </MsgSemanticUi>
  );
}

Message.propTypes = {
  count: PropTypesLib.number.isRequired,
};

// == Export
export default Message;
