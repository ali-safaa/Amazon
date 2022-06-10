import React from 'react';
import Header from './Header';
function Layouts({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layouts;
