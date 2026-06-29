import React from 'react';

export default function Breadcrumb({items}) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </nav>
  );
}
