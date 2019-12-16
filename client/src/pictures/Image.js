import React from 'react';

class Image extends React.Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 3);
        this.setState({ spans: spans });
    }
    render() {
        const { name, thumbnail } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <div className="content">
                    {name}
                </div>
                <img
                    ref={this.imageRef}
                    alt={name}
                    src={`${thumbnail.path}.${thumbnail.extension}`}
                />
            </div>
        );
    }
}

export default Image;