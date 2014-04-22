/*global GithubIssues, Backbone*/

GithubIssues.Collections = GithubIssues.Collections || {};

(function () {

    GithubIssues.Collections.Issues = Backbone.Collection.extend({

        model: GithubIssues.Models.Issue,
        url: function () {
            //return 'http://localhost:9000/data/issues.json';
            return GithubIssues.github.buildUrl('repos',
                                                GithubIssues.owner,
                                                GithubIssues.repo,
                                                'issues');
        },

        page: 1,
        perPage: 25

    });

})();
