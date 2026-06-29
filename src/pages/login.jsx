import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PrimaryButton from '../components/ui/PrimaryButton';
import {resetSicarDemo} from '../services/sicarMockService';

export default function LoginPage() {
  const govLogo = useBaseUrl('/img/car/govbr-logo.svg');
  const carLogo = useBaseUrl('/img/car/car-logo.svg');
  const cartografiaIcon = useBaseUrl('/img/cartografia-isotipo.png');

  return (
    <div className="mvp-root login-page">
      <header className="car-login-header">
        <img src={govLogo} alt="gov.br" className="car-login-gov-logo" />
        <button className="car-language-select" type="button" aria-label="Selecionar idioma">
          <span className="car-globe" aria-hidden="true" />
          <span>Português (Brasil)</span>
          <span className="car-chevron" aria-hidden="true" />
        </button>
      </header>

      <main className="car-login-main">
        <section className="car-login-left">
          <div className="car-brand-lockup">
            <img src={carLogo} alt="CAR Cadastro Ambiental Rural" />
          </div>
          <div className="car-cartografia-chip">
            <img src={cartografiaIcon} alt="" />
            <span>Módulo CARtografia acoplado ao SiCAR</span>
          </div>
        </section>

        <section className="car-login-right">
          <div className="car-login-form">
            <h1>Portal do Usuário</h1>
            <label className="car-input">
              <span>Email</span>
              <input aria-label="Email" type="email" />
            </label>
            <label className="car-input">
              <span>Senha</span>
              <input aria-label="Senha" type="password" />
              <span className="car-eye" aria-hidden="true" />
            </label>
            <PrimaryButton to="/sicar" onClick={resetSicarDemo} variant="car-login">
              Entrar
            </PrimaryButton>
            <PrimaryButton to="/sicar" onClick={resetSicarDemo} variant="car-gov">
              <span className="car-person" aria-hidden="true" />
              Entrar com gov.br
            </PrimaryButton>
            <p className="car-register">
              Não tem conta? <a>Cadastre-se</a>
            </p>
            <p className="car-demo-note">Acesso demonstrativo: Luana Almeida, Analista Ambiental Estadual</p>
          </div>
        </section>
      </main>
    </div>
  );
}