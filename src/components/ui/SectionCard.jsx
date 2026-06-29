import React from 'react';

export default function SectionCard({title, copy, children, actions}) {
  return (
    <section className="section-card br-card">
      {(title || copy || actions) && (
        <div className="card-heading">
          <div>
            {title ? <h2 className="section-title">{title}</h2> : null}
            {copy ? <p className="section-copy">{copy}</p> : null}
          </div>
          {actions ? <div className="button-row">{actions}</div> : null}
        </div>
      )}
      {children}
    </section>
  );
}
