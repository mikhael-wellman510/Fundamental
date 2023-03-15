function konversi(abjad) {
  let a = abjad.split("");

  let alphabeth = " abcdefghijklmnopqrstuvwxyz";

  let index1 = alphabeth.indexOf(a[0]);
  let index2 = alphabeth.indexOf(a[1]);
  let index3 = alphabeth.indexOf(a[2]);

  if (a.length === 1) {
    let hasil1 = index1;
    console.log(`hasil dari konversi ${abjad} adalah : ${hasil1} `);
  } else if (a.length === 2) {
    let hasil2 = 26 * index2 + index1;
    console.log(`hasil dari konversi ${abjad} adalah : ${hasil2}`);
  } else if (a.length === 3) {
    let hasil3 = index1 * (26 * 26) + index2 * 26 + index3;
    console.log(`hasil dari konversi ${abjad} adalah : ${hasil3}`);
  }
}

let abjad = "a";
konversi(abjad);
