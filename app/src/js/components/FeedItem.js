/** @jsx React.DOM */

var React = require("react");

var FeedItem = React.createClass({

  render: function() {
    return (
      <li className="list-group-item">
        <span className="badge badge-success">09</span>
        <h4>tesing it</h4>
        <span>Lextcial</span>
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary">&uarr;</button>
          <button id="down" className="btn btn-sm btn-primary">&darr;</button>
        </span>
      </li>
      );
  }

});

module.exports = FeedItem