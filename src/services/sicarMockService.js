import {currentUser, dashboardMetrics, semiAutomaticCases} from '../data/mockSicar';
import {dossier, protocol, updateKit} from '../data/mockCartografia';
import {getDemoState, resetDemoState, setDemoState} from './demoState';

export function getCurrentUser() {
  return currentUser;
}

export function getDashboardMetrics() {
  return dashboardMetrics;
}

export function getSemiAutomaticCases() {
  return semiAutomaticCases;
}

export function getCaseById(caseId) {
  const state = getDemoState();
  const foundCase = semiAutomaticCases.find((item) => item.id === caseId) || semiAutomaticCases[0];

  if (foundCase.id !== 'CAR-BA-000184' || !state.returnedToSicar) {
    return foundCase;
  }

  return {
    ...foundCase,
    status: 'Aguardando validação cartográfica',
    sufficiency: 'Insuficiente para decisão final',
    dossierId: dossier.id,
    kitId: updateKit.id,
    protocolId: protocol.id,
    nextAction: 'Aguardar aceite do Núcleo de Geoprocessamento',
  };
}

export function startCartografiaAssessment() {
  return setDemoState({cartografiaStarted: true});
}

export function returnCaseToSicar() {
  return setDemoState({returnedToSicar: true});
}

export function resetSicarDemo() {
  return resetDemoState();
}
