var GroceryList = React.createClass({displayName: "GroceryList",
  handleClick: function(i){
    console.log('You clicked: ' + this.props.items[i]);
  }
});
