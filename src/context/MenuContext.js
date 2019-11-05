import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const MenuContext = React.createContext({
  isOpen: false
});

const MenuContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

MenuContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default MenuContextProvider;
