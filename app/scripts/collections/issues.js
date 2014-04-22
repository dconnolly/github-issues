/*global GithubIssues, Backbone*/

GithubIssues.Collections = GithubIssues.Collections || {};

(function () {
    'use strict';

    GithubIssues.Collections.Issues = Backbone.Collection.extend({

        model: GithubIssues.Models.Issue,
        url: function () {
            //return 'https://api.github.com/repos/' + GithubIssues.owner + '/' + GithubIssues.repo + '/issues';
            return 'http://localhost:9000/data/issues.json'
        }

    });

})();
