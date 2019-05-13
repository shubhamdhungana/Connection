yourName = prompt("What is your name?");
loverName = prompt("What is your crush name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore)+1;

if (loveScore>70) {
  alert("You Love Score " + loveScore + "%. " + yourName+",You are made for each other i.e. " + loverName );

}

else if (loveScore>50 && loveScore <=70) {
  alert("You Love Score " + loveScore + "%. " + yourName+", Thik cha thik cha , lageraho munna bhai with " + loverName );

}
else if (loveScore>30 && loveScore <=50) {
  alert("You Love Score " + loveScore + "%. " + yourName+", Halka Tero connection kam bho " + loverName + " sanga" );

}
else if (loveScore>10 && loveScore <=30) {

  alert("You Love Score " + loveScore + "%. " + yourName+", Tero Kati kam connection " + loverName + " sanga" );


}
else if(loveScore>1 && loveScore <=10) {
  alert("You Love Score " + loveScore + "%. " + yourName+",Ta ghar jaa. Ta baata hudaina " + loverName + " sanga" );


}
