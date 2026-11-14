// Game catalogue shown on the hub. One entry per game, in hub order.
// status: 'soon' shows the card stamped "Coming soon" and not clickable;
// 'live' links to `path` (relative, e.g. 'games/<id>/').
window.ECO_GAMES = [
  {
    id: 'soon-1',
    status: 'soon',
    icon: '📈',
    name: { es: 'Próximamente', ca: 'Aviat', en: 'Coming soon' },
    tagline: {
      es: 'Duro está acuñando el primer juego. Vuelve pronto.',
      ca: 'En Duro està encunyant el primer joc. Torna aviat.',
      en: 'Duro is minting the first game. Check back soon.',
    },
  },
];
