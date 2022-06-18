console.clear()
let name = ["Zyam", "Arsam", "Zyam2"];
name.splice(2,1, "Ayesha", "Fatima")
name.sort()
console.log(name);

// //let searchName = name.find(FindZyam("nme"));
// const FindZyam = (nme) => nme == "Zyam" ? True : False;
// console.log(searchName);

 let nameSearch = name.find(nameFind)
 console.log (nameSearch)
 function nameFind (nme) {
   
     if (nme=="Zyam") return true;
     else return false;
 }
