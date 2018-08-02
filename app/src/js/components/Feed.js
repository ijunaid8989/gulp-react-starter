/** @jsx React.DOM */

var React = require("react");
var ShowAddButton = require("./ShowAddButton");
var FeedForm = require("./FeedForm");
var FeedList = require("./FeedList");

var Feed = React.createClass({

  getInitialState: function() {
    var FEED_ITEMS = [
      { key: "1", title: "Real Time data", description: "Firebase is cool", voteCount: 89},
      { key: "1", title: "Time data", description: "Life is cool", voteCount: 29},
      { key: "1", title: "Host Time data", description: "mochta is cool", voteCount: 9}
    ];
    return {
      items: FEED_ITEMS
    };
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <ShowAddButton />
        </div>

        <FeedForm />

        <br />
        <br />

        <FeedList items={this.state.items} />
      </div>
    );
  }

});

module.exports = Feed