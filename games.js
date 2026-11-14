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
];
