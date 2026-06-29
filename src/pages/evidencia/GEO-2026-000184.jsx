import React, {useState} from 'react';
import PrimaryButton from '../../components/ui/PrimaryButton';
import StatusBadge from '../../components/ui/StatusBadge';

export default function EvidencePortalPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="evidence-page">
      <div className="mobile-shell">
        <header className="mobile-header">
          <div className="header-meta" style={{color: '#e8f5ee'}}>
            Portal de evidência territorial
          </div>
          <h1 className="section-title" style={{margin: '8px 0 0', color: '#fff'}}>
            GEO-2026-000184
          </h1>
        </header>
        <main className="mobile-body">
          <StatusBadge tone="status-blue">Técnico autorizado</StatusBadge>
          <p className="section-copy">
            Canal destinado a técnico autorizado para complementar evidência territorial vinculada ao protocolo.
          </p>
          <div className="notice">
            Instrução: registrar foto georreferenciada próxima aos pontos P1, P2 ou P3 e descrever
            a condição observada do curso d’água.
          </div>
          <div className="mini-map">Mapa local simplificado</div>
          <PrimaryButton variant="secondary">Adicionar foto georreferenciada</PrimaryButton>
          <PrimaryButton variant="secondary">Usar localização atual</PrimaryButton>
          <div className="form-field">
            <label>Comentário técnico</label>
            <textarea placeholder="Descreva a evidência observada em campo." />
          </div>
          <PrimaryButton onClick={() => setSent(true)}>Enviar evidência</PrimaryButton>
          {sent ? <div className="notice">Evidência simulada vinculada ao protocolo.</div> : null}
          <PrimaryButton variant="ghost" to="/sicar/analises/CAR-BA-000184/cartografia/acionamento">
            Voltar ao acionamento
          </PrimaryButton>
        </main>
      </div>
    </div>
  );
}
