/*global GithubIssues, Backbone */

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssuesListView = Backbone.View.extend({

        el: '#issues',

        // tagName: 'div',

        // id: 'issue-list',

        events: {
            'click .pager .next': 'nextPage'
        },

        initialize: function () {
            this.$list = this.$('#issue-list');
            this.$pager = this.$('.pager');
            this.listenTo(this.collection, 'change', this.addAll);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.collection.fetch({reset: true, data: {
                page: this.collection.page,
                per_page: this.collection.perPage
            }});
        },

        render: function () {
            this.$list.html(this.template());
            return this;
        },

        addOne: function(issue) {
            var view = new GithubIssues.Views.IssueItemView({model: issue});
            this.$list.append(view.render().el);
        },

        addAll: function() {
            this.$list.html('');
            this.collection.each(this.addOne, this);
            if (this.collection.page == 1) {
                this.$pager.find('.previous').addClass('disabled');
            }
            this.$pager.show();

        },

        buildPageURL: function(pageNumber) {
            return [, GithubIssues.owner, GithubIssues.repo, 'issues', 'page', pageNumber].join('/');
        },

        nextPage: function(ev) {
            ev.preventDefault();
            var nextPageURL = this.buildPageURL(Number(this.collection.page)+1);
            GithubIssues.router.navigate(nextPageURL,
                                         {trigger: true});
        },

        previousPage: function(ev) {
            ev.preventDefault();
            var nextPageURL = this.buildPageURL(Number(this.collection.page)-1);
            GithubIssues.router.navigate(nextPageURL,
                                         {trigger: true});
        }


    });

})();
