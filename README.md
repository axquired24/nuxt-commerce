# Commerce Website using Nuxt.js & Tailwind CSS

## Live Preview - SPA Mode
[https://phenomenal-marshmallow-417075.netlify.app/spa/](https://phenomenal-marshmallow-417075.netlify.app/spa/)

### Live Preview - SSR Mode
Not Recommended because this preview deploy using nuxt-generate
Difference only on detail page, when you reload it cannot show blank page ($route.params issue)
[https://phenomenal-marshmallow-417075.netlify.app/](https://phenomenal-marshmallow-417075.netlify.app/)

## Feature 
- [x] Product Listing
- [x] Product Detail
- [x] Responsive View in any device
- [x] Fetch Data from Mock API
- [x] Using Vuex to store fetched products (State management)
- [x] Using persisted-vuex to keep data on localstorage (handle refresh with blank error)
- [x] Manually created persisted data on localstorage (other plugin is expired maintained more than 1 year ago)
- [x] Dummy data generator function `helpers/Helper.js`
- [x] Non-dummy rating product feature
- [x] Build mode: SSR and SPA (different routes)

## Running in Local Laptop

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3003
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
