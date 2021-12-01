function resultado() {
var p1, p2, p3, nota;
 
<!-- 1ª pregunta -->
if (document.getElementById('p12').checked==true) {p1=1}
if (p1==1) {document.querySelectorAll('.pregunta1')[1].style.color='#07D399'}
else {p1=0}
<!-- 2ª pregunta -->
if (document.getElementById('p23').checked==true) {p2=1}
if (p2==1) {document.querySelectorAll('.pregunta2')[2].style.color='#07D399'}
else {p2=0}
<!-- 3ª pregunta -->
if (document.getElementById('p32').checked==true) {p3=1}
if (p3==1) {document.querySelectorAll('.pregunta3')[1].style.color='#07D399'}
else {p3=0}
 
nota=p1+p2+p3;
document.getElementById('resultado').innerHTML="Aciertos: "+nota;
rs=confirm("C o n t i n u a r . . .");
if (rs==false) {document.forms[0].reset();location.reload()}
}