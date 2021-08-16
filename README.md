# Kelompok 5 
# Fantastic Five

# Judul Solusi
Sistem Sentralisasi Informasi Melalui Website sebagai Solusi atas Kurangnya Edukasi Masyarakat Mengenai Vaksin COVID-19

# Daftar Anggota
1. Amar Fadil	                16520008
2. Fikri Muhammad Fahreza 		16520018
3. Vincentius Verel Siedharta	16520199
4. Bariza Haqi				    16520211
5. Jason Kanggara 			    16520214
6. Steven Gianmarg Haposan 	    16520314
7. Monica Adelia				16520321
8. Hilya Fadhilah Imania 		16520488
9. Haidar Ihzaulhaq			    16520489

# Daftar Tugas
1. [3 orang] Concept and Styling (HTML+CSS)
    1. Vincentius Verel Siedharta	16520199
    Jobdesc : Kriteria Vaksin, tanya jawab vaksin
    2. Haidar Ihzaulhaq			    16520489
    Jobdesc : Navbar, Footer, HomePage
    3. Bariza Haqi				    16520211
    Jobdesc : Lokasi vaksin
    4. Fikri Muhammad Fahreza 		16520018
    Jobdesc : Tentang vaksin
2. [3 orang] Implementation (React)
    1. Jason Kanggara 			    16520214
    Jobdesc : Tentang vaksin, lokasi vaksin
    2. Hilya Fadhilah Imania 		16520488
    Jobdesc : Kriteria, Tanya Jawab
    3. Monica Adelia				16520321
    Jobdesc : Navbar, Footer, home page 
3. [1 orang] Logic (fetching data, nembak api, biasa pake JS)
    1. Amar Fadil	                16520008
4. [1 orang] Devops (docker, if apply. CI/CD)
    1. Amar Fadil	                16520008
5. [1 orang] Documentation (Readme)
    1. Steven Gianmarg H Siahaan    16520314

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