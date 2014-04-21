/*global GithubIssues, Backbone*/

GithubIssues.Collections = GithubIssues.Collections || {};

(function () {
    'use strict';

    GithubIssues.Collections.Issues = Backbone.Collection.extend({

        model: GithubIssues.Models.Issue,
        //url: 'https://api.github.com/repos/' + GithubIssues.repo + '/issues'
        url: 'http://localhost:9000/data/issues.json'

    });

})();
