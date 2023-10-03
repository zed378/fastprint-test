# Fastprint Technical Test

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Cara Menggunakan

- Setting config
  Masuk ke folder config dan atur koneksi pada file config.json sesuai dengan milik Anda

```
{
  "development": {
    "username": "freedb_zedth",
    "password": "#Pjpb998gUna9g!",
    "database": "freedb_fastprint",
    "host": "sql.freedb.tech",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "freedb_zedth",
    "password": "#Pjpb998gUna9g!",
    "database": "freedb_fastprint",
    "host": "sql.freedb.tech",
    "port": 3306,
    "dialect": "mysql"
  },
  "production": {
    "username": "freedb_zedth",
    "password": "#Pjpb998gUna9g!",
    "database": "freedb_fastprint",
    "host": "sql.freedb.tech",
    "port": 3306,
    "dialect": "mysql"
  }
}
```

- Install package dan dependencies

```
npm i
```

- Migrasi skema database dan jalankan seeding jika memulai dari database kosongan

```
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

- Jalankan server

```
npm start
```

## Consume API

### API Product

- GET
  > < host >:5000/api/v1/products
  > Akan memberikan response semua produk yang ada di database tanpa filter apapun
  > selain itu bisa menambahkan query untuk filter data
  > < host >:5000/api/v1/products?isTradeable=1
  > nilai **1** akan memberikan response semua data yang bisa dijual dan **2** akan memberikan response semua data yang tidak bisa dijual

| API   | Default              | Custom                                                                                                       |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------ |
| Query | default is undefined | isTradeable=1 untuk return data yang bisa dijual atau isTradeable=2 untuk return data yang tidak bisa dijual |

> < host >:5000/api/v1/product/:id
> Akan memberikan respons produk dengan parameter :id yang telah diberikan

| API    | Default              | Custom                                                              |
| ------ | -------------------- | ------------------------------------------------------------------- |
| Params | default is undefined | Berupa id dari produk dan wajib. Bisa berupa string ataupun integer |

- POST
  > < host >:5000/api/v1/product

| Body        | Default |
| ----------- | ------- |
| nama_produk | STRING  |
| harga       | INT     |
| kategori_id | INT     |
| status_id   | INT     |

- PATCH
  > < host >:5000/api/v1/product

| Body        | Default       |
| ----------- | ------------- |
| id_produk   | STRING or INT |
| nama_produk | STRING        |
| harga       | INT           |
| kategori_id | INT           |
| status_id   | INT           |

- DELETE
  > < host >:5000/api/v1/product

| Body      | Default       |
| --------- | ------------- |
| id_produk | STRING or INT |

### API Kategori

- GET
  > < host >:5000/api/v1/categories
  > Akan memberikan response semua produk yang ada di database tanpa filter apapun

> < host >:5000/api/v1/category/:id
> Akan memberikan respons kategori dengan parameter :id yang telah diberikan

| API    | Default              | Custom                                                              |
| ------ | -------------------- | ------------------------------------------------------------------- |
| Params | default is undefined | Berupa id dari produk dan wajib. Bisa berupa string ataupun integer |

- POST
  > < host >:5000/api/v1/category

| Body          | Default |
| ------------- | ------- |
| nama_kategori | STRING  |

- PATCH
  > < host >:5000/api/v1/product

| Body          | Default       |
| ------------- | ------------- |
| id_kategori   | STRING or INT |
| nama_kategori | STRING        |

- DELETE
  > < host >:5000/api/v1/product

| Body        | Default       |
| ----------- | ------------- |
| id_kategori | STRING or INT |

### API Status

- GET
  > < host >:5000/api/v1/categories
  > Akan memberikan response semua produk yang ada di database tanpa filter apapun

## FRONT END
