# REST-API

I det här projektet har jag skapat ett enkelt REST API i node.JS med hjälp av ramverket Express. 
API:et har funktionalitet för CRUD operationer och kan då *Skapa, Läsa, Uppdatera och Radera* datan som är sparad lokalt i serverfilen (app.js).

Datan består utav en array med produkt-objekt, vilka innehåller egenskaperna id, name, price, och condition.

I REST client*en* går det hämta alla objekt, ett specifikt objekt, uppdatera samt radera objekt.


## Uppfyllda Krav 

- 4 st egenskaper för varje objekt varav en egenskap är id.

- Projektet innehåller minst 4 st. endpoints (GET, POST, PUT &  DELETE för en resurs)

- Samtliga endpoints skall kunna nås via en REST Client fil (.rest)

- Datan som API:et hanterar sparas lokalt i serverfilen

- Git & GitHub har använts

- Projektmappen innehåller en README.md fil



## Setup
Installera projektets *dependencies*
```bash
npm install
```


Kör node server
```bash
npm run start
```


## Links 
[Github Repo](https://github.com/solkatt/REST-API)

