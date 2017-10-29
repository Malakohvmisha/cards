let React = require('react');

export default class BottomArea extends React.Component {
  render() {
    return (
      <div className="win__bottom">
        {this.props.children}
      </div>
    );
  }
}