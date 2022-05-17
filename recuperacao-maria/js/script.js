function calcularPedido(){
   
    // **************************************************  entrada
    corte = document.getElementById('corte').value;
    barba = document.getElementById('barba').value;
    depilaçao = document.getElementById('depilacao').value;
 
    
    // ********************************** processamento
    if(corte=="Corte com tesoura"){
       imagem = "img/corteTesoura(1).jpg";
       precocorte = "R$ 60,00"; 
    }
    else if(corte=="Corte com maquina"){
       imagem = "img/maquina.jpg";     
       precocorte = "R$ 45,00"; 
    }
    else{
        imagem = "img/tesouraMaquina.jpg";      
         precocorte = "R$ 52,00"; 
    }
    
    
    // *******************************barba
    if (barba == "S"){
        precobarba = "30.00";  
    }
    else if(barba=="M"){
       precobarba = "45.00"; 
    }
    
    // ***************************** mododepi 
    if (depilacao == "CQ"){
        precodepilacao = "300.00";  
    }
    else if(depilacao=="CF"){
       precodepilacao = "250.00"; 
    }
    else{
        precodepilacao = "850.00";
    }
    
    total= (precocorte + precobarba + precodepilacao);
 
    // ********************************************* saida
    document.getElementById('foto').src = imagem; 
    document.getElementById('total').value = total.toFixed(2);
        
}

function finalizar(){
  total = document.getElementById('total').value;
  if (total == 0.00){  
  }
   else{
        msg =  "Pedido Cadastrado com Sucesso! \n";
        msg += "Seu Pedido é R$ ";
        msg += total;
       
    }
    
    document.getElementById('msg').value = msg;
    
    
   $('#fim').modal('show');
}