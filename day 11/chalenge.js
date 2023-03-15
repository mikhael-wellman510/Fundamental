let s = "anagram";
let t = "nagaram";

// cek apakah panjang dari kedua string sama
// urutkan karakter2 dalam kedua string
// bandingkan kedua string yang telah di urutkan

// cek panjang karakter
if (s.length !== t.length) {
  console.log(false);
} else {
  // urutkan karakter2 dalam kedua string
  s = s.split("").sort().join(""); // sort mengurutkan abjad dari a ke z
  t = t.split("").sort().join("");

  if (s === t) {
    // membandingkan kedua string tersebut
    console.log(true);
    console.log("ini adalah anagram");
  } else {
    console.log("bukan anagram");
  }
}
