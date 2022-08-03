let readlineSync = require('readline-sync');
let input = (text="") => readlineSync.question(text);
let print = (text) => process.stdout.write("" + text)

function formando_tabuleiro(tabuleiro){
  for(let i = 0;i <= 5;i++){
    let linha = ['X', 'X', 'X', 'X', 'X', 'X'];
    tabuleiro.push(linha);
  }
}

function imprimindo(tabuleiro){
  let nl = tabuleiro.length
  let nc = tabuleiro[0].length
  console.log("  1    2    3    4    5    6 ");
  for(l = 0;l < nl;l++){
    if(l > 0){
      print("\n")
    }
    for(c=0;c < nc;c++){
      if(tabuleiro[l][c] === 'X'){
        print("| " + "  |")
      }
      else {
        print("| " + tabuleiro[l][c] + " |")
      }
    }
  }
  print("\n")
}

function escolhendo_coluna(tabuleiro, vez, repet, proceder, cont){
  console.log(" ");
  imprimindo(tabuleiro)
  console.log("Escolha em que coluna você deseja colocar sua peça. Da coluna 1 até a coluna 6.");
  let coluna_escolhida =input();
  if(cont <= 2)
    proceder.push(0);
  if(coluna_escolhida > 6 || coluna_escolhida < 1 || isNaN(coluna_escolhida)){
    console.log("coluna invalida, tente novamente")
    console.log("")
    proceder[vez] = 0    
  }
  else if(tabuleiro[0][(coluna_escolhida -1)] !== 'X'){
    console.log("Coluna cheia, escolha outra")
    console.log(" ")
    proceder[vez] = 0
  }
  else {
    adicionando (tabuleiro, vez, coluna_escolhida);
    imprimindo(tabuleiro)
    proceder[vez] = 1
  }
}

function adicionando (tabuleiro, vez, coluna_escolhida){
  let nl = tabuleiro.length
  let nc = tabuleiro[0].length
  for(let l = nl -1; l >= 0; l--){
    if(tabuleiro[l][(coluna_escolhida -1)] === 'X'){
      if(vez === 0){
        tabuleiro[l][(coluna_escolhida -1)] = "a";
      }
      if(vez ===1){
        tabuleiro[l][(coluna_escolhida -1)] = "v";
      }
      break;
    }
    else if(tabuleiro[l][(coluna_escolhida -1)] !== 'X'){
      continue;
    }
  }  
}

