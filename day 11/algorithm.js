let palindrome = "race , car ";
const arrAlpha = "abcdefghijklmnopqrstiuvwxyz".split(""); //

palindrome = palindrome.split("");

palindrome = palindrome.filter((letter) => {
  return arrAlpha.includes(letter); // untuk mencari huruf yg sama yg ada di arr alpha , dan menghilangkan spasi dan koma , karena tidak di return
});
// console.log(palindrome);
palindrome = palindrome.join("");
