'use strict';
const path = require('path');
module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1497325386158_1939';

    // 静态资源/static/* 映射到 app/public/static
    config.static = {
        prefix: '/static/',
        dir: path.join(appInfo.baseDir, 'app/public/static')
    };
    /**
     * Mysql 链接配置
     * create by xingbo 17/06/28
     * @type {{dialect: string, database: string, host: string, port: string, username: string, password: string}}
     */
    config.sequelize = {
        dialect: 'mysql',
        database: 'test',
        host: '192.168.0.5',
        port: '3306',
        username: 'root',
        password: 'root',
    }
    /**
     * 跨域设置
     * create by xingbo 17/06/29
     * @type {{allowMethods: string}}
     */
    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    config.security = {
        domainWhiteList: [
            'localhost',
        ],
    };
    return config;

};