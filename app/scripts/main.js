/*global GithubIssues, $*/


window.GithubIssues = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.router = new this.Routers.IssuesRouter();
        Backbone.history.start({pushState: true, root: '/'});
        this.router.navigate('rails/rails/issues', {trigger: true});
    }
};

_.extend(GithubIssues, Backbone.Events);

$(document).ready(function () {
    'use strict';
    GithubIssues.init();
});
