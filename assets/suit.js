alert(
  'Selamat datang di game Suit Java. Jika masa kecil kalian bahagia, Kalian pasti mengetahui game simple ini. klik ok untuk memulai permainan.'
);
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playGame);
}

//generate random number untuk komputer memilih
function playGame(e) {
  let user = e.target.innerText;
  let pilihanKomputer = Math.floor(Math.random() * 6) + 1;
  if (pilihanKomputer <= 2) {
    pilihanKomputer = 'Gajah';
  } else if (pilihanKomputer > 2 && pilihanKomputer <= 4) {
    pilihanKomputer = 'Orang';
  } else {
    pilihanKomputer = 'Semut';
  }
  return cekWInner(user, pilihanKomputer);
}
// cek siapa pemenangnya
function cekWInner(us, kom) {
  var penentuan;
  // test case untuk gajah
  if (us === 'Gajah') {
    if (kom === 'Semut') {
      penentuan = 'Komputer Pemenangnya, kamu kalah dengan semut';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else if (kom === 'Orang') {
      penentuan = 'Selamat!! kamu telah mengalahkan orang orang yang memburu gading gajahmu.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else {
      penentuan = 'Pilihan kalian sama. Hiduplah damai.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    }
  }
  //tes case untuk orang

  if (us === 'Orang') {
    if (kom === 'Gajah') {
      penentuan = 'Komputer Pemenangnya, kamu kalah dengan kawanan gajah.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else if (kom === 'Semut') {
      penentuan = 'kamu pemenangnya, karena telah mengusir semut semut yang akan mencuri gulamu.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else {
      penentuan = 'Pilihan kalian sama. Hiduplah damai.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    }
  }
  // tes case untuk semut
  if (us === 'Semut') {
    if (kom === 'Orang') {
      penentuan =
        'Komputer Pemenangnya, lebih baik kabur  daripada kita akan terinjak oleh manusia.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else if (kom === 'Gajah') {
      penentuan =
        'kamu pemenangnya, kalian telah menyerang masuk ketubuh gajah melalui telinga mereka.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    } else {
      penentuan = 'Pilihan kalian sama. Hiduplah damai.';
      return (document.getElementById('hasil').innerHTML = penentuan);
    }
  }
}
