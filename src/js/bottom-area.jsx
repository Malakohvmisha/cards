let React = require('react');

class BottomArea extends React.Component {
  render() {
    return (
      <div className="win__bottom">
        {this.props.children}
      </div>
    );
  }
}

module.exports = BottomArea;