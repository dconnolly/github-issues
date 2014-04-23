/*global GithubIssues, Backbone */

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssuesListView = Backbone.View.extend({

        template: _.template($('#issue-list-template').html()),

        el: '',

        events: {
            'click .pager .next': 'nextPage',
            'click .pager .previous': 'previousPage'
        },

        initialize: function () {
            this.views = [];
            this.render();
            this.listenTo(this.collection, 'change', this.addAll);
            this.listenTo(this.collection, 'reset', this.addAll);
            this.collection.fetch({reset: true, data: {
                page: this.collection.page,
                per_page: this.collection.perPage
            }});
        },

        render: function () {
            this.$el.html(this.template());
            this.$list = this.$('#issue-list');
            this.$pager = this.$('.pager');
            return this;
        },

        addOne: function(issue) {
            var view = new GithubIssues.Views.IssueItemView({
                model: issue
            });
            this.views.push(view);
            this.$list.append(view.render().el);
        },

        addAll: function() {
            this.$list.html('');
            this.collection.each(this.addOne, this);
            if (this.collection.page < 2) {
                this.$pager.find('.previous').addClass('disabled');
            }
        },

        buildPageURL: function(pageNumber) {
            var repo = GithubIssues.repo;
            return [, repo.get('owner'), repo.get('repo'), 'issues', 'page', pageNumber].join('/');
        },

        nextPage: function(ev) {
            ev.preventDefault();
            var nextPageURL = this.buildPageURL(Number(this.collection.page)+1);
            GithubIssues.router.navigate(nextPageURL,
                                         {trigger: true});
        },

        previousPage: function(ev) {
            ev.preventDefault();
            if (this.collection.page == 1) {
                return;
            }
            var previousPageURL = this.buildPageURL(Number(this.collection.page)-1);
            GithubIssues.router.navigate(previousPageURL,
                                         {trigger: true});
        },

        remove: function() {
            _.each(this.views, function(view) {
                view.remove();
            });
            Backbone.View.prototype.remove.apply(this);
        }

    });

})();
