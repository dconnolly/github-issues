/*global GithubIssues, Backbone*/

GithubIssues.Models = GithubIssues.Models || {};

(function () {
    'use strict';

    GithubIssues.Models.Issue = Backbone.Model.extend({

        url: function () {
            return 'http://localhost:9000/data/issue.json';
            // var repo = GithubIssues.repo;
            // return GithubIssues.github.buildUrl('repos',
            //                                     repo.get('owner'),
            //                                     repo.get('repo'),
            //                                     'issues',
            //                                     this.get('number'));
        }

    });

})();
