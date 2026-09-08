# Psk. Sevda Halil — Bireysel Psikolog Sitesi

Krem tonlu, kahverengi tipografili tek sayfalık tanıtım sitesi. Kurulum veya derleme
adımı yok; düz HTML, CSS ve JavaScript ile çalışır.

## Dosyalar

| Dosya | İçerik |
| --- | --- |
| `index.html` | Sayfa yapısı, tüm metinler ve SEO etiketleri |
| `kvkk.html` | KVKK aydınlatma metni ve gizlilik politikası |
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

## Form altyapısı (Formspree)

İletişim formu Formspree üzerinden çalışır ve mesajlar `psk.sevdahalil@gmail.com`
adresine iletilir.

- **Endpoint:** `https://formspree.io/f/xkjnqenp` (`index.html` içindeki form `action`
  değeri)
- **Plan:** ücretsiz, ayda 50 mesaj
- **Spam koruması:** formda görünmeyen `_gotcha` tuzak alanı

Alıcı adresi değiştirmek için Formspree panelindeki form ayarlarını güncellemek
yeterlidir; kodda değişiklik gerekmez. Formun `action` değeri değişirse
`script.js` içindeki gönderim mantığı da aynı adresi kullanır (form etiketinden
okunur).

Formspree erişilemezse form, kullanıcıya hata mesajı gösterir ve doğrudan e-posta
adresine yazmasını önerir.

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

## Alan adı: psksevdahalil.com

Alan adı Hostinger'da kayıtlı ve isim sunucuları Hostinger'da (`dns-parking.com`),
yani DNS kayıtları hPanel üzerinden yönetilir.

Hostinger hPanel → **Domainler → psksevdahalil.com → DNS / İsim sunucuları** altında
şu kayıtlar bulunmalıdır:

| Tür | Ad | Değer |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `muhammetbartu.github.io` |

Park sayfasına ait eski `A` kaydı (`2.57.91.91`) silinmelidir.

DNS tarafı hazır olduğunda depodaki `CNAME` dosyası ve GitHub **Settings → Pages →
Custom domain** ayarı alan adını gösterir; ardından **Enforce HTTPS** işaretlenir.
Sertifika birkaç dakika içinde otomatik oluşur.

Doğrulamak için:

```bash
dig +short psksevdahalil.com A
curl -sI https://psksevdahalil.com | head -1
```

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

`kvkk.html` sayfası aydınlatma metnini ve gizlilik politikasını içerir; iletişim
formundaki zorunlu onay kutusu bu sayfaya bağlanır. Metin, Formspree ve GitHub Pages
sunucuları yurt dışında olduğu için yurt dışına aktarıma ilişkin açık rıza ifadesini de
içerir. Ad, unvan, adres ve e-posta bilgileri gerçek bilgilerle doldurulmuştur.
