let React = require('react');

class MainArea extends React.Component {
  render() {
    return (
      <div className="win__main">
        {this.props.children}
      </div>
    );
  }
}

module.exports = MainArea;