import React from 'react';

export default ({ text, href }) => (
  <a href={href}>
    <button type="button" className="btn">
      <span>
        {text}
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8" xmlSpace="preserve">
          <g>
            <line fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9" />
            <polyline fill="none" stroke="#FFFFFF" strokeWidth="3" strokeMiterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7   " />
          </g>
        </svg>
      </span>
    </button>
  </a>
);
