'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const sys_office = app.model.define('sys_office', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment:'主键'
        },
        parent_id: {
            type: INTEGER,
            allowNull:false,
            defaultValue:0,
            comment:'父级编号'
        },
        parent_ids: {
            type: STRING(200),
            allowNull: false,
            defaultValue:',0,',
            comment:'所有父级编号'
        },
        name: {
            type: STRING(100),
            allowNull: false,
            comment:'名称'
        },
        sort: {
            type: INTEGER,
            allowNull: true,
            defaultValue: null,
            comment:'排序'
        },
        type: {
            type: INTEGER,
            allowNull: false,
            comment:'机构类型'
        },
        address: {
            type: STRING(255),
            allowNull: true,
            defaultValue: null,
            comment:'联系地址'
        },
        zip_code: {
            type: STRING(100),
            allowNull: true,
            defaultValue: null,
            comment:'邮政编码'
        },

        phone: {
            type: STRING(200),
            allowNull: true,
            defaultValue: null,
            comment:'电话'
        },
        fax: {
            type:STRING(200),
            allowNull: true,
            defaultValue: null,
            comment:'传真'
        },
        email: {
            type:STRING(200),
            allowNull: true,
            defaultValue: null,
            comment:'邮箱'
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
        freezeTableName: true,
        timestamps: false,
        defaultScope:{
            where:{
                del_flag:0
            }
        }
    });

    /**
     * 按照主键id查找元素
     * create by xingbo 17/06/28
     * @returns {Promise.<void>}
     */
    sys_office.findById=async()=>{
        console.log("nihao");

    }
    return sys_office;
};
