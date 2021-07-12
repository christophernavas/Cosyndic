# CoSyndic

CoSyndic is a platform for non-professional trustees and co-owners that offers day-to-day management of buildings with a support service for complex issues.

## Credentials

If you want to test the application, you need some login information.
Here are some credentials to test the application:

User 1 (PCS)

- mail : c_navas@etu-webschoolfactory.fr
- password : webschoolfactory

User 2 (CS)

- mail: [kame-sennin@dragonball.com](mailto:kame-sennin@dragonball.com)
- password: Launch

User 3

- mail : son-goku@dragonball.com
- password : Chichi

User 4

- mail : krilin-san@dragonball.com
- password : Kamehameha

## Stripe payment

If you want to test stripe checkout you have to click here after logging into the dashboard:
![Stripe test](./static/testingStripe.png "Stripe test")

## Build Setup for nuxt (front)

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# build for production and deploy on a CDN 
$ yarn deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Build Setup for Firebase cloud functions nuxt (serverless)

### You must be located in the folder *./functions*

```bash
# install dependencies
$ yarn install

# serve an emulator for cloud functions at localhost:4002
$ yarn serve

# build the functions in a US server for local testing
$ yarn deploy-local

# build the functions in a US server for production
$ yarn deploy
```
