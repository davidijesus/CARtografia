import {dossier, protocol, sufficiencyIndex, updateKit} from '../data/mockCartografia';
import {setDemoState} from './demoState';

export function calculateSufficiency() {
  return sufficiencyIndex;
}

export function generateDossier() {
  setDemoState({dossierGenerated: true});
  return dossier;
}

export function generateUpdateKit() {
  setDemoState({dossierGenerated: true, kitGenerated: true});
  return updateKit;
}

export function openInstitutionalProtocol() {
  setDemoState({dossierGenerated: true, kitGenerated: true, protocolGenerated: true});
  return protocol;
}

export function getDossier() {
  return dossier;
}

export function getUpdateKit() {
  return updateKit;
}

export function getProtocol() {
  return protocol;
}
