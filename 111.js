// const root =document.getRootNode();
// console.log(root);
// const html1=root.childNodes[1];
// console.log(html1);
// console.log(html1.childNodes);
// const head1=html1.childNodes[0];
// console.log(head1.nextSibling);
// console.log(head1.nextElementSibling);

const h1=document.querySelector("a");
console.log(h1);
// h1.parentNode.parentNode.parentNode.parentNode.parentNode.style.backgroundColor="Black"; //Body colour change to black from the property of the parent

const body1 = document.body;
console.log(body1);
console.log(body1.children);
body1.style.backgroundColor="cyan";

const title1=document.querySelector("head").querySelector("title");
console.log(title1);