var React = require("react");

var FeedForm = React.createClass({

  render: function() {

    return (
      <form className="container">
        <div className="form-group">
          <input type="text" className="form-controll" placeholder="Title" />
          <input type="text" className="form-controll" placeholder="Description" />
          <button type="Submit" className="btn btn-primary btn-block">Add</button>
        </div>
      </form>
      );
  }

});

module.exports = FeedForm