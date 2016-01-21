'use strict';

var React = require('react/addons');
var CommentModel = require('components/Comment/Comment');
var CommentTimeModel = require('components/CommentTime/CommentTime');

require('./CommentList.css');

/*

 ## Example

  <CommentList data={this.state.data}/>

 */

var CommentList = React.createClass({

  /*
     The data contains the array of comments

     @attribute data
     @type Array
   */

  render: function () {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <div>
          <CommentModel author={comment.author} key={comment.id}>
            {comment.msg}
          </CommentModel>
          <CommentTimeModel datetime={comment.datetime}></CommentTimeModel>
        </div>
      );
    });
    return (
      <div className="commentList">
        {this.props.data.length > 0 ? commentNodes : 'No comments yet'}
      </div>
    );
  }
});


module.exports = CommentList;
