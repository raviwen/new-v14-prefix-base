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
    git clone https://github.com/raviwen/new-v14-prefix-base.git
    cd new-v14-prefix-base
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. `config.js` dosyasını düzenleyin ve kendi `Discord Bot Token` ve `MongoDB URI` bilgilerinizi ekleyin:
    ```javascript
    module.exports = {
        Bot: {
            Guild: 'YOUR_GUILD_ID', // Sunucunuzun ID'si
            Token: 'YOUR_BOT_TOKEN', // Botunuzun tokeni
            Mongo: 'YOUR_MONGODB_URI', // MongoDB bağlantı URI'si
            Prefix: ["!", "-", ".", "_"], // Kullanmak istediğiniz prefixler
            BotVoice: 'YOUR_VOICE_CHANNEL_ID', // Botun bağlanacağı ses kanalı ID'si (isteğe bağlı)
        },
        Roles: {
            BotDev: ['YOUR_DEV_ROLE_ID'], // Geliştirici rolleri
            OwnerRoles: ['YOUR_OWNER_ROLE_ID'], // Sunucu sahibi rolleri
            StaffRoles: ['YOUR_STAFF_ROLE_ID'], // Sunucu personeli rolleri
        },
        Channels: {
            CommandLog: 'YOUR_COMMAND_LOG_CHANNEL_ID', // Komut logları için kullanılacak kanal ID'si
        }
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
