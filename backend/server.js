const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(8081, () => console.log('server listenning on 127.0.0.1:8081!'))

app.post('/api/contribution/add', (req, res) =>
  addContribution({
    title: 'testtitle',
    duration: 60,
    description: 'testdescription',
    usernames: 'ohez',
    knex,
  })
    .then(() => res.send('data inserted'))
    .catch(() => res.status.send(500)),
)

/***********************************
 ****************  data ************
 ***********************************
 */

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './data/spicehours-data.sqlite',
  },
  useNullAsDefault: true,
})

// Create tables if they don't exist
const createTable = knex =>
  knex.schema
    .createTableIfNotExists('users', table => {
      table.uuid('id')
      table.string('username').unique().notNullable()
      table.string('name')
    })
    .createTableIfNotExists('contributions', table => {
      table.uuid('id')
      table.string('title')
      table.string('username').notNullable()
      table.integer('duration')
      table.string('description')
    })
    .catch(e => {
      console.log('hoi')
      console.error(e)
    })

const addContribution = ({ title, duration, description, username, knex }) =>
  createTable(knex)
    .then(() =>
      knex
        .insert({ title, duration, description, username })
        .into('contributions'),
    )
    .catch(e => console.error(e))
