Typescript Karma Webpack Jasmine Request "cors" Demo
====================================================

Jasmine的测试通常是在浏览器中执行，如何解决跨域问题？关键点在于karma.config.js中：

```
browsers: ['Chrome_without_security'],

customLaunchers:{
    Chrome_without_security:{
        base: 'Chrome',
        flags: ['--disable-web-security']
    }
},
```

```
npm install
npm run test
```

