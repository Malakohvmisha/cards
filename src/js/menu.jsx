let React = require('react');
let PropTypes = require('prop-types');

export class Menu extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                value: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired
            }).isRequired
        )
    }
    drawItems() {
        if (this.props.items.length > 0) {
            return <ul> { this.props.items.map(a => <li key={a.id}>{ a.value }</li> ) } </ul>
        }        
	}
	render() {
        return (
            <div className="menu-wrap">
				<div className="menu">
					{ this.drawItems() }
				</div>
			</div>
		);
	}
}