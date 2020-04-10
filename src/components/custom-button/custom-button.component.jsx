import React from 'react';

import './custom-buttom.styles.scss';

// Add a isGoogleSignIn props for styling sign with goggle button.
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;