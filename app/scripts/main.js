/*global GithubIssues, $*/


window.GithubIssues = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.github = new this.Lib.GitHub();
        this.repo = new this.Models.Repository();
        this.router = new this.Routers.IssuesRouter();
        this.appView = new GithubIssues.Views.AppView();
        Backbone.history.start({pushState: true, root: '/'});
    }
};

_.extend(GithubIssues, Backbone.Events);

$(document).ready(function () {
    'use strict';
    GithubIssues.init();
});
