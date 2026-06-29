import React from 'react';
import AppShell from '../../../../../components/layout/AppShell';
import SufficiencyCriteriaTable from '../../../../../components/cartografia/SufficiencyCriteriaTable';
import SufficiencyScore from '../../../../../components/cartografia/SufficiencyScore';
import CartografiaMap from '../../../../../components/map/CartografiaMap';
import PrimaryButton from '../../../../../components/ui/PrimaryButton';
import SectionCard from '../../../../../components/ui/SectionCard';
import StatusBadge from '../../../../../components/ui/StatusBadge';
import {calculateSufficiency, generateDossier, generateUpdateKit} from '../../../../../services/cartografiaMockService';

export default function SufficiencyPage() {
  const index = calculateSufficiency();
  function scrollToMap() {
    if (typeof document !== 'undefined') {
      document.getElementById('mapa-comparativo')?.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <AppShell
      activePath="/sicar/analises/CAR-BA-000184/cartografia/suficiencia"
      breadcrumb={['SiCAR', 'CARtografia', 'Índice de Suficiência']}
      title="Índice de Suficiência Cartográfica"
      subtitle="A plataforma calcula se há evidência suficiente para decisão humana segura."
      actions={
        <>
          <PrimaryButton variant="secondary" onClick={scrollToMap}>
            Ver camadas
          </PrimaryButton>
          <PrimaryButton to="/sicar/analises/CAR-BA-000184/cartografia/dossie" onClick={generateDossier}>
            Gerar Dossiê
          </PrimaryButton>
          <PrimaryButton to="/sicar/analises/CAR-BA-000184/cartografia/kit" onClick={generateUpdateKit}>
            Gerar Kit de Atualização
          </PrimaryButton>
        </>
      }
    >
      <div className="grid">
        <div className="sufficiency-hero">
          <SufficiencyScore index={index} />
          <SectionCard
            title="Camadas avaliadas"
            copy="A plataforma compara a base oficial com evidências recentes antes de recomendar a próxima ação."
          >
            <div className="layer-evaluation-grid">
              {index.evaluatedLayers.map((layer) => (
                <article className="layer-evaluation" key={layer.name}>
                  <div className="layer-evaluation-header">
                    <strong>{layer.name}</strong>
                    <StatusBadge tone={layer.tone}>{layer.status}</StatusBadge>
                  </div>
                  <p className="section-copy">{layer.detail}</p>
                </article>
              ))}
            </div>
          </SectionCard>
        </div>
        <SectionCard title="Critérios avaliados">
          <SufficiencyCriteriaTable criteria={index.criteria} />
        </SectionCard>
        <SectionCard title="Mapa comparativo" copy="Camadas fictícias para demonstrar divergência entre hidrografia 2024 e evidência 2026.">
          <div id="mapa-comparativo">
            <CartografiaMap />
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
