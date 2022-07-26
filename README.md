# Commerce Website using Nuxt.js & Tailwind CSS

## Live Preview - SPA Mode
[https://62e0577f9acb0d0ab95d29e7--phenomenal-marshmallow-417075.netlify.app/spa](https://62e0577f9acb0d0ab95d29e7--phenomenal-marshmallow-417075.netlify.app/spa)

### Live Preview - SSR Mode
Not Recommended because this preview deploy using nuxt-generate
Difference only on detail page, when you reload it cannot show blank page ($route.params issue)
[https://62e0577f9acb0d0ab95d29e7--phenomenal-marshmallow-417075.netlify.app](https://62e0577f9acb0d0ab95d29e7--phenomenal-marshmallow-417075.netlify.app)

## Feature 
- [x] Product Listing
- [x] Product Detail
- [x] Responsive View in any device
- [x] Fetch Data from Mock API
- [x] Using Vuex to store fetched products (State management)
- [x] Using persisted-vuex to keep data on localstorage (handle refresh with blank error)
- [x] Manually created persisted data on localstorage (other plugin is expired maintained more than 1 year ago)
- [ ] On Detail Page, now you can only refresh in SSR mode, in SPA mode it will show blank (the preview link is SPA mode, for SSR mode you can using npm run dev or run as production below)
- [x] Dummy data generator function `helpers/Helper.js`
- [x] Non-dummy rating product feature

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
