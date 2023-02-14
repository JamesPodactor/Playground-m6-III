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

var generateRandom = () => {
  for (var member of myTeam) {
    for (var i = 0; i < member.availability.length; i++) {
      if (Math.random() < 0.5) {
        availability = true;
      } else {
        availability = false;
      }
      member.availability[i] = availability;
    }
  }
}
generateRandom();

var teamCalendar = () => {
  var freeTimeSlots = [];
  for (var member of myTeam) {
    console.log("Disponibilidad de " + member.name);
    for (var i = 0; i < WORK_HOURS.length; i++) {
      if (member.availability[i] == true) {
        freeTimeSlots.push(i);
      }
      console.log(WORK_HOURS[i] + " " + (member.availability[i] ? "Si" : "No"));
    }
  }
  return freeTimeSlots;
}

var getTimeSlot = () => {
  var freeTimeSlots = teamCalendar();
  for (var i = 0; i < WORK_HOURS.length; i++) {
    var repeatedIndex = 0;
    for (var j = 0; j < freeTimeSlots.length; j++) {
      if (freeTimeSlots[j] === i) {
        repeatedIndex++;
      }
    }
    if (repeatedIndex === 4) {
      return "Hueco encontrado en el horario " + WORK_HOURS[i];
    } 
  }
  return "Lo siento. No hay hueco disponible en el equipo.";
}
console.log(getTimeSlot());