/*global GithubIssues, Backbone, JST*/

GithubIssues.Views = GithubIssues.Views || {};

(function () {
    'use strict';

    GithubIssues.Views.IssueItemView = Backbone.View.extend({

        tagName: 'div',

        className: 'issue-list-item panel panel-default',

        template: _.template($('#issue-template').html()),

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        truncateBody: function() {
            var shortBody = this.body.substr(0, 140);
            return shortBody.substr(0, shortBody.lastIndexOf(' ')) + ' ...';
        },

        render: function () {
            var data = this.model.toJSON();
            _.extend(data, {truncateBody: this.truncateBody});
            this.$el.html(this.template(data));
            return this;
        }

    });

})();
