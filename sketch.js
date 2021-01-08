let tablero;
let tablero_siguiente;
let columnas;
let renglones;
let celda_tamanio= 10;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(600, 400);
  columnas = width / celda_tamanio;
  renglones = height / celda_tamanio;
  tablero = creaTablero(columnas, renglones);
  for(let x = 1; x < columnas-1; x+= 1){
    for(let y = 1; y < renglones-1; y+= 1){
      tablero[x][y] = floor(random(2));
      print(tablero[x][y]);
    }
  }

  //print(tablero);

}

function draw() {
  background(220);
  pintaTablero();
  if (keyIsPressed) {
  if ((key == 's') || (key == 'S')) {
  siguienteGeneracion();
  }
  }



}
function siguienteGeneracion()
{
  r = random(30, 150);
  g = random(30, 150);
  b = random(30, 150);
  tablero_siguiente =creaTablero(columnas, renglones);
  for(let x = 1; x < columnas-1; x+= 1){
    for(let y = 1; y < renglones-1; y+= 1){
      let celda = tablero[x][y];
      let vecinos = cuentaVecinos(x, y);

      if(celda ==0 && vecinos == 3){
        tablero_siguiente[x][y] = 1;
        switch(random(0,1)){
          case 0:
            tablero_siguiente[x + random(0,1)][y + random(0,1)]= 0;
          break;
          case 1:
            tablero_siguiente[x - random(0,1)][y - random(0,1)]= 0;
          break;
        }
      }else if(celda == 1 &&(vecinos >= 4 || vecinos <= 2)){
        tablero_siguiente[x][y] = 0;
      }else if (celda == 0 &&(vecinos >=2 && vecinos <=3)) {
        tablero_siguiente[x][y]= 1;
        switch(random(0,1)){
          case 0:
            tablero_siguiente[x + random(0,1)][y + random(0,1)]= 0;
          break;
          case 1:
            tablero_siguiente[x - random(0,1)][y - random(0,1)]= 0;
          break;
        }

        }
      else{
        tablero_siguiente[x][y] = celda;
        switch(random(0,1)){
          case 0:
            tablero_siguiente[x + random(0,1)][y + random(0,1)]= 0;
          break;
          case 1:
            tablero_siguiente[x - random(0,1)][y - random(0,1)]= 0;
          break;
        }

      }

    }
  }

  tablero = tablero_siguiente;
}

function cuentaVecinos(x, y){
  let suma_vecinos = 0;
  suma_vecinos += tablero[x - 1][y - 1];
  suma_vecinos += tablero[x ][y - 1];
  suma_vecinos += tablero[x + 1][y - 1];
  suma_vecinos += tablero[x - 1][y];
  suma_vecinos += tablero[x + 1][y];
  suma_vecinos += tablero[x - 1][y + 1];
  suma_vecinos += tablero[x][y + 1];
  suma_vecinos += tablero[x + 1][y + 1];
  return suma_vecinos;
}

function pintaTablero(cols,ren){
  for(let x = 0; x < columnas; x+= 1){
    for(let y = 0; y < renglones; y+= 1){
      let posx = x * celda_tamanio;
      let posy = y * celda_tamanio;
      if(tablero[x][y] == 1){
        fill(r, g, b);
      stroke(0);
      rect(posx, posy, celda_tamanio, celda_tamanio);
    }

    }
  }
}
function creaTablero(cols, ren){
   let tab = new Array(cols);
   for(let i  = 0; i < tab.length; i = i + 1){
     tab[i] = new Array(ren);
  }
  return tab;
}
