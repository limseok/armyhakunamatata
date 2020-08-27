
var usuarios = [
    {
        number : 1,
        name : 'Cristian(Suga)',
        seleccion : 'rl',
        all : 't',
        hobby : ['bailar', 'jugar','fut', 'volley', 'nadar'],
        avatar : '6.jpg'
    },
    {
        number : 2,
        name : 'Cristian(Rap Monster)',
        seleccion : 'rl',
        all : 't',
        hobby : ['me gusta escuchar la melodia de tu voz'],
        avatar : '3.jpg'
    },
    {
        number : 3,
        name : 'Kevin(kook)',
        seleccion : 'vl',
        all : 't',
        hobby : ['Bailar', 'Jugar', 'Dormir', 'Tocar guitarra', 'Ver peliculas', 'Dormir'], 
        avatar : '2.png'
    },
    {
        number : 4,
        name : 'Limber(J-hope)',
        seleccion : 'rl',
        all : 't',
        hobby : ['bailar', 'jugar', 'estudiar','rapear','mirar videos'],
        avatar : '4.jpg'
    },
    {
        number : 5,
        name : 'Marco(Jimin)',
        seleccion : 'vl',
        all : 't',
        hobby : ['jugar 🎮','comer','dormir','bailar' ,'editar imagenes','crear musica'],
        avatar : '1.jpg'
    },
    {
        number : 6,
        name : 'Mattias(Jin)',
        seleccion : 'vl',
        all : 't',
        hobby : ['editar', 'hacer video', 'tocarme el cabello'],
        avatar : '5.jfif'
    },
    {
        number : 7,
        name : 'Yamil(V)',
        seleccion : 'vl',
        all : 't',
        hobby : ['bailar' ,'jugar' ,'ver videos','doramas'],
        avatar : '7.jfif'
    }
]
window.addEventListener('load', function(){
    var resultados1 =document.getElementById('resultados1');
    var buscar1 = document.getElementById('buscar1');
    buscar1.addEventListener('click', function(){

    var lines = document.getElementById('selecciona');
    var line = lines.selectedIndex;
    var lin = lines.options[line].value;
    console.log(lin);
    
    var resultsHtml1 = ' ';
    var numIntegrantes1 = usuarios.length;
    for(var i = 0; i < numIntegrantes1 ; i++){
        if (lin == usuarios[i].seleccion) {
            resultsHtml1 += '<div class="person-row">\
            <img src="../bt21/'+usuarios[i].avatar+'" width="200px" height="200px"/>\
            <div class="person-info">\
                <div><h1><i>' + usuarios[i].name +'</i></h1></div>\
                <div>'+usuarios[i].hobby+'</div>\
            </div><button onclick="redireccionar'+usuarios[i].number+'()">ver perfil</button></div>';
        }else if(lin == usuarios[i].all){
            resultsHtml1 += '<div class="person-row">\
        <img src="../bt21/'+usuarios[i].avatar+'" width="200px" height="200px"/>\
        <div class="person-info">\
            <div><h1><i>' + usuarios[i].name +'</i></h1></div>\
            <div>'+usuarios[i].hobby+'</div></div>\
            <button onclick="redireccionar'+usuarios[i].number+'()">ver perfil</button></div>';
        }
    }
    resultados1.innerHTML = resultsHtml1;
});
});



window.addEventListener('load',function(){

var resultados1 = document.getElementById('resultados1');
var buscar2 = document.getElementById('buscar2');
buscar2.addEventListener('click',function(){
    var integrantes = document.getElementById('integrantes');
    var integrante = integrantes.selectedIndex;
    var inte = integrantes.options[integrante].value;
    console.log(inte);

    var resultsHtml2 = ' ';
    var numIntegrantes2 = usuarios.length;
    for (var i = 0; i < numIntegrantes2; i++) {
        if (inte == usuarios[i].name) {
            resultsHtml2 += '<div class="person-row">\
            <img src="../bt21/'+usuarios[i].avatar+'" width="200px" height="200px"/>\
            <div class="person-info">\
                <div>' + usuarios[i].name +'</div>\
                <div>'+usuarios[i].hobby+'</div>\
            </div><button onclick="redireccionar'+usuarios[i].number+'()">ver perfil</button></div>';
        }
        
    }
    resultados1.innerHTML = resultsHtml2;
    
}

);
});
function redireccionar1(){
    window.location="cri.html";
}
function redireccionar2(){
    window.location="ram.html";
}
function redireccionar3(){
    window.location="kev.html";
}
function redireccionar4(){
    window.location="lim.html";
}
function redireccionar5(){
    window.location="mar.html";
}
function redireccionar6(){
    window.location="matt.html";
}
function redireccionar7(){
    window.location="yam.html";
}
function van(){
    window.location="van.html";
}
function presentacion(){
    window.location="video.html"
}

