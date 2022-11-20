**API-AUTH-TEST**
> Base layout to a simple node json web token authentication API
----

url:
```
    http://localhost:4000
```
---
**__Authenticate a user__**

POST `http://localhost:4000/users/authenticate` with json body:
```json
{
    "username": "test",
    "password": "test"
}
```
Outcome:
```json
{
    "id": 1,
    "username": "test",
    "firstName": "test",
    "lastName": "test",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2ODkwMDI1OSwiZXhwIjoxNjY5NTA1MDU5fQ.4dYWOlp1pz-Ta4qnIvMe6_J5w63oXYuYHAl-ciwgJQw"
}
```
---
**Make an authenticated request to retrieve all users**

GET `/users` | `http://localhost:4000/users` with Bearer Token

*outcome*
```json
{
    {
        "id": 1,
        "username": "test",
        "firstName": "test",
        "lastName": "test",
    }
}
```
---
**Setup:**

1. Download & run `npm install`

1. Change `config.json` > `"secret"` to a random character string

2. Run `npm run dev` for testing

3. Test API with [Insomnia](https://github.com/Kong/insomnia)

4. Run `npm start` for production

---

*For a db user production model view examples [here!](https://github.com/WitchieXCabot/api-auth-test/blob/main/examples/dbExample.js)*