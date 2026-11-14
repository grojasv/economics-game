// Category C — Macroeconomía. Sources: docs/curriculum.md (ECO-C).
window.ECO_QUESTIONS = (window.ECO_QUESTIONS || []).concat([
  // ───────────── Tier 1 (easy) ─────────────
  {
    id: 'c-01', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "PIB", ca: "PIB", en: "GDP" },
    q: {
      es: "¿Qué mide el producto interior bruto (PIB) de un país?",
      ca: "Què mesura el producte interior brut (PIB) d'un país?",
      en: "What does a country's gross domestic product (GDP) measure?",
    },
    options: [
      { es: "Valor de la producción final en un periodo", ca: "Valor de la producció final en un període", en: "The value of final output in a period" },
      { es: "El patrimonio acumulado de sus habitantes", ca: "El patrimoni acumulat dels seus habitants", en: "The wealth its residents have built up" },
      { es: "El dinero que recauda el Estado en impuestos", ca: "Els diners que recapta l'Estat en impostos", en: "The money the State collects in taxes" },
      { es: "El valor de lo que exporta al extranjero", ca: "El valor del que exporta a l'estranger", en: "The value of what it sells abroad" },
    ],
    why: {
      es: "El PIB suma el valor de mercado de los bienes y servicios finales producidos en un país durante un periodo, normalmente un año.",
      ca: "El PIB suma el valor de mercat dels béns i serveis finals produïts en un país durant un període, normalment un any.",
      en: "GDP adds up the market value of the final goods and services produced in a country over a period, usually a year.",
    },
    hint: {
      es: "Piensa en un flujo de producción, no en un stock de riqueza.",
      ca: "Pensa en un flux de producció, no en un estoc de riquesa.",
      en: "Think of a flow of production, not a stock of wealth.",
    },
  },
  {
    id: 'c-02', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Unión Europea", ca: "Unió Europea", en: "European Union" },
    q: {
      es: "¿Qué institución decide la política monetaria de la zona euro?",
      ca: "Quina institució decideix la política monetària de la zona euro?",
      en: "Which institution sets monetary policy for the euro area?",
    },
    options: [
      { es: "El Banco Central Europeo (BCE)", ca: "El Banc Central Europeu (BCE)", en: "The European Central Bank (ECB)" },
      { es: "El Eurogrupo", ca: "L'Eurogrup", en: "The Eurogroup" },
      { es: "La Comisión Europea", ca: "La Comissió Europea", en: "The European Commission" },
      { es: "El Parlamento Europeo", ca: "El Parlament Europeu", en: "The European Parliament" },
    ],
    why: {
      es: "El BCE fija la política monetaria común (como los tipos de interés oficiales) de todos los países del euro. Bancos centrales nacionales como el Banco de España forman parte de su sistema.",
      ca: "El BCE fixa la política monetària comuna (com els tipus d'interès oficials) de tots els països de l'euro. Bancs centrals nacionals com el Banc d'Espanya formen part del seu sistema.",
      en: "The ECB sets the common monetary policy (such as official interest rates) for all euro countries. National central banks such as the Bank of Spain are part of its system.",
    },
    hint: {
      es: "Una moneda compartida necesita una sola autoridad monetaria.",
      ca: "Una moneda compartida necessita una sola autoritat monetària.",
      en: "A shared currency needs a single monetary authority.",
    },
  },
  {
    id: 'c-03', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Proteccionismo", ca: "Proteccionisme", en: "Protectionism" },
    q: {
      es: "¿Qué es un arancel?",
      ca: "Què és un aranzel?",
      en: "What is a tariff?",
    },
    options: [
      { es: "Un impuesto sobre los productos importados", ca: "Un impost sobre els productes importats", en: "A tax on imported goods" },
      { es: "Un límite a la cantidad importada", ca: "Un límit a la quantitat importada", en: "A cap on the quantity imported" },
      { es: "Una ayuda pública a los exportadores", ca: "Un ajut públic als exportadors", en: "A public subsidy for exporters" },
      { es: "Un acuerdo para eliminar barreras comerciales", ca: "Un acord per eliminar barreres comercials", en: "A deal to remove trade barriers" },
    ],
    why: {
      es: "El arancel es un impuesto que grava los bienes importados: encarece el producto extranjero y protege a la producción nacional.",
      ca: "L'aranzel és un impost que grava els béns importats: encareix el producte estranger i protegeix la producció nacional.",
      en: "A tariff is a tax charged on imported goods: it makes foreign products dearer and shields domestic producers.",
    },
    hint: {
      es: "Piensa en lo que se paga en la aduana cuando entra un producto.",
      ca: "Pensa en el que es paga a la duana quan entra un producte.",
      en: "Think of what is paid at customs when a product comes in.",
    },
  },
  {
    id: 'c-04', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Macro y micro", ca: "Macro i micro", en: "Macro and micro" },
    q: {
      es: "¿Cuál de estas preguntas es propia de la macroeconomía?",
      ca: "Quina d'aquestes preguntes és pròpia de la macroeconomia?",
      en: "Which of these questions belongs to macroeconomics?",
    },
    options: [
      { es: "¿Por qué sube el paro en todo el país?", ca: "Per què puja l'atur a tot el país?", en: "Why is national unemployment rising?" },
      { es: "¿Qué precio debe fijar una panadería?", ca: "Quin preu ha de fixar un forn de pa?", en: "What price should a bakery charge?" },
      { es: "¿Cuántos empleados contrata una fábrica?", ca: "Quants treballadors contracta una fàbrica?", en: "How many workers will a factory hire?" },
      { es: "¿Por qué sube el precio del aguacate?", ca: "Per què puja el preu de l'alvocat?", en: "Why is the price of avocados rising?" },
    ],
    why: {
      es: "La macroeconomía estudia la economía en su conjunto: PIB, paro, inflación o crecimiento. Las decisiones de una empresa o de un mercado concreto son microeconomía.",
      ca: "La macroeconomia estudia l'economia en conjunt: PIB, atur, inflació o creixement. Les decisions d'una empresa o d'un mercat concret són microeconomia.",
      en: "Macroeconomics studies the economy as a whole: GDP, unemployment, inflation or growth. The choices of one firm or one market are microeconomics.",
    },
    hint: {
      es: "«Macro» mira el total; «micro», las partes.",
      ca: "«Macro» mira el total; «micro», les parts.",
      en: "‘Macro’ looks at the whole; ‘micro’ at the parts.",
    },
  },
  {
    id: 'c-05', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Bolsa", ca: "Borsa", en: "Stock market" },
    q: {
      es: "¿Qué se compra y se vende principalmente en la bolsa de valores?",
      ca: "Què es compra i es ven principalment a la borsa de valors?",
      en: "What is mainly bought and sold on a stock exchange?",
    },
    options: [
      { es: "Acciones de empresas", ca: "Accions d'empreses", en: "Company shares" },
      { es: "Billetes y monedas de otros países", ca: "Bitllets i monedes d'altres països", en: "Foreign notes and coins" },
      { es: "Préstamos hipotecarios", ca: "Préstecs hipotecaris", en: "Mortgage loans" },
      { es: "Seguros de coche y de hogar", ca: "Assegurances de cotxe i de la llar", en: "Car and home insurance" },
    ],
    why: {
      es: "En la bolsa se negocian valores, sobre todo acciones: partes de la propiedad de una empresa. Así las empresas captan financiación y los ahorradores invierten.",
      ca: "A la borsa es negocien valors, sobretot accions: parts de la propietat d'una empresa. Així les empreses capten finançament i els estalviadors inverteixen.",
      en: "Stock exchanges trade securities, above all shares: slices of ownership of a company. Firms raise funding there and savers invest.",
    },
    hint: {
      es: "Piensa en cómo una empresa puede repartirse entre muchos propietarios.",
      ca: "Pensa com una empresa es pot repartir entre molts propietaris.",
      en: "Think of how one company can be split among many owners.",
    },
  },
  {
    id: 'c-06', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Tipos de paro", ca: "Tipus d'atur", en: "Types of unemployment" },
    q: {
      es: "Un socorrista trabaja solo en verano y el resto del año está en paro. ¿Qué tipo de paro es?",
      ca: "Un socorrista només treballa a l'estiu i la resta de l'any està a l'atur. Quin tipus d'atur és?",
      en: "A lifeguard works only in summer and is unemployed the rest of the year. What type of unemployment is this?",
    },
    options: [
      { es: "Estacional", ca: "Estacional", en: "Seasonal" },
      { es: "Estructural", ca: "Estructural", en: "Structural" },
      { es: "Cíclico", ca: "Cíclic", en: "Cyclical" },
      { es: "Friccional", ca: "Friccional", en: "Frictional" },
    ],
    why: {
      es: "El paro estacional se debe a actividades que dependen de la época del año, como el turismo de verano o las cosechas.",
      ca: "L'atur estacional es deu a activitats que depenen de l'època de l'any, com el turisme d'estiu o les collites.",
      en: "Seasonal unemployment comes from activities that depend on the time of year, such as summer tourism or harvests.",
    },
    hint: {
      es: "Fíjate en qué hace que el trabajo aparezca y desaparezca.",
      ca: "Fixa't en què fa que la feina aparegui i desaparegui.",
      en: "Notice what makes the job appear and disappear.",
    },
  },
  {
    id: 'c-07', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Agentes económicos", ca: "Agents econòmics", en: "Economic agents" },
    q: {
      es: "¿Qué agente económico recauda impuestos y ofrece servicios como la sanidad pública?",
      ca: "Quin agent econòmic recapta impostos i ofereix serveis com la sanitat pública?",
      en: "Which economic agent collects taxes and provides services such as public healthcare?",
    },
    options: [
      { es: "El sector público", ca: "El sector públic", en: "The public sector" },
      { es: "Las familias", ca: "Les famílies", en: "Households" },
      { es: "Las empresas", ca: "Les empreses", en: "Firms" },
      { es: "El sector exterior", ca: "El sector exterior", en: "The foreign sector" },
    ],
    why: {
      es: "El sector público (Estado, comunidades autónomas y ayuntamientos) cobra impuestos y los devuelve en servicios públicos y transferencias.",
      ca: "El sector públic (Estat, comunitats autònomes i ajuntaments) cobra impostos i els retorna en serveis públics i transferències.",
      en: "The public sector (central, regional and local government) collects taxes and returns them as public services and transfers.",
    },
    hint: {
      es: "¿Quién paga los hospitales y los colegios públicos?",
      ca: "Qui paga els hospitals i les escoles públiques?",
      en: "Who pays for public hospitals and schools?",
    },
  },
  {
    id: 'c-08', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Dinero", ca: "Diner", en: "Money" },
    q: {
      es: "El saldo de tu cuenta corriente, que gastas con tarjeta o transferencia, es…",
      ca: "El saldo del teu compte corrent, que gastes amb targeta o transferència, és…",
      en: "The balance in your current account, which you spend by card or transfer, is…",
    },
    options: [
      { es: "Dinero bancario", ca: "Diner bancari", en: "Bank money" },
      { es: "Dinero mercancía", ca: "Diner mercaderia", en: "Commodity money" },
      { es: "Dinero en efectivo", ca: "Diner en efectiu", en: "Cash" },
      { es: "Una criptomoneda privada", ca: "Una criptomoneda privada", en: "A private cryptocurrency" },
    ],
    why: {
      es: "El dinero bancario son los depósitos en los bancos: no es papel ni metal, sino un apunte contable que se usa para pagar con tarjeta o transferencia.",
      ca: "El diner bancari són els dipòsits als bancs: no és paper ni metall, sinó un apunt comptable que es fa servir per pagar amb targeta o transferència.",
      en: "Bank money is the deposits held at banks: not paper or metal but an accounting entry, used to pay by card or transfer.",
    },
    hint: {
      es: "¿Dónde está guardado ese dinero y quién lo anota?",
      ca: "On estan guardats aquests diners i qui els anota?",
      en: "Where is that money kept, and who records it?",
    },
  },
  {
    id: 'c-09', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Brecha salarial", ca: "Bretxa salarial", en: "Pay gap" },
    q: {
      es: "¿Qué es la brecha salarial de género?",
      ca: "Què és la bretxa salarial de gènere?",
      en: "What is the gender pay gap?",
    },
    options: [
      { es: "La diferencia de sueldo medio por sexo", ca: "La diferència de sou mitjà per sexe", en: "The difference in average pay by sex" },
      { es: "La diferencia entre sueldo bruto y neto", ca: "La diferència entre sou brut i net", en: "The gap between gross and net pay" },
      { es: "La diferencia salarial entre países", ca: "La diferència salarial entre països", en: "Pay differences between countries" },
      { es: "La diferencia entre salario mínimo y medio", ca: "La diferència entre salari mínim i mitjà", en: "The gap between minimum and average wage" },
    ],
    why: {
      es: "Compara lo que cobran de media hombres y mujeres. Puede deberse a discriminación, a la segregación por sectores, a la jornada parcial o a interrupciones de la carrera.",
      ca: "Compara el que cobren de mitjana homes i dones. Pot deure's a discriminació, a la segregació per sectors, a la jornada parcial o a interrupcions de la carrera.",
      en: "It compares what men and women earn on average. Causes include discrimination, segregation by sector, part-time work and career breaks.",
    },
    hint: {
      es: "Piensa en qué dos grupos de trabajadores se comparan.",
      ca: "Pensa en quins dos grups de treballadors es comparen.",
      en: "Think about which two groups of workers are compared.",
    },
  },
  {
    id: 'c-10', cat: 'C', tier: 1, src: 'ECO-C',
    topic: { es: "Medidas contra el paro", ca: "Mesures contra l'atur", en: "Fighting unemployment" },
    q: {
      es: "¿Qué medida ayuda más a reducir el paro de quienes no tienen la formación que piden las empresas?",
      ca: "Quina mesura ajuda més a reduir l'atur de qui no té la formació que demanen les empreses?",
      en: "Which measure best reduces unemployment among people who lack the skills firms ask for?",
    },
    options: [
      { es: "Cursos de formación y recualificación", ca: "Cursos de formació i requalificació", en: "Training and reskilling courses" },
      { es: "Alargar la jornada laboral", ca: "Allargar la jornada laboral", en: "Making the working day longer" },
      { es: "Subir los aranceles a las importaciones", ca: "Apujar els aranzels a les importacions", en: "Raising tariffs on imports" },
      { es: "Retrasar la edad de jubilación", ca: "Endarrerir l'edat de jubilació", en: "Raising the retirement age" },
    ],
    why: {
      es: "Es una política activa de empleo: si el problema es un desajuste de habilidades, formar a los parados les permite cubrir las vacantes que existen.",
      ca: "És una política activa d'ocupació: si el problema és un desajust d'habilitats, formar els aturats els permet cobrir les vacants que hi ha.",
      en: "It is an active labour market policy: if the problem is a skills mismatch, training jobseekers lets them fill the vacancies that exist.",
    },
    hint: {
      es: "Ataca la causa: ¿qué les falta a esas personas?",
      ca: "Ataca la causa: què els falta a aquestes persones?",
      en: "Tackle the cause: what are these people missing?",
    },
  },

  // ───────────── Tier 2 (medium) ─────────────
  {
    id: 'c-11', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Flujo circular de la renta", ca: "Flux circular de la renda", en: "Circular flow of income" },
    q: {
      es: "En el flujo circular de la renta, ¿qué ofrecen las familias a las empresas?",
      ca: "En el flux circular de la renda, què ofereixen les famílies a les empreses?",
      en: "In the circular flow of income, what do households supply to firms?",
    },
    options: [
      { es: "Factores de producción, como el trabajo", ca: "Factors de producció, com el treball", en: "Factors of production, such as labour" },
      { es: "Bienes y servicios de consumo", ca: "Béns i serveis de consum", en: "Consumer goods and services" },
      { es: "Impuestos y cotizaciones", ca: "Impostos i cotitzacions", en: "Taxes and social contributions" },
      { es: "Subvenciones y ayudas", ca: "Subvencions i ajuts", en: "Subsidies and grants" },
    ],
    why: {
      es: "Las familias aportan trabajo, capital o tierra y reciben rentas (salarios, intereses, alquileres), que luego gastan en los bienes de las empresas.",
      ca: "Les famílies aporten treball, capital o terra i reben rendes (salaris, interessos, lloguers), que després gasten en els béns de les empreses.",
      en: "Households provide labour, capital or land and earn incomes (wages, interest, rent), which they then spend on firms' goods.",
    },
    hint: {
      es: "Las familias reciben salarios. ¿A cambio de qué?",
      ca: "Les famílies reben salaris. A canvi de què?",
      en: "Households receive wages. In return for what?",
    },
  },
  {
    id: 'c-12', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Desarrollo", ca: "Desenvolupament", en: "Development" },
    q: {
      es: "¿Qué tres dimensiones combina el índice de desarrollo humano (IDH)?",
      ca: "Quines tres dimensions combina l'índex de desenvolupament humà (IDH)?",
      en: "Which three dimensions does the Human Development Index (HDI) combine?",
    },
    options: [
      { es: "Salud, educación y renta", ca: "Salut, educació i renda", en: "Health, education and income" },
      { es: "PIB, inflación y paro", ca: "PIB, inflació i atur", en: "GDP, inflation and unemployment" },
      { es: "Renta, riqueza y consumo", ca: "Renda, riquesa i consum", en: "Income, wealth and consumption" },
      { es: "Educación, empleo y vivienda", ca: "Educació, ocupació i habitatge", en: "Education, jobs and housing" },
    ],
    why: {
      es: "El IDH de la ONU combina esperanza de vida, años de escolarización y renta per cápita, porque el desarrollo es más que crecer en PIB.",
      ca: "L'IDH de l'ONU combina esperança de vida, anys d'escolarització i renda per càpita, perquè el desenvolupament és més que créixer en PIB.",
      en: "The UN's HDI combines life expectancy, years of schooling and income per head, because development is more than GDP growth.",
    },
    hint: {
      es: "Piensa en lo que hace falta para una vida plena, no solo en producir.",
      ca: "Pensa en què cal per a una vida plena, no només en produir.",
      en: "Think of what a full life needs, not just output.",
    },
  },
  {
    id: 'c-13', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Unión Europea", ca: "Unió Europea", en: "European Union" },
    q: {
      es: "¿Cuál de estas es una de las cuatro libertades del mercado único de la UE?",
      ca: "Quina d'aquestes és una de les quatre llibertats del mercat únic de la UE?",
      en: "Which of these is one of the four freedoms of the EU single market?",
    },
    options: [
      { es: "Libre circulación de personas", ca: "Lliure circulació de persones", en: "Free movement of people" },
      { es: "Libertad de fijar aranceles a otros socios", ca: "Llibertat de fixar aranzels a altres socis", en: "Freedom to set tariffs on other members" },
      { es: "Libertad de cada país para emitir euros", ca: "Llibertat de cada país per emetre euros", en: "Each country's freedom to issue euros" },
      { es: "Libertad para cerrar fronteras al comercio", ca: "Llibertat per tancar fronteres al comerç", en: "Freedom to close borders to trade" },
    ],
    why: {
      es: "El mercado único garantiza la libre circulación de mercancías, servicios, personas y capitales entre los Estados miembros.",
      ca: "El mercat únic garanteix la lliure circulació de mercaderies, serveis, persones i capitals entre els estats membres.",
      en: "The single market guarantees the free movement of goods, services, people and capital between member states.",
    },
    hint: {
      es: "Las cuatro libertades tratan de lo que puede moverse sin barreras.",
      ca: "Les quatre llibertats tracten del que es pot moure sense barreres.",
      en: "The four freedoms are about what can move without barriers.",
    },
  },
  {
    id: 'c-14', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Tipos de paro", ca: "Tipus d'atur", en: "Types of unemployment" },
    q: {
      es: "Ana deja su empleo para buscar uno mejor y tarda dos meses en encontrarlo. ¿Qué tipo de paro es?",
      ca: "L'Ana deixa la feina per buscar-ne una de millor i triga dos mesos a trobar-la. Quin tipus d'atur és?",
      en: "Ana quits her job to look for a better one and takes two months to find it. What type of unemployment is this?",
    },
    options: [
      { es: "Friccional", ca: "Friccional", en: "Frictional" },
      { es: "Estructural", ca: "Estructural", en: "Structural" },
      { es: "Cíclico", ca: "Cíclic", en: "Cyclical" },
      { es: "Estacional", ca: "Estacional", en: "Seasonal" },
    ],
    why: {
      es: "El paro friccional es el tiempo de búsqueda al cambiar de empleo o al entrar en el mercado laboral. Existe incluso cuando la economía va bien.",
      ca: "L'atur friccional és el temps de cerca en canviar de feina o en entrar al mercat laboral. Existeix fins i tot quan l'economia va bé.",
      en: "Frictional unemployment is the search time when changing jobs or entering the labour market. It exists even when the economy is doing well.",
    },
    hint: {
      es: "Hay trabajo para ella; lo que lleva tiempo es dar con el adecuado.",
      ca: "Hi ha feina per a ella; el que costa temps és trobar la més adequada.",
      en: "There are jobs for her; finding the right one takes time.",
    },
  },
  {
    id: 'c-15', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Proteccionismo", ca: "Proteccionisme", en: "Protectionism" },
    q: {
      es: "Un país solo deja entrar 10.000 coches extranjeros al año. ¿Qué herramienta proteccionista es?",
      ca: "Un país només deixa entrar 10.000 cotxes estrangers l'any. Quina eina proteccionista és?",
      en: "A country lets in only 10,000 foreign cars a year. Which protectionist tool is this?",
    },
    options: [
      { es: "Un contingente o cuota de importación", ca: "Un contingent o quota d'importació", en: "An import quota" },
      { es: "Un arancel", ca: "Un aranzel", en: "A tariff" },
      { es: "Una subvención a la exportación", ca: "Una subvenció a l'exportació", en: "An export subsidy" },
      { es: "Una devaluación de la moneda", ca: "Una devaluació de la moneda", en: "A currency devaluation" },
    ],
    why: {
      es: "El contingente limita la cantidad que se puede importar. El arancel, en cambio, no fija cantidades: encarece el producto con un impuesto.",
      ca: "El contingent limita la quantitat que es pot importar. L'aranzel, en canvi, no fixa quantitats: encareix el producte amb un impost.",
      en: "A quota caps the quantity that can be imported. A tariff sets no quantity; it makes the product dearer through a tax.",
    },
    hint: {
      es: "Fíjate en si la medida actúa sobre el precio o sobre la cantidad.",
      ca: "Fixa't si la mesura actua sobre el preu o sobre la quantitat.",
      en: "Ask whether the measure acts on price or on quantity.",
    },
  },
  {
    id: 'c-16', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Activos financieros", ca: "Actius financers", en: "Financial assets" },
    q: {
      es: "Compras un bono emitido por una empresa. ¿Qué pasas a ser para ella?",
      ca: "Compres un bo emès per una empresa. Què passes a ser per a ella?",
      en: "You buy a bond issued by a company. What does that make you to the company?",
    },
    options: [
      { es: "Un acreedor: le has prestado dinero", ca: "Un creditor: li has prestat diners", en: "A creditor: you have lent it money" },
      { es: "Un accionista: eres copropietario", ca: "Un accionista: n'ets copropietari", en: "A shareholder: you are a part-owner" },
      { es: "Un cliente con derecho a descuentos", ca: "Un client amb dret a descomptes", en: "A customer entitled to discounts" },
      { es: "Un asegurado frente a sus pérdidas", ca: "Un assegurat davant de les seves pèrdues", en: "An insured party against its losses" },
    ],
    why: {
      es: "Un bono es deuda: la empresa se compromete a devolver el dinero con intereses en un plazo. Una acción, en cambio, te hace copropietario, sin devolución garantizada.",
      ca: "Un bo és deute: l'empresa es compromet a tornar els diners amb interessos en un termini. Una acció, en canvi, et fa copropietari, sense devolució garantida.",
      en: "A bond is debt: the company promises to repay the money with interest by a set date. A share, by contrast, makes you a part-owner, with no promise of repayment.",
    },
    hint: {
      es: "Piensa en qué promete la empresa a quien compra el bono.",
      ca: "Pensa què promet l'empresa a qui compra el bo.",
      en: "Think about what the company promises the person who buys the bond.",
    },
  },
  {
    id: 'c-17', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Dinero", ca: "Diner", en: "Money" },
    q: {
      es: "¿Por qué tiene valor el dinero fiduciario, como un billete de 20 €?",
      ca: "Per què té valor el diner fiduciari, com un bitllet de 20 €?",
      en: "Why does fiat money, such as a €20 note, have value?",
    },
    options: [
      { es: "Por la confianza y su curso legal", ca: "Per la confiança i el seu curs legal", en: "Trust and its legal tender status" },
      { es: "Porque está respaldado por oro", ca: "Perquè està avalat per or", en: "Because it is backed by gold" },
      { es: "Por el valor del papel con que se hace", ca: "Pel valor del paper amb què es fa", en: "Because of the paper it is made of" },
      { es: "Porque lo garantiza cada banco comercial", ca: "Perquè el garanteix cada banc comercial", en: "Each commercial bank guarantees it" },
    ],
    why: {
      es: "Su valor no viene del material ni del oro, sino de que la ley obliga a aceptarlo como medio de pago y de que la gente confía en él.",
      ca: "El seu valor no ve del material ni de l'or, sinó del fet que la llei obliga a acceptar-lo com a mitjà de pagament i que la gent hi confia.",
      en: "Its value does not come from its material or from gold, but from the law making it acceptable for payment and from people's trust in it.",
    },
    hint: {
      es: "Piensa qué pasaría si nadie quisiera aceptar ese billete.",
      ca: "Pensa què passaria si ningú no volgués acceptar aquest bitllet.",
      en: "Think what would happen if nobody would accept that note.",
    },
  },
  {
    id: 'c-18', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Distribución de la renta", ca: "Distribució de la renda", en: "Income distribution" },
    q: {
      es: "Si el coeficiente de Gini de un país vale 0, ¿qué significa?",
      ca: "Si el coeficient de Gini d'un país val 0, què vol dir?",
      en: "If a country's Gini coefficient is 0, what does it mean?",
    },
    options: [
      { es: "Todos tienen exactamente la misma renta", ca: "Tothom té exactament la mateixa renda", en: "Everyone has exactly the same income" },
      { es: "Una sola persona tiene toda la renta", ca: "Una sola persona té tota la renda", en: "One person has all the income" },
      { es: "La economía no ha crecido ese año", ca: "L'economia no ha crescut aquell any", en: "The economy did not grow that year" },
      { es: "El paro es cero", ca: "L'atur és zero", en: "Unemployment is zero" },
    ],
    why: {
      es: "El Gini mide la desigualdad de la renta de 0 a 1: 0 es igualdad perfecta y 1, desigualdad máxima (una persona lo tiene todo).",
      ca: "El Gini mesura la desigualtat de la renda de 0 a 1: 0 és igualtat perfecta i 1, desigualtat màxima (una persona ho té tot).",
      en: "The Gini measures income inequality from 0 to 1: 0 is perfect equality and 1 is maximum inequality (one person has everything).",
    },
    hint: {
      es: "El Gini mide desigualdad. ¿Qué indica su valor más bajo?",
      ca: "El Gini mesura desigualtat. Què indica el seu valor més baix?",
      en: "The Gini measures inequality. What does its lowest value tell you?",
    },
  },
  {
    id: 'c-19', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Crecimiento económico", ca: "Creixement econòmic", en: "Economic growth" },
    q: {
      es: "¿Qué impulsa el crecimiento económico de un país a largo plazo?",
      ca: "Què impulsa el creixement econòmic d'un país a llarg termini?",
      en: "What drives a country's economic growth in the long run?",
    },
    options: [
      { es: "Capital, tecnología y formación", ca: "Capital, tecnologia i formació", en: "Capital, technology and skills" },
      { es: "Imprimir más dinero", ca: "Imprimir més diners", en: "Printing more money" },
      { es: "Subir los precios de todo", ca: "Apujar els preus de tot", en: "Raising all prices" },
      { es: "Importar más de lo que se exporta", ca: "Importar més del que s'exporta", en: "Importing more than it exports" },
    ],
    why: {
      es: "A largo plazo se crece produciendo más por persona: más capital físico, mejor tecnología y trabajadores más formados (capital humano).",
      ca: "A llarg termini es creix produint més per persona: més capital físic, millor tecnologia i treballadors més formats (capital humà).",
      en: "In the long run growth comes from producing more per person: more physical capital, better technology and a more skilled workforce (human capital).",
    },
    hint: {
      es: "Piensa en qué permite producir más con las mismas personas.",
      ca: "Pensa què permet produir més amb les mateixes persones.",
      en: "Think of what lets the same people produce more.",
    },
  },
  {
    id: 'c-20', cat: 'C', tier: 2, src: 'ECO-C',
    topic: { es: "Eficiencia y equidad", ca: "Eficiència i equitat", en: "Efficiency and equity" },
    q: {
      es: "En economía, ¿a qué se refiere la equidad?",
      ca: "En economia, a què es refereix l'equitat?",
      en: "In economics, what does ‘equity’ (fairness) refer to?",
    },
    options: [
      { es: "A un reparto justo de la renta", ca: "A un repartiment just de la renda", en: "A fair distribution of income" },
      { es: "A producir el máximo con los recursos", ca: "A produir el màxim amb els recursos", en: "Getting maximum output from resources" },
      { es: "A que los precios no cambien", ca: "A fer que els preus no canviïn", en: "Keeping prices stable" },
      { es: "A que todos los bienes cuesten igual", ca: "A fer que tots els béns costin igual", en: "All goods costing the same" },
    ],
    why: {
      es: "La eficiencia busca producir lo máximo con los recursos; la equidad, que el reparto sea justo. A veces chocan: redistribuir puede costar algo de eficiencia.",
      ca: "L'eficiència busca produir el màxim amb els recursos; l'equitat, que el repartiment sigui just. De vegades xoquen: redistribuir pot costar eficiència.",
      en: "Efficiency seeks maximum output from resources; equity seeks a fair distribution. They can clash: redistributing may cost some efficiency.",
    },
    hint: {
      es: "No confundas el tamaño del pastel con cómo se reparte.",
      ca: "No confonguis la mida del pastís amb com es reparteix.",
      en: "Don't confuse the size of the cake with how it is shared.",
    },
  },

  // ───────────── Tier 3 (hard) ─────────────
  {
    id: 'c-21', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "Mercado de trabajo", ca: "Mercat de treball", en: "Labour market" },
    q: {
      es: "Una población activa de 200 personas tiene 30 en paro. ¿Cuál es la tasa de paro?",
      ca: "Una població activa de 200 persones en té 30 a l'atur. Quina és la taxa d'atur?",
      en: "An active population of 200 people has 30 unemployed. What is the unemployment rate?",
    },
    options: [
      { es: "15 %", ca: "15 %", en: "15%" },
      { es: "17,6 %", ca: "17,6 %", en: "17.6%" },
      { es: "13 %", ca: "13 %", en: "13%" },
      { es: "30 %", ca: "30 %", en: "30%" },
    ],
    why: {
      es: "Tasa de paro = parados / población activa × 100 = 30 / 200 × 100 = 15 %. Se divide entre los activos (ocupados + parados), no entre los ocupados.",
      ca: "Taxa d'atur = aturats / població activa × 100 = 30 / 200 × 100 = 15 %. Es divideix entre els actius (ocupats + aturats), no entre els ocupats.",
      en: "Unemployment rate = unemployed / active population × 100 = 30 / 200 × 100 = 15%. Divide by the active (employed + unemployed), not the employed.",
    },
    hint: {
      es: "Fíjate bien en cuál es el denominador de la tasa.",
      ca: "Fixa't bé en quin és el denominador de la taxa.",
      en: "Be careful about what the rate is divided by.",
    },
  },
  {
    id: 'c-22', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "Mercado de trabajo", ca: "Mercat de treball", en: "Labour market" },
    q: {
      es: "Hay 1.000 personas en edad de trabajar: 600 activas y 540 ocupadas. ¿Cuál es la tasa de actividad?",
      ca: "Hi ha 1.000 persones en edat de treballar: 600 actives i 540 ocupades. Quina és la taxa d'activitat?",
      en: "There are 1,000 working-age people: 600 active and 540 employed. What is the activity rate?",
    },
    options: [
      { es: "60 %", ca: "60 %", en: "60%" },
      { es: "54 %", ca: "54 %", en: "54%" },
      { es: "90 %", ca: "90 %", en: "90%" },
      { es: "10 %", ca: "10 %", en: "10%" },
    ],
    why: {
      es: "Tasa de actividad = activos / población en edad de trabajar = 600 / 1.000 = 60 %. El 54 % sería la tasa de empleo y el 10 %, la de paro.",
      ca: "Taxa d'activitat = actius / població en edat de treballar = 600 / 1.000 = 60 %. El 54 % seria la taxa d'ocupació i el 10 %, la d'atur.",
      en: "Activity rate = active / working-age population = 600 / 1,000 = 60%. 54% would be the employment rate and 10% the unemployment rate.",
    },
    hint: {
      es: "La actividad mide quién participa en el mercado laboral, trabaje o no.",
      ca: "L'activitat mesura qui participa en el mercat laboral, treballi o no.",
      en: "Activity measures who takes part in the labour market, employed or not.",
    },
  },
  {
    id: 'c-23', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "PIB", ca: "PIB", en: "GDP" },
    q: {
      es: "¿Cuál de estas operaciones suma al PIB de este año?",
      ca: "Quina d'aquestes operacions suma al PIB d'aquest any?",
      en: "Which of these transactions adds to this year's GDP?",
    },
    options: [
      { es: "Un corte de pelo en una peluquería", ca: "Un tall de cabells en una perruqueria", en: "A haircut at a hairdresser's" },
      { es: "Comprar un piso construido hace 20 años", ca: "Comprar un pis construït fa 20 anys", en: "Buying a flat built 20 years ago" },
      { es: "Comprar acciones en bolsa", ca: "Comprar accions a borsa", en: "Buying shares on the stock market" },
      { es: "Cobrar una pensión de jubilación", ca: "Cobrar una pensió de jubilació", en: "Receiving a retirement pension" },
    ],
    why: {
      es: "El PIB solo cuenta la producción nueva del periodo. Lo usado ya se contó al producirse, las acciones son operaciones financieras y las pensiones, transferencias.",
      ca: "El PIB només compta la producció nova del període. El que és de segona mà ja es va comptar, les accions són operacions financeres i les pensions, transferències.",
      en: "GDP counts only new output from the period. Used goods were counted when made, shares are financial deals and pensions are transfers.",
    },
    hint: {
      es: "Pregúntate si se ha producido algo nuevo este año.",
      ca: "Pregunta't si s'ha produït res de nou aquest any.",
      en: "Ask whether anything new was produced this year.",
    },
  },
  {
    id: 'c-24', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "PIB", ca: "PIB", en: "GDP" },
    q: {
      es: "Un molino vende harina a una panadería por 40 € y esta vende el pan por 100 €. ¿Cuánto suma al PIB?",
      ca: "Un molí ven farina a un forn per 40 € i el forn ven el pa per 100 €. Quant suma al PIB?",
      en: "A mill sells flour to a bakery for €40, and the bakery sells the bread for €100. How much is added to GDP?",
    },
    options: [
      { es: "100 €", ca: "100 €", en: "€100" },
      { es: "140 €", ca: "140 €", en: "€140" },
      { es: "60 €", ca: "60 €", en: "€60" },
      { es: "40 €", ca: "40 €", en: "€40" },
    ],
    why: {
      es: "Solo cuenta el bien final (el pan, 100 €); sumar la harina contaría su valor dos veces. Es lo mismo que sumar valores añadidos: 40 + 60 = 100 €.",
      ca: "Només compta el bé final (el pa, 100 €); sumar la farina en comptaria el valor dues vegades. És el mateix que sumar valors afegits: 40 + 60 = 100 €.",
      en: "Only the final good counts (bread, €100); adding the flour would count it twice. It equals the sum of value added: 40 + 60 = €100.",
    },
    hint: {
      es: "Cuidado con contar dos veces los bienes intermedios.",
      ca: "Compte amb comptar dues vegades els béns intermedis.",
      en: "Watch out for counting intermediate goods twice.",
    },
  },
  {
    id: 'c-25', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "PIB nominal y real", ca: "PIB nominal i real", en: "Nominal and real GDP" },
    q: {
      es: "El PIB nominal crece un 5 % en un año y los precios suben un 3 %. ¿Cuánto crece, aproximadamente, el PIB real?",
      ca: "El PIB nominal creix un 5 % en un any i els preus pugen un 3 %. Quant creix, aproximadament, el PIB real?",
      en: "Nominal GDP grows 5% in a year and prices rise 3%. Roughly how much does real GDP grow?",
    },
    options: [
      { es: "2 %", ca: "2 %", en: "2%" },
      { es: "8 %", ca: "8 %", en: "8%" },
      { es: "5 %", ca: "5 %", en: "5%" },
      { es: "3 %", ca: "3 %", en: "3%" },
    ],
    why: {
      es: "El PIB real descuenta la subida de precios: 5 % − 3 % ≈ 2 %. Solo ese 2 % es aumento de la producción; el resto es inflación.",
      ca: "El PIB real descompta la pujada de preus: 5 % − 3 % ≈ 2 %. Només aquest 2 % és augment de la producció; la resta és inflació.",
      en: "Real GDP strips out price rises: 5% − 3% ≈ 2%. Only that 2% is extra output; the rest is inflation.",
    },
    hint: {
      es: "El PIB real mide cantidades, sin el efecto de los precios.",
      ca: "El PIB real mesura quantitats, sense l'efecte dels preus.",
      en: "Real GDP measures quantities, without the price effect.",
    },
  },
  {
    id: 'c-26', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "Comercio internacional", ca: "Comerç internacional", en: "International trade" },
    q: {
      es: "En una hora, A produce 10 telas o 5 vinos, y B, 4 telas o 4 vinos. ¿Quién debería especializarse en vino?",
      ca: "En una hora, A produeix 10 teles o 5 vins, i B, 4 teles o 4 vins. Qui s'hauria d'especialitzar en vi?",
      en: "In one hour, A makes 10 cloths or 5 wines, and B makes 4 cloths or 4 wines. Who should specialise in wine?",
    },
    options: [
      { es: "B, aunque es menos productivo", ca: "B, tot i que és menys productiu", en: "B, even though it is less productive" },
      { es: "A, porque produce más vino por hora", ca: "A, perquè produeix més vi per hora", en: "A, because it makes more wine per hour" },
      { es: "Ninguno: A debe producirlo todo", ca: "Cap: A ho ha de produir tot", en: "Neither: A should produce everything" },
      { es: "Los dos a partes iguales", ca: "Tots dos a parts iguals", en: "Both, in equal shares" },
    ],
    why: {
      es: "Un vino le cuesta a A 2 telas y a B solo 1. B tiene ventaja comparativa en vino, aunque A tenga ventaja absoluta en ambos bienes.",
      ca: "Un vi li costa a A 2 teles i a B només 1. B té avantatge comparatiu en vi, encara que A tingui avantatge absolut en tots dos béns.",
      en: "One wine costs A 2 cloths but costs B only 1. B has the comparative advantage in wine, even though A has the absolute advantage in both.",
    },
    hint: {
      es: "Compara el coste de oportunidad de un vino para A y para B.",
      ca: "Compara el cost d'oportunitat d'un vi per a A i per a B.",
      en: "Compare the opportunity cost of one wine for A and for B.",
    },
  },
  {
    id: 'c-27', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "Integración económica", ca: "Integració econòmica", en: "Economic integration" },
    q: {
      es: "¿Qué añade una unión aduanera a una zona de libre comercio?",
      ca: "Què afegeix una unió duanera a una zona de lliure comerç?",
      en: "What does a customs union add to a free trade area?",
    },
    options: [
      { es: "Un arancel exterior común", ca: "Un aranzel exterior comú", en: "A common external tariff" },
      { es: "Una moneda única", ca: "Una moneda única", en: "A single currency" },
      { es: "Libre circulación de trabajadores", ca: "Lliure circulació de treballadors", en: "Free movement of workers" },
      { es: "Eliminar los aranceles entre socios", ca: "Eliminar els aranzels entre socis", en: "Removing tariffs between members" },
    ],
    why: {
      es: "En la zona de libre comercio los socios suprimen aranceles entre sí; la unión aduanera añade un arancel común frente a terceros. Después llegan el mercado común y la unión monetaria.",
      ca: "A la zona de lliure comerç els socis suprimeixen aranzels entre ells; la unió duanera hi afegeix un aranzel comú davant de tercers. Després arriben el mercat comú i la unió monetària.",
      en: "In a free trade area members drop tariffs among themselves; a customs union adds a common tariff on outsiders. Next come the common market and monetary union.",
    },
    hint: {
      es: "Ordena las etapas de integración y mira qué añade cada una a la anterior.",
      ca: "Ordena les etapes d'integració i mira què afegeix cadascuna a l'anterior.",
      en: "Put the integration stages in order and see what each one adds.",
    },
  },
  {
    id: 'c-28', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "Creación de dinero", ca: "Creació de diner", en: "Money creation" },
    q: {
      es: "Coeficiente de reserva del 10 %. Entra un depósito nuevo de 1.000 €. Contándolo, ¿a cuánto pueden llegar como máximo los depósitos?",
      ca: "Coeficient de reserva del 10 %. Entra un dipòsit nou de 1.000 €. Comptant-lo, fins a quant poden arribar com a màxim els dipòsits?",
      en: "Reserve ratio: 10%. A new €1,000 deposit comes in. Counting that deposit, what is the most that total deposits can reach?",
    },
    options: [
      { es: "10.000 €", ca: "10.000 €", en: "€10,000" },
      { es: "1.100 €", ca: "1.100 €", en: "€1,100" },
      { es: "900 €", ca: "900 €", en: "€900" },
      { es: "100 €", ca: "100 €", en: "€100" },
    ],
    why: {
      es: "Los bancos prestan el 90 %, ese préstamo vuelve como depósito y se repite. Multiplicador = 1 / 0,10 = 10; 1.000 € × 10 = 10.000 € de depósitos como máximo.",
      ca: "Els bancs presten el 90 %, aquest préstec torna com a dipòsit i es repeteix. Multiplicador = 1 / 0,10 = 10; 1.000 € × 10 = 10.000 € de dipòsits com a màxim.",
      en: "Banks lend 90%, the loan comes back as a deposit and the cycle repeats. Multiplier = 1 / 0.10 = 10; €1,000 × 10 = at most €10,000 in deposits.",
    },
    hint: {
      es: "El dinero prestado vuelve a depositarse una y otra vez.",
      ca: "Els diners prestats es tornen a dipositar una vegada i una altra.",
      en: "Lent money gets deposited again, over and over.",
    },
  },
  {
    id: 'c-29', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "Tipos de paro", ca: "Tipus d'atur", en: "Types of unemployment" },
    q: {
      es: "Muchos empleados de sucursales bancarias pierden su puesto por la banca digital y su perfil ya no se pide. ¿Qué paro es?",
      ca: "Molts empleats d'oficines bancàries perden la feina per la banca digital i el seu perfil ja no es demana. Quin atur és?",
      en: "Many bank-branch staff lose their jobs to digital banking, and their skills are no longer wanted. What unemployment is this?",
    },
    options: [
      { es: "Estructural", ca: "Estructural", en: "Structural" },
      { es: "Cíclico", ca: "Cíclic", en: "Cyclical" },
      { es: "Friccional", ca: "Friccional", en: "Frictional" },
      { es: "Estacional", ca: "Estacional", en: "Seasonal" },
    ],
    why: {
      es: "Es estructural: un cambio duradero (la tecnología) deja habilidades sin demanda. No es cíclico, porque no depende de una caída pasajera de la demanda.",
      ca: "És estructural: un canvi durador (la tecnologia) deixa habilitats sense demanda. No és cíclic, perquè no depèn d'una caiguda passatgera de la demanda.",
      en: "It is structural: a lasting change (technology) leaves skills unwanted. It is not cyclical, as it does not depend on a passing slump in demand.",
    },
    hint: {
      es: "¿Volverán esos puestos cuando la economía mejore?",
      ca: "Tornaran aquests llocs de feina quan l'economia millori?",
      en: "Will those jobs come back when the economy picks up?",
    },
  },
  {
    id: 'c-30', cat: 'C', tier: 3, src: 'ECO-C',
    topic: { es: "Demanda y oferta agregadas", ca: "Demanda i oferta agregades", en: "Aggregate demand and supply" },
    q: {
      es: "Si las exportaciones aumentan mucho, ¿qué se espera a corto plazo en el modelo de demanda y oferta agregadas?",
      ca: "Si les exportacions augmenten molt, què s'espera a curt termini en el model de demanda i oferta agregades?",
      en: "If exports rise sharply, what does the aggregate demand and supply model predict in the short run?",
    },
    options: [
      { es: "Suben la producción y los precios", ca: "Pugen la producció i els preus", en: "Output and prices both rise" },
      { es: "Bajan la producción y los precios", ca: "Baixen la producció i els preus", en: "Output and prices both fall" },
      { es: "Sube la producción y bajan los precios", ca: "Puja la producció i baixen els preus", en: "Output rises and prices fall" },
      { es: "Suben los precios y baja la producción", ca: "Pugen els preus i baixa la producció", en: "Prices rise and output falls" },
    ],
    why: {
      es: "Las exportaciones (X) forman parte de la demanda agregada: C + I + G + X − M. Si suben, la DA se desplaza a la derecha: más producción y precios más altos.",
      ca: "Les exportacions (X) formen part de la demanda agregada: C + I + G + X − M. Si pugen, la DA es desplaça a la dreta: més producció i preus més alts.",
      en: "Exports (X) are part of aggregate demand: C + I + G + X − M. When they rise, AD shifts right: more output and a higher price level.",
    },
    hint: {
      es: "Identifica qué curva se desplaza y hacia dónde.",
      ca: "Identifica quina corba es desplaça i cap on.",
      en: "Identify which curve shifts, and in which direction.",
    },
  },
]);
