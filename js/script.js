let listaSpesa = [
    'latte',
    'pasta',
    'pomodoro',
    'cipolle',
    'tovaglioli'
 ];
 
 const lista = document.getElementById('tobuy');
 let counter = 0;
 
 while (counter < listaSpesa.length) {
     let item = listaSpesa[counter];
     let list_item = document.createElement('li');
     list_item.innerText = item;
     lista.append(list_item);
     counter++;
 }

