// <!-- ------------------------------- -->
// <!----------- vowel counter ----------->
// <!-- ------------------------------- -->

function vowel_counter() {
  let sum=0;
  let name = document.getElementById("input").value;
  let vowel = ['a',' e','o' , 'i'];
  for (let i = 0; i <=vowel.length; i++) {
    for(let j=0;j<=name.length;j++){
      if (vowel[i] == name[j]) {
        sum = sum +1;
      }
    }
  }
console.log(sum);
console.log( vowel[0]);
console.log( vowel.length);

  document.write("number of vowel words in your name = ",sum)
}
