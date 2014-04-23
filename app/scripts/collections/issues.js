/*global GithubIssues, Backbone*/

GithubIssues.Collections = GithubIssues.Collections || {};

(function () {

    GithubIssues.Collections.Issues = Backbone.Collection.extend({

        model: GithubIssues.Models.Issue,
        url: function () {
            //return 'http://localhost:9000/data/issues.json';
            var repo = GithubIssues.repo;
            return GithubIssues.github.buildUrl('repos',
                                                repo.get('owner'),
                                                repo.get('repo'),
                                                'issues');
        },

        page: 1,
        perPage: 25

    });

})();
