'use strict';

describe('CommentTime', function() {
    var React = require('react');
    var TestUtils = require('react/lib/ReactTestUtils');
    var ReactDOM = require('react-dom');
    var moment = require('moment');
    var CommentTime, component;
    var timeFormat = 'YYYY-MM-DD HH:mm:ss';

    beforeEach(function() {
        CommentTime = require('components/CommentTime/CommentTime');
    });

    afterEach(function() {
        if (component && component.isMounted()) {
            React.unmountComponentAtNode(component.getDOMNode());
        }
    });

    describe('once it is rendered', function() {


        it('should render the time passed when less than 1 minute', function() {
          let now = moment();
          let postedTime = now.subtract(10, 'seconds');
          let input = postedTime.format(timeFormat);
            component = TestUtils.renderIntoDocument( <CommentTime datetime={input} / > );
            expect(ReactDOM.findDOMNode(component).textContent).toBe('Comment posted 1 minute ago');
        });

        it('should render the time passed when less than 1 hour', function() {
          let now = moment();
          let postedTime = now.subtract(3, 'minutes');
          let input = postedTime.format(timeFormat);
            component = TestUtils.renderIntoDocument( <CommentTime datetime={input} / > );
            expect(ReactDOM.findDOMNode(component).textContent).toBe('Comment posted 3 minutes ago');
        });

        it('should render the time passed when less than 1 day', function() {
          let now = moment();
          let postedTime = now.subtract(6, 'hours');
          let input = postedTime.format(timeFormat);
            component = TestUtils.renderIntoDocument( <CommentTime datetime={input} / > );
            expect(ReactDOM.findDOMNode(component).textContent).toBe('Comment posted 6 hours ago');
        });

        it('should render the time passed when less than 1 day', function() {
          let now = moment();
          let postedTime = now.subtract(25, 'hours');
          let input = postedTime.format(timeFormat);
            component = TestUtils.renderIntoDocument( <CommentTime datetime={input} / > );
            expect(ReactDOM.findDOMNode(component).textContent).toBe('Comment posted 1 days ago');
        });

    });
});
