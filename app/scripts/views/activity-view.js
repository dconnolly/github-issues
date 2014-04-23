/*global GithubIssues, Backbone, JST*/

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.ActivityView = Backbone.View.extend({

        template: _.template($('#activity-template').html()),

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            var data = this.model.toJSON();
            _.extend(data, {
                annotatedBody: this.annotatedBody
            });
            this.$el.html(this.template(data));
            return this;
        },

        annotatedBody: function() {
            var url = "https://github.com/";
            return this.body.replace(/\@(\w+)/,
                               "<a href='"+url+"$1'>@$1</a>");
        }

    });

})();
