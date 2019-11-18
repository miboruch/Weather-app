import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const InformationContext = React.createContext({
  isOpen: false
});

const InformationContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleInformation = () => {
    setOpen(!isOpen);
  };

  const setInformationOpen = value => {
    setOpen(value);
  };

  return (
    <InformationContext.Provider
      value={{
        isOpen,
        toggleInformation,
        setInformationOpen
      }}
    >
      {children}
    </InformationContext.Provider>
  );
};

InformationContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default InformationContextProvider;
