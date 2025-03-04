<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Metabolizma Hızı Hesaplayıcı</title>
    <link rel="stylesheet" href="style.css"> <!-- CSS bağlantısı -->
</head>
<body>
    <h1>Metabolizma Hızı Hesaplayıcı</h1>
    
    <form method="POST">
        <label for="cinsiyet">Cinsiyet:</label>
        <select name="cinsiyet" id="cinsiyet" required>
            <option value="1">Erkek</option>
            <option value="2">Kadın</option>
        </select><br><br>
        
        <label for="kilo">Kilo (kg):</label>
        <input type="number" name="kilo" id="kilo" required min="1" step="1"><br><br>
        
        <label for="boy">Boy (cm):</label>
        <input type="number" name="boy" id="boy" required min="1" step="1"><br><br>
        
        <label for="yaş">Yaş:</label>
        <input type="number" name="yaş" id="yaş" required min="1" step="1"><br><br>
        
        <label for="aktivite">Aktivite Seviyesi:</label>
        <select name="aktivite" id="aktivite" required>
            <option value="1">Hareketsiz (Ev işleri, masa başı iş)</option>
            <option value="2">Az Hareketli (Hafif yürüyüşler, hafif egzersiz)</option>
            <option value="3">Orta Seviye (Orta düzeyde egzersiz veya yürüyüş)</option>
            <option value="4">Aktif (Yoğun egzersiz veya spor)</option>
            <option value="5">Çok Aktif (Fiziksel iş veya yüksek yoğunlukta egzersiz)</option>
        </select><br><br>
        
        <button type="submit">Hesapla</button>
    </form>
    
    <div id="result" style="display:none;">
        <h2>Sonuçlar:</h2>
        <p><strong>Bazal Metabolizma Hızı (BMR):</strong> <span id="bmh"></span> kcal/gün</p>
        <p><strong>Günlük Toplam Enerji Harcaması (GTEH):</strong> <span id="gteh"></span> kcal/gün</p>

        <p id="explanation">
            <strong>BMR:</strong> <span id="bmr-desc"></span><br>
            <strong>GTEH:</strong> <span id="gteh-desc"></span>
        </p>
    </div>

    <script src="script.js"></script> <!-- JavaScript bağlantısı -->
</body>
</html>
