

const heroe = {
  vidaMaxima: 100,
  vidaActual: 100,
  dano: 25
};
const limo = {
  vidaMaxima: 300,
  vidaActual: 300,
  dano: 10
};

console.log("Que comience la pelea");

while (heroe.vidaActual > 0 && limo.vidaActual > 0) {
    heroe.vidaActual -= limo.dano;
    console.log(`Limo ataca por ${limo.dano} de daño a Heroe ${heroe.vidaActual}/${heroe.vidaMaxima}`);
    if(heroe.vidaActual <= 0){
        console.log("Heroe murio")
        break
    }
    limo.vidaActual -= heroe.dano;
    console.log(`Heroe ataca por ${heroe.dano} de daño a Limo ${limo.vidaActual}/${limo.vidaMaxima} `);
    if(limo.vidaActual <=0){
        console.log("Limo murio")
        break
    }
  }