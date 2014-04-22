/*global GithubIssues, Backbone*/

GithubIssues.Routers = GithubIssues.Routers || {};

(function () {
    'use strict';

    GithubIssues.Routers.IssuesRouter = Backbone.Router.extend({

        routes: {
            ':owner/:repo/issues': 'loadIssuesView',
            ':owner/:repo/issues/page/:page': 'loadIssuesView',
            ':owner/:repo/issues/:number': 'loadIssueView',
            '': 'defaultView',
        },

        defaultView: function() {
            GithubIssues.router.navigate('rails/rails/issues',
                                         {trigger: true});
        },

        loadIssuesView: function(/* arguments */) {
            this.prepPageView.apply(this, arguments);
            this.issueView && this.issueView.remove();
            var issues = new GithubIssues.Collections.Issues();
            issues.page = arguments[2] || 1;
            this.listView = new GithubIssues.Views.IssuesListView({
                collection: issues
            });
        },

        loadIssueView: function(/* arguments */) {
            this.prepPageView.apply(this, arguments);
            this.listView && this.listView.remove();
            this.issueView = new GithubIssues.Views.IssueView({
                model: new GithubIssues.Models.Issue({
                    number: arguments[2]
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
