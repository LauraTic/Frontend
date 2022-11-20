document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        
    });
  });

//Método para que funcione el select del Estado (Pendiente, rechazado, aceptado)en el html de Mascotas. 

function IniciarSelect(estado_array){
  var elems = document.querySelector ('#' + estado_array);
  var instances = M.FormSelect.init(elems, {});

}
