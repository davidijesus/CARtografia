import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import AppShell from '../../../../../components/layout/AppShell';
import PrimaryButton from '../../../../../components/ui/PrimaryButton';
import SectionCard from '../../../../../components/ui/SectionCard';
import StatusBadge from '../../../../../components/ui/StatusBadge';

export default function CartografiaModulePage() {
  const cartografiaLogo = useBaseUrl('/img/cartografia-logo.png');
  const steps = [
    ['Suficiência', 'Avaliar se a base permite decisão segura.'],
    ['Dossiê', 'Organizar evidência revisável para Luana.'],
    ['Kit de Atualização', 'Preparar demanda quando a evidência é insuficiente.'],
    ['Acionamento', 'Enviar ao setor certo com protocolo e SLA.'],
    ['Retorno ao SiCAR', 'Voltar com anexos e próxima ação.'],
  ];

  return (
    <AppShell
      activePath="/sicar/analises/CAR-BA-000184/cartografia"
      breadcrumb={['SiCAR', 'Análise semiautomática', 'CAR-BA-000184', 'CARtografia']}
      title="Módulo CARtografia"
      subtitle="Camada de suficiência cartográfica acoplada ao SiCAR."
      actions={<StatusBadge tone="status-blue">Módulo acoplado ao SiCAR</StatusBadge>}
    >
      <div className="grid">
        <section className="cartografia-brand-panel br-card">
          <img src={cartografiaLogo} alt="Logo CARtografia" />
          <div>
            <h2 className="section-title">Suficiência cartográfica no fluxo semiautomático</h2>
            <p className="section-copy">
              O mock visual continua sendo SiCAR; a marca CARtografia aparece apenas como módulo
              acoplado no ponto em que a análise precisa de evidência cartográfica.
            </p>
          </div>
        </section>
        <SectionCard
          title="Fluxo da CARtografia"
          copy="Evidência suficiente gera Dossiê. Evidência insuficiente gera Kit de Atualização."
          actions={<PrimaryButton to="/sicar/analises/CAR-BA-000184/cartografia/suficiencia">Calcular suficiência</PrimaryButton>}
        >
          <div className="flow-strip">
            {steps.map(([title, copy], index) => (
              <div className="flow-step" key={title}>
                <div className="flow-number">{index + 1}</div>
                <strong>{title}</strong>
                <span className="metric-note">{copy}</span>
              </div>
            ))}
          </div>
        </SectionCard>
        <div className="notice">
          A CARtografia entra onde a automação do SiCAR para: avalia a suficiência das bases
          geoespaciais, gera dossiês técnicos para decisão e prepara kits de atualização quando a
          evidência não é suficiente.
        </div>
      </div>
    </AppShell>
  );
}
