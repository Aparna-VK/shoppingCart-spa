import React from 'react'
export default ({message,onClick}) => (
  <button class="button"  onClick={onClick}>
      {message}
  </button>
);


