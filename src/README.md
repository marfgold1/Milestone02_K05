# Dokumentasi 
# Deployment
## Deploy dari Repository

Untuk deployment dari repository:
1. Install `node` dan `yarn` terlebih dahulu.
2. Clone repository ini, kemudian change directory ke folder repository.
3. Change directory ke `/src/ayo-vaksin`, kemudian install package dengan `yarn install`.
4. Buatlah production build dengan command `yarn build`.
5. Setelah build selesai, host folder `build` dengan static file webserver. Sebagai contoh, dengan menggunakan `serve`, jalankan command `npm serve -d build`.

## Deploy dari Docker Image

Untuk deployment dari docker image:
1. Install `docker` terlebih dahulu.
2. Kamu bisa melakukan salah satu dari dua pilihan berikut:

 a. Pull image yang telah dibuild secara otomatis.
```
docker pull ghcr.io/marfgold1/ayo-vaksin:latest
```
 b. Kamu juga bisa build imagenya sendiri dengan
```
docker build --pull -t ayo-vaksin:latest .
```
>Jangan lupa untuk change directory terlebih dahulu ke `/src/ayo-vaksin`).

3. Jalankan container baru dengan image yang telah disiapkan sebelumnya.
```
docker run -it -p 80:5000 ghcr.io/marfgold1/ayo-vaksin:latest
```
> Jika menggunakan tag yang lain, ganti `ghcr.io/marfgold1/ayo-vaksin:latest` dengan tag kamu sendiri. Sebagai contoh, command untuk build image sendiri yang telah disebut akan menambahkan tag `ayo-vaksin:latest` pada image, sehingga kamu harus menggunakan tag tersebut.
4. Website dapat diakses melalui `localhost:5000`.
