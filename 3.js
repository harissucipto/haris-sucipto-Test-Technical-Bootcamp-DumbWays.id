/*
Buatlah sebuah function untuk mencetak sebuah pola

lima

00100
01010
10001
01010
00100

6
001100
010010
100001
100001
010010
001100

9

'1', 
'01010', 
'001000100', 
'0001000001000', 
'100000001'

*/

const cetakPolaBintang = jumlahBintang => {
  // ganjil
  const bagi2 = Math.ceil(jumlahBintang / 2);

  const bagianAtas = new Array(jumlahBintang)
    .fill(1)
    .map((item, index) => item + index)
    .filter(item => item % 2)
    .map(item => "0".repeat(item))
    .map(item => {
      const jumlahUlangi =
        item.length === jumlahBintang
          ? 0
          : Math.floor((jumlahBintang - item.length) / 2);
      if (item.length === 1)
        return "0".repeat(jumlahUlangi) + "1" + "0".repeat(jumlahUlangi);

      const posisiAwal = 0;
      const posisiAkhir = item.length - 1;
      const lengkap = item
        .split("")
        .map((nol, index) =>
          [posisiAwal, posisiAkhir].some(posisi => index === posisi) ? "1" : nol
        );

      return (
        "0".repeat(jumlahUlangi) + lengkap.join("") + "0".repeat(jumlahUlangi)
      );
    });

  const [, ...bagianBawah] = [...bagianAtas].reverse();

  const ganjilLengkap = [...bagianAtas, ...bagianBawah].reduce(
    (acc, item) => (acc += `${item}\n`),
    ""
  );

  console.log(ganjilLengkap);
};
