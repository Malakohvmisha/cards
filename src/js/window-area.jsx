let React = require('react');

class WindowArea extends React.Component {
  render() {
    return (
      <div className="win">
        {this.props.children}
      </div>
    );
  }
}

module.exports = WindowArea;