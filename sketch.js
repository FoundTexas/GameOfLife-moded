let tablero;
let columnas;
let renglones;
let celda_tamanio= 10;

function setup() {
  createCanvas(600, 400);
  columnas = width / celda_tamanio;
  renglones = height / celda_tamanio;
  tablero = creaTablero(columnas, renglones);
  for(let x = 0; x < columnas; x+= 1){
    for(let y = 0; y < renglones; y+= 1){
      tablero[x][y] = floor(random(2));
      
    }
  }
  
  //print(tablero);
  pintaTablero();
  
}

function draw() {
  background(220);
  pintaTablero();
  siguienteGen();
  
}

function siguienteGen(){
  let tablero_siguiente = creaTablero(columnas, renglones);
  for(let x = 1; x < columnas -1; x+= 1){
    for(let y = 1; y < renglones -1; y+= 1){
      let celda = tablero[x][y];
      let vecinos = numvecinos(x,y);
      
      if(celda == 0)
      {
          switch (vecinos) {
            case 9:
              tablero[x][y] = 0;
              break;
            case 8:
              tablero[x][y] = 0;
              break;
            case 7:
              tablero[x][y] = 0;
              break;
            case 6:
              tablero[x][y] = 0;
              break;
            case 5:
              tablero[x][y] = 0;
              break;
            case 4:
              tablero[x][y] = 0;
              break;
            case 3:
              tablero[x][y] = 1;
              break;
            case 2:
              tablero[x][y] = 1;
              break;
            case 1:
              tablero[x][y] = 0;
              break;
            case 0:
              tablero[x][y] = 0;
              break;
            default:
                tablero[x][y] = 0;
              break;
          }
      }
      else if (celda == 1)
      {
          switch (vecinos) {
            case 9:
              tablero[x][y] = 0;
              break;
            case 8:
              tablero[x][y] = 0;
              break;
            case 7:
              tablero[x][y] = 0;
              break;
            case 6:
              tablero[x][y] = 0;
              break;
            case 5:
              tablero[x][y] = 0;
              break;
            case 4:
              tablero[x][y] = 0;
              break;
            case 3:
              tablero[x][y] = 1;
              break;
            case 2:
              tablero[x][y] = 1;
              break;
            case 1:
              tablero[x][y] = 0;
              break;
            case 0:
              tablero[x][y] = 0;
              break;
            default:
                tablero[x][y] = 0;
              break;
          }
      }
    }
  }
  tablero = tablero_siguiente;
}

function numvecinos(x,y){
  let suma = 0;

  suma += tablero[x -1][y -1];
  suma += tablero[x -1][y +1];
  suma += tablero[x -1][y];
  suma += tablero[x +1][y + 1];
  suma += tablero[x +1][y -1];
  suma += tablero[x +1][y];
  suma += tablero[x][y +1];
  suma += tablero[x][y -1];
  
  

  return suma;
}

function pintaTablero(){
  for(let x = 0; x < columnas; x+= 1){
    for(let y = 0; y < renglones; y+= 1){
      let posx = x*celda_tamanio;
      let posy = y*celda_tamanio;
      if(tablero[x][y]==1){
        fill("blue");
        stroke(0);
        rect(posx, posy,celda_tamanio,celda_tamanio);
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
