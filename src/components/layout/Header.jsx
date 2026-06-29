import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PrimaryButton from '../ui/PrimaryButton';

export default function Header({user, onReset}) {
  const govLogo = useBaseUrl('/img/car/govbr-logo.svg');
  const carIcon = useBaseUrl('/img/car/car-isotipo.svg');

  return (
    <header className="shell-header">
      <div className="gov-area">
        <img src={govLogo} alt="gov.br" className="gov-logo" />
        <div className="car-divider" />
        <div className="login-brand">
          <img src={carIcon} alt="" className="car-header-icon" />
          <div>
            <div>CAR / SiCAR-RER</div>
            <div className="header-meta">Ambiente de demonstração integrado</div>
          </div>
        </div>
      </div>
      <div className="header-tools">
        <div className="language-pill">Português (Brasil)</div>
        <div className="profile-chip">
          <div className="avatar" aria-label="Usuária Luana Almeida">
            LA
          </div>
          <div className="profile-copy">
            <div className="header-name">{user.name}</div>
            <div className="header-meta">{user.role}</div>
            <div className="header-meta">{user.agency}</div>
          </div>
        </div>
        <PrimaryButton variant="link" to="/login" onClick={onReset}>
          Sair
        </PrimaryButton>
      </div>
    </header>
  );
}
