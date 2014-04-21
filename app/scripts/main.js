/*global GithubIssues, $*/


window.GithubIssues = {
    repo: 'rails/rails',
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        new this.Views.IssuesListView({
            collection: new this.Collections.Issues()
        });
    }
};

$(document).ready(function () {
    'use strict';
    GithubIssues.init();
});
