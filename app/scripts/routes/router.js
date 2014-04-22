/*global GithubIssues, Backbone*/

GithubIssues.Routers = GithubIssues.Routers || {};

(function () {
    'use strict';

    GithubIssues.Routers.IssuesRouter = Backbone.Router.extend({

        routes: {
            ':owner/:repo/issues': 'loadIssuesView',
            ':owner/:repo/issues/:id': 'loadIssueView'
        },

        loadIssuesView: function(/* arguments */) {
            this.prepPageView.apply(this, arguments);
            this.issueView && this.issueView.remove();
            this.listView = new GithubIssues.Views.IssuesListView({
                collection: new GithubIssues.Collections.Issues()
            });
        },

        loadIssueView: function(/* arguments */) {
            this.prepPageView.apply(this, arguments);
            this.listView && this.listView.remove();
            this.issueView = new GithubIssues.Views.IssueView({
                model: new GithubIssues.Models.Issue({
                    id: arguments[2]
                })
            });
        },

        prepPageView: function(/* arguments */) {
            GithubIssues.owner = arguments[0];
            GithubIssues.repo = arguments[1];
            this.headerView = new GithubIssues.Views.HeaderView({
                model: GithubIssues
            });
        }
    });

})();
