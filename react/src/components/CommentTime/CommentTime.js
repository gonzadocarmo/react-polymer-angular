'use strict';

var React = require('react');
var moment = require('moment');

var CommentTimeModel = React.createClass({
    propTypes: {
        datetime: React.PropTypes.string.isRequired
    },


    calculateTimePassed() {
        let postMoment = new moment(this.props.datetime, 'YYYY-MM-DD HH:mm:ss');
        let nowMoment = new moment();
        let txt;

        if (nowMoment.diff(postMoment, 'minutes') <= 1) {
            // “As a User, Given the comment was posted less than 59 seconds ago, When the comment is displayed in the list, Then I want to always see “1 minute ago”
            txt = "1 minute";
        } else if (nowMoment.diff(postMoment, 'hours') < 1) {
            // “As a User, Given the comment was posted more than 59 seconds ago but less than 59 minutes ago, When the comment is displayed in the list, Then I want to see the amount of minutes elapsed, for example “39 minutes ago” or "25 minutes ago" etc...
            txt = nowMoment.diff(postMoment, 'minutes') + " minutes";
        } else if (nowMoment.diff(postMoment, 'days') < 1) {
            // “As a User, Given the comment was posted more than 59 minutes ago but less than 23 hours and 59 mins ago, When the comment is displayed in the list, Then I want to see the amount hours elapsed, for example “4 hours ago” or "12 hours ago" etc...
            txt = nowMoment.diff(postMoment, 'hours') + " hours";
        } else {
            // “As a User, Given the comment was posted more than 1 day ago, When the comment is displayed in the list, Then I want to see how many days have elapsed, for example “4 days ago” or "6 days ago"
            txt = nowMoment.diff(postMoment, 'days') + " days";
        }
        return txt + " ago";
    },

    render() {
        return (
          <div ref = "txt">Comment posted {this.calculateTimePassed()}</div>
        );
    }

});

module.exports = CommentTimeModel;
