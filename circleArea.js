// circleArea.js

// Konsoldan gelen parametreyi alıyoruz
const radius = parseFloat(process.argv[2]);

// Eğer yarıçap değeri verilmemişse kullanıcıyı uyarıyoruz
if (isNaN(radius)) {
  console.log('Lütfen geçerli bir yarıçap değeri girin.');
} else {
  // Alan hesaplama (π * r^2)
  const area = Math.PI * Math.pow(radius, 2);
  
  // Sonucu ekrana yazdırıyoruz
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`);
}
