// == Import npm
import { Message } from 'semantic-ui-react';

// == Composant
function FAQ() {
  return (
    <div className="faq">
      <Message>
        <h1>FAQ</h1>
        <Message.Header>A quoi ça sert ?</Message.Header>
        <p>
          Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.
        </p>
        <Message.Header>Comment faire une recherche ?</Message.Header>
        <p>
          Sur la page recherche, complétez le champ de recherche et valider la recherche.
        </p>
        <Message.Header>Puis-je chercher n'importe quel terme ?</Message.Header>
        <p>
          Oui, c'est fou.
        </p>
      </Message>
    </div>
  );
}

// Export
export default FAQ;
