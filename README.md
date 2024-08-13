# Aquara Discord Bot

Aquara Discord Bot, Discord sunucuları için geliştirilen güçlü ve özelleştirilebilir bir bot projesidir. Bu bot, çeşitli komutlar ve olaylar ile sunucunuzu yönetmenizi sağlar.

## Özellikler

- **Komut Yükleyici:** Farklı klasörlerde yer alan komutlar otomatik olarak yüklenir.
- **Event Yükleyici:** Farklı klasörlerde yer alan eventler otomatik olarak yüklenir.
- **Mongoose Veritabanı Bağlantısı:** MongoDB ile kolayca entegre olur.
- **Geliştirici, Sunucu Sahibi, Personel ve Kullanıcı Türleri:** Komutlar için özelleştirilmiş yetkilendirme sistemi.

## Kurulum

### Gereksinimler

- Node.js (v14 veya daha yeni bir sürüm)
- NPM veya Yarn
- MongoDB

### Adımlar

1. Bu projeyi bilgisayarınıza klonlayın:
    ```bash
    git clone https://github.com/kullaniciadi/aquara-bot.git
    cd aquara-bot
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. `config.js` dosyasını düzenleyin ve kendi `Discord Bot Token` ve `MongoDB URI` bilgilerinizi ekleyin:
    ```javascript
    module.exports = {
      bot: {
        Token: 'YOUR_BOT_TOKEN',
        Mongo: 'YOUR_MONGODB_URI',
        Guild: 'YOUR_GUILD_ID',
        prefixes: ['!', '?'], // Kullanmak istediğiniz prefixler
        devs: ['YOUR_USER_ID'] // Geliştirici ID'lerinizi buraya ekleyin
      },
      ownerRoles: ['OWNER_ROLE_ID'], // Sunucu sahibi rollerini buraya ekleyin
      staffRoles: ['STAFF_ROLE_ID'], // Sunucu personeli rollerini buraya ekleyin
    };
    ```

4. Botu başlatın:
    ```bash
    npm start
    ```

## Kullanım

Aquara Bot, çeşitli komutlarla sunucunuzdaki yönetimi kolaylaştırır. Aşağıda örnek komutlar bulunmaktadır:

- **Ping Komutu:** Botun ping değerini kontrol eder.
    ```
    !ping
    ```

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request açın veya bizimle iletişime geçin.

## İletişim

Daha fazla bilgi almak veya destek almak için Discord sunucumuza katılabilirsiniz: [discord.gg/aquara](https://discord.gg/aquara)

---

**Aquara Discord Bot** projesine katkıda bulunan herkese teşekkürler!
