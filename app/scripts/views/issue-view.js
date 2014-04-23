/*global GithubIssues, Backbone */

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssueView = Backbone.View.extend({

        template: _.template($('#issue-template').html()),

        events: {},

        initialize: function () {
            this.views = [];
            this.comments = new GithubIssues.Collections.Comments();
            this.comments.issueNumber = this.model.get('number');
            this.listenTo(this.comments, 'change', this.addAll);
            this.listenTo(this.comments, 'reset', this.addAll);
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'reset', this.render);
            this.model.fetch({reset: true});
            this.comments.fetch({reset: true});
        },

        render: function () {
            var issue = this.model.toJSON();
            this.$el.html(this.template({
                issue: issue
            }));
            this.$activity = this.$('#issue-activity');
            return this;
        },

        addOne: function(activity) {
            var view = new GithubIssues.Views.ActivityView({
                model: activity
            });
            this.views.push(view);
            this.$activity.append(view.render().el);
        },

        addAll: function() {
            this.$activity.html('');
            this.comments.unshift(this.model);
            this.comments.each(this.addOne, this);
        },

        remove: function() {
            _.each(this.views, function(view) {
                view.remove();
            });
            Backbone.View.prototype.remove.apply(this);
        }

    });

})();
