 
 window.onload = function () {
 
 let pronoun = ['the','our','you','for','they']; 
 let adj = ['great', 'big','tiny','humongous','little']; 
 let noun = ['jogger','racoon','whale','tiger','dog']; 



let emptyArray = [];
for (let i in pronoun)
    for (let j in adj) {
        for (let k in noun) 

emptyArray.push("http://" + pronoun[i] + adj[j] + noun[k] + ".com" + '<br>');
emptyArray.push('<br>');
 } 

console.log(emptyArray);
document.querySelector("#root").innerHTML = emptyArray

}
















