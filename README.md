# puppies-backend service

It contains all the logic related to CRUD. The structure is based on 3 layer architecture. The stack tech used was NodeJS and Express. Besides, Postgres for DataBase and Sequelize as ORM.

## Installation

* Clone the repository with: `git clone`
* Install dependencies: `npm install`
* Settings for env file.

### env file

* `DBNAME`: database name in postgres.
* `HOST`: database host.
* `USERDB`: databse user.
* `PASSWORDB`: databse password.
* `PORT`: port to run service.
* `URL_DB`: string with all settings to connect to databse.

It is important to mention it can be possible to make settings to connect to database in different ways. You can select or set up like you want. It is up to you.

## Enpoints
Base url: `https://localhost:3000/api/v1`

<table>
  <tr>
    <th>Dogs</th>
    <th>Breeds</th>
    <th>Temps</th>
    <th>Countries</th>
  </tr>
  <tr>
    <td>get: <code>/dogs/getalldogs</code></td>
    <td>get: <code>/breeds/allbreeds</code></td>
    <td>get: <code>/temps/alltemps</code></td>
    <td>get: <code>/countries/allcountries</code></td>
  </tr>
  <tr>
    <td>get: <code>/dogs/{dogId}</code></td>
    <td>get: <code>/breeds/{breedId}</code></td>
    <td>get: <code>/temps/{tempId}</code></td>
    <td>get: <code>/countries/{countryId}</code></td>
  </tr>
  <tr>
    <td>post: <code>/dogs/newdog</code></td>
    <td>post: <code>/breeds/newbreed</code></td>
    <td>post: <code>/temps/newtemp</code></td>
    <td>post: <code>/countries/newcountry</code></td>
  </tr>
  <tr>
    <td>patch: <code>/dogs/{dogId}</code></td>
    <td>patch: <code>/breeds/{breedId}</code></td>
    <td>patch: <code>/temps/{tempId}</code></td>
    <td>patch: <code>/countries/{countryId}</code></td>
  </tr>
  <tr>
    <td>delete: <code>/dogs/{dogId}</code></td>
    <td>delete: <code>/breeds/{breedId}</code></td>
    <td>delete: <code>/temps/{tempId}</code></td>
    <td>delete: <code>/countries/{countryId}</code></td>
  </tr>
</table>

## Bodies for posting
