document.addEventListener('DOMContentLoaded', function () {
    // Set tanggal yang menjadi tanggal yang akan dihitung mundur
    var countDownDate = new Date("Dec 31, 2023 10:00:00").getTime();
  
    // Update countdown setiap 1 detik
    var x = setInterval(function () {
  
      // Mengambil nilai waktu dan tanggal yang sekarang berjalan
      var now = new Date().getTime();
  
      // Menghitung sisa waktunya
      var distance = countDownDate - now;
  
      // Menghitung Hari, jam, menit, dan detik
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Menampilkan countdown
      document.getElementById("days").innerHTML = days;
      document.getElementById("hours").innerHTML = hours;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("seconds").innerHTML = seconds;
  
      // Jika countdown berakhir, akan menampilkan pesan:
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Match Started";
      }
    }, 1000);
  });
  