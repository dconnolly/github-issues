/*global GithubIssues, Backbone */

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssuesListView = Backbone.View.extend({

        el: '#issue-list',

        tagName: 'div',

        id: 'issue-list',

        events: {},

        initialize: function () {
            console.log(this.collection);
            this.listenTo(this.collection, 'change', this.addAll);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.collection.fetch({reset: true, data: {
                page: this.collection.page,
                per_page: this.collection.perPage
            }});
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        addOne: function(issue) {
            var view = new GithubIssues.Views.IssueItemView({model: issue});
            this.$el.append(view.render().el);
        },

        addAll: function() {
            this.$el.html('');
            this.collection.each(this.addOne, this);
        },


    });

})();
