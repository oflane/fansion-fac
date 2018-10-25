# Fansion

> Oflane front end




## Build Setup

``` bash
# checkout

git checkout develop

# install dependencies
yarn
// 未安装的话
npm install -g yarn

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run all tests
yarn test
```

## 工程结构

```$xslt

├── README.md
├── build
├── config        //配置目录
├── docs          //项目组件文档以及其他说明
├── hrcloud       //产出静态目录
├── index.html
├── node_modules
├── package.json
├── src           //源码
├── static        // 静态文件目录，e.g 图片等
├── test
└── yarn.lock

```
## 源码结构

```$xslt
├── App.vue
├── components    //组件
├── main.js
├── pages        //功能节点     
├── router       //路由
├── store         
├── styles      //公共样式
├── utils       //工具库
└── widget
```
