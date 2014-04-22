/*global GithubIssues, Backbone */

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssueView = Backbone.View.extend({

        el: '#issue',

        template: _.template($('#issue-template').html()),

        events: {},

        initialize: function () {
            this.comments = new GithubIssues.Collections.Comments();
            this.comments.issueNumber = this.model.get('number');
            this.listenTo(this.comments, 'change', this.render);
            this.listenTo(this.comments, 'reset', this.render);
            this.model.fetch({reset: true});
            this.comments.fetch({reset: true});
        },

        render: function () {
            var issue = this.model.toJSON();
            var comments = this.comments.toJSON();
            comments.unshift(issue);
            this.$el.html(this.template({
                issue: issue,
                comments: comments
            }));
            return this;
        }

    });

})();
