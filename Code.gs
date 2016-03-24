function createSlackMessage(contents) {
  var message = {};
 
  if (contents.hasOwnProperty('push')) {
    // Push
    message['text'] = 'pushed to ' + contents.repository.name; 
    var info = '';
    var l = contents.push.changes.length;
    for (var i = 0; i < l; ++i) {
      info += '\n';
      if (contents.push.changes[i].old == null) {
        info += 'created new branch: ' + contents.push.changes[i]['new'].name;
      } else {
        // deleted
        if(contents.push.changes[i]['new']==null) {
          info += 'deleted branch: '+contents.push.changes[i]['old'].name;
        }else{
          info += 'from ' + contents.push.changes[i]['old'].name + ' to ' + contents.push.changes[i]['new'].name ;
        }
      }      
    }
    message['text'] += info;
  } else if (contents.hasOwnProperty('fork')) {
    message['fork'] = 'forked.';
  } else if (contents.hasOwnProperty('pullrequest')) {
    // PullRequest
    var pr = contents.pullrequest;
    var to   = pr.destination.repository.full_name + '/' + pr.destination.branch.name;
    var from = pr.source.repository.full_name + '/' + pr.source.branch.name;
    if (contents.hasOwnProperty('approve')) {
      // Approve
      var prLink = '<' + contents.pullrequest.links.html.href + '|' + contents.pullrequest.title + '>';
      message['text'] = 'approved the PR.\n' + prLink;
    } else if (contents.hasOwnProperty('comment')) {
      // Comment
      var prLink = '<' + contents.comment.links.html.href + '|' + contents.pullrequest.title + ' comment>';
      message['text'] = 'commented on the PR.\n' + contents.comment.content.raw + '\n' + prLink;
    } else {
      var prLink = '<' + contents.pullrequest.links.html.href + '|' + contents.pullrequest.title + '>';
      if (pr.updated_on == null) {
        // Create
        message['text'] = 'created new PR[' + from + '-&gt;' + to + '].\n' + prLink;
      } else {
        // Update or Merge
        message['text'] = 'updated PR (' + pr.state + ') [' + from + '-&gt;' + to + '].\n' + prLink;
      }
    }
  } else if (contents.hasOwnProperty('issue')) {
    // Issue
    var issueLink = '<' + contents.issue.links.html.href + '|#' + contents.issue.id + ' ' + contents.issue.title + '>';
    if (contents.hasOwnProperty('comment')) {
      if (contents.hasOwnProperty('changes')) {
        message['text'] = 'updated issue: ' + issueLink;
      } else {
        // Comment created
        message['text'] = 'commented on ' + issueLink + '\n' + contents.comment.content.raw + '\n<' + contents.comment.links.html.href + '|More Detail>';
      }
    } else {
      // Created
      message['text'] = 'created new issue: ' + issueLink;
    }
  }
  message['username'] = contents.actor.display_name;
  return message;
}
 
function post(payload, url) {
  var options;
  options = {
    method: 'post',
    payload: payload
  };
  return UrlFetchApp.fetch(url, options);
}
 
function doPost(e) {
  var contents = JSON.parse(e.postData.contents);
  var slackMessage = createSlackMessage(contents);
  var url = 'https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX';
  post(JSON.stringify(slackMessage), url);
}
