'use strict';

module.exports = app => {
    class HomeController extends app.Controller {
        async index() {
            const { model } = this.ctx;
            var now = Date.now();
            const post = await this.ctx.model.SysUser.create({name: "xingbo"});
            this.success('created: ');
        }
    }
    return HomeController;
};