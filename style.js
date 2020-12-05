yourName = prompt("What is your name?");
loverName = prompt("What is your crush name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore)+1;

if (loveScore>70) {
  alert("You Love Score " + loveScore + "%. " + yourName+",Kya baat hain! Kya baat hain!! Bacchey kaa naam sochlo " + loverName + "aur tumhaara");

}

else if (loveScore>50 && loveScore <=70) {
  alert("You Love Score " + loveScore + "%. " + yourName+",Wow, Thik cha thik cha , lageraho munna bhai with " + loverName );

}
else if (loveScore>30 && loveScore <=50) {
  alert("You Love Score " + loveScore + "%. " + yourName+",Halka Timro connection kam bho, feri try gara la. LOL " + loverName + " sanga" );

}
else if (loveScore>10 && loveScore <=30) {

  alert("You Love Score " + loveScore + "%. " + yourName+", Haha! Bohot Kam Hain. LOL! LOL!! " + loverName + " sanga" );


}
else if(loveScore>1 && loveScore <=10) {
  alert("You Love Score " + loveScore + "%. " + yourName+",Tumsey naa hopaayegaa! Kuch nahi hogaa tumhara " + loverName + " sanga" );


}
