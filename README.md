[//]: # (# tabs-vue)

[//]: # ()
[//]: # (## Project setup)

[//]: # (```)

[//]: # (npm install)

[//]: # (```)

[//]: # ()
[//]: # (### Compiles and hot-reloads for development)

[//]: # (```)

[//]: # (npm run serve)

[//]: # (```)

[//]: # ()
[//]: # (### Compiles and minifies for production)

[//]: # (```)

[//]: # (npm run build)

[//]: # (```)

[//]: # ()
[//]: # (### Customize configuration)

[//]: # (See [Configuration Reference]&#40;https://cli.vuejs.org/config/&#41;.)


Commit

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/tabs-vue/'
})

<link rel="icon" href="<%= BASE_URL %>favicon.ico">
