# 🛠️ Integrasi Laravel API & API Gateway

Repositori ini memuat implementasi arsitektur _Microservices_ yang memadukan lingkungan Node.js dan Laravel. Sistem ini dikembangkan dengan menerapkan pola _API Composition_ pada layer API Gateway, yang bertujuan untuk mengonsolidasikan aliran data dari berbagai layanan (_services_) secara terpusat dan efisien.

---

## 🏗️ Arsitektur Sistem

Secara garis besar, sistem beroperasi melalui komponen-komponen utama yang saling bertukar informasi menggunakan komunikasi HTTP:

- **API Gateway (Port 3000):** Bertindak sebagai gerbang utama (_entry point_) yang memegang kendali atas _routing_, proses penerusan _request_ (_proxy_), serta penyatuan respons data (_aggregation_) dengan memanfaatkan _library_ Axios.
- **Service Mentor (Port 8000):** Merupakan layanan _backend_ mandiri yang dibangun menggunakan Laravel API, difokuskan secara khusus untuk menjalankan operasi dan pengelolaan entitas data mentor.

---

## 📁 Struktur Direktori

Sistem ini dipisahkan secara modular dengan susunan _folder_ utama sebagai berikut:

```text
├── api-gateway/       # Express.js - Pengelola rute pusat & agregasi API
└── service-mentor/    # Laravel 12 - Microservice khusus untuk data Mentor
```
