<script>


/*



TheRollingThunderProject released 

1930b


CBD_23630_1930b_V10



*/

/* VARIABILI GLOBALI INI */

DESKTOP_CHECK = 1 ; DESKTOP_CHECK = 0 ;
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { DESKTOP_CHECK = 0 ; } else { DESKTOP_CHECK = 1 ; }

/* mobile first */
FonteSizeStandard__=3.95*1.00;


function LarghezzaRem__(){let Larghezza__=window.innerWidth/16;return Larghezza__;} function AltezzaRem__(){let Altezza__=window.innerHeight/16;return Altezza__;}

Larghezza__=LarghezzaRem__();Altezza__=AltezzaRem__();

FonteDinamica__=(2.5*1.00);



/* VARIABILI GLOBALI FIN */


document.getElementById("APP_UNO_DUE__").innerHTML=
`
<style>
html * {font-size:auto;font-family:monospace;}
ol { list-style: none; counter-reset: ColoreCounter__;}
ol li { counter-increment: ColoreCounter__;}
ol li::before { content: counter(ColoreCounter__) ". "; background-color:aqua;color: black;font-size:75%;border:solid 0.15rem aqua;border-radius: 100%;display:inline-block;}

img{   margin:0 auto;  display: block;    max-width:100%;    max-height:100%;    width: auto;    height: auto;   } 


</style>

<style>
/* UTILITIES ini */
@keyframes spin{ 0%{transform:rotate(0deg);} 100% {transform:rotate(360deg);}}

.spinner{width:48px;height:48px; width:2rem;height:2rem; border:solid 4px red; border:solid 0.25rem red; border:solid 0.25rem red; border:solid 0.25rem red; border-top:solid 4px black; border-top:solid 0.25rem transparent; background-color:transparent; border-radius:50%; overflow:none; animation: spin 1.5s linear infinite;}
.spinmin_v0{width: 1.00rem;height:1.00rem;background-color:transparent;
border:solid 0.175rem orange;border-top:solid 0.175rem transparent;border-radius:50%; display:inline-block;
animation: spin 1.5s linear infinite;
}
.spinmin{width: 3.500rem;height:3.500rem;background-color:transparent;
border:solid 1.75rem orange;border-top:solid 1.75rem transparent;border-radius:50%; display:inline-block;
animation: spin 1.5s linear infinite;
}


@-webkit-keyframes blink { 0% {background: #222} 50% {background: lime} 100% {background: #222}}

.cursore { background: lime; line-height: 17px; margin-left: 3px;
-webkit-animation: blink 0.8s infinite; width: 7px; height: 15px;}

/* UTILITIES fin */ 

</style>


<style>


summary:hover{border:dashed 0.05rem black;border-radius:0.50rem;}


.centrato___{width:95.000%;margin-left:2.5%;}
.fs_standard___{font-size:`+(FonteSizeStandard__*0.75)+`rem;}
.fs_standardx0___{font-size:`+(FonteSizeStandard__*0.25)+`rem;}
.fs_standardx1___{font-size:`+(FonteSizeStandard__*0.75*1.5)+`rem;}
.fs_standardx2___{font-size:`+(FonteSizeStandard__*0.75*2)+`rem;}



.pos_s___{position:static;top:0rem;left:0rem;}
.pos_f___{position:fixed;top:0rem;left:0rem;}

.m_t_VisualizzaCommento_01___{margin-top:`+(FonteSizeStandard__*2.00)+`rem;}

.no_bordi___{border:none;}




</style>

<div id="inizio__"></div>

<details id="MENU__" style="width:100%;background-color:white;color:orange;font-size:`+(FonteSizeStandard__*1.00)+`rem;cursor:pointer!important;" class="pos_s___"><summary> <i class="bi bi-collection"></i> </summary>


<div id="LIVELLO_RANGE_01__" style="margin-top:`+(FonteSizeStandard__*1)+`rem;"></div>



<details  class="centrato___ fs_standard___"  style="position:static;background-color:rgba(0,0,255,0.05);color:rgba(0,0,255,1.00);cursor:pointer;"><summary  style="text-align:right;display:block;"><i class="bi bi-bookmarks"></i></summary>

<article  id="COLORE_RANDOM__"></article>


<article id="Copy_Si_No__"></article>


<article id="INSERISCE_il_nome_del_file_da_cercare__">
<input type="text" placeholder="Testo.txt" id="INPUT_NOME_FILE__" value="Testo.txt" class="centrato___ fs_standard___ no_bordi___" >

</article>



<details  class="centrato___ fs_standard___"  style="background-color:rgba(0,0,255,0.015);color:rgba(0,0,255,1.00);cursor:pointer;"><summary  style="text-align:right;display:block;"><i class="bi bi-question-square"></i></i></summary>

<ol>


<li>
<div id="VISUALIZZA_COLORE_RANDOM__" style="display:inline-block;"></div>
</li>

<li>
<span id="Vedi_TimeStamp__"></span>
</li>

<li>  
<button onclick="MenuFixed()"  style="font-size:`+(FonteSizeStandard__*1)+`rem;text-variant:small-caps;"> FIXED</button>
</li>

<li>  
<button onclick="MenuStatic()" style="font-size:`+(FonteSizeStandard__*1)+`rem;text-variant:small-caps;"> STATIC </button>
</li>


<li>  
<button onclick="SettaggiFinali()" style="font-size:`+(FonteSizeStandard__*1)+`rem;text-variant:small-caps;"> SETTAGGI FINALI </button>
</li>



<li id="DUEK23620A__"><q id="DUEK23620A_LINK__">../../test/dir.php</q><button  id="DUEK23620A_BUTTON__" onclick="CopiaDUEK23620A_LINK__()">INS</button><i>Test per Chrome</i></li>

<li id="DUEK23611A__"><q id="DUEK23611A_LINK__">Testo.txt</q><button  id="DUEK23611A_BUTTON__" onclick="CopiaDUEK23611A_LINK__()">INS</button></li>

<li id="DUEK23605A__"><q id="DUEK23605A_LINK__">../tes/23m05/index.txt</q><button  id="DUEK23605A_BUTTON__" onclick="CopiaDUEK23605A_LINK__()">INS</button></li>



</ol>



</details>


</details>


</details>



<!--

<div id="LIVELLO_RANGE_01__" style="margin-top:`+(FonteSizeStandard__*1)+`rem;"></div>


-->




<article  style="margin-top:`+(FonteSizeStandard__*2.00)+`rem;">
<div class="centrato___" style="background-color:rgba(0,0,255,0.015);color:rgba(0,0,255,1.00);font-size:`+(FonteSizeStandard__*0.50)+`rem;font-variant:small-caps;visibility:visible;">

<span id="INPUT_INSERITO__">file richiesto: </span>

</div>
</article>






<div id="SettaggiPerIlCommento_01__"></div>


<div id="VisualizzaCommento_01__" class="m_t_VisualizzaCommento_01___" style="margin-top:`+(FonteSizeStandard__*2.00)+`rem; margin-bottom:`+(FonteSizeStandard__*2.00)+`rem;overflow:auto;"><div style="border:solid 0.00rem red;overflow:auto!important;"><div class="spinmin">&nbsp;</div><q style="font-size:1.50rem;">Loading elemento ... VisualizzaCommento_01__</q></div>


<div id="SETTAGGI_FINALI__"></div>

`;














document.getElementById("Copy_Si_No__").innerHTML=
`
<section>
<article style="background-color:rgba(255,0,0,0.15);text-align:center;">
<div onclick="CopySi()" class="centrato___ fs_standardx1___" > <i class="bi bi-sign-stop" style="color:red;"></i></div>
</article>
<article style="background-color:rgba(0,255,0,0.05);text-align:left;">
<div onclick="CopyNo()" class="centrato___ fs_standard___" ><i class="bi bi-chat-square-text" style="color:green;"></i></div>
</article>
</section>
`;








function MenuStatic(){
alert("MenuStatic");
document.querySelector("#MENU__").style.position="static";
}

function MenuFixed(){
alert("MenuFixed");
document.querySelector("#MENU__").style.position="fixed";
}


function CopiaDUEK23611A_LINK__(){
CopiatoDUEK23611A_LINK__=document.getElementById("DUEK23611A_LINK__").textContent;
document.querySelector("#INPUT_NOME_FILE__").value=CopiatoDUEK23611A_LINK__;
}

function CopiaDUEK23605A_LINK__(){
CopiatoDUEK23605A_LINK__=document.getElementById("DUEK23605A_LINK__").textContent;
document.querySelector("#INPUT_NOME_FILE__").value=CopiatoDUEK23605A_LINK__;
}

function CopiaDUEK23620A_LINK__(){
CopiatoDUEK23620A_LINK__=document.getElementById("DUEK23620A_LINK__").textContent;
document.querySelector("#INPUT_NOME_FILE__").value=CopiatoDUEK23620A_LINK__;
}






function CopySi(){alert("CopySi");clearInterval(EsegueIntervalPrendeNomeFileDaInput_01__);EsegueIntervalPrendeNomeFileDaInput_01__=null;}
function CopyNo(){alert("CopyNo");EsegueIntervalPrendeNomeFileDaInput_01__ = setInterval(PrendeNomeFileDaInput_01, 3000);}


