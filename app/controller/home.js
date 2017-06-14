'use strict';

module.exports = app => {
    class HomeController extends app.Controller { *
        index() {
            //this.ctx.body = 'hi, egg';
            this.success('hi, egg');
        }
    }
    return HomeController;
};