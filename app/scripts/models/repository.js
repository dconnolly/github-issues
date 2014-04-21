/*global GithubIssues, Backbone*/

GithubIssues.Models = GithubIssues.Models || {};

(function () {
    'use strict';

    GithubIssues.Models.Repository = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
