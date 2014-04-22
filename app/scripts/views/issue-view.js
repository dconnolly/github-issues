/*global GithubIssues, Backbone */

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssueView = Backbone.View.extend({

        el: '#issue',

        template: _.template($('#issue-template').html()),

        events: {},

        initialize: function () {
            console.log(this.model);
            this.comments = new GithubIssues.Collections.Comments([], {
                issueNumber: this.model.get('number')
            });
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'reset', this.render);
            this.listenTo(this.comments, 'change', this.render);
            this.listenTo(this.comments, 'reset', this.render);
            var that = this;
            $.when(this.model.fetch(), this.comments.fetch())
                .then(function() {
                    that.render();
                });
        },

        render: function () {
            console.log(this.comments);
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
