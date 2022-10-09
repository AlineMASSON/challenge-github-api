// == Import
// Sementic UI React
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// == Composant
function NavBar() {
  return (
    <Menu>
      <Menu.Item
        name="recherche"
        as={NavLink}
        to="/"
      >
        Recherche
      </Menu.Item>
      <Menu.Item
        name="faq"
        as={NavLink}
        to="/faq"
      >
        FAQ
      </Menu.Item>
    </Menu>
  );
}

// == Export
export default NavBar;
