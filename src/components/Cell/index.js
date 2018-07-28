import React from "react";

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSelectedCell(this.props.position);
    }

    render() {
        return <button onClick={this.handleChange}>{this.props.value}</button>;
    }
}

export default Cell;