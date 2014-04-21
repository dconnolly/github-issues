/*global GithubIssues, Backbone, JST*/

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssuesListView = Backbone.View.extend({

        el: '#github-issues-app',

        events: {},

        initialize: function () {
            this.$list = this.$('#issue-list');
            this.listenTo(this.collection, 'change', this.addAll);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.collection.fetch({reset: true});
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        addOne: function(issue) {
            var view = new GithubIssues.Views.IssueItemView({model: issue});
            this.$list.append(view.render().el);
        },

        addAll: function() {
            console.log(this.collection);
            this.$list.html('');
            this.collection.each(this.addOne, this);
        },


    });

})();
