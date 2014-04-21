/*global GithubIssues, Backbone*/

GithubIssues.Models = GithubIssues.Models || {};

(function () {
    'use strict';

    GithubIssues.Models.Issue = Backbone.Model.extend({

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }

    });

})();
