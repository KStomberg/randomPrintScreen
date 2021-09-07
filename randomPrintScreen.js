//Function generates a random prnt.sc url to snoop on people because this is what I do now I guess

function randomPrintScreen() {
  let l1 = String.fromCharCode(97+Math.floor(Math.random() * 26));
  let l2 = String.fromCharCode(97+Math.floor(Math.random() * 26));
  let n1 = Math.floor(Math.random() * 9).toString();
  let n2 = Math.floor(Math.random() * 9).toString();
  let n3 = Math.floor(Math.random() * 9).toString();
  let n4 = Math.floor(Math.random() * 9).toString();

  const randomString = l1+l2+n1+n2+n3+n4;
  
  return `https://prnt.sc/${randomString}`
}
