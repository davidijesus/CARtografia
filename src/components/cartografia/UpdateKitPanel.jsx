import React from 'react';
import {generateUpdateKit, getUpdateKit} from '../../services/cartografiaMockService';
import PrimaryButton from '../ui/PrimaryButton';
import SectionCard from '../ui/SectionCard';
import StatusBadge from '../ui/StatusBadge';

export default function UpdateKitPanel() {
  const kit = getUpdateKit();

  return (
    <div className="grid two">
      <SectionCard
        title="Kit de Atualização Cartográfica"
        copy="Demanda técnica pronta para acionar geoprocessamento, campo ou contratação."
        actions={
          <PrimaryButton
            to="/sicar/analises/CAR-BA-000184/cartografia/acionamento"
            onClick={generateUpdateKit}
          >
            Abrir acionamento institucional
          </PrimaryButton>
        }
      >
        <div className="notice warning">
          O Kit não substitui o rito público. Ele reduz o tempo técnico anterior ao acionamento,
          organizando escopo, área, evidências e critérios de aceite.
        </div>
      </SectionCard>

      <SectionCard title={kit.title}>
        <div className="detail-list">
          <div className="detail-item">
            <div className="detail-label">Diagnóstico</div>
            <div className="detail-value">{kit.diagnosis}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Escopo técnico</div>
            <div className="detail-value">{kit.scope}</div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Pontos de campo">
        <div className="criteria-grid">
          {kit.fieldPoints.map((point) => (
            <div className="criterion" key={point}>
              <strong>{point}</strong>
              <StatusBadge tone="status-yellow">Validação</StatusBadge>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Plano de evidência">
        <div className="button-row">
          {kit.evidencePlan.map((item) => (
            <StatusBadge key={item} tone="status-blue">
              {item}
            </StatusBadge>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Minuta de termo de referência">
        <p className="section-copy">{kit.tor.object}</p>
        <h3 className="section-title">Entregáveis</h3>
        <div className="button-row">
          {kit.tor.deliverables.map((item) => (
            <StatusBadge key={item} tone="status-gray">
              {item}
            </StatusBadge>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Critérios de aceite e QA">
        <div className="criteria-grid">
          {kit.tor.acceptanceCriteria.map((item) => (
            <div className="criterion" key={item}>
              <strong>{item}</strong>
              <span className="metric-note">Obrigatório para aceite técnico</span>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
