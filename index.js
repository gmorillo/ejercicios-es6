/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.

1.1 Ejecuta esta función sin pasar ningún parametro
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros */

const sum = (...numbers) => {
  let sum = 0
  let tamano = numbers.lenght
  let mensaje
  for (const number of numbers) {
    sum += number
  }
  console.log(`${sum}`)
}

//1,1
sum()

//1.2
sum(4)

//1.3
sum(15, 37)

///////////*********************************************************//////////////////////////// */

/*
2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

2.3 En base al siguiente javascript, usa destructuring para crear 2 
variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

2.4 En base al siguiente javascript, usa destructuring para crear las 
variables name y itv con sus respectivos valores. Posteriormente crea 
3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
*/


//2.1
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020} 
const {title, gender, year} = game;

console.log(title);
console.log(gender);
console.log(year);


//2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//!2.3
//!const animalFunction = () => {
//!  return {name: 'Bengal Tiger', race: 'Tiger'}
//!};

//2.4
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };
const {name, itv} = car;
const [anio1, anio2, anio3] = itv;

console.log("name: " +name);
console.log("Array ITV: " +itv);
console.log("anio1: " +anio1);
console.log("anio2: " +anio2);
console.log("anio3: " +anio3);

///////////////////////****************************************************************** */

/**
 * 3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
 */

//3.1
const pointsList = [32, 54, 21, 64, 75, 43]
const newArray = [];

for (const pl of pointsList) {
  newArray.push(pl);
}

console.table(newArray);

//3.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const newObject = {...toy};

console.table(newObject);

//3.4
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const arrayUnion = [...pointsList1, ...pointsLis2];

console.table(arrayUnion);

//3.5
//!const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
//!const [color1, , ...otrosColores] = colors;
//!
//!const newArrayColors = [];
//!
//!for (const color of colors) {
//!  newArrayColors.push(color);
//!}
//!
//!console.log(newArrayColors);
//!console.log(colors);

/**
 * 4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/
  const users = [
    {id: 1, name: 'Abel'},
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'},
    {id:4, name: 'Amanda'}
  ];
  const names = users.map(user => user.name);
  console.table(names);

/*
4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
//!const $$users = [
//!	{id: 1, name: 'Abel'},
//!	{id:2, name: 'Julia'},
//!	{id:3, name: 'Pedro'},
//!	{id:4, name: 'Amanda'}
//!];
//!
//!const nombres = $$users.map(usuario => {
//!  if (usuario.name.startsWith('A')) {
//!    return 'Anacleto';
//!  } else {
//!    return usuario.name;
//!  }
//!});
//!console.log(nombres);

/**
 * otra opción es
 * const nombres = $$users.map(usuario => usuario.name.startsWith('A') ? 'Anacleto' : usuario.name);
 * console.log(nombres); // ['Anacleto', 'Julia', 'Pedro', 'Anacleto']
 */

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.
 */
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const nombres = cities.map(city => (city.isVisited === true) ? city.name + ' (Visitado)' : city.name);
console.table(nombres);

/* 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18 */
const ages51 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const age = ages51.filter(age51 => age51 > 18);

console.table(age.sort((a, b) => a - b));

/* 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par. */
const ages52 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const pares = ages52.filter(num => num % 2 === 0);
console.table(pares.sort((a, b) => a - b));

/* 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'. */
const streamers53 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const gameMorePlayed53 = streamers53.filter(streamer => streamer.gameMorePlayed === "League of Legends");
console.table(gameMorePlayed53);

/* 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación. */
const streamers54 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const comprobacion = streamers54.filter(streamer => streamer.name.includes("u"));
console.table(comprobacion);

/* 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35. */

const comprobacion55 = streamers54.filter(streamer => streamer.gameMorePlayed
  .includes("Legends"))
  .filter(streamer => streamer.age > 35)
  .map(streamer => ({ ...streamer, nombre: streamer.gameMorePlayed.toUpperCase() }));
console.table(comprobacion55);

/*
Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
*/

//!const streamers = [
//!	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
//!	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
//!	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
//!	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
//!];
//!
//!const input = document.querySelector('input[data-function="toFilterStreamers"]');
//!
//!input.addEventListener('keyup', () => {
//!  const texto = input.value.toLowerCase();
//!  const streamersFiltrados = streamers.filter(streamer => streamer.name.toLowerCase().includes(texto));
//!  console.log(streamersFiltrados);
//!});


/* 6.1 Dado el siguiente array, usa .find() para econtrar el número 100. */
const numbers = [32, 21, 63, 95, 100, 67, 43];
let condicion = numbers.find((number) => number === 100) ? 'Se ha encontrado el número 100 en el array' : `no existe el número  en el array`

console.log(condicion);

/* 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010. */
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

let findingMovie = movies.find((movie) => movie.date === 2010);

console.table(findingMovie);

/* 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado. */
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let AlienName = aliens.find((alien) => alien.name === "Cucushumushu" );
let mutation = mutations.find((mutation) => mutation.name === "Porompompero");

const AlienMutation = {...AlienName, mutation}

console.log(AlienMutation);

/* 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce(). */

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let cantidadNotas = exams.length;

/* 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce(). */

const sum72 = exams.reduce((acc,exam) => acc += exam.score, 0);
console.log(sum72);

/* 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce(). */
const promedio = sum72 / cantidadNotas;
console.log(promedio);

/* 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
array .gender. */

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

const rpgVideoGames = videogames.filter((game) => game.genders.includes("RPG"));
const promedioVideoGames = rpgVideoGames.length;
const mediaVideoGames = rpgVideoGames.reduce((acc,game) => acc += game.score, 0);
console.log(mediaVideoGames/promedioVideoGames);

/* 9,1 Dado el siguiente javascript usa forof para recorrer el array de películas, 
genera un nuevo array con las categorías de las películas e imprime por 
consola el array de categorías. Ten en cuenta que las categorías no deberían 
repetirse.

Para filtrar las categorías puedes ayudarte de la función .includes(). */

const movies91 = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categories = [];
for (const movie of movies91) {
  for (const category of movie.categories) {
    if(!categories.includes(category)){
      categories.push(category);
    }
  }
}

console.log(categories);

/* Dado el siguiente javascript usa forof y forin para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios. */
/*
//!const users10 = [
//!  {
//!    name: "Alberto",
//!    favoritesSounds: {
//!      waves: { format: "mp3", volume: 50 },
//!      rain: { format: "ogg", volume: 60 },
//!      firecamp: { format: "mp3", volume: 80 },
//!    },
//!  },
//!  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
//!  },
//!  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
//!  },
//!  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
//!  },
//!];//!

//!let totalVolume = 0;
//!let totalSounds = 0;//!

//!for (const user of users10) {
//!  for (const sound in user.favoritesSounds) {
//!    totalVolume += user.favoritesSounds[sound].volume;
//!    totalSounds++;
//!  }
//!}//!

//!const mediaVolume = totalVolume / totalSounds;
//!console.log(`La media del volumen de todos los sonidos favoritos es: ${mediaVolume}`);
*/
/**
 * Dado el siguiente javascript usa forof y forin para saber cuantas veces ha 
sido cada sonido agregado por los usuarios a favorito.

Para ello recorre la lista de usuarios y usa forin para recoger el nombre 
de los sonidos que el usuario tenga como favoritos.

Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada 
vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a 
la vez un buen reto y oportunidad para comprender que hay muchas formas de 
hacer las cosas en javascript.
 */
const users11 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const soundCount = {};

for (const user of users11) {
  for (const sound in user.favoritesSounds) {
    if (soundCount[sound]) {
      soundCount[sound]++;
    } else {
      soundCount[sound] = 1;
    }
  }
}

console.log(soundCount);

/* Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos. */

//Sugerencia de función:
function findArrayIndex(array, text) {}

//Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

let texto = "Rey"
let element = [];
let newArray13 = [...mainCharacters];
let key;

for (key in mainCharacters) {
  if (Object.hasOwnProperty.call(mainCharacters, key)) {
    element = mainCharacters[key];
  }
  if(element === texto){
    if(key){
      console.log(key);

      /* Usando la función anterior beneficiate de poder conocer el indice del array 
      para crear una función llamada removeItem que pasandole un array y un texto 
      como parametros (los mismos parametros que en el anterior ejercicio) llame a 
      la función anteriormente creada findArrayIndex y obten el indice para 
      posteriormente usar la función de javascript .splice() para eliminar el 
      elemento del array.

      Finalmente retorna el array.

      De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
      correctamente. */
      mainCharacters.splice(key, 1);
      
    }
  }
}

console.log(mainCharacters);
findArrayIndex(mainCharacters, texto);

/**
 * Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random()
 */
function rollDice(caras) {
  // Generar un número aleatorio entre 1 y el número de caras
  const resultado = Math.floor(Math.random() * caras) + 1;
  return resultado;
}

// Ejemplo de uso
console.log(rollDice(6)); // Simula una tirada de un dado de 6 caras
console.log(rollDice(20)); // Simula una tirada de un dado de 20 caras

/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];