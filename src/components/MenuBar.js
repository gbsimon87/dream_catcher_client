import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import { Link } from "@reach/router";

const MenuBar = ({ activeItem, setActiveItem }) => {
  const handleItemClick = ({ name }) => {
    setActiveItem(name);
  };

  return (
    <Menu>
      <Menu.Item
        name="dreams"
        as={Link}
        to="/dreams"
        active={activeItem === "dreams"}
        onClick={handleItemClick}
      >
        Dreams
      </Menu.Item>

      <Menu.Item
        name="createDream"
        as={Link}
        to="/dreams/create"
        active={activeItem === "createDream"}
        onClick={handleItemClick}
      >
        New Dream
      </Menu.Item>
    </Menu>
  );
};

MenuBar.propTypes = {
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func,
};

MenuBar.defaultProps = {
  activeItem: "123",
  setActiveItem: () => {},
};

export default MenuBar;
