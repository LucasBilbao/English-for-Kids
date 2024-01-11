if (!localStorage.getItem('inPlayMode')) {
  localStorage.setItem('inPlayMode', 'false');
}

export function isInPlayMode() {
  return localStorage.getItem('inPlayMode') === 'true';
}
