function modoNoturno(horario) {
    if (horario > 18) {
      console.log("Você precisa ligar o modo noturno!");
    } else {
      console.log("Modo noturno não é necessário neste momento.");
    }
  }
  
  modoNoturno(15);
  modoNoturno(20);
  