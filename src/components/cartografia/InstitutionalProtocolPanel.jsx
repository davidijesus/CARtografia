import React, {useState} from 'react';
import {getProtocol, openInstitutionalProtocol} from '../../services/cartografiaMockService';
import {returnCaseToSicar} from '../../services/sicarMockService';
import PrimaryButton from '../ui/PrimaryButton';
import SectionCard from '../ui/SectionCard';
import StatusBadge from '../ui/StatusBadge';
import Timeline from '../ui/Timeline';

export default function InstitutionalProtocolPanel() {
  const protocol = getProtocol();
  const [generated, setGenerated] = useState(false);

  function handleGenerateProtocol() {
    openInstitutionalProtocol();
    setGenerated(true);
  }

  function handleReturn() {
    returnCaseToSicar();
  }

  return (
    <div className="grid two">
      <SectionCard title="Canal de Acionamento Institucional" copy="Formulário pré-preenchido a partir do Kit.">
        <div className="form-grid">
          <div className="form-field">
            <label>Destinatário</label>
            <input value={protocol.recipient} readOnly />
          </div>
          <div className="form-field">
            <label>Tipo</label>
            <input value={protocol.type} readOnly />
          </div>
          <div className="form-field">
            <label>Prioridade</label>
            <input value={protocol.priority} readOnly />
          </div>
          <div className="form-field">
            <label>SLA sugerido</label>
            <input value={protocol.suggestedSla} readOnly />
          </div>
          <div className="form-field">
            <label>Dossiê anexado</label>
            <input value={protocol.attachments[0]} readOnly />
          </div>
          <div className="form-field">
            <label>Kit anexado</label>
            <input value={protocol.attachments[1]} readOnly />
          </div>
        </div>
        <div className="form-field" style={{marginTop: 12}}>
          <label>Observação</label>
          <textarea
            readOnly
            value="Solicita-se validação cartográfica da geometria de hidrografia vinculada ao caso CAR-BA-000184."
          />
        </div>
        <div className="button-row" style={{marginTop: 12}}>
          <PrimaryButton onClick={handleGenerateProtocol}>Gerar protocolo</PrimaryButton>
          <PrimaryButton variant="secondary" to="/evidencia/GEO-2026-000184">
            Ver portal de evidência
          </PrimaryButton>
          <PrimaryButton variant="ghost" to="/sicar/analises/CAR-BA-000184" onClick={handleReturn}>
            Retornar ao SiCAR
          </PrimaryButton>
        </div>
      </SectionCard>

      <SectionCard title="Protocolo institucional">
        {generated ? (
          <>
            <div className="detail-list" style={{marginBottom: 14}}>
              <div className="detail-item">
                <div className="detail-label">Protocolo</div>
                <div className="detail-value">{protocol.id}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Status</div>
                <div className="detail-value">
                  <StatusBadge>{protocol.status}</StatusBadge>
                </div>
              </div>
            </div>
            <Timeline items={protocol.timeline} />
          </>
        ) : (
          <div className="notice">
            Ao gerar, o protocolo GEO-2026-000184 será criado com dossiê, kit, SLA e histórico.
          </div>
        )}
      </SectionCard>
    </div>
  );
}
