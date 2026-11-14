// Category B — Mercados y empresas. Sources: docs/curriculum.md (ECO-B, EEAE-C, EDMN-A…D).
window.ECO_QUESTIONS = (window.ECO_QUESTIONS || []).concat([
  // ───────────── Tier 1 (easy) ─────────────
  {
    id: 'b-01', cat: 'B', tier: 1, src: 'ECO-B',
    topic: { es: 'Oferta y demanda', ca: 'Oferta i demanda', en: 'Supply and demand' },
    q: {
      es: 'Si sube el precio de las entradas de cine y nada más cambia, ¿qué pasa con la cantidad demandada?',
      ca: "Si puja el preu de les entrades de cinema i res més no canvia, què passa amb la quantitat demandada?",
      en: 'If cinema ticket prices rise and nothing else changes, what happens to the quantity demanded?',
    },
    options: [
      { es: 'Disminuye', ca: 'Disminueix', en: 'It falls' },
      { es: 'Aumenta', ca: 'Augmenta', en: 'It rises' },
      { es: 'No cambia nunca', ca: 'No canvia mai', en: 'It never changes' },
      { es: 'Aumenta la oferta de cines', ca: "Augmenta l'oferta de cinemes", en: 'The supply of cinemas rises' },
    ],
    why: {
      es: 'Es la ley de la demanda: con lo demás constante, cuando sube el precio de un bien la gente compra menos cantidad.',
      ca: "És la llei de la demanda: amb la resta constant, quan puja el preu d'un bé la gent en compra menys quantitat.",
      en: 'This is the law of demand: other things equal, when the price of a good rises people buy less of it.',
    },
    hint: {
      es: 'Piensa en cómo reaccionas tú cuando algo que te gusta se encarece.',
      ca: "Pensa en com reacciones tu quan una cosa que t'agrada s'encareix.",
      en: 'Think about how you react when something you like gets more expensive.',
    },
  },
  {
    id: 'b-02', cat: 'B', tier: 1, src: 'ECO-B',
    topic: { es: 'Tipos de mercado', ca: 'Tipus de mercat', en: 'Types of market' },
    q: {
      es: '¿Cómo se llama un mercado en el que solo hay una empresa que vende el producto?',
      ca: "Com s'anomena un mercat en què només hi ha una empresa que ven el producte?",
      en: 'What do we call a market where only one firm sells the product?',
    },
    options: [
      { es: 'Monopolio', ca: 'Monopoli', en: 'Monopoly' },
      { es: 'Oligopolio', ca: 'Oligopoli', en: 'Oligopoly' },
      { es: 'Competencia perfecta', ca: 'Competència perfecta', en: 'Perfect competition' },
      { es: 'Competencia monopolística', ca: 'Competència monopolística', en: 'Monopolistic competition' },
    ],
    why: {
      es: 'En un monopolio hay un único vendedor sin sustitutos cercanos, así que tiene mucho poder para fijar el precio.',
      ca: "En un monopoli hi ha un únic venedor sense substituts propers, així que té molt de poder per fixar el preu.",
      en: 'A monopoly has a single seller with no close substitutes, so it has great power to set the price.',
    },
    hint: {
      es: 'Sin ningún competidor, ¿quién controla el precio?',
      ca: 'Sense cap competidor, qui controla el preu?',
      en: 'With no competitors at all, who controls the price?',
    },
  },
  {
    id: 'b-03', cat: 'B', tier: 1, src: 'ECO-B',
    topic: { es: 'Equilibrio de mercado', ca: 'Equilibri de mercat', en: 'Market equilibrium' },
    q: {
      es: '¿Qué ocurre en el precio de equilibrio de un mercado?',
      ca: "Què passa al preu d'equilibri d'un mercat?",
      en: 'What happens at the equilibrium price of a market?',
    },
    options: [
      { es: 'Lo ofrecido iguala a lo demandado', ca: 'La quantitat oferta iguala la demandada', en: 'Quantity supplied equals demanded' },
      { es: 'Las empresas no obtienen beneficio', ca: 'Les empreses no obtenen benefici', en: 'Firms make no profit' },
      { es: 'El precio lo fija el Gobierno', ca: 'El preu el fixa el Govern', en: 'The government sets the price' },
      { es: 'Sobra producto en las tiendas', ca: 'Sobra producte a les botigues', en: 'Shops are left with surplus stock' },
    ],
    why: {
      es: 'El equilibrio es el precio al que la cantidad que quieren vender los productores coincide con la que quieren comprar los consumidores.',
      ca: "L'equilibri és el preu al qual la quantitat que volen vendre els productors coincideix amb la que volen comprar els consumidors.",
      en: 'Equilibrium is the price at which the quantity producers want to sell matches the quantity consumers want to buy.',
    },
    hint: {
      es: 'Piensa en dónde se cruzan las curvas de oferta y de demanda.',
      ca: 'Pensa en on es creuen les corbes d\'oferta i de demanda.',
      en: 'Think about where the supply and demand curves cross.',
    },
  },
  {
    id: 'b-04', cat: 'B', tier: 1, src: 'ECO-B',
    topic: { es: 'Tipos de mercado', ca: 'Tipus de mercat', en: 'Types of market' },
    q: {
      es: 'Unas pocas grandes empresas dominan la telefonía móvil de un país. ¿Qué tipo de mercado es?',
      ca: "Unes poques empreses grans dominen la telefonia mòbil d'un país. Quin tipus de mercat és?",
      en: "A few large firms dominate a country's mobile phone services. What type of market is it?",
    },
    options: [
      { es: 'Oligopolio', ca: 'Oligopoli', en: 'Oligopoly' },
      { es: 'Monopolio', ca: 'Monopoli', en: 'Monopoly' },
      { es: 'Competencia perfecta', ca: 'Competència perfecta', en: 'Perfect competition' },
      { es: 'Competencia monopolística', ca: 'Competència monopolística', en: 'Monopolistic competition' },
    ],
    why: {
      es: 'Un oligopolio es un mercado con pocos vendedores grandes; cada uno tiene en cuenta lo que hacen los demás al fijar precios.',
      ca: "Un oligopoli és un mercat amb pocs venedors grans; cadascun té en compte el que fan els altres quan fixa preus.",
      en: 'An oligopoly is a market with a few large sellers; each one watches what the others do when setting prices.',
    },
    hint: {
      es: 'Ni uno solo ni miles: cuenta cuántos vendedores hay.',
      ca: 'Ni un de sol ni milers: compta quants venedors hi ha.',
      en: 'Not one, not thousands: count how many sellers there are.',
    },
  },
  {
    id: 'b-05', cat: 'B', tier: 1, src: 'EDMN-A',
    topic: { es: 'Formas jurídicas', ca: 'Formes jurídiques', en: 'Legal forms' },
    q: {
      es: 'Laia abre sola una peluquería a su nombre, sin crear ninguna sociedad. ¿Qué es Laia?',
      ca: 'La Laia obre tota sola una perruqueria a nom seu, sense crear cap societat. Què és la Laia?',
      en: 'Laia opens a hair salon on her own, in her own name, without setting up a company. What is she?',
    },
    options: [
      { es: 'Autónoma', ca: 'Autònoma', en: 'A self-employed sole trader' },
      { es: 'Socia de una sociedad anónima', ca: "Sòcia d'una societat anònima", en: 'A shareholder in a public company' },
      { es: 'Trabajadora asalariada', ca: 'Treballadora assalariada', en: 'A salaried employee' },
      { es: 'Socia de una cooperativa', ca: "Sòcia d'una cooperativa", en: 'A member of a cooperative' },
    ],
    why: {
      es: 'El empresario individual o autónomo trabaja por cuenta propia sin crear una sociedad y responde de las deudas con todo su patrimonio.',
      ca: "L'empresari individual o autònom treballa per compte propi sense crear una societat i respon dels deutes amb tot el seu patrimoni.",
      en: 'A sole trader works for themselves without forming a company and is liable for business debts with all their personal assets.',
    },
    hint: {
      es: 'Una sola persona, sin socios y sin jefe.',
      ca: 'Una sola persona, sense socis i sense cap superior.',
      en: 'One person, no partners and no boss.',
    },
  },
  {
    id: 'b-06', cat: 'B', tier: 1, src: 'EDMN-B',
    topic: { es: 'Costes fijos y variables', ca: 'Costos fixos i variables', en: 'Fixed and variable costs' },
    q: {
      es: '¿Cuál de estos es un coste fijo para una panadería?',
      ca: "Quin d'aquests és un cost fix per a una fleca?",
      en: 'Which of these is a fixed cost for a bakery?',
    },
    options: [
      { es: 'El alquiler del local', ca: "El lloguer del local", en: 'The rent for the premises' },
      { es: 'La harina', ca: 'La farina', en: 'The flour' },
      { es: 'Las bolsas para el pan', ca: 'Les bosses per al pa', en: 'The bread bags' },
      { es: 'La levadura', ca: 'El llevat', en: 'The yeast' },
    ],
    why: {
      es: 'Un coste fijo no depende de cuánto se produce: el alquiler se paga igual se hagan 10 barras o 1.000.',
      ca: "Un cost fix no depèn de quant es produeix: el lloguer es paga igual tant si es fan 10 barres com 1.000.",
      en: 'A fixed cost does not depend on output: the rent is the same whether you bake 10 loaves or 1,000.',
    },
    hint: {
      es: '¿Qué gasto sigue igual aunque un mes vendas la mitad?',
      ca: 'Quina despesa es manté igual encara que un mes venguis la meitat?',
      en: 'Which cost stays the same even if you sell half as much one month?',
    },
  },
  {
    id: 'b-07', cat: 'B', tier: 1, src: 'EEAE-C',
    topic: { es: 'Análisis DAFO', ca: 'Anàlisi DAFO', en: 'SWOT analysis' },
    q: {
      es: 'En un análisis DAFO, ¿qué significa la «A»?',
      ca: "En una anàlisi DAFO, què vol dir la «A»?",
      en: 'In a SWOT analysis, what does the "T" stand for?',
    },
    options: [
      { es: 'Amenazas', ca: 'Amenaces', en: 'Threats' },
      { es: 'Ajustes', ca: 'Ajustos', en: 'Targets' },
      { es: 'Activos', ca: 'Actius', en: 'Tactics' },
      { es: 'Alianzas', ca: 'Aliances', en: 'Trends' },
    ],
    why: {
      es: 'DAFO son Debilidades, Amenazas, Fortalezas y Oportunidades. Las amenazas son factores externos que pueden perjudicar a la empresa.',
      ca: 'DAFO són Debilitats, Amenaces, Fortaleses i Oportunitats. Les amenaces són factors externs que poden perjudicar l\'empresa.',
      en: 'SWOT stands for Strengths, Weaknesses, Opportunities and Threats. Threats are external factors that can harm the firm.',
    },
    hint: {
      es: 'Es la pareja negativa de las Oportunidades, en el entorno externo.',
      ca: 'És la parella negativa de les Oportunitats, a l\'entorn extern.',
      en: 'It is the negative partner of Opportunities, in the external environment.',
    },
  },
  {
    id: 'b-08', cat: 'B', tier: 1, src: 'EDMN-B',
    topic: { es: 'El balance', ca: 'El balanç', en: 'The balance sheet' },
    q: {
      es: 'En el balance de una empresa, ¿cómo se llama el conjunto de bienes y derechos que posee?',
      ca: "Al balanç d'una empresa, com s'anomena el conjunt de béns i drets que té?",
      en: 'On a balance sheet, what do we call the set of goods and rights a firm owns?',
    },
    options: [
      { es: 'Activo', ca: 'Actiu', en: 'Assets' },
      { es: 'Pasivo', ca: 'Passiu', en: 'Liabilities' },
      { es: 'Patrimonio neto', ca: 'Patrimoni net', en: 'Equity' },
      { es: 'Cuenta de resultados', ca: 'Compte de resultats', en: 'Income statement' },
    ],
    why: {
      es: 'El activo recoge lo que la empresa tiene: locales, máquinas, existencias, dinero en el banco o lo que le deben los clientes.',
      ca: "L'actiu recull el que l'empresa té: locals, màquines, existències, diners al banc o el que li deuen els clients.",
      en: 'Assets are what the firm has: premises, machines, stock, cash in the bank or what customers owe it.',
    },
    hint: {
      es: 'Piensa en lo que la empresa tiene, no en cómo lo ha pagado.',
      ca: "Pensa en el que l'empresa té, no en com ho ha pagat.",
      en: 'Think about what the firm has, not how it paid for it.',
    },
  },
  {
    id: 'b-09', cat: 'B', tier: 1, src: 'EDMN-A',
    topic: { es: 'Innovación e I+D+i', ca: 'Innovació i R+D+i', en: 'Innovation and R&D' },
    q: {
      es: '¿Qué significan las siglas I+D+i?',
      ca: 'Què volen dir les sigles R+D+i?',
      en: 'In Spanish business, what does I+D+i (R&D&i) stand for?',
    },
    options: [
      { es: 'Investigación, desarrollo e innovación', ca: 'Recerca, desenvolupament i innovació', en: 'Research, development and innovation' },
      { es: 'Inversión, deuda e intereses', ca: 'Rendiment, deute i interessos', en: 'Investment, debt and interest' },
      { es: 'Ingresos, dividendos e impuestos', ca: 'Rendes, dividends i impostos', en: 'Income, dividends and taxes' },
      { es: 'Importación, distribución e industria', ca: 'Recursos, distribució i indústria', en: 'Imports, distribution and industry' },
    ],
    why: {
      es: 'I+D+i agrupa la investigación (crear conocimiento), el desarrollo (aplicarlo) y la innovación (llevarlo al mercado).',
      ca: "R+D+i agrupa la recerca (crear coneixement), el desenvolupament (aplicar-lo) i la innovació (portar-lo al mercat).",
      en: 'R&D&i groups research (creating knowledge), development (applying it) and innovation (bringing it to market).',
    },
    hint: {
      es: 'Es el camino de una idea desde el laboratorio hasta el mercado.',
      ca: "És el camí d'una idea des del laboratori fins al mercat.",
      en: 'It is the path of an idea from the lab to the market.',
    },
  },
  {
    id: 'b-10', cat: 'B', tier: 1, src: 'ECO-B',
    topic: { es: 'Oferta y demanda', ca: 'Oferta i demanda', en: 'Supply and demand' },
    q: {
      es: 'Un tiempo excelente da una cosecha récord de fresas. Si la demanda no cambia, ¿qué pasa con su precio?',
      ca: 'Un temps excel·lent dona una collita rècord de maduixes. Si la demanda no canvia, què passa amb el preu?',
      en: 'Great weather brings a record strawberry harvest. If demand does not change, what happens to the price?',
    },
    options: [
      { es: 'Baja', ca: 'Baixa', en: 'It falls' },
      { es: 'Sube', ca: 'Puja', en: 'It rises' },
      { es: 'Se queda igual', ca: 'Es queda igual', en: 'It stays the same' },
      { es: 'Sube, porque se venden más', ca: "Puja, perquè se'n venen més", en: 'It rises, as more are sold' },
    ],
    why: {
      es: 'Aumenta la oferta: hay más fresas a cada precio. Para vender todo ese exceso, el precio de equilibrio baja.',
      ca: "Augmenta l'oferta: hi ha més maduixes a cada preu. Per vendre tot aquest excés, el preu d'equilibri baixa.",
      en: 'Supply rises: there are more strawberries at every price. To sell the extra fruit, the equilibrium price falls.',
    },
    hint: {
      es: '¿Qué hacen los vendedores cuando tienen mucho más producto del habitual?',
      ca: 'Què fan els venedors quan tenen molt més producte que de costum?',
      en: 'What do sellers do when they have far more produce than usual?',
    },
  },

  // ───────────── Tier 2 (medium) ─────────────
  {
    id: 'b-11', cat: 'B', tier: 2, src: 'ECO-B',
    topic: { es: 'Precios máximos', ca: 'Preus màxims', en: 'Price ceilings' },
    q: {
      es: 'Se fija por ley un precio máximo por debajo del de equilibrio. ¿Qué suele ocurrir?',
      ca: "Es fixa per llei un preu màxim per sota del d'equilibri. Què sol passar?",
      en: 'A legal maximum price is set below the equilibrium price. What usually happens?',
    },
    options: [
      { es: 'Escasez: se demanda más de lo ofrecido', ca: "Escassetat: es demana més del que s'ofereix", en: 'Shortage: demand exceeds supply' },
      { es: 'Excedente: sobra producto', ca: 'Excedent: sobra producte', en: 'Surplus: unsold goods pile up' },
      { es: 'Nada, el mercado sigue igual', ca: 'Res, el mercat segueix igual', en: 'Nothing, the market is unchanged' },
      { es: 'Las empresas producen más', ca: 'Les empreses produeixen més', en: 'Firms produce more' },
    ],
    why: {
      es: 'A un precio más bajo, los consumidores quieren comprar más y los productores ofrecen menos: aparece escasez o exceso de demanda.',
      ca: "A un preu més baix, els consumidors volen comprar més i els productors n'ofereixen menys: apareix escassetat o excés de demanda.",
      en: 'At a lower price consumers want to buy more and producers offer less, so a shortage (excess demand) appears.',
    },
    hint: {
      es: 'Compara qué quieren hacer compradores y vendedores a un precio más bajo.',
      ca: 'Compara què volen fer compradors i venedors a un preu més baix.',
      en: 'Compare what buyers and sellers want to do at a lower price.',
    },
  },
  {
    id: 'b-12', cat: 'B', tier: 2, src: 'ECO-B',
    topic: { es: 'Elasticidad', ca: 'Elasticitat', en: 'Elasticity' },
    q: {
      es: '¿Cuál de estos bienes suele tener la demanda más inelástica al precio?',
      ca: "Quin d'aquests béns sol tenir la demanda més inelàstica respecte al preu?",
      en: 'Which of these goods usually has the most price-inelastic demand?',
    },
    options: [
      { es: 'La insulina para un diabético', ca: 'La insulina per a un diabètic', en: 'Insulin for a diabetic' },
      { es: 'Un viaje de vacaciones', ca: 'Un viatge de vacances', en: 'A holiday trip' },
      { es: 'Una marca concreta de refresco', ca: 'Una marca concreta de refresc', en: 'A specific brand of soft drink' },
      { es: 'Una cena en un restaurante', ca: 'Un sopar en un restaurant', en: 'A dinner at a restaurant' },
    ],
    why: {
      es: 'La demanda es inelástica cuando el bien es necesario y no tiene sustitutos: aunque suba el precio, la cantidad comprada apenas cambia.',
      ca: 'La demanda és inelàstica quan el bé és necessari i no té substituts: encara que pugi el preu, la quantitat comprada gairebé no canvia.',
      en: 'Demand is inelastic when a good is essential and has no substitutes: even if the price rises, the quantity bought barely changes.',
    },
    hint: {
      es: '¿Qué comprarías igual aunque costara bastante más?',
      ca: 'Què compraries igualment encara que costés força més?',
      en: 'What would you still buy even if it cost a lot more?',
    },
  },
  {
    id: 'b-13', cat: 'B', tier: 2, src: 'ECO-B',
    topic: { es: 'Movimientos y desplazamientos', ca: 'Moviments i desplaçaments', en: 'Movements vs shifts' },
    q: {
      es: 'Sube el precio del café. En el gráfico de la demanda de café, ¿qué ocurre?',
      ca: 'Puja el preu del cafè. Al gràfic de la demanda de cafè, què passa?',
      en: 'The price of coffee rises. On the graph of coffee demand, what happens?',
    },
    options: [
      { es: 'Un movimiento a lo largo de la curva', ca: 'Un moviment al llarg de la corba', en: 'A movement along the curve' },
      { es: 'La curva se desplaza a la izquierda', ca: "La corba es desplaça a l'esquerra", en: 'The curve shifts to the left' },
      { es: 'La curva se desplaza a la derecha', ca: 'La corba es desplaça a la dreta', en: 'The curve shifts to the right' },
      { es: 'La curva se vuelve vertical', ca: 'La corba es torna vertical', en: 'The curve becomes vertical' },
    ],
    why: {
      es: 'Un cambio en el precio del propio bien mueve el punto sobre la misma curva. La curva solo se desplaza si cambian otros factores, como la renta o los gustos.',
      ca: 'Un canvi en el preu del mateix bé mou el punt sobre la mateixa corba. La corba només es desplaça si canvien altres factors, com la renda o els gustos.',
      en: "A change in the good's own price moves the point along the same curve. The curve shifts only when other factors change, like income or tastes.",
    },
    hint: {
      es: '¿Qué variable aparece ya en uno de los ejes del gráfico?',
      ca: 'Quina variable ja apareix en un dels eixos del gràfic?',
      en: 'Which variable is already on one of the axes of the graph?',
    },
  },
  {
    id: 'b-14', cat: 'B', tier: 2, src: 'ECO-B',
    topic: { es: 'Bienes públicos', ca: 'Béns públics', en: 'Public goods' },
    q: {
      es: 'El alumbrado de una calle es un ejemplo clásico de bien público. ¿Qué lo define?',
      ca: "L'enllumenat d'un carrer és un exemple clàssic de bé públic. Què el defineix?",
      en: 'Street lighting is a classic example of a public good. What defines it?',
    },
    options: [
      { es: 'No es rival ni excluible', ca: 'No és rival ni excloent', en: 'It is non-rival and non-excludable' },
      { es: 'Lo produce siempre el Estado', ca: "El produeix sempre l'Estat", en: 'It is always produced by the state' },
      { es: 'Es gratis de producir', ca: 'És gratis de produir', en: 'It costs nothing to produce' },
      { es: 'Solo lo usan quienes pagan', ca: 'Només el fan servir els qui paguen', en: 'Only those who pay can use it' },
    ],
    why: {
      es: 'Un bien público no es rival (que lo use uno no impide que lo use otro) ni excluible (no se puede impedir su uso a quien no paga).',
      ca: "Un bé públic no és rival (que l'usi un no impedeix que l'usi un altre) ni excloent (no es pot impedir que l'usi qui no paga).",
      en: 'A public good is non-rival (one person using it does not stop another) and non-excludable (you cannot stop non-payers from using it).',
    },
    hint: {
      es: 'Piensa en qué pasa cuando alguien la aprovecha sin pagar.',
      ca: "Pensa què passa quan algú l'aprofita sense pagar.",
      en: 'Think about what happens when someone uses it without paying.',
    },
  },
  {
    id: 'b-15', cat: 'B', tier: 2, src: 'ECO-B',
    topic: { es: 'Fallos de mercado', ca: 'Fallades de mercat', en: 'Market failures' },
    q: {
      es: 'Jordi vende su coche de segunda mano y sabe que tiene una avería oculta que el comprador no ve. ¿Qué fallo es?',
      ca: "En Jordi ven el seu cotxe de segona mà i sap que té una avaria oculta que el comprador no veu. Quina fallada és?",
      en: 'Jordi sells his used car knowing it has a hidden fault the buyer cannot see. Which market failure is this?',
    },
    options: [
      { es: 'Información asimétrica', ca: 'Informació asimètrica', en: 'Asymmetric information' },
      { es: 'Externalidad negativa', ca: 'Externalitat negativa', en: 'Negative externality' },
      { es: 'Bien público', ca: 'Bé públic', en: 'Public good' },
      { es: 'Poder de mercado', ca: 'Poder de mercat', en: 'Market power' },
    ],
    why: {
      es: 'Hay información asimétrica cuando una parte sabe más que la otra sobre lo que se intercambia, lo que puede llevar a malas decisiones.',
      ca: "Hi ha informació asimètrica quan una part sap més que l'altra sobre allò que s'intercanvia, cosa que pot portar a males decisions.",
      en: 'There is asymmetric information when one side knows more than the other about what is traded, which can lead to bad decisions.',
    },
    hint: {
      es: 'Fíjate en quién sabe qué en esta venta.',
      ca: "Fixa't en qui sap què en aquesta venda.",
      en: 'Look at who knows what in this sale.',
    },
  },
  {
    id: 'b-16', cat: 'B', tier: 2, src: 'EDMN-A',
    topic: { es: 'Formas jurídicas', ca: 'Formes jurídiques', en: 'Legal forms' },
    q: {
      es: '¿Cuál es la principal ventaja de crear una sociedad limitada (SL) frente a ser autónomo?',
      ca: "Quin és el principal avantatge de crear una societat limitada (SL) davant de ser autònom?",
      en: 'What is the main advantage of setting up a limited company (SL) instead of being a sole trader?',
    },
    options: [
      { es: 'Los socios responden solo con su aportación', ca: "Els socis només responen amb l'aportació", en: "Owners' liability is limited to their stake" },
      { es: 'No paga ningún impuesto', ca: 'No paga cap impost', en: 'It pays no taxes at all' },
      { es: 'No necesita llevar contabilidad', ca: 'No cal que porti comptabilitat', en: 'It does not need to keep accounts' },
      { es: 'Puede cotizar en bolsa desde el inicio', ca: 'Pot cotitzar en borsa des del començament', en: 'It can list on the stock market at once' },
    ],
    why: {
      es: 'En una SL la responsabilidad es limitada: si el negocio va mal, los socios solo arriesgan el capital aportado, no su patrimonio personal.',
      ca: 'En una SL la responsabilitat és limitada: si el negoci va malament, els socis només arrisquen el capital aportat, no el seu patrimoni personal.',
      en: 'In an SL liability is limited: if the business fails, owners only risk the capital they put in, not their personal assets.',
    },
    hint: {
      es: 'Piensa en qué arriesga cada socio si el negocio quiebra.',
      ca: 'Pensa què arrisca cada soci si el negoci fa fallida.',
      en: 'Think about what each owner risks if the business goes bust.',
    },
  },
  {
    id: 'b-17', cat: 'B', tier: 2, src: 'EDMN-C',
    topic: { es: 'Lienzo de modelo de negocio', ca: 'Llenç de model de negoci', en: 'Business model canvas' },
    q: {
      es: 'En el lienzo de modelo de negocio, ¿qué bloque explica por qué los clientes te eligen a ti?',
      ca: 'Al llenç de model de negoci, quin bloc explica per què els clients et trien a tu?',
      en: 'In the business model canvas, which block explains why customers choose you?',
    },
    options: [
      { es: 'La propuesta de valor', ca: 'La proposta de valor', en: 'The value proposition' },
      { es: 'Los recursos clave', ca: 'Els recursos clau', en: 'Key resources' },
      { es: 'La estructura de costes', ca: 'L\'estructura de costos', en: 'The cost structure' },
      { es: 'Las asociaciones clave', ca: 'Les associacions clau', en: 'Key partnerships' },
    ],
    why: {
      es: 'La propuesta de valor es el conjunto de beneficios que resuelve un problema o una necesidad del cliente mejor que las alternativas.',
      ca: "La proposta de valor és el conjunt de beneficis que resol un problema o una necessitat del client millor que les alternatives.",
      en: "The value proposition is the bundle of benefits that solves a customer's problem or need better than the alternatives.",
    },
    hint: {
      es: 'Piensa en lo que el cliente gana contigo y no con otros.',
      ca: 'Pensa en el que el client guanya amb tu i no amb altres.',
      en: 'Think about what the customer gains from you and not from others.',
    },
  },
  {
    id: 'b-18', cat: 'B', tier: 2, src: 'EDMN-D',
    topic: { es: 'Lean Startup', ca: 'Lean Startup', en: 'Lean Startup' },
    q: {
      es: 'En el método Lean Startup, ¿qué es un producto mínimo viable (PMV)?',
      ca: 'En el mètode Lean Startup, què és un producte mínim viable (PMV)?',
      en: 'In the Lean Startup method, what is a minimum viable product (MVP)?',
    },
    options: [
      { es: 'Una versión básica para aprender de clientes', ca: 'Una versió bàsica per aprendre dels clients', en: 'A basic version to learn from customers' },
      { es: 'El producto más barato del mercado', ca: 'El producte més barat del mercat', en: 'The cheapest product on the market' },
      { es: 'El producto final, sin ningún fallo', ca: 'El producte final, sense cap error', en: 'The finished product, with no flaws' },
      { es: 'Lo mínimo que exige la ley', ca: 'El mínim que exigeix la llei', en: 'The minimum the law requires' },
    ],
    why: {
      es: 'El PMV es la versión más sencilla que permite probar la idea con clientes reales y aprender rápido, gastando lo mínimo antes de invertir más.',
      ca: 'El PMV és la versió més senzilla que permet provar la idea amb clients reals i aprendre ràpid, gastant el mínim abans d\'invertir-hi més.',
      en: 'An MVP is the simplest version that lets you test the idea with real customers and learn fast, spending as little as possible first.',
    },
    hint: {
      es: 'Piensa en por qué lanzarías algo muy sencillo cuanto antes.',
      ca: 'Pensa per què llançaries una cosa molt senzilla com més aviat millor.',
      en: 'Think about why you would launch something very simple as early as possible.',
    },
  },
  {
    id: 'b-19', cat: 'B', tier: 2, src: 'EDMN-B',
    topic: { es: 'Financiación', ca: 'Finançament', en: 'Financing' },
    q: {
      es: '¿Cuál de estas es una fuente de financiación interna de la empresa?',
      ca: "Quina d'aquestes és una font de finançament intern de l'empresa?",
      en: 'Which of these is a source of internal financing for a firm?',
    },
    options: [
      { es: 'Los beneficios reinvertidos (reservas)', ca: 'Els beneficis reinvertits (reserves)', en: 'Reinvested profits (reserves)' },
      { es: 'Un préstamo bancario', ca: 'Un préstec bancari', en: 'A bank loan' },
      { es: 'El aplazamiento de pago a proveedores', ca: 'L\'ajornament de pagament a proveïdors', en: 'Delayed payment to suppliers' },
      { es: 'La entrada de nuevos socios', ca: "L'entrada de socis nous", en: 'Bringing in new partners' },
    ],
    why: {
      es: 'La financiación interna (autofinanciación) sale de la propia empresa, como los beneficios que no se reparten. El resto viene de fuera.',
      ca: "El finançament intern (autofinançament) surt de la mateixa empresa, com els beneficis que no es reparteixen. La resta ve de fora.",
      en: 'Internal financing (self-financing) comes from the firm itself, such as profits that are not paid out. The rest comes from outside.',
    },
    hint: {
      es: '¿Qué dinero genera la empresa sin pedírselo a nadie?',
      ca: 'Quins diners genera l\'empresa sense demanar-los a ningú?',
      en: 'What money does the firm generate without asking anyone for it?',
    },
  },
  {
    id: 'b-20', cat: 'B', tier: 2, src: 'EDMN-A',
    topic: { es: 'Responsabilidad social corporativa', ca: 'Responsabilitat social corporativa', en: 'Corporate social responsibility' },
    q: {
      es: '¿Qué es la responsabilidad social corporativa (RSC)?',
      ca: 'Què és la responsabilitat social corporativa (RSC)?',
      en: 'What is corporate social responsibility (CSR)?',
    },
    options: [
      { es: 'Ir voluntariamente más allá de la ley', ca: 'Anar voluntàriament més enllà de la llei', en: 'Voluntarily going beyond the law' },
      { es: 'Cumplir solo lo que exige la ley', ca: 'Complir només el que exigeix la llei', en: 'Doing only what the law requires' },
      { es: 'Donar todo el beneficio a ONG', ca: 'Donar tot el benefici a ONG', en: 'Giving all profit to charities' },
      { es: 'Un impuesto para grandes empresas', ca: 'Un impost per a grans empreses', en: 'A tax on large companies' },
    ],
    why: {
      es: 'La RSC es el compromiso voluntario de la empresa con sus trabajadores, la sociedad y el medio ambiente, más allá de sus obligaciones legales.',
      ca: "La RSC és el compromís voluntari de l'empresa amb els treballadors, la societat i el medi ambient, més enllà de les obligacions legals.",
      en: 'CSR is a firm\'s voluntary commitment to its workers, society and the environment, beyond its legal obligations.',
    },
    hint: {
      es: 'Piensa en si es una obligación o una decisión de la empresa.',
      ca: "Pensa en si és una obligació o una decisió de l'empresa.",
      en: "Think about whether it is an obligation or the firm's own choice.",
    },
  },

  // ───────────── Tier 3 (hard) ─────────────
  {
    id: 'b-21', cat: 'B', tier: 3, src: 'EDMN-D',
    topic: { es: 'Umbral de rentabilidad', ca: 'Llindar de rendibilitat', en: 'Break-even point' },
    q: {
      es: 'Ana tiene 12.000 € de costes fijos, vende a 25 € y cada unidad le cuesta 10 €. ¿Cuántas debe vender para no perder?',
      ca: "L'Ana té 12.000 € de costos fixos, ven a 25 € i cada unitat li costa 10 €. Quantes n'ha de vendre per no perdre?",
      en: 'Ana has €12,000 in fixed costs, sells at €25 and each unit costs her €10. How many must she sell to break even?',
    },
    options: [
      { es: '800 unidades', ca: '800 unitats', en: '800 units' },
      { es: '480 unidades', ca: '480 unitats', en: '480 units' },
      { es: '1.200 unidades', ca: '1.200 unitats', en: '1,200 units' },
      { es: '343 unidades', ca: '343 unitats', en: '343 units' },
    ],
    why: {
      es: 'Umbral = costes fijos / (precio − coste variable unitario) = 12.000 / (25 − 10) = 12.000 / 15 = 800 unidades.',
      ca: 'Llindar = costos fixos / (preu − cost variable unitari) = 12.000 / (25 − 10) = 12.000 / 15 = 800 unitats.',
      en: 'Break-even = fixed costs / (price − unit variable cost) = 12,000 / (25 − 10) = 12,000 / 15 = 800 units.',
    },
    hint: {
      es: 'Cada venta deja un margen para cubrir los costes fijos. ¿De cuánto es?',
      ca: 'Cada venda deixa un marge per cobrir els costos fixos. De quant és?',
      en: 'Each sale leaves a margin to cover fixed costs. How big is it?',
    },
  },
  {
    id: 'b-22', cat: 'B', tier: 3, src: 'ECO-B',
    topic: { es: 'Elasticidad e ingresos', ca: 'Elasticitat i ingressos', en: 'Elasticity and revenue' },
    q: {
      es: 'Una empresa vende un producto de demanda muy elástica y sube su precio. ¿Qué pasa con sus ingresos totales?',
      ca: 'Una empresa ven un producte de demanda molt elàstica i n\'apuja el preu. Què passa amb els ingressos totals?',
      en: 'A firm sells a product with very elastic demand and raises its price. What happens to total revenue?',
    },
    options: [
      { es: 'Disminuyen', ca: 'Disminueixen', en: 'They fall' },
      { es: 'Aumentan', ca: 'Augmenten', en: 'They rise' },
      { es: 'No cambian', ca: 'No canvien', en: 'They stay the same' },
      { es: 'Se duplican', ca: 'Es dupliquen', en: 'They double' },
    ],
    why: {
      es: 'Si la demanda es elástica, la cantidad cae en mayor proporción que lo que sube el precio, así que precio × cantidad disminuye.',
      ca: 'Si la demanda és elàstica, la quantitat cau en més proporció que el que puja el preu, de manera que preu × quantitat disminueix.',
      en: 'With elastic demand, quantity falls by a larger percentage than the price rises, so price × quantity goes down.',
    },
    hint: {
      es: 'Ingresos = precio × cantidad. ¿Qué cambia más en porcentaje?',
      ca: 'Ingressos = preu × quantitat. Què canvia més en percentatge?',
      en: 'Revenue = price × quantity. Which changes more in percentage terms?',
    },
  },
  {
    id: 'b-23', cat: 'B', tier: 3, src: 'ECO-B',
    topic: { es: 'Elasticidad', ca: 'Elasticitat', en: 'Elasticity' },
    q: {
      es: 'El precio de un bien sube un 10 % y la cantidad demandada baja un 20 %. ¿Cómo es su demanda?',
      ca: "El preu d'un bé puja un 10 % i la quantitat demandada baixa un 20 %. Com és la demanda?",
      en: 'The price of a good rises 10% and the quantity demanded falls 20%. What kind of demand is it?',
    },
    options: [
      { es: 'Elástica (elasticidad 2)', ca: 'Elàstica (elasticitat 2)', en: 'Elastic (elasticity 2)' },
      { es: 'Inelástica (elasticidad 0,5)', ca: 'Inelàstica (elasticitat 0,5)', en: 'Inelastic (elasticity 0.5)' },
      { es: 'De elasticidad unitaria', ca: "D'elasticitat unitària", en: 'Unit elastic' },
      { es: 'Perfectamente inelástica', ca: 'Perfectament inelàstica', en: 'Perfectly inelastic' },
    ],
    why: {
      es: 'Elasticidad = % cambio en cantidad / % cambio en precio = 20 / 10 = 2 (en valor absoluto). Como es mayor que 1, la demanda es elástica.',
      ca: 'Elasticitat = % canvi en quantitat / % canvi en preu = 20 / 10 = 2 (en valor absolut). Com que és més gran que 1, la demanda és elàstica.',
      en: 'Elasticity = % change in quantity / % change in price = 20 / 10 = 2 (in absolute value). Since it is above 1, demand is elastic.',
    },
    hint: {
      es: 'Divide la variación porcentual de la cantidad entre la del precio y compárala con 1.',
      ca: 'Divideix la variació percentual de la quantitat entre la del preu i compara-la amb 1.',
      en: 'Divide the percentage change in quantity by that in price, then compare with 1.',
    },
  },
  {
    id: 'b-24', cat: 'B', tier: 3, src: 'EDMN-B',
    topic: { es: 'Coste medio', ca: 'Cost mitjà', en: 'Average cost' },
    q: {
      es: 'Un taller tiene 2.000 € de costes fijos y 3 € de coste variable por pieza. Si hace 500 piezas, ¿cuál es su coste medio?',
      ca: 'Un taller té 2.000 € de costos fixos i 3 € de cost variable per peça. Si en fa 500, quin és el cost mitjà?',
      en: 'A workshop has €2,000 in fixed costs and a €3 variable cost per part. If it makes 500 parts, what is the average cost?',
    },
    options: [
      { es: '7 € por pieza', ca: '7 € per peça', en: '€7 per part' },
      { es: '4 € por pieza', ca: '4 € per peça', en: '€4 per part' },
      { es: '3 € por pieza', ca: '3 € per peça', en: '€3 per part' },
      { es: '5 € por pieza', ca: '5 € per peça', en: '€5 per part' },
    ],
    why: {
      es: 'Coste total = 2.000 + 3 × 500 = 3.500 €. Coste medio = 3.500 / 500 = 7 € por pieza (4 € de fijo y 3 € de variable).',
      ca: 'Cost total = 2.000 + 3 × 500 = 3.500 €. Cost mitjà = 3.500 / 500 = 7 € per peça (4 € de fix i 3 € de variable).',
      en: 'Total cost = 2,000 + 3 × 500 = €3,500. Average cost = 3,500 / 500 = €7 per part (€4 fixed plus €3 variable).',
    },
    hint: {
      es: 'Suma todos los costes y repártelos entre las piezas producidas.',
      ca: 'Suma tots els costos i reparteix-los entre les peces produïdes.',
      en: 'Add up all the costs and spread them over the parts produced.',
    },
  },
  {
    id: 'b-25', cat: 'B', tier: 3, src: 'EDMN-B',
    topic: { es: 'Selección de inversiones', ca: "Selecció d'inversions", en: 'Investment appraisal' },
    q: {
      es: 'Marc invierte 50.000 € en una máquina que le genera 20.000 € netos al año. ¿Cuál es el plazo de recuperación (payback)?',
      ca: 'En Marc inverteix 50.000 € en una màquina que li genera 20.000 € nets l\'any. Quin és el termini de recuperació (payback)?',
      en: 'Marc invests €50,000 in a machine that brings in €20,000 net a year. What is the payback period?',
    },
    options: [
      { es: '2,5 años', ca: '2,5 anys', en: '2.5 years' },
      { es: '3 años', ca: '3 anys', en: '3 years' },
      { es: '2 años', ca: '2 anys', en: '2 years' },
      { es: '0,4 años', ca: '0,4 anys', en: '0.4 years' },
    ],
    why: {
      es: 'El payback es el tiempo que tarda en recuperarse lo invertido: 50.000 / 20.000 = 2,5 años (2 años dan 40.000 € y faltan 10.000 €, medio año más).',
      ca: "El payback és el temps que es triga a recuperar la inversió: 50.000 / 20.000 = 2,5 anys (2 anys donen 40.000 € i en falten 10.000 €, mig any més).",
      en: 'Payback is the time needed to recover the investment: 50,000 / 20,000 = 2.5 years (2 years return €40,000; the last €10,000 takes half a year).',
    },
    hint: {
      es: 'Ve sumando lo que entra cada año hasta llegar a lo invertido.',
      ca: 'Ves sumant el que entra cada any fins a arribar a la inversió.',
      en: 'Add up the money coming in each year until it reaches the amount invested.',
    },
  },
  {
    id: 'b-26', cat: 'B', tier: 3, src: 'EDMN-B',
    topic: { es: 'Valor actual neto (VAN)', ca: 'Valor actual net (VAN)', en: 'Net present value (NPV)' },
    q: {
      es: 'Al calcular el VAN de una inversión, ¿por qué se descuentan los cobros futuros?',
      ca: "En calcular el VAN d'una inversió, per què es descompten els cobraments futurs?",
      en: 'When calculating the NPV of an investment, why are future cash inflows discounted?',
    },
    options: [
      { es: 'Un euro hoy vale más que uno futuro', ca: 'Un euro avui val més que un de futur', en: 'A euro today is worth more than one later' },
      { es: 'Para restar los impuestos', ca: 'Per restar-ne els impostos', en: 'To subtract taxes' },
      { es: 'Porque los clientes pagan tarde', ca: 'Perquè els clients paguen tard', en: 'Because customers pay late' },
      { es: 'Para restar los costes fijos', ca: 'Per restar-ne els costos fixos', en: 'To subtract fixed costs' },
    ],
    why: {
      es: 'El dinero de hoy puede invertirse y generar intereses, así que vale más que la misma cantidad futura. El VAN trae los cobros al valor de hoy.',
      ca: "Els diners d'avui es poden invertir i generar interessos, així que valen més que la mateixa quantitat futura. El VAN porta els cobraments al valor d'avui.",
      en: "Money today can be invested to earn interest, so it is worth more than the same amount later. NPV brings future inflows to today's value.",
    },
    hint: {
      es: 'Piensa en el valor del dinero en el tiempo.',
      ca: 'Pensa en el valor dels diners en el temps.',
      en: 'Think about the time value of money.',
    },
  },
  {
    id: 'b-27', cat: 'B', tier: 3, src: 'EDMN-B',
    topic: { es: 'El balance', ca: 'El balanç', en: 'The balance sheet' },
    q: {
      es: 'Una empresa tiene un activo de 150.000 € y deudas (pasivo) de 90.000 €. ¿Cuál es su patrimonio neto?',
      ca: 'Una empresa té un actiu de 150.000 € i deutes (passiu) de 90.000 €. Quin és el seu patrimoni net?',
      en: 'A firm has €150,000 in assets and €90,000 in debts (liabilities). What is its equity?',
    },
    options: [
      { es: '60.000 €', ca: '60.000 €', en: '€60,000' },
      { es: '240.000 €', ca: '240.000 €', en: '€240,000' },
      { es: '90.000 €', ca: '90.000 €', en: '€90,000' },
      { es: '150.000 €', ca: '150.000 €', en: '€150,000' },
    ],
    why: {
      es: 'Se cumple que Activo = Patrimonio neto + Pasivo. Por tanto, patrimonio neto = 150.000 − 90.000 = 60.000 €.',
      ca: 'Es compleix que Actiu = Patrimoni net + Passiu. Per tant, patrimoni net = 150.000 − 90.000 = 60.000 €.',
      en: 'Assets = Equity + Liabilities always holds. So equity = 150,000 − 90,000 = €60,000.',
    },
    hint: {
      es: 'Lo que la empresa tiene se financia con lo que debe y con lo que es suyo.',
      ca: "El que l'empresa té es finança amb el que deu i amb el que és seu.",
      en: 'What the firm has is funded by what it owes plus what belongs to its owners.',
    },
  },
  {
    id: 'b-28', cat: 'B', tier: 3, src: 'EDMN-D',
    topic: { es: 'Fuerzas competitivas de Porter', ca: 'Forces competitives de Porter', en: "Porter's five forces" },
    q: {
      es: 'Para una empresa azucarera, los edulcorantes artificiales son, según las fuerzas de Porter...',
      ca: 'Per a una empresa sucrera, els edulcorants artificials són, segons les forces de Porter...',
      en: "For a sugar producer, artificial sweeteners are, in Porter's five forces...",
    },
    options: [
      { es: 'Una amenaza de productos sustitutivos', ca: 'Una amenaça de productes substitutius', en: 'A threat of substitute products' },
      { es: 'Una amenaza de nuevos competidores', ca: 'Una amenaça de nous competidors', en: 'A threat of new entrants' },
      { es: 'Poder de negociación de proveedores', ca: 'Poder de negociació dels proveïdors', en: 'Bargaining power of suppliers' },
      { es: 'Poder de negociación de clientes', ca: 'Poder de negociació dels clients', en: 'Bargaining power of buyers' },
    ],
    why: {
      es: 'Un sustitutivo es un producto distinto que cubre la misma necesidad (endulzar). Limita el precio que puede cobrar la industria del azúcar.',
      ca: "Un substitutiu és un producte diferent que cobreix la mateixa necessitat (endolcir). Limita el preu que pot cobrar la indústria del sucre.",
      en: 'A substitute is a different product that meets the same need (sweetening). It caps the price the sugar industry can charge.',
    },
    hint: {
      es: '¿Es el mismo producto o uno diferente que cubre la misma necesidad?',
      ca: 'És el mateix producte o un de diferent que cobreix la mateixa necessitat?',
      en: 'Is it the same product, or a different one that meets the same need?',
    },
  },
  {
    id: 'b-29', cat: 'B', tier: 3, src: 'ECO-B',
    topic: { es: 'Tipos de mercado', ca: 'Tipus de mercat', en: 'Types of market' },
    q: {
      es: 'En una ciudad hay muchos restaurantes, cada uno con su estilo y precios algo distintos. ¿Qué mercado es?',
      ca: 'En una ciutat hi ha molts restaurants, cadascun amb el seu estil i preus una mica diferents. Quin mercat és?',
      en: 'A city has many restaurants, each with its own style and slightly different prices. What market is it?',
    },
    options: [
      { es: 'Competencia monopolística', ca: 'Competència monopolística', en: 'Monopolistic competition' },
      { es: 'Competencia perfecta', ca: 'Competència perfecta', en: 'Perfect competition' },
      { es: 'Oligopolio', ca: 'Oligopoli', en: 'Oligopoly' },
      { es: 'Monopolio', ca: 'Monopoli', en: 'Monopoly' },
    ],
    why: {
      es: 'Hay muchos vendedores, como en competencia perfecta, pero el producto está diferenciado, y eso da a cada uno algo de poder sobre su precio.',
      ca: 'Hi ha molts venedors, com en competència perfecta, però el producte està diferenciat, i això dona a cadascun una mica de poder sobre el preu.',
      en: 'There are many sellers, as in perfect competition, but products are differentiated, giving each one some power over its price.',
    },
    hint: {
      es: 'Muchos vendedores, pero ¿venden exactamente lo mismo?',
      ca: 'Molts venedors, però venen exactament el mateix?',
      en: 'Many sellers, but do they sell exactly the same thing?',
    },
  },
  {
    id: 'b-30', cat: 'B', tier: 3, src: 'ECO-B',
    topic: { es: 'Externalidades', ca: 'Externalitats', en: 'Externalities' },
    q: {
      es: 'Una fábrica contamina un río y no paga por el daño. Sin intervención, ¿cuánto tiende a producir el mercado?',
      ca: 'Una fàbrica contamina un riu i no paga pel dany. Sense intervenció, quant tendeix a produir el mercat?',
      en: 'A factory pollutes a river and does not pay for the damage. Without intervention, how much does the market produce?',
    },
    options: [
      { es: 'Más de lo socialmente óptimo', ca: 'Més del que és socialment òptim', en: 'More than the social optimum' },
      { es: 'Menos de lo socialmente óptimo', ca: 'Menys del que és socialment òptim', en: 'Less than the social optimum' },
      { es: 'Justo lo socialmente óptimo', ca: 'Just el que és socialment òptim', en: 'Exactly the social optimum' },
      { es: 'Nada, la fábrica cerrará', ca: 'Res, la fàbrica tancarà', en: 'Nothing, the factory will close' },
    ],
    why: {
      es: 'Con una externalidad negativa, parte del coste lo paga la sociedad y no la fábrica. Al producir más barato de lo real, se produce de más.',
      ca: "Amb una externalitat negativa, part del cost el paga la societat i no la fàbrica. En produir més barat del que és real, es produeix de més.",
      en: 'With a negative externality, society bears part of the cost instead of the factory. Producing seems cheaper than it really is, so it overproduces.',
    },
    hint: {
      es: '¿Tiene en cuenta la fábrica todos los costes que causa al decidir cuánto producir?',
      ca: 'Té en compte la fàbrica tots els costos que causa quan decideix quant produir?',
      en: 'Does the factory count all the costs it causes when deciding how much to make?',
    },
  },
]);
