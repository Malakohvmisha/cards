let React = require('react');

export class WindowArea extends React.Component {
  render() {
    return (
      <div className="win">
        {this.props.children}
      </div>
    );
  }
}

export class MainArea extends React.Component {
  render() {
    return (
      <div className="win__main">
        {this.props.children}
      </div>
    );
  }
}

export class BottomArea extends React.Component {
  render() {
    return (
      <div className="win__bottom">
        {this.props.children}
      </div>
    );
  }
}