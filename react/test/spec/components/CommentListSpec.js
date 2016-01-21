'use strict';

describe('CommentList', function () {
  var React = require('react/addons');
  var TestUtils = require('react/lib/ReactTestUtils');
  var CommentList, CommentModel, component;
  var CommentTimeModel;

  beforeEach(function () {
    CommentList = require('components/CommentList/CommentList.js');
    CommentModel = require('components/Comment/Comment.js');
    CommentTimeModel = require('components/CommentTime/CommentTime.js');
  });

  afterEach(function() {
    if (component && component.isMounted()) {
      React.unmountComponentAtNode(component.getDOMNode());
    }
  });

  it('should render the comments', function (){
    var comments = [
      {'author': 'Santiago', 'msg': 'Msg 1', id: 1, 'datetime': '2013-12-31 11:15'},
      {'author': 'Pablo', 'msg': 'Msg 2', id: 2, 'datetime': '2011-02-24 14:32'}
    ];
    component = TestUtils.renderIntoDocument(<CommentList data={comments}/>);
    var result = TestUtils.scryRenderedComponentsWithType(component, CommentModel);
    var resultTime = TestUtils.scryRenderedComponentsWithType(component, CommentTimeModel);
    expect(result.length).toBe(2);
    expect(resultTime.length).toBe(2);
  });

  it('should not render any comment if the data is empty', function (){
    var comments = [];
    component = TestUtils.renderIntoDocument(<CommentList data={comments}/>);
    var result = TestUtils.scryRenderedComponentsWithType(component, CommentModel);
    var resultTime = TestUtils.scryRenderedComponentsWithType(component, CommentTimeModel);
    expect(result.length).toBe(0);
    expect(resultTime.length).toBe(0);
  });

  it('should render  - No Comments yet - msg if the data is empty', function (){
    var comments = [];
    component = TestUtils.renderIntoDocument(<CommentList data={comments}/>);
    var msg = TestUtils.findRenderedDOMComponentWithClass(component, 'commentList');
    expect(msg.getDOMNode().textContent).toBe('No comments yet');
  });

});
