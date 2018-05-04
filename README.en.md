[中文文档](https://github.com/wmui/vueblog/blob/master/README.md)

<a href="https://travis-ci.org/wmui/vueblog"><img src="https://travis-ci.org/wmui/vueblog.svg?branch=master" alt="Build Status"></a>
<a href="https://github.com/wmui/vueblog"><img src="https://img.shields.io/badge/license-AGPL-blue.svg" alt="License"></a>

<div style="text-align:center;">
  <img src="https://www.86886.wang/public/1525424904553.png" alt="VueBlog">
  <p><a href="https://www.86886.wang" target="_blank">Live Demo</a></p>
</div>

## VueBlog

VueBlog is a lightweight blog application

### Technology stack

- FrontEnd: Nuxt.js and Vuex
- BackEnd: Mongoose and Koa

### Features

- Server Side Rendering.
- Progressive Web App.
- A lightweight markdown editor based on Vue.js.

### Build Setup

First install [MongoDB](https://www.mongodb.com/download-center?jmp=nav#community) and [Node.js](https://nodejs.org/en/)

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:3000
npm run dev

# build for production
npm run build

# serve in production mode
npm start
```

### Global config

The config file is `/server/config/index.js`.

The uername is `q` and password is `q`.

```javascript
export default {
  user: {
    role: 'superAdmin',
    username: 'q',
    password: 'q',
    email: 'qq22337383@gmail.com',
    nickname: 'VueBlog',
    motto: 'Never too old to learn',
    avatar: 'avatar.png'
  },
  jwt: {
    secret: 'vueblog'
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'vueblog',
    port: 27017,
    username: '',
    password: ''
  },
  production: {
    host: '198.13.32.165',
    domain: 'https://www.86886.wang'
  },
  app: {
    host: '127.0.0.1',
    port: 3000,
    routerBaseApi: 'api'
  }
}

```

### License

[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)
