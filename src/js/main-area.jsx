let React = require('react');

export default class MainArea extends React.Component {
  render() {
    return (
      <div className="win__main">
        {this.props.children}
      </div>
    );
  }
}