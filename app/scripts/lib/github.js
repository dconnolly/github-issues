/*global GithubIssues, Backbone*/

GithubIssues.Lib = GithubIssues.Lib || {};;

(function () {
    'use strict';

    var GitHub = GithubIssues.Lib.GitHub = function (domain) {
        this.domain = domain || 'https://api.github.com';
    };

    GitHub.prototype.buildUrl = function(/* arguments: path params*/) {
        Array.prototype.unshift.call(arguments, this.domain);
        return Array.prototype.join.call(arguments, '/');
    };

})();
