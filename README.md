# Pusdatin Kemendikdasmen — Clone Website React

Clone website Pusat Data dan Teknologi Informasi Kemendikdasmen yang dibangun menggunakan React + Vite + Tailwind CSS.

---

## Tech Stack

React 18 buat bikin UI nya. Vite buat jalanin project di local. Tailwind CSS v4 buat styling dan responsive. JSONPlaceholder buat dummy data API.

---

## Struktur Folder

src/ ├── components/ │ ├── Navbar.jsx │ ├── Hero.jsx │ ├── Layanan.jsx │ ├── DataSection.jsx │ ├── Berita.jsx │ ├── Users.jsx │ └── Footer.jsx ├── App.jsx ├── main.jsx └── index.css

---

## Cara Menjalankan

Masuk folder dengan cd pusdatin, install dulu dengan npm install, jalankan dengan npm run dev, buka browser di http://localhost:5173

---

## Penjelasan Tiap Component

---

Navbar.jsx

Bagian navigasi yang nempel di atas halaman. Ada menu desktop dan burger menu buat mobile.

Hook yang dipakai:
useState — nyimpen kondisi menu mobile buka atau tutup
useRef — buat tau kalau user klik di luar navbar supaya menu nutup sendiri
useEffect — masang event listener klik luar, dibersiin pas component hilang

Props: tidak ada, semua data menu ditulis langsung di dalam component

---

Hero.jsx

Bagian paling atas halaman. Ada teks besar yang katanya ganti-ganti otomatis tiap 2 detik dengan efek fade.

Hook yang dipakai:
useState — nyimpen index kata yang lagi tampil dan kondisi visible buat animasi fade
useEffect — jalanin timer pergantian kata, dibersiin pas component hilang
useRef — nyimpen id timer supaya bisa dihentiin dengan benar

Props: tidak ada

---

Layanan.jsx

Nampilin kartu-kartu layanan dalam grid. Kalau di hover kartunya ada efek naik dikit.

Hook yang dipakai:
useState — nyimpen index card yang lagi di-hover

Props: tidak ada, data layanan ditulis langsung sebagai array di dalam file

---

DataSection.jsx

Carousel yang bisa digeser kiri kanan buat nampilin data pendidikan. Ada tombol prev dan next.

Hook yang dipakai:
useState — nyimpen posisi carousel sekarang ada di index berapa
useRef — buat akses langsung elemen track carousel di DOM supaya bisa discroll secara programatik

Props: tidak ada

---

Berita.jsx

Nampilin berita dengan fitur filter kategori. Kalau klik salah satu tab, berita yang tampil ikut berubah sesuai kategori.

Hook yang dipakai:
useState — nyimpen tab kategori yang aktif dan berita mana yang jadi featured di atas

Props: tidak ada, data berita ditulis langsung sebagai array di dalam file

Cara filter kerjanya: tiap berita punya array kategori, kalau kategori itu ada di tab yang dipilih maka berita itu tampil, kalau engga disembunyiin

---

Users.jsx

Ngambil data 10 user dari API terus ditampilin dalam card. Tiap card ada foto profil dan nama.

Hook yang dipakai:
useState — nyimpen array data user yang udah didapet dari API, sama nyimpen status loading
useEffect — jalanin fetch ke API pas pertama kali component muncul di layar

Props: tidak ada

Cara fetch kerjanya: fetch kirim request ke API, tunggu response, dibuka jadi JSON, datanya disimpen ke state, loading dimatiin, card tampil

Kalau mau ganti API sendiri tinggal ganti URL di fetch dan sesuaikan nama field seperti user.name atau user.id sesuai response API yang baru

---

Footer.jsx

Bagian bawah halaman. Isinya alamat kantor, jam operasional, kontak, dan link sosial media.

Hook yang dipakai: tidak ada karena semua konten statis

Props: tidak ada

---

## Hooks yang Digunakan

useState — buat nyimpen data yang bisa berubah-ubah di dalam component seperti status, index, atau data dari API

useEffect — buat jalanin sesuatu di luar render seperti fetch data, pasang timer, atau pasang event listener. Bisa dibersiin pas component hilang dengan return di dalemnya

useRef — buat pegang referensi ke elemen DOM atau nyimpen nilai yang ga perlu bikin component re-render waktu berubah

---

## Responsive

Tailwind otomatis handle responsive lewat breakpoint. Default buat mobile, sm buat tablet kecil, md buat tablet, lg buat desktop. Tinggal tambahin prefix sm: md: lg: di depan class Tailwind.

---

## Materi yang Digunakan

Instalasi React dengan Vite, Component, useState, useEffect, useRef