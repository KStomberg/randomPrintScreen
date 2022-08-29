//Function generates a random prnt.sc url to snoop on people because this is what I do now I guess

function randomPrintScreen() {
  let slug = 'https://prnt.sc/';
  for (let i = 0; i <= 1; i++) {
    slug += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }
  slug += Math.floor(1000 + Math.random() * 9000);
  return slug;
}
