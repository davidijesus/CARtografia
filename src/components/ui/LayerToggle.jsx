import React from 'react';

export default function LayerToggle({label, checked, onChange}) {
  return (
    <label className="layer-toggle">
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span>{label}</span>
    </label>
  );
}
