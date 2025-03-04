document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun gönderilmesini engelle

    // Form verilerini al
    var cinsiyet = document.getElementById('cinsiyet').value;
    var kilo = parseInt(document.getElementById('kilo').value);
    var boy = parseInt(document.getElementById('boy').value);
    var yaş = parseInt(document.getElementById('yaş').value);
    var aktivite = document.getElementById('aktivite').value;

    // Formda geçerli veriler olup olmadığını kontrol et
    if (isNaN(kilo) || isNaN(boy) || isNaN(yaş)) {
        alert("Lütfen geçerli bir kilo, boy ve yaş değeri girin.");
        return;
    }

    // Harris-Benedict formülü ile bazal metabolizma hızı hesaplama
    var bmh;
    if (cinsiyet == "1") {
        bmh = 66.5 + (13.75 * kilo) + (5.03 * boy) - (6.75 * yaş);
    } else if (cinsiyet == "2") {
        bmh = 655.1 + (9.56 * kilo) + (1.85 * boy) - (4.68 * yaş);
    } else {
        alert("Geçersiz cinsiyet.");
        return;
    }

    // Aktivite katsayıları
    var katsayılar = {
        "1": 1.2,
        "2": 1.375,
        "3": 1.55,
        "4": 1.725,
        "5": 1.9
    };
    var gteh = bmh * katsayılar[aktivite];

    // Sonuçları göster
    document.getElementById('bmh').textContent = bmh.toFixed(2);
    document.getElementById('gteh').textContent = gteh.toFixed(2);

    // Sonuçların görünür olmasını sağla
    document.getElementById('result').style.display = 'block';

    // Açıklama kısmını güncelle
    document.getElementById('bmr-desc').textContent = "BMR (Bazal Metabolizma Hızı) vücudunuzun sadece hayatta kalabilmek için harcadığı enerjidir.";
    document.getElementById('gteh-desc').textContent = "GTEH (Günlük Toplam Enerji Harcaması) ise tüm günlük aktivitelerinizle birlikte harcadığınız toplam kalori miktarıdır.";
});
