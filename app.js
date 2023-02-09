// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];
  
// Datos
var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
];

// 1. Generación aleatoria de la disponibilidad
// Como primer apartado, vamos a generar aleatoriamente la disponibilidad para todos los miembros del equipo. 
// Se trata de recorrer todos los miembros del equipo, y a su vez, para cada miembro, todas las franjas horarias 
// de su disponibilidad, e ir asignando aleatoriamente si está disponible o no en dicha franja.
// De esta forma generamos un equipo con una agenda completamente aleatoria.
// var myArray = new Array(3).fill("Hola");
// console.log(myArray); // ["Hola","Hola","Hola"];


var generateRandom = () => {
  for (var members of myTeam) {
    for (var i = 0; i < members.availability.length; i++) {
      if (Math.random() < 0.5) {
        availability = true;
      } else {
        availability = false;
      }
      members.availability[i] = availability;
    }
  }
}
generateRandom();

var teamCalendar = () => {
  for (var members of myTeam) {
    console.log("Disponibilidad de " + members.name);
    for (var i = 0; i < WORK_HOURS.length; i++) {
      console.log(WORK_HOURS[i] + " " + members.availability[i] ? "si" : "no");
    }
  }
  
}
teamCalendar();

// var getTimeSlot = () => {
//   var calendar = [];
//   calendar = teamCalendar();
//   for (var teamMates of calendar) {
//     for (var i = 0; i < teamMates.length; i++) {
//       if (indexOf.teamMates(true)) {
//         return i
//       }
//       console.log(i)
//     }
//   }
// }
// getTimeSlot();
