# ShopClients

#### This is a Proof of Concep for typescript with a CRUD. Its based in a simple aplication where the owner register his most usual clients for contact or make them some delivy

## GET /clients
#### Retrives the list of clients resgistered

#### Response:
#### HTTP 200 OK
```Content-Type: application/json

[
  {
    "id": 4,
    "name": "Leonan",
    "email": "leonanm01@gmail.com",
    "cpf": "10386732911",
    "phone": "048999996979",
    "address": "jose luiz martins 650"
  },
  {
    "id": 6,
    "name": "Paulo",
    "email": "paulo@gmail.com",
    "cpf": "10386732918",
    "phone": "048999996990",
    "address": "jose luiz martins 650"
  },
  {
    "id": 7,
    "name": "Laura",
    "email": "laura@gmail.com",
    "cpf": "10386732154",
    "phone": "048999996990",
    "address": "rua joao honorato espindol 725"
  }
]
```

## POST /clients

#### Register specified client in the database.

#### Request:

```Content-Type: application/json
{
  "name": "Laura",
   "email": "laura@gmail.com",
   "cpf": "10386732154",
   "phone": "048999996990",
   "address": "rua joao honorato espindol 725"
}
```
#### Response:
#### HTTP 201 Created

## PUT /clients/:id

#### Updates the address of a client
#### Request:

#### PUT /clients/7
```Content-Type: application/json

{
  "address": "rua joao honorato espindola 75"
}
```

#### Response:
#### HTTP 204 No Content

## DELETE /client/:id

#### Excludes a client from the list

#### Request:
#### DELETE /clients/7

#### Response:
#### HTTP 204 No Content
