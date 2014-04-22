/*global GithubIssues, Backbone, JST*/

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssueView = Backbone.View.extend({

        el: '#issue',

        template: _.template($('#issue-template').html()),

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'reset', this.render);
            this.model.fetch({ reset: true });
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();
