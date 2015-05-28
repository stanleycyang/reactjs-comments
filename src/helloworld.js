// Timer
var Timer = React.createClass({
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
      <div> Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

React.render(
  <Timer />,
  document.getElementById('timer')
);

// todoList
var TodoList = React.createClass({
  render: function(){
    var createItem = function(itemText, index){
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>
  }
});

var TodoApp = React.createClass({
  getInitialState: function(){
    return {items: [], text: ''};
  },
  onChange: function(e){
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function(){
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

React.render(<TodoApp />, document.getElementById('todo'));

var data = [
  {author: 'Stanley Yang', text: 'This is my comment'},
  {author: 'Pete Hunter', text: 'This is my comment'},
  {author: 'Pete Hunter', text: 'This is my comment'},
  {author: 'Pete Hunter', text: 'This is my comment'},
  {author: 'Pete Hunter', text: 'This is my comment'},
  {author: 'Pete Hunter', text: 'This is my comment'},
  {author: 'Hunter Pete', text: 'This is my comment'}
];

// Comment
var Comment = React.createClass({
  render: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

// Comment list
var CommentList = React.createClass({
  render: function(){

    // Create a loop through the data
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    // show the comments
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    );

  }
});

// Comment form
var CommentForm = React.createClass({
  render: function(){
    return (
      <div className='commentForm'>
        <form name='add-comment'>
          <textarea name='comment'></textarea>
          <br />
          <button type='submit'>Add comment</button>
        </form>
      </div>
    );
  }
});

// Comment box, which holds the list and the form
var CommentBox = React.createClass({
  render: function(){
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});



React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
