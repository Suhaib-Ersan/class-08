# lab 08 Access Control

[Heroku link](https://class-08.herokuapp.com/).
[github link](https://github.com/Suhaib-Ersan/class-08/tree/main).


## Access points

### `/signup`

> `{"username": "suhaib","password": "pass", "role": "user"}`

  
will return an object with the user data + your jwt token.


### `/signin`

> Username: suhaib, Password pass

will return an object with the user data + your jwt token.

### `/users`

> needs a bearer token that you got in the signin or the signup, but will need an account with "delete" or "admin" capabilities 

will return an object with the user data + your jwt token.


### .get('/clothes') or .get('/food')   

will return an object with all the clothes/food data.

### .get('/clothes/1') or .get('/food/1')   

will return an object with the clothes/food data with an id of "1".

### .post('/clothes') or .post('/food')   

you have to send an object(body) with it.
will return an object with the created clothes/food data.

### .put('/clothes/1') or .put('/food/1')   

you have to send an object(body) with it, to the update the clothes/food data with an id of "1".
will return an object with the updated clothes/food data.

### .delete('/clothes/1') or .delete('/food/1')   

will delete the clothes/food object in the database with an id of "1".
will return a "null" as there is no object to return.

