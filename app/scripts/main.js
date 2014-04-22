/*global GithubIssues, $*/


window.GithubIssues = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.github = new this.Lib.GitHub();
        this.router = new this.Routers.IssuesRouter();
        Backbone.history.start({pushState: true, root: '/'});
    }
};

_.extend(GithubIssues, Backbone.Events);

$(document).ready(function () {
    'use strict';
    GithubIssues.init();
});
