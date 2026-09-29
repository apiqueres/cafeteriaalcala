/* ==========================================================================
   Datos de la carta de Cafetería Alcalá
   Precios en euros. Fuente: Carta-Alcala_castellano.pdf
   Las categorías de bebidas están pendientes de precios (price: null).
   ========================================================================== */

window.ALCALA_PROMOS = [
  { name: 'Plato de jamón', weight: '100 gr', price: 16.00,
    desc: '100 gramos cortados y envasados a mano por cortadores profesionales. Jamón ibérico de bellota 50% raza ibérica.' },
  { name: 'Plato de queso', weight: '150 gr', price: 9.50,
    desc: 'Medalla de ORO en los World Cheese Awards 2023. Premiado durante 15 años seguidos.' },
  { name: 'Surtido de ibéricos', weight: '100 gr', price: 12.00,
    desc: 'Salchichón, chorizo y lomo 100% bellota. Embutido premium de raza 100% ibérica autóctona.' },
  { name: 'Plato de cecina IGP León', weight: '100 gr', price: 10.50,
    desc: 'Cecina Suprema Premium, las mejores piezas con el nivel perfecto de infiltración.' }
];

window.ALCALA_MENU = [
  /* ------------------------------ COMIDA ------------------------------ */
  {
    id: 'hamburguesas', group: 'comida', name: 'Hamburguesas y tacos', image: 'assets/cat-hamburguesas.jpg',
    note: 'Todas nuestras hamburguesas se pueden acompañar con huevo (+1 €) o con queso de cabra (+1 €). Pan sin gluten disponible (+1,20 €).',
    items: [
      { name: 'Taco Pulled Pork', price: 13.50, desc: 'Carne desmigada de cerdo, lechuga, tomate, aguacate, cilantro, salsa agria, queso fresco y pepinillos.' },
      { name: 'Taco Alcalá', price: 14.00, desc: 'Solomillo de pollo rebozado, lechuga, tomate, queso cheddar, cebolla, pimiento, salsa agria y salsa sweet chili (ligeramente picante).', tag: 'De la casa' },
      { name: 'Burger de pollo', price: 12.35, desc: 'Hamburguesa de pollo de 180 gr. con tomate, ensalada, bacon y queso. Con guarnición de patatas fritas.' },
      { name: 'Burger de vacuno y cerdo', price: 12.50, desc: 'Hamburguesa de vacuno y cerdo de 140 gr. con tomate, ensalada, bacon y queso. Con guarnición de patatas fritas.' },
      { name: 'Burger de buey', price: 14.85, desc: 'Hamburguesa de buey de 250 gr. con tomate, ensalada, bacon y queso. Con guarnición de patatas fritas.' },
      { name: 'Burger Pulled Pork', price: 13.50, desc: 'Carne desmigada de cerdo con tomate, ensalada, bacon y queso. Con guarnición de patatas fritas.' },
      { name: 'Beyond Burger', price: 13.80, desc: 'Hamburguesa 100% vegetal Beyond Meat: 20 g de proteína vegetal, sin OGM, sin soja ni gluten. Complementos: patatas fritas 1,25 €, verduras a la plancha 2,50 €, láminas de boniato 1,60 €.', tag: 'Vegetal' }
    ]
  },
  {
    id: 'ensaladas', group: 'comida', name: 'Ensaladas y entrantes', image: 'assets/cat-ensaladas.jpg',
    items: [
      { name: 'Ensalada griega', price: 12.00, desc: 'Tomates, aceitunas negras, pimiento verde y rojo, cebolla y queso fresco sobre mezcla de lechugas, aliñada con nuestra vinagreta griega.' },
      { name: 'Ensalada César', price: 13.00, desc: 'Tomate cherry, queso parmesano, picatostes y pechuga rebozada. Con queso de cabra +1,00 €.' },
      { name: 'Ensalada especial', price: 12.45, desc: 'Lechuga, tomate, atún, huevo duro, pimiento asado y espárragos.' },
      { name: 'Ensalada de temporada', price: 12.45, desc: 'Elaborada con hortalizas de temporada.' },
      { name: 'Ensaladilla rusa', price: 9.50 },
      { name: 'Plato de jamón', price: 16.00, desc: '100 gr. de jamón de bellota ibérico 50% raza ibérica.' },
      { name: 'Plato de queso', price: 9.50, desc: 'Medalla de ORO en los World Cheese Awards 2023.' },
      { name: 'Plato de cecina León', price: 10.50, desc: 'Cecina Suprema Premium con el nivel perfecto de infiltración.' },
      { name: 'Plato de surtido ibéricos', price: 12.00, desc: 'Salchichón, chorizo y lomo 100% bellota.' },
      { name: 'Cesta de panes variados', price: 3.50, desc: 'Con tomate y aceite.' },
      { name: 'Cesta de pan normal', price: 1.50 }
    ]
  },
  {
    id: 'bocadillos', group: 'comida', name: 'Bocadillos', image: 'assets/cat-bocadillos.jpg',
    note: 'Suplementos: patatas fritas 1,25 € · verduras a la plancha 2,50 € · láminas de boniato 1,60 €.',
    items: [
      { name: 'Jamón bellota ibérico', price: 6.50, desc: 'Bocadillo frío.' },
      { name: 'Queso manchego', price: 5.50, desc: 'Bocadillo frío.' },
      { name: 'Chivito', price: 7.00, desc: 'Lomo, queso, cebolla frita y bacon. Bocadillo caliente.' },
      { name: 'Atún', price: 5.50, desc: 'Bocadillo frío.' },
      { name: 'Sobrasada', price: 5.50, desc: 'Bocadillo frío.' },
      { name: 'Atún especial', price: 6.00, desc: 'Atún, anchoas, aceitunas y tomate. Bocadillo frío.' },
      { name: 'Lomo', price: 6.00, desc: 'Bocadillo caliente.' },
      { name: 'Pechuga de pollo', price: 6.00, desc: 'Bocadillo caliente.' },
      { name: 'Bacon', price: 5.50, desc: 'Bocadillo caliente.' },
      { name: 'Longanizas (3)', price: 5.65, desc: 'Bocadillo caliente.' },
      { name: 'Tortilla francesa', price: 4.85, desc: 'Bocadillo caliente.' },
      { name: 'Tortilla a elegir', price: 5.50, desc: 'Bocadillo caliente.' },
      { name: 'Calamares', price: 6.75, desc: 'Bocadillo caliente.' }
    ]
  },
  {
    id: 'sandwiches', group: 'comida', name: 'Sandwiches', image: 'assets/cat-sandwiches.jpg',
    note: 'Suplementos: patatas fritas 1,25 € · verduras a la plancha 2,50 € · láminas de boniato 1,60 €.',
    items: [
      { name: 'Sandwich Alcalá', price: 13.40, desc: 'Tres pisos de pechuga de pollo con bacon crujiente, lechuga, tomate y huevo. Incluye ración de patatas.', tag: 'De la casa' },
      { name: 'Sandwich Primavera', price: 12.80, desc: 'Frío. Jamón York, queso, lechuga, tomate, pollo y salsa César. Incluye ración de patatas.' },
      { name: 'Mixto', price: 4.80, desc: 'Jamón york y queso.' },
      { name: 'Jamón serrano y queso', price: 5.20 },
      { name: 'Mixto con huevo frito', price: 6.00, desc: 'Jamón york, queso y huevo frito.' },
      { name: 'Pollo', price: 8.00, desc: 'Lechuga, tomate, pollo, queso y huevo duro. Incluye ración de patatas.' },
      { name: 'Vegetal', price: 8.00, desc: 'Lechuga, tomate, atún, mahonesa, huevo duro y espárrago. Incluye ración de patatas.' }
    ]
  },
  {
    id: 'patatas', group: 'comida', name: 'Especialidades con patatas', image: 'assets/cat-patatas.jpg',
    items: [
      { name: 'Huevos rotos', price: 10.50, desc: 'Huevos rotos con jamón, chorizo y patatas.' },
      { name: 'Torreta semipicante de patatas', price: 9.60, desc: 'Torre de patatas caseras.', tag: 'Picante suave' },
      { name: 'Patatas Alcalá', price: 10.50, desc: 'Patatas fritas con beicon y queso fundido.', tag: 'De la casa' },
      { name: 'Patatas dipear', price: 9.50, desc: 'Patatas con variedad de salsas.' },
      { name: 'Láminas de boniato', price: 7.95, desc: 'Láminas de boniato para picotear.' },
      { name: 'Patatas bravas', price: 6.95 },
      { name: 'Cesta de patatas', price: 5.80 }
    ]
  },
  {
    id: 'infantil', group: 'comida', name: 'Menú infantil', image: 'assets/cat-infantil.jpg',
    note: 'Precio del menú: 11,40 €. Incluye agua, refresco o zumo. Válido para niños hasta 12 años.',
    items: [
      { name: 'Primero a elegir', price: null, desc: 'Spaghetti boloñesa o hamburguesa con patatas.' },
      { name: 'Postre', price: null, desc: 'Helado de vainilla con lacasitos.' },
      { name: 'Menú completo', price: 11.40, desc: 'Primero + postre + bebida.' }
    ]
  },
  {
    id: 'pastas', group: 'comida', name: 'Pastas', image: 'assets/cat-pastas.jpg',
    items: [
      { name: 'Lasaña boloñesa', price: 8.80 },
      { name: 'Spaghetti boloñesa', price: 9.00, desc: 'Suplemento de queso +1 €.' },
      { name: 'Moussaka', price: 9.40, desc: 'Lasaña griega de berenjenas con mezcla de carnes de ternera, cerdo y ave, cebolla, tomate y un toque de salsa.' },
      { name: 'Spaghetti carbonara', price: 8.70, desc: 'Suplemento de queso +1 €.' }
    ]
  },
  {
    id: 'carnes', group: 'comida', name: 'Carnes', image: 'assets/cat-carnes.jpg',
    note: 'Suplementos: patatas fritas 1,25 € · verduras a la plancha 2,50 € · láminas de boniato 1,60 €.',
    items: [
      { name: 'Croqueta de jamón ibérico', price: 2.00, desc: '1 unidad.' },
      { name: 'Croquetas', price: 8.00, desc: 'De setas y jamón serrano. 6 unidades.' },
      { name: 'Codillo', price: 16.30, desc: 'Acompañado de patatas fritas.' },
      { name: 'Brochetas de pollo', price: 13.30, desc: 'Acompañadas de patata hervida.' },
      { name: 'Costillas barbacoa', price: 18.40, desc: 'Ración completa con patata hervida. Opción de media ración por 14,80 €.' },
      { name: 'Carrillera de cerdo', price: 15.40, desc: 'Acompañada de patata hervida.' },
      { name: 'Pollo con curry y arroz', price: 12.50 },
      { name: 'Alitas de pollo', price: 7.80, desc: 'Alitas de pollo a la barbacoa.' },
      { name: 'Cordero', price: 19.20, desc: 'Acompañado de patata hervida.' },
      { name: 'Nuggets', price: 10.00, desc: 'Nuggets de solomillo de pollo casero.' },
      { name: 'Rabo de toro', price: 16.10, desc: 'Acompañado de arroz.' },
      { name: 'Pechuga de pollo', price: 11.30, desc: 'Empanada. Acompañada con pasta y patatas fritas.' },
      { name: 'Secreto ibérico', price: 13.00, desc: 'Acompañado de salsa chimichurri (mezcla de pimiento, ajo, cebolla…).' }
    ]
  },
  {
    id: 'pescados', group: 'comida', name: 'Pescados', image: 'assets/cat-pescados.jpg',
    items: [
      { name: 'Calamar entero', price: 13.00 },
      { name: 'Pulpo a la gallega', price: 21.00 },
      { name: 'Tostada de ahumados', price: 7.50 },
      { name: 'Bacalao con tomate', price: 15.40, desc: 'Acompañado de patata hervida.' },
      { name: 'Sepia', price: 13.75 },
      { name: 'Emperador', price: 14.95 },
      { name: 'Calamares a la romana', price: 11.00 },
      { name: 'Chipirones', price: 11.90 }
    ]
  },
  {
    id: 'postres', group: 'comida', name: 'Postres', image: 'assets/cat-postres.jpg',
    items: [
      { name: 'Flan casero', price: 4.20 },
      { name: 'Coulant de chocolate', price: 4.80 },
      { name: 'Torrija casera', price: 5.30, desc: 'Con helado de leche merengada.' },
      { name: 'Bowl Alcalá', price: 7.10, desc: 'Yogur griego con frutas de temporada y muesli.', tag: 'De la casa' },
      { name: 'Helado de leche merengada', price: 4.90 },
      { name: 'Tarta Tatín', price: 5.30, desc: 'Tarta de manzana caliente con helado de vainilla.' },
      { name: 'Tarta 3 chocolates', price: 5.30 },
      { name: 'Tarta de queso', price: 5.50, desc: 'Con frutos rojos.' },
      { name: 'Tortitas con miel', price: 5.30, desc: 'Con chocolate +0,50 € · con caramelo +0,50 €.' }
    ]
  },
  {
    id: 'vegana', group: 'comida', name: 'Carta vegana', image: 'assets/cat-vegana.jpg',
    items: [
      { name: 'Láminas de boniato', price: 7.95, desc: 'Boniatos dulces cortados en finas láminas, dorados y con un ligero toque de sal.' },
      { name: 'Peruvian Salad', price: 11.50, desc: 'Quinoa cocida, pimiento verde y rojo, garbanzos, maíz dulce, nueces y pasas, aromatizada con aceite de oliva y nuestra vinagreta especial.' },
      { name: 'Season Green Salad', price: 11.95, desc: 'Hortalizas y verduras de temporada, frescas y preparadas al momento, acompañadas de vuna (atún vegano).', tag: 'Nuevo' },
      { name: 'Nuggets veganos', price: 7.25, desc: 'Nuestra versión vegana de un clásico. Crujientes, a partir de proteínas vegetales de soja y trigo.', tag: 'Nuevo' },
      { name: 'Hamburguesa Penélope', price: 9.50, desc: 'Hamburguesa vegana en pan de semillas con tomate, cebolla y pepinillos, un toque de mostaza y patata asada.', tag: 'Nuevo' },
      { name: 'Sándwich Pitágoras', price: 9.85, desc: 'Pan con semillas, tofu, brotes verdes, espinacas, láminas de tomate y aguacate.' },
      { name: 'Falafel', price: 7.85, desc: 'Albóndigas especiadas de garbanzos y remolacha.', tag: 'Nuevo' },
      { name: 'Salteado vegano de pollo', price: 10.50, desc: 'Todo el sabor del pollo con nuestras verduras frescas, totalmente vegano.', tag: 'Nuevo' },
      { name: 'Bocadillo de pollo vegano', price: 7.10, desc: 'Pollo empanado crujiente, lechuga, tomate, pan y mayonesa, totalmente vegano.', tag: 'Nuevo' },
      { name: 'Batido Natalie Portman', price: 7.30, desc: 'Green Detox Smoothie: manzana, pepino, apio, espinacas, jengibre y zumo de naranja.' },
      { name: 'Season Fruits Salad', price: 7.90, desc: 'Frutas de temporada preparadas al momento, acompañadas de zumo natural.' }
    ]
  },
  {
    id: 'singluten', group: 'comida', name: 'Carta sin gluten', image: 'assets/cat-ensaladas.jpg',
    note: 'Recuerda decirle al camarero que eres celíaco. Todas las comidas sin gluten van identificadas con una banderita. Las hamburguesas sin gluten tienen un suplemento de pan de 1,20 €.',
    items: [
      { name: 'Beyond Burger', price: 13.80, desc: 'Hamburguesa vegetal sin soja ni gluten.' },
      { name: 'Cualquiera de nuestras burgers', price: null, desc: 'Con pan sin gluten (+1,20 €).' },
      { name: 'Ensalada especial', price: 12.45 },
      { name: 'Plato de jamón', price: 16.00 },
      { name: 'Plato de queso', price: 9.50 },
      { name: 'Codillo', price: 16.30 },
      { name: 'Brochetas de pollo', price: 13.30 },
      { name: 'Bacalao con tomate', price: 15.40 },
      { name: 'Emperador', price: 14.95 },
      { name: 'Gran parte de la carta vegana', price: null, desc: 'Consulta los platos disponibles.' }
    ]
  },

  /* ------------------------------ BEBIDAS ------------------------------ */
  {
    id: 'desayunos', group: 'bebida', name: 'Desayunos', image: 'assets/cat-desayunos.jpg',
    note: 'Precios pendientes de confirmar.',
    items: [
      { name: 'Tostada con tomate y aceite', price: null },
      { name: 'Tostada con jamón ibérico', price: null },
      { name: 'Tostada con aguacate', price: null },
      { name: 'Croissant a la plancha', price: null },
      { name: 'Bollería del día', price: null },
      { name: 'Zumo de naranja natural', price: null },
      { name: 'Desayuno Alcalá', price: null, desc: 'Café + tostada + zumo natural.', tag: 'Combinado' }
    ]
  },
  {
    id: 'cafes', group: 'bebida', name: 'Cafés', image: 'assets/cat-cafes.jpg',
    note: 'Precios pendientes de confirmar.',
    items: [
      { name: 'Café solo', price: null },
      { name: 'Cortado', price: null },
      { name: 'Café con leche', price: null },
      { name: 'Capuccino', price: null },
      { name: 'Flat white', price: null },
      { name: 'Latte', price: null },
      { name: 'Café bombón', price: null },
      { name: 'Carajillo', price: null },
      { name: 'Té e infusiones', price: null },
      { name: 'Chocolate caliente', price: null }
    ]
  },
  {
    id: 'cervezas', group: 'bebida', name: 'Cervezas', image: 'assets/cat-cervezas.jpg',
    note: 'Precios pendientes de confirmar.',
    items: [
      { name: 'Caña', price: null },
      { name: 'Doble', price: null },
      { name: 'Jarra', price: null },
      { name: 'Tercio', price: null },
      { name: 'Cerveza tostada', price: null },
      { name: 'Clara con limón', price: null },
      { name: 'Cerveza sin alcohol', price: null },
      { name: 'Cerveza artesana', price: null }
    ]
  },
  {
    id: 'vinos', group: 'bebida', name: 'Vinos', image: 'assets/cat-vinos.jpg',
    note: 'Precios pendientes de confirmar.',
    items: [
      { name: 'Copa de vino tinto', price: null },
      { name: 'Copa de vino blanco', price: null },
      { name: 'Copa de vino rosado', price: null },
      { name: 'Botella de tinto', price: null },
      { name: 'Botella de blanco', price: null },
      { name: 'Cava / espumoso', price: null },
      { name: 'Sangría', price: null },
      { name: 'Tinto de verano', price: null }
    ]
  },
  {
    id: 'cocteles', group: 'bebida', name: 'Cócteles', image: 'assets/cat-cocteles.jpg',
    note: 'Precios pendientes de confirmar.',
    items: [
      { name: 'Mojito', price: null },
      { name: 'Gin tonic', price: null },
      { name: 'Aperol Spritz', price: null },
      { name: 'Caipirinha', price: null },
      { name: 'Piña colada', price: null },
      { name: 'Margarita', price: null },
      { name: 'Daiquiri', price: null },
      { name: 'Cócteles sin alcohol', price: null }
    ]
  }
];
