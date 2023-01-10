import React from 'react';
import './TextAreaAutoresize.css';

class TextAreaAutoresize extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            height: 600,
            width: 8*120,
            value: this.props.value
        }

    }

// function for auto resizing textarea
    handleChange = event => {
        let lines = event.target.value.split('\n');
        let linesCount = lines.length;
        let minRows = 30;

        // store the value of the textarea
        this.setState({value: event.target.value});


        if (linesCount < minRows) {
            linesCount = minRows;
        }

        this.setState({ height: linesCount * 20 });
    };

    getValue() {
        return this.state.value;
    }

    render() {


        return (
            <textarea
                className="textarea"
                ref={myinput => (this.input = myinput)}
                onChange={this.handleChange}
                style={{
                    height: this.state.height,
                    width: this.state.width
                }}
            />


        )
    }
} export default TextAreaAutoresize;