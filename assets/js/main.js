var random = Math.round( Math.random()*100 );
var count=0;
console.log(random);

$('#random').click(function(){
    //Je récupère la valeur de l'input
    var result = $('#number').val();
    //si le nombre est trop grand
    if (result > random ){
        //j'affiche  que c'est trop grand
        count++;
        alert(result + ' \ Tu chauffes.');
    }
    if (result < random ){
        //j'affiche  que c'est trop petit
        count ++;
        alert(result + ' \ Tu refroidis.');
    }
    if (result == random){
        // j'affiche que c'est gagné
        count ++;
        alert(result + 'GG');
        alert('Vous avez trouvé en ' + count +' tentatives.');
    }
});
