// Game catalogue shown on the hub. One entry per game, in hub order.
// status: 'soon' shows the card stamped "Coming soon" and not clickable;
// 'live' links to `path` (relative, e.g. 'games/<id>/').
window.ECO_GAMES = [
  {
    id: 'quiz',
    status: 'live',
    path: 'games/quiz/',
    icon: '💰',
    name: { es: '¿Te lo llevas?', ca: "T'ho emportes?", en: 'Cash Out?' },
    tagline: {
      es: '15 preguntas, el premio se dobla. ¿Te lo llevas o sigues?',
      ca: "15 preguntes, el premi es dobla. T'ho emportes o continues?",
      en: '15 questions, the prize doubles. Cash out or keep going?',
    },
  },
  {
    id: 'soon-1',
    status: 'soon',
    icon: '📈',
    name: { es: 'Próximamente', ca: 'Aviat', en: 'Coming soon' },
    tagline: {
      es: 'Duro ya está acuñando el siguiente juego.',
      ca: 'En Duro ja està encunyant el pròxim joc.',
      en: 'Duro is already minting the next game.',
    },
  },
];