function verificando_pecas(tabuleiro, vez, cont, repet, proceder){
  if(cont === 3){
    proceder.push(1);
  }
  let nl = tabuleiro.length
  let nc = tabuleiro[0].length
  let contador_de_pecas =0;
  let peca = 0;
  for(let c =0;c < nc;c++){
    if(tabuleiro[0][c] !== 'X'){
      contador_de_pecas +=1;
    }
    if(contador_de_pecas === 6){
      console.log("empate!")
      proceder[2] = 0;
    }
  }
  contador_de_pecas = 0;
  for(let l = nl-1;l >= 0;l--){
    contador_de_pecas = 0;
    for(let c = 0;c < nc;c++){
      if(tabuleiro[l][c] !== peca && tabuleiro[l][c] !== 'X'){
        peca = tabuleiro[l][c];
        contador_de_pecas = 0;
        contador_de_pecas +=1
      }
      else if(peca == tabuleiro[l][c]){
        contador_de_pecas +=1;
      }
      else if(tabuleiro[l][c] = 'X'){
        contador_de_pecas = 0;
      }
      if(contador_de_pecas === 4){
        if(peca === "a"){
          console.log("amarelo ganhou")
          proceder[2] = 0;
          break;
        }
        else if(peca === "v"){
          console.log("vermelho ganhou")
          proceder[2] = 0;
          break;
        } 
      }
    }
  }  
  contador_de_pecas = 0;
  for(let c = 0;c < nc; c++){
    contador_de_pecas = 0;
    for(let l = nl - 1;l >= 0;l--){
      if(tabuleiro[l][c] !== peca && tabuleiro[l][c] !== 'X'){
        peca = tabuleiro[l][c];
        contador_de_pecas = 0;
        contador_de_pecas +=1
      }
      else if(peca == tabuleiro[l][c]){
        contador_de_pecas +=1;
      }
      else if(tabuleiro[l][c] = 'X'){
        contador_de_pecas = 0;
      }
      if(contador_de_pecas === 4){
        if(peca === "a"){
          console.log("amarelo ganhou")
          proceder[2] = 0;
          break;
        }
        else if(peca === "v"){
          console.log("vermelho ganhou")
          proceder[2] = 0;
          break;
        }
      }
    }
  }
  contador_de_pecas = 0;
  for(let l = nl-1, c = 0;l > 0 && c < nc;l--, c++){
    if(tabuleiro[l][c]!== peca && tabuleiro[l][c] !== 'X'){
      peca = tabuleiro[l][c];
      contador_de_pecas = 0;
      contador_de_pecas +=1
    }
    else if(peca == tabuleiro[l][c]){
      contador_de_pecas +=1;
    }
    else if(tabuleiro[l][c] = 'X'){
      contador_de_pecas = 0;
    }
    if(contador_de_pecas === 4){
      if(peca === "a"){
        console.log("amarelo ganhou")
        proceder[2] = 0;
        break;
      }
      else if(peca === "v"){
        console.log("vermelho ganhou")
        proceder[2] = 0;
        break;
      }
    }
  }
  contador_de_pecas = 0;
  for(let l = nl-1, c = nc-1; l >= 0 && c >= 0;l--, c--){
    if(tabuleiro[l][c]!== peca && tabuleiro[l][c] !== 'X'){
      peca = tabuleiro[l][c];
      contador_de_pecas = 0;
      contador_de_pecas +=1
    }
     else if(peca == tabuleiro[l][c]){
      contador_de_pecas +=1;
    }
    else if(tabuleiro[l][c] = 'X'){
      contador_de_pecas = 0;
    }
    if(contador_de_pecas === 4){
      if(peca === "a"){
        console.log("amarelo ganhou")
        proceder[2] = 0;
        break;
      }
      else if(peca === "v"){
        console.log("vermelho ganhou")
        proceder[2] = 0;
        break;
      }
    }
  } 
}

function jogadas(tabuleiro){
  formando_tabuleiro(tabuleiro);
  let repet = 0;//se é necessario limpar o console
  let vez = 0//se vez recebe 1 é vez do amarelo, se vez recebe 2 é vez do vermelho 
  let proceder = [] //se pode passar para outra rodada(1 se pode 0 se nao)
  let cont = 0 //qunatidade de vezes que cada jogador jogou
  for(let i = 0; ;i++){
    repet +=1
    if(vez === 0){
      if (repet === 1){ 
        console.clear();
        cont +=1;
      }
      console.log("Vez do amarelo");
      escolhendo_coluna(tabuleiro, vez, repet, proceder, cont);
      if(proceder[0] === 1){
        vez +=2;
        repet = 0;
      }  
    }
    else if(vez === 2){
      if(cont >=2){
        cont +=1;
        verificando_pecas(tabuleiro, vez, cont, repet, proceder)
        if(proceder[2] === 0){
          break;
        }
        else {
          vez -=1;
          repet =0;
          continue;
        }
      } 
      else {
        vez -=1;
        repet =0;
        continue;
      } 
    }    
    else if(vez === 1){
      if(repet === 1){
        console.clear();
        cont +=1;
      }
      console.log("Vez do vermelho")
      escolhendo_coluna(tabuleiro, vez, repet, proceder, cont);
      if(proceder[1] === 1){
        vez +=2;
        repet = 0;
      }  
    }  
    else if(vez === 3){
      if(cont >=2){
        cont +=1;
        verificando_pecas(tabuleiro, vez, cont, repet, proceder)
        if(proceder[2] === 0){
          break;
        }
        else {
          vez -=3;
          repet =0;
          continue;
        }
      }
    }
  }
}

function main(){
  let tabuleiro = []
  jogadas(tabuleiro);
}
main();

