var GroceryList = React.createClass({displayName: "GroceryList",
  handleClick: function(i){
    console.log('You clicked: ' + this.props.items[i]);
  },
  render: function(){
    return (
      React.createElement("div", null, 
        this.props.items.map(function(item, i){
          return (
            React.createElement("div", {onClick: this.handleClick.bind(this, i), key: i}, item)
          );
        }, this)
      )
    );
  }
});

React.render(
  React.createElement(GroceryList, {items: ['Apple', 'Banana', 'Cranberry']}), mountNode
);
