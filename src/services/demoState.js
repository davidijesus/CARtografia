const defaultState = {
  cartografiaStarted: false,
  dossierGenerated: false,
  kitGenerated: false,
  protocolGenerated: false,
  returnedToSicar: false,
};

const storageKey = 'cartografia-demo-state';

function canUseStorage() {
  return typeof window !== 'undefined' && window.localStorage;
}

export function getDemoState() {
  if (!canUseStorage()) {
    return {...defaultState};
  }

  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? {...defaultState, ...JSON.parse(raw)} : {...defaultState};
  } catch {
    return {...defaultState};
  }
}

export function setDemoState(patch) {
  const nextState = {...getDemoState(), ...patch};
  if (canUseStorage()) {
    window.localStorage.setItem(storageKey, JSON.stringify(nextState));
  }
  return nextState;
}

export function resetDemoState() {
  if (canUseStorage()) {
    window.localStorage.setItem(storageKey, JSON.stringify(defaultState));
  }
  return {...defaultState};
}
