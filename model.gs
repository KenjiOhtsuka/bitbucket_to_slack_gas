/*
class User
  constructor: (json) ->
    @coreJson = json
  getDisplayName: ->
    return @coreJson["display_name"]
  getUserName: ->
    return @coreJson["display_name"]
  getUuid: ->
    return @coreJson["uuid"]
  getAvatarUrl: ->
    return @coreJson["links"]["avatar"]["href"]
  getPageUrl: ->
    return @coreJson["links"]["html"]["href"]
  getApiUrl: ->
    return @coreJson["links"]["self"]["href"]

class Repository
  constructor: (json) ->
    @owner = null
    @coreJson = json
  getScm: ->
    return @coreJson["git"]
  getWebSite: ->
    return @coreJson["website"]
  getName: ->
    return @coreJson["name"]
  getApiUrl: ->
    return @coreJson["links"]["self"]["href"]
  getPageUrl: ->
    return @coreJson["links"]["html"]["href"]
  getAvatarUrl: ->
    return @coreJson["links"]["avatar"]["href"]
  getFullName: ->
    return @coreJson["full_name"]
  getOwner: ->
    if @owner is null
      @owner = User(@coreJson["owner"])
    return @owner
  isPrivate: ->
    return @coreJson["is_private"]
  getUuid: ->
    return @coreJson["uuid"]

class PullRequest
  
class Comment
  constructor: (json) ->
    @coreJson = json
    @user = null
  getApiUrl: ->
    return @coreJson["links"]["self"]["href"]
  getPageUrl: ->
    return @coreJson["links"]["html"]["href"]
  getRawContent: ->
    return @coreJson["content"]["raw"]
  getMarkupType: ->
    return @coreJson["content"]["markup"]
  getHtmlContent: ->
    return @coreJson["content"]["html"]
  getCreatedOn: ->
    return @coreJson["created_on"]
  getUser: ->
    if @user is null
      @user = new User(@coreJson["user"])
    return @user
  getId: ->
    return @coreJson["id"]
  getUpdatedOn: ->
    return @coreJson["updated_on"]

class Issue
*/

var Comment, Issue, PullRequest, Repository, User;

User = (function() {
  function User(json) {
    this.coreJson = json;
  }

  User.prototype.getDisplayName = function() {
    return this.coreJson["display_name"];
  };

  User.prototype.getUserName = function() {
    return this.coreJson["display_name"];
  };

  User.prototype.getUuid = function() {
    return this.coreJson["uuid"];
  };

  User.prototype.getAvatarUrl = function() {
    return this.coreJson["links"]["avatar"]["href"];
  };

  User.prototype.getPageUrl = function() {
    return this.coreJson["links"]["html"]["href"];
  };

  User.prototype.getApiUrl = function() {
    return this.coreJson["links"]["self"]["href"];
  };

  return User;

})();

Repository = (function() {
  function Repository(json) {
    this.owner = null;
    this.coreJson = json;
  }

  Repository.prototype.getScm = function() {
    return this.coreJson["git"];
  };

  Repository.prototype.getWebSite = function() {
    return this.coreJson["website"];
  };

  Repository.prototype.getName = function() {
    return this.coreJson["name"];
  };

  Repository.prototype.getApiUrl = function() {
    return this.coreJson["links"]["self"]["href"];
  };

  Repository.prototype.getPageUrl = function() {
    return this.coreJson["links"]["html"]["href"];
  };

  Repository.prototype.getAvatarUrl = function() {
    return this.coreJson["links"]["avatar"]["href"];
  };

  Repository.prototype.getFullName = function() {
    return this.coreJson["full_name"];
  };

  Repository.prototype.getOwner = function() {
    if (this.owner === null) {
      this.owner = User(this.coreJson["owner"]);
    }
    return this.owner;
  };

  Repository.prototype.isPrivate = function() {
    return this.coreJson["is_private"];
  };

  Repository.prototype.getUuid = function() {
    return this.coreJson["uuid"];
  };

  return Repository;

})();

PullRequest = (function() {
  function PullRequest() {}

  return PullRequest;

})();

Comment = (function() {
  function Comment(json) {
    this.coreJson = json;
    this.user = null;
  }

  Comment.prototype.getApiUrl = function() {
    return this.coreJson["links"]["self"]["href"];
  };

  Comment.prototype.getPageUrl = function() {
    return this.coreJson["links"]["html"]["href"];
  };

  Comment.prototype.getRawContent = function() {
    return this.coreJson["content"]["raw"];
  };

  Comment.prototype.getMarkupType = function() {
    return this.coreJson["content"]["markup"];
  };

  Comment.prototype.getHtmlContent = function() {
    return this.coreJson["content"]["html"];
  };

  Comment.prototype.getCreatedOn = function() {
    return this.coreJson["created_on"];
  };

  Comment.prototype.getUser = function() {
    if (this.user === null) {
      this.user = new User(this.coreJson["user"]);
    }
    return this.user;
  };

  Comment.prototype.getId = function() {
    return this.coreJson["id"];
  };

  Comment.prototype.getUpdatedOn = function() {
    return this.coreJson["updated_on"];
  };

  return Comment;

})();

Issue = (function() {
  function Issue() {}

  return Issue;

})();
