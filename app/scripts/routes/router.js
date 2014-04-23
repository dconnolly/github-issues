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
            this.updateRepo.apply(this, arguments);
            GithubIssues.issues = new GithubIssues.Collections.Issues();
            GithubIssues.issues.page = arguments[2] || 1;
            var listView = new GithubIssues.Views.IssuesListView({
                collection: GithubIssues.issues
            });
            GithubIssues.appView.showView(listView);
        },

        loadIssueView: function(/* arguments */) {
            this.updateRepo.apply(this, arguments);
            GithubIssues.issues = new GithubIssues.Collections.Issues();
            var issueView = new GithubIssues.Views.IssueView({
                model: new GithubIssues.Models.Issue({
                    number: arguments[2]
                })
            });
            GithubIssues.appView.showView(issueView);

        },

        updateRepo: function(/* arguments */) {
            GithubIssues.repo.set('owner', arguments[0]);
            GithubIssues.repo.set('repo', arguments[1]);
        }
    });

})();
