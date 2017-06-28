'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const sys_user = app.model.define('sys_user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment:'主键'
        },

        office_id: {
            type:INTEGER,
            comment:'归属部门',
            allowNull:false
        },
        login_name: {
            type:STRING(100),
            comment:'登录名',
            allowNull:false
        },
        password: {
            type:STRING(100),
            comment:'密码',
            allowNull:false
        },
        no: {
            type:STRING(100),
            comment:'工号',
            defaultValue:null
        },
        name:{
            type:STRING(30),
            comment:'姓名',
            allowNull:false
        },
        email:{
            type:STRING(200),
            comment:'邮箱',
            defaultValue:null
        },
        phone: {
            type:STRING(200),
            comment:'电话',
            defaultValue:null
        },
        mobile: {
            type:STRING(200),
            comment:'手机',
            defaultValue:null
        },
        user_type: {
            type:INTEGER,
            comment:'用户类型',
            allowNull:false
        },
        photo: {
            type:STRING(1000),
            comment:'用户头像',
            defaultValue:null
        },
        login_ip: {
            type:STRING(100),
            comment:'最后登陆IP',
            defaultValue:null
        },
        login_date:{
            type:DATE,
            comment:'最后登陆时间',
            defaultValue:null
        },
        login_flag: {
            type:INTEGER,
            comment:'是否可登录',
            defaultValue:null
        },
        create_by: {
            type:INTEGER,
            comment:'创建者',
            allowNull:false
        },
        create_date: {
            type:DATE,
            comment:'创建时间',
            allowNull:false
        },
        update_by: {
            type:INTEGER,
            comment:'更新者',
            allowNull:false
        },
        update_date: {
            type:DATE,
            comment:'更新时间',
            allowNull:false
        },
        remarks:{
            type:STRING(255),
            comment:'备注信息',
            defaultValue:null
        },
        del_flag: {
            type:INTEGER,
            comment:'删除标记',
            defaultValue:0,
            allowNull:false
        }
    }, {
        freezeTableName: true, Model 对应的表名将与model名相同
        timestamps: false,
        defaultScope:{
            where:{
                del_flag:0
            }
        }
    });





    /**
     * 按照主键id查找元素
     * create by xingbo 17/06/27
     * @returns {Promise.<void>}
     */
    sys_user.findById=async()=>{
        console.log("nihao");

    }
    return sys_user;
};
