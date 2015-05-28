var Timer = React.createClass({displayName: "Timer",
  getInitialState: function(){
    return {secondsElapsed: 0};
  },
  tick: function(){
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function(){
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function(){
    clearInterval(this.interval);
  },
  render: function(){
    return (
      React.createElement("div", null, " Seconds Elapsed: ", this.state.secondsElapsed)
    );
  }
});

React.render(
  React.createElement(Timer, null),
  document.getElementById('timer')
);

var data = [
  {author: 'Stanley Yang', text: 'This is my comment'},
  {author: 'Pete Hunter', text: 'This is my comment'},
  {author: 'Hunter Pete', text: 'This is my comment'}
];

// Comment
var Comment = React.createClass({displayName: "Comment",
  render: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    );
  }
});

// Comment list
var CommentList = React.createClass({displayName: "CommentList",
  render: function(){
    return (
      React.createElement("div", {className: "commentList"}, 
        "Hello world, I am a comment list", 
        React.createElement(Comment, {author: "Stanley Yang"}, "This is a comment"), 
        React.createElement(Comment, {author: "John Walker"}, "This is a comment")
      )
    );
  }
});

// Comment form
var CommentForm = React.createClass({displayName: "CommentForm",
  render: function(){
    return (
      React.createElement("div", {className: "commentForm"}, 
        React.createElement("form", {name: "add-comment"}, 
          React.createElement("textarea", {name: "comment"}), 
          React.createElement("br", null), 
          React.createElement("button", {type: "submit"}, "Add comment")
        )
      )
    );
  }
});

// Comment box, which holds the list and the form
var CommentBox = React.createClass({displayName: "CommentBox",
  render: function(){
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, null), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
