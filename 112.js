const section1= document.querySelector(".sectiontodo");
console.log(section1);

// section1.classList.add('bg-dark');  //will add the given css class to the section

// section1.classList.remove('container');  //will remove the given css class of the section

console.log(section1.classList.contains("container"));  //will return boolean value if the class exist in the section or not

section1.classList.toggle('bg-dark'); // will add the class 
section1.classList.toggle('bg-dark'); // will remove the added class if exists 