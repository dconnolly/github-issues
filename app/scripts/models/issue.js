/*global GithubIssues, Backbone*/

GithubIssues.Models = GithubIssues.Models || {};

(function () {
    'use strict';

    GithubIssues.Models.Issue = Backbone.Model.extend({

        url: function () {
            //return 'https://api.github.com/repos/' + GithubIssues.owner + '/' + GithubIssues.repo + '/issues' + '/' + this.id;
            return 'http://localhost:9000/data/issue.json'
        }

    });

})();
