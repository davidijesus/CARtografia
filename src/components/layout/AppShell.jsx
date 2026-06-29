import React from 'react';
import {getCurrentUser, resetSicarDemo} from '../../services/sicarMockService';
import Breadcrumb from './Breadcrumb';
import Header from './Header';
import Sidebar from './Sidebar';

export default function AppShell({activePath, breadcrumb, title, subtitle, children, actions}) {
  const user = getCurrentUser();

  return (
    <div className="mvp-root">
      <div className="shell">
        <Header user={user} onReset={resetSicarDemo} />
        <Sidebar activePath={activePath} />
        <main className="shell-main">
          <div className="backbar">
            <div className="backbar-main">
              <span className="backbar-arrow">‹</span>
              <h1 className="backbar-title">{title}</h1>
            </div>
            {actions ? <div className="button-row">{actions}</div> : null}
          </div>
          <Breadcrumb items={breadcrumb} />
          {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
          {children}
        </main>
      </div>
    </div>
  );
}
