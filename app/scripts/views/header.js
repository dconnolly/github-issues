/*global GithubIssues, Backbone */

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.HeaderView = Backbone.View.extend({

        el: '.container .header',

        template: _.template($('#header-template').html()),

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'reset', this.render);
            this.render();
        },

        render: function () {
            var data = {
                owner: this.model.owner,
                repo: this.model.repo
            };
            this.$el.html(this.template(data));
            return this;
        }

    });

})();
