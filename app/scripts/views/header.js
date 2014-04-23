/*global GithubIssues, Backbone */

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.HeaderView = Backbone.View.extend({

        template: _.template($('#header-template').html()),

        events: {},

        initialize: function () {
            this.render();
            this.listenTo(this.model, 'change', this.render);
            //this.listenTo(this.model, 'reset', this.render);
        },

        render: function () {
            console.log("header render");
            var data = {
                owner: this.model.get('owner'),
                repo: this.model.get('repo')
            };
            this.$el.html(this.template(data));
            return this;
        }

    });

})();
