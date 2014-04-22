/*global GithubIssues, Backbone*/

GithubIssues.Collections = GithubIssues.Collections || {};

(function () {
    'use strict';

    GithubIssues.Collections.Comments = Backbone.Collection.extend({

        model: GithubIssues.Models.Comment,
        url: function() {
            console.log(this);
//            return "http://localhost:9000/data/comments.json";
            return GithubIssues.github.buildUrl('repos',
                                                GithubIssues.owner,
                                                GithubIssues.repo,
                                                'issues',
                                                this.issueNumber,
                                                'comments');
        }

    });

})();
