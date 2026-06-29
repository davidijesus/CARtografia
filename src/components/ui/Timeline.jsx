import React from 'react';

export default function Timeline({items}) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={item}>
          <strong>{item}</strong>
        </div>
      ))}
    </div>
  );
}