function RangeDot_Dinamico_Input(){

ValoreInizialeRange__=25;   
ProprietaInput__=`id="RANGER__" type="range" value="`+ValoreInizialeRange__+`" step="1" min="1" max="99"  class="centrato___" `;

document.getElementById("LIVELLO_RANGE_01__").innerHTML=`<input ${ProprietaInput__}>`;

}; 
RangeDot_Dinamico_Input();





function LeggiRangeDot_Dinamico_Input(){
LetturaRange__=document.getElementById("RANGER__").value;
FonteDinamica__=(LetturaRange__*0.075).toFixed(2);

AggiornareVisualizzaTesto_01__=`<style>#VisualizzaCommento_01__ {font-size:`+(FonteDinamica__*1.00)+`rem;}</style>`;

document.getElementById("SettaggiPerIlCommento_01__").innerHTML=
`
${AggiornareVisualizzaTesto_01__}

`;

};
setInterval(LeggiRangeDot_Dinamico_Input,1)







function CambiaColoreOgniSetInterval(){
var LettereColoreRandom__ = '0123456789ABCDEF';
var CreaColoreRandom__ = '#';
var IColoreRandom__;
for (IColoreRandom__ = 0; IColoreRandom__ < 6; IColoreRandom__++ ) {
CreaColoreRandom__ = CreaColoreRandom__+LettereColoreRandom__[Math.round(Math.random() * 15)];
};
document.getElementById("COLORE_RANDOM__").innerHTML=
`
<style>
#INPUT_NOME_FILE__{color:  `+CreaColoreRandom__+`;}

</style>
`;


document.getElementById("VISUALIZZA_COLORE_RANDOM__").innerHTML=`${CreaColoreRandom__}`;



};


function PrendeNomeFileDaInput_01(){
NomeDelFileDaInput__="";
NomeDelFileDaInput__=document.getElementById("INPUT_NOME_FILE__").value;

CambiaColoreOgniSetInterval();



if(NomeDelFileDaInput__!==""){

document.getElementById("INPUT_INSERITO__").innerHTML=
`<div id="FILE_RICHIESTO__" style="height:`+(FonteSizeStandard__*1.50)+`rem;border:solid 0.00rem red;overflow:auto;">
<span class="fs_standardx0___">file richiesto: </span>`+`<b>`+NomeDelFileDaInput__+`</b></div>`;


DirectoryDove_File_01__="";
File_01__=NomeDelFileDaInput__;
UltimoAggiornamento__=new Date();

File_01__ = DirectoryDove_File_01__+File_01__ + "?"+(new Date().getTime()) + (Math.random()) ; 
Richiedo_01__ = new XMLHttpRequest();

Richiedo_01__.open("GET",File_01__,false);
Richiedo_01__.onreadystatechange = function(){
Trovato_01__ = Richiedo_01__.responseText;

/*
document.getElementById("Vedi_TimeStamp__").innerHTML=`<div style="font-size:`+(FonteSizeStandard__*0.50)+`rem;">${File_01__}</div>`;

*/

document.getElementById("Vedi_TimeStamp__").innerHTML=`<span style="font-size:`+(FonteSizeStandard__*1.00)+`rem;">` +(new Date().getTime()) + `</span>`;


document.getElementById("VisualizzaCommento_01__").innerHTML=
`
${Trovato_01__}

`;

} ; Richiedo_01__.send();

}else{}




};
EsegueIntervalPrendeNomeFileDaInput_01__ = setInterval(PrendeNomeFileDaInput_01, 3000);








function GoTop(){

VaInizio__ = document.getElementById("inizio__").offsetTop;
window.scrollTo(0, VaInizio__)

};GoTop();




function SettaggiFinali(){

alert("SettaggiFinali()");

document.getElementById("SETTAGGI_FINALI__").innerHTML=
`
<style>

/* Desktops and laptops */
@media only screen and (min-width : 1224px) {
  html *  {background-color:initial!important;color:initial!important;}
}
 
/* Large screens */
@media only screen and (min-width : 1824px) {
  html *  {background-color:initial!important;color:initial!important;}
}
 
/* Tablets (landscape) */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
  html *  {background-color:initial!important;color:initial!important;}
}
 
/* Tablets (portrait) */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
 html *  {background-color:initial!important;color:initial!important;} 
}
 
/* Smartphones (landscape) */
@media only screen and (min-width : 321px) {
  html *  {background-color:initial!important;color:initial!important;}
}
 
/* Smartphones (portrait) */
@media only screen and (max-width : 320px) {
  html *  {background-color:initial!important;color:initial!important;}
}



</style>
`;

};
/* SettaggiFinali(); */



</script>






