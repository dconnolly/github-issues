/*global GithubIssues, Backbone, JST*/

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.AppView = Backbone.View.extend({

        el: '#github-issues-app',

        events: {},

        initialize: function () {
            this.$header = this.$('#header');
            this.$main = this.$('#main');
            this.headerView = new GithubIssues.Views.HeaderView({
                model: GithubIssues.repo
            });
            this.render();
        },

        render: function () {
            this.headerView.render();
            this.$header.html(this.headerView.el);
        },

        showView: function(view) {
            if (this.currentView) {
                this.currentView.remove();
            }
            this.currentView = view;
            this.currentView.el || this.currentView.render();
            this.$main.html(this.currentView.el);
        }

    });

})();
