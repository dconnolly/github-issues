/*global GithubIssues, Backbone*/

GithubIssues.Models = GithubIssues.Models || {};

(function () {
    'use strict';

    GithubIssues.Models.Issue = Backbone.Model.extend({

        url: function () {
            // return 'http://localhost:9000/data/issue.json';
            return GithubIssues.github.buildUrl('repos',
                                                GithubIssues.owner,
                                                GithubIssues.repo,
                                                'issues',
                                                this.get('number'));
        }

    });

})();
