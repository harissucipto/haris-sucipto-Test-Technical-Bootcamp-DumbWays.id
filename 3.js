/*
Buatlah sebuah function untuk mencetak sebuah pola bintang

*/

const cetakPolaBintang = jumlahBintang => {
  const spasi = " ";
  const bintang = "*";
  // jika ganjil
  if (jumlahBintang % 2 !== 0) {
    const bagianAtas = new Array(jumlahBintang)
      .fill(1)
      .map((item, index) => item + index)
      .filter(item => item % 2) // dapatkan deret bilangan ganjil
      .map(item => spasi.repeat(item))
      .map(item => {
        const jumlahUlangi =
          item.length === jumlahBintang
            ? 0
            : Math.floor((jumlahBintang - item.length) / 2);
        if (item.length === 1)
          return (
            spasi.repeat(jumlahUlangi) + bintang + spasi.repeat(jumlahUlangi)
          );

        const posisiAwal = 0;
        const posisiAkhir = item.length - 1;
        const lengkap = item
          .split("")
          .map((nol, index) =>
            [posisiAwal, posisiAkhir].some(posisi => index === posisi)
              ? bintang
              : nol
          );

        return (
          spasi.repeat(jumlahUlangi) +
          lengkap.join("") +
          spasi.repeat(jumlahUlangi)
        );
      });

    const [, ...bagianBawah] = [...bagianAtas].reverse();

    const ganjilLengkap = [...bagianAtas, ...bagianBawah].reduce(
      (acc, item) => (acc += `${item}\n`),
      ""
    );

    return ganjilLengkap;
  }

  // jika genap
  if (jumlahBintang % 2 === 0) {
    const bagianAtas = new Array(jumlahBintang)
      .fill(1)
      .map((item, index) => item + index)
      .filter(item => item % 2 === 0) // dapatkan deret bilangan ganjil
      .map(item => spasi.repeat(item))
      .map(item => {
        const jumlahUlangi =
          item.length === jumlahBintang
            ? 0
            : Math.floor((jumlahBintang - item.length) / 2);
        if (item.length === 1)
          return (
            spasi.repeat(jumlahUlangi) + bintang + spasi.repeat(jumlahUlangi)
          );

        const posisiAwal = 0;
        const posisiAkhir = item.length - 1;
        const lengkap = item
          .split("")
          .map((nol, index) =>
            [posisiAwal, posisiAkhir].some(posisi => index === posisi)
              ? bintang
              : nol
          );

        return (
          spasi.repeat(jumlahUlangi) +
          lengkap.join("") +
          spasi.repeat(jumlahUlangi)
        );
      });

    const bagianBawah = [...bagianAtas].reverse();
    const genapLengkap = [...bagianAtas, ...bagianBawah].reduce(
      (acc, item) => (acc += `${item}\n`),
      ""
    );
    return genapLengkap;
  }

  return "";
};

// penggunaan
console.log(cetakPolaBintang(5));
console.log(cetakPolaBintang(6));
console.log(cetakPolaBintang(9));
