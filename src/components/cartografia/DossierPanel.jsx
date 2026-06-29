import React, {useState} from 'react';
import {generateDossier, generateUpdateKit, getDossier} from '../../services/cartografiaMockService';
import PrimaryButton from '../ui/PrimaryButton';
import SectionCard from '../ui/SectionCard';
import StatusBadge from '../ui/StatusBadge';

export default function DossierPanel() {
  const dossier = getDossier();
  const [draft, setDraft] = useState(dossier.editableDraft);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(draft);
    }
    setCopied(true);
  }

  function handleGenerateKit() {
    generateDossier();
    generateUpdateKit();
  }

  return (
    <div className="grid two">
      <SectionCard title="Dossiê CARtográfico" copy="Artefato técnico revisável para decisão humana.">
        <div className="detail-list">
          <div className="detail-item">
            <div className="detail-label">ID do dossiê</div>
            <div className="detail-value">{dossier.id}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Caso relacionado</div>
            <div className="detail-value">{dossier.caseId}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Tipo de divergência</div>
            <div className="detail-value">{dossier.divergenceType}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Área afetada</div>
            <div className="detail-value">{dossier.affectedAreaHa} ha</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Imóveis impactados</div>
            <div className="detail-value">{dossier.impactedProperties}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Resultado</div>
            <div className="detail-value">
              <StatusBadge tone="status-red">{dossier.sufficiencyResult}</StatusBadge>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Minuta técnica editável">
        <textarea className="textarea" value={draft} onChange={(event) => setDraft(event.target.value)} />
        <div className="button-row" style={{marginTop: 12}}>
          <PrimaryButton variant="secondary" onClick={handleCopy}>
            Copiar minuta
          </PrimaryButton>
          <PrimaryButton to="/sicar/analises/CAR-BA-000184/cartografia/kit" onClick={handleGenerateKit}>
            Gerar Kit de Atualização
          </PrimaryButton>
          <PrimaryButton variant="ghost" to="/sicar/analises/CAR-BA-000184">
            Voltar ao caso
          </PrimaryButton>
        </div>
        {copied ? <p className="metric-note">Minuta copiada para a área de transferência.</p> : null}
      </SectionCard>

      <SectionCard title="Fontes comparadas">
        <div className="button-row">
          {dossier.comparedSources.map((source) => (
            <StatusBadge key={source} tone="status-blue">
              {source}
            </StatusBadge>
          ))}
        </div>
      </SectionCard>
      <SectionCard title="Recomendação">
        <p className="section-copy">{dossier.recommendation}</p>
        <div className="notice">
          Evidência suficiente gera Dossiê. Evidência insuficiente gera Kit de Atualização.
        </div>
      </SectionCard>
    </div>
  );
}
