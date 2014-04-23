/*global GithubIssues, Backbone*/

GithubIssues.Collections = GithubIssues.Collections || {};

(function () {
    'use strict';

    GithubIssues.Collections.Comments = Backbone.Collection.extend({

        model: GithubIssues.Models.Comment,
        url: function() {
            return "http://localhost:9000/data/comments.json";
            // var repo = GithubIssues.repo;
            // return GithubIssues.github.buildUrl('repos',
            //                                     repo.get('owner'),
            //                                     repo.get('repo'),
            //                                     'issues',
            //                                     this.issueNumber,
            //                                     'comments');
        }

    });

})();
