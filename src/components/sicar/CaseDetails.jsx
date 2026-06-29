import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {getCaseById, startCartografiaAssessment} from '../../services/sicarMockService';
import PrimaryButton from '../ui/PrimaryButton';
import SectionCard from '../ui/SectionCard';
import StatusBadge from '../ui/StatusBadge';

export default function CaseDetails({caseId = 'CAR-BA-000184'}) {
  const cartografiaIcon = useBaseUrl('/img/cartografia-isotipo.png');
  const item = getCaseById(caseId);
  const returned = item.status === 'Aguardando validação cartográfica';

  return (
    <div className="grid two">
      <SectionCard
        title={item.id}
        copy="Detalhe do caso no fluxo oficial do SiCAR demonstrativo."
        actions={
          <PrimaryButton
            to="/sicar/analises/CAR-BA-000184/cartografia"
            onClick={startCartografiaAssessment}
          >
            <img src={cartografiaIcon} alt="" className="button-icon" />
            Avaliar com CARtografia
          </PrimaryButton>
        }
      >
        <div className="button-row" style={{marginBottom: 14}}>
          <StatusBadge>{item.status}</StatusBadge>
          <StatusBadge tone="status-red">Baixa suficiência</StatusBadge>
        </div>
        <div className="detail-list">
          <div className="detail-item">
            <div className="detail-label">Motivo</div>
            <div className="detail-value">{item.reason}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Camada afetada</div>
            <div className="detail-value">{item.affectedLayer}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Base de referência</div>
            <div className="detail-value">{item.referenceBaseDate}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Evidência recente</div>
            <div className="detail-value">{item.recentEvidenceDate}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Tempo manual estimado</div>
            <div className="detail-value">{item.estimatedManualTime}</div>
          </div>
          <div className="detail-item">
            <div className="detail-label">Ação padrão</div>
            <div className="detail-value">{item.standardAction}</div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title={returned ? 'Retorno ao SiCAR' : 'Gargalo sem apoio cartográfico'}>
        {returned ? (
          <div className="detail-list">
            <div className="detail-item">
              <div className="detail-label">Suficiência</div>
              <div className="detail-value">{item.sufficiency}</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Dossiê anexado</div>
              <div className="detail-value">{item.dossierId}</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Kit anexado</div>
              <div className="detail-value">{item.kitId}</div>
            </div>
            <div className="detail-item">
              <div className="detail-label">Protocolo externo</div>
              <div className="detail-value">{item.protocolId}</div>
            </div>
            <div className="detail-item" style={{gridColumn: '1 / -1'}}>
              <div className="detail-label">Próxima ação</div>
              <div className="detail-value">{item.nextAction}</div>
            </div>
          </div>
        ) : (
          <>
            <p className="section-copy">
              Sem apoio cartográfico, a analista precisaria consultar múltiplas bases externas para
              formar convicção técnica.
            </p>
            <div className="notice warning">
              A decisão continua humana, técnica e institucional. A CARtografia apenas organiza
              evidências e prepara o próximo acionamento.
            </div>
          </>
        )}
      </SectionCard>
    </div>
  );
}
