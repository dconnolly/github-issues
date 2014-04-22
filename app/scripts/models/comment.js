/*global GithubIssues, Backbone*/

GithubIssues.Models = GithubIssues.Models || {};

(function () {
    'use strict';

    GithubIssues.Models.Comment = Backbone.Model.extend({

        url: function(issueId) {
            return GithubIssues.github.buildUrl(this.owner, this.repo, 'issues', this.id);
        },



   });

})();
