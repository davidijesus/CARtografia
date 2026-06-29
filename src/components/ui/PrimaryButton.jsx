import React from 'react';
import Link from '@docusaurus/Link';

export default function PrimaryButton({children, to, onClick, variant = 'primary', type = 'button'}) {
  const className = `button br-button ${variant}`;
  if (to) {
    return (
      <Link className={className} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
