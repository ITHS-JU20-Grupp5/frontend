# General Knowledge Quiz (Backend)

## To get it running:

Rename the

```
.env.example
```

file to:

```
.env
```

Run the following command to start a dev server:

```shell
npm run dev
```

To populate the database with some dummy data run the following command while the server is running:

```shell
node utils/dummyData
```

### Dummy data

The dummy data consists of:

- One user
  - Username: user, Password: Password123
- Three categories
  - KATEGORI1, KATEGORI2, KATEGORI3
- Five questions per category
- Six answers per question
  - One correct answer, five incorrect answers
