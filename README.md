# Psk. Sevda Halil — Bireysel Psikolog Sitesi

Krem tonlu, kahverengi tipografili tek sayfalık tanıtım sitesi. Kurulum veya derleme
adımı yok; düz HTML, CSS ve JavaScript ile çalışır.

## Dosyalar

| Dosya | İçerik |
| --- | --- |
| `index.html` | Sayfa yapısı, tüm metinler ve SEO etiketleri |
| `styles.css` | Renk paleti, tipografi ve düzen |
| `script.js` | Mobil menü, kaydırma efektleri, iletişim formu |
| `favicon.svg` | Tarayıcı sekmesi simgesi |
| `robots.txt` | Arama motorları için erişim izni |

## Yerelde açmak

`index.html` dosyasını çift tıklayarak tarayıcıda açabilirsiniz. Yerel sunucu ile
çalıştırmak isterseniz:

```bash
python3 -m http.server 8000
```

Ardından `http://localhost:8000` adresini açın.

## Formu e-postaya bağlamak (Formspree)

Form şu an Formspree'ye gönderim yapacak şekilde kurulu, ancak form kimliği henüz
girilmedi. Kimlik girilmediği sürece form, ziyaretçinin e-posta uygulamasında hazır bir
mesaj açar (yedek davranış).

Bağlamak için:

1. [formspree.io](https://formspree.io) üzerinde ücretsiz hesap açın ve mesajların
   gideceği e-posta adresini doğrulayın.
2. Yeni bir form oluşturun. Formspree size `https://formspree.io/f/abcdwxyz` biçiminde
   bir adres verir; sondaki 8 karakter form kimliğidir.
3. `index.html` içindeki form etiketinde `FORMSPREE_ID` yazan yeri bu kimlikle
   değiştirin:

```html
<form action="https://formspree.io/f/abcdwxyz" method="POST">
```

4. Siteyi yayınladıktan sonra formu bir kez gerçekten doldurup gönderin; Formspree ilk
   gönderimde adresi doğrular.

Ücretsiz plan ayda 50 mesaj gönderir. Formda görünmeyen bir tuzak alanı (`_gotcha`)
bulunur; bu, basit spam botlarını engeller.

## Yayınlamak (GitHub Pages)

Depo GitHub'a yüklendikten sonra Pages ayarı **Settings → Pages** altından
`main` dalı / `/ (root)` klasörü olacak şekilde açılır. Yayın adresi:

```
https://<kullanıcı-adı>.github.io/<depo-adı>/
```

Her `git push` sonrası site birkaç dakika içinde kendini günceller:

```bash
git add .
git commit -m "İçerik güncellendi"
git push
```

## Alan adını bağlamak

1. Depoya `CNAME` adında, içinde yalnızca alan adınız yazan bir dosya ekleyin
   (örnek içerik: `sevdahalil.com`).
2. Alan adını aldığınız firmanın DNS panelinde şu kayıtları oluşturun:

| Tür | Ad / Host | Değer |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<kullanıcı-adı>.github.io` |

3. GitHub deposunda **Settings → Pages → Custom domain** alanına alan adını yazın,
   kaydedin ve DNS doğrulaması bittikten sonra **Enforce HTTPS** seçeneğini işaretleyin.

DNS değişikliklerinin yayılması genellikle 15 dakika ile birkaç saat sürer.

## Kişiselleştirme

- **Metinler:** `index.html` içindeki bölümleri (hakkımda, çalışma alanları, SSS)
  doğrudan düzenleyin.
- **İletişim bilgileri:** `index.html` içindeki e-posta, telefon ve adres alanlarını
  değiştirin. Aynı adres `script.js` başındaki `CONTACT_EMAIL` değişkeninde ve
  `index.html` içindeki yapılandırılmış veri (JSON-LD) bloğunda da geçer.
- **Renkler:** `styles.css` dosyasının başındaki `:root` değişkenlerini değiştirmeniz
  yeterli. Örneğin `--accent` vurgu rengini, `--cream` sayfa zeminini belirler.
- **Fotoğraf:** Hero bölümündeki `.portrait` alanı şu an degrade bir yer tutucudur.
  Gerçek fotoğrafı eklemek için `index.html` içindeki `<div class="portrait">` etiketini
  bir `<img src="foto.jpg" alt="Psk. Sevda Halil" class="portrait">` ile değiştirin.

## Yasal not

Site, danışan gizliliği ve acil durum yönlendirmesine dair bir bilgi notu ile formda
açık onay kutusu içerir. Yayına almadan önce KVKK aydınlatma metni ve gizlilik
politikası eklemeniz önerilir.
