// app.js
module.exports = app => {

    /**
     * 定义控制器的公共函数并替换app中的控制器基类
     * create by xingbo 17/06/13
     */
    class CustomController extends app.Controller {
        get user() {
            return this.ctx.session.user;
        }
        success(data) {
            this.ctx.body = {
                success: true,
                data,
            };
        }
        notFound(msg) {
            msg = msg || 'not found';
            this.ctx.throw(404, msg);
        }
    }
    app.Controller = CustomController;
}