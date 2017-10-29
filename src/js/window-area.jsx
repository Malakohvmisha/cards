let React = require('react');

export default class WindowArea extends React.Component {
  render() {
    return (
      <div className="win">
        {this.props.children}
      </div>
    );
  }
}