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
    <th>DataBase</th>
  </tr>
  <tr>
    <td>get: `/dogs/getalldogs`</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
</table>
