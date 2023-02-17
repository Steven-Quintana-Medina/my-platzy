# myplatz
to start the project you must first use the "npm install" command to download the modules
if you are in a developer environment use "npm run dev" to run the api
if you are in a production environment use "npm run start" to run the api

# route add users
POST: "http://localhost:3000/api/v1/user"

# parameters to add users
name: STRING
password: STRING
email: STRING
rol: STRING

# route add products
POST: "http://localhost:3000/api/v1/product"

# parameters to add products
name: STRING
price: INT
description: STRING
category: STRING

# route to buy a product
POST: "http://localhost:3000/api/v1/product/id_product";

# route to list all products
GET: "http://localhost:3000/api/v1/product"

# route add products to cart
POST: "http://localhost:3000/api/v1/cart"

# parameters to add products to cart
id: INT

note: it is the id of the product

# route to list all products of a shopping cart
GET: "http://localhost:3000/api/v1/cart"

# route to remove a product from a shopping cart
DELETE: "http://localhost:3000/api/v1/cart/id_product"

# route to remove all product from a shopping cart
DELETE: "http://localhost:3000/api/v1/cart"

