class Player {
  constructor(nama, darah = 100, pukulan = 10) {
    // darah dan pukulan d buat default
    this.nama = nama; // mikhael , barak
    this.darah = darah; // 100
    this.pukulan = pukulan; // 10
  }

  serang(pukulan) {
    this.darah -= pukulan; // ketika di serang darah akan berkurang
  }

  nambahDarahDanPower(item) {
    if (item.darah) {
      this.darah += item.darah; // menambahkan 10  / 0  ke objet darah yg di class Player
    }

    if (item.pukulan) {
      this.pukulan += item.pukulan; // menambahkan 10  / 0  ke objet pukulan yg di class Player
    }
  }

  jumlahNyawaDanKekuatan() {
    // menampilkan  isi dan isi object dari P1 / P2
    console.log(
      `${this.nama} ( Darah => ${this.darah}, Pukulan => ${this.pukulan})`
    );
  }
}

class TembakGames {
  constructor(player1, player2) {
    this.player = [player1, player2]; // mengambil object Mikhael dan Barack dan propertis
    this.noPemain = 0;
  }

  mendapatKekuatanRandom() {
    // menyimpan angka 0 atau 10 , tergantung hasil math random
    const darah = Math.random() < 0.5 ? 0 : 10; // jika angka 0.5 , maka true 0 point dan false 10 point
    const pukulan = Math.random() < 0.5 ? 0 : 10;

    return { darah, pukulan };
  }

  start() {
    while (true) {
      const pemain1 = this.player[this.noPemain]; // membuat player 1 (mikhael) di
      const pemain2 = this.player[1 - this.noPemain]; // membuat player 2 (barak)

      console.log(`\n=== saat nya Jalan ${pemain1.nama}====`);

      pemain1.jumlahNyawaDanKekuatan(); // untuk memberi hasil darah dan pukulan ke console.log
      pemain2.jumlahNyawaDanKekuatan();

      // item == menambahkan/ hadiah  dammage dan darah
      const item = this.mendapatKekuatanRandom(); // isi item == adalah angka  0 / 10 untuk darah dan pukulan
      console.log(`${pemain1.nama} mendapatkan item :`, item); // tampilkan nama dan masukan item darah dan pukulan

      pemain1.nambahDarahDanPower(item); // membawa item yg berisi angka 10 / 0

      // pukulan == mendapatkan kekuatan pukulan
      const pukulan = pemain1.pukulan;
      pemain2.serang(pukulan);
      console.log(
        `${pemain1.nama} Menyerang ${pemain2.nama} dengan kekuatan ${pukulan}`
      );

      if (pemain2.darah <= 0) {
        console.log(`\n==== ${pemain1.nama} adalah pemenangnya ====`);
        break;
      }

      this.noPemain = 1 - this.noPemain;
    }
  }
}

const player1 = new Player("Mikhael");
const player2 = new Player("Barak");

const tembakGames = new TembakGames(player1, player2); // mengambil dari p1 dan p2 di new player

tembakGames.start();
