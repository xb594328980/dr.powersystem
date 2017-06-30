'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const SysOffice = app.model.define('sys_office', {
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


    SysOffice.associate = function() {
        SysOffice.hasMany(app.model.SysUser, { foreignKey:'office_id' });
    }
    /**
     * 按照主键id查找元素
     * create by xingbo 17/06/28
     * @returns {Promise.<void>}
     */
    SysOffice.findById=async(id)=>{
        return  SysOffice.findOne({where:{id:id}});
    }

    /**
     *  按照主键id软删除
     *  create by xingbo 17/06/28
     * @param id 主键id
     * @param update_by 操作人
     * @returns {Promise.<*>}
     */
    SysOffice.deleteObj=async(id,update_by)=>{
        return  SysOffice.update({del_flag:1,update_by:update_by,update_date:new Date()},{where:{id:id}});
    }

    /**
     * 分页查询
     * create by xingbo 17/06/28
     * @param offset 起始页默认0
     * @param limit 长度默认10
     * @param searchObj  检索条件obj
     * @returns {Promise.<*>}
     */
    SysOffice.findForPage=async(offset=0,limit=10,searchObj)=>{
        let where={};
        return  SysOffice.findAndCountAll({
            offset:offset,
            limit:limit,
            where:where
        });
    }
    return SysOffice;
};
