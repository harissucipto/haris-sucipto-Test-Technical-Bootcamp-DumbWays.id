/*
Seseorang mengendarai mobil dengan kecepatan tetap. 
Tepat pukul 10:25:21 pagi kecepatannya masih tetap 6 m/detik.
Tetapi sebelas menit kemudian, kecepatannya dinaikkan 1 m/detik sehingga kecepatannya menjadi tetap 7 m/detik.
Demikian 10 menit berikutnya kecepatannya selalu dinaikkan 1 m/detik. 

Buatlah program untuk menghitung jarak yang ditempuhnya sejak pukul 10:25;21 sampai jam tepat menunjukan 12:00;00 siang pada hari yang sama

*/

// fungsi helper
const menitKeDetik = menit => menit * 60;
const jumlahDetikDiantaraDuaTanggal = (date1, date2) => {
  var dif = date1.getTime() - date2.getTime();
  var Seconds_from_T1_to_T2 = dif / 1000;
  var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
  return Seconds_Between_Dates;
};
const hitungJarak = (jarak, detik) => jarak * detik;

// fungsi utama
const hitungTotalJarakTempuh = (jamBerangkat, jamSampai) => {
  // konvert dulu semuanya ke detik
  let selesihDetikDiantaraJarakTempuh = jumlahDetikDiantaraDuaTanggal(
    jamBerangkat,
    jamSampai
  );

  //  11 menit awal kecepatannya masih tetap 6 m/detik.
  const sebelasMenitAwalKeDetik = menitKeDetik(11);
  const jarakTempuhSebelasMenitAwal = hitungJarak(6, sebelasMenitAwalKeDetik);

  //  Tetapi sebelas menit kemudian, kecepatannya dinaikkan 1 m/detik sehingga kecepatannya menjadi tetap 7 m/detik.
  selesihDetikDiantaraJarakTempuh -= sebelasMenitAwalKeDetik;
  const kecepatanAwal = 7;
  // Demikian 10 menit berikutnya kecepatannya selalu dinaikkan 1 m/detik
  const kelipatan10 = Math.floor(
    selesihDetikDiantaraJarakTempuh / menitKeDetik(10)
  );
  const kenaikanDetikTiapKelipatan = new Array(kelipatan10)
    .fill(kecepatanAwal)
    .map((item, index) => item + index);

  const sisaDetikKelipatan10 =
    selesihDetikDiantaraJarakTempuh - kelipatan10 * menitKeDetik(10);
  const listJarakTempuhSetelah11Menit = kenaikanDetikTiapKelipatan.map(
    (item, index) => ({
      durasiTempuhDetik:
        index !== kenaikanDetikTiapKelipatan.length - 1
          ? menitKeDetik(10)
          : menitKeDetik(10) + sisaDetikKelipatan10,
      kecepatanTiapDetik: item,
      jarakTempuh:
        index !== kenaikanDetikTiapKelipatan.length - 1
          ? menitKeDetik(10) * item
          : (menitKeDetik(10) + sisaDetikKelipatan10) * item
    })
  );
  const jarakTempuhTiap10MenitSelaluNaik = listJarakTempuhSetelah11Menit.reduce(
    (acc, item) => acc + item.jarakTempuh,
    0
  );

  return jarakTempuhSebelasMenitAwal + jarakTempuhTiap10MenitSelaluNaik;
};

// Contoh penggunaan
const jamBerangkat = new Date(2020, 02, 22, 10, 25, 21);
const jamPergi = new Date(2020, 02, 22, 12, 00, 00);
console.log(hitungTotalJarakTempuh(jamBerangkat, jamPergi));
