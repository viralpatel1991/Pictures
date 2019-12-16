import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from '../actions';
import ImageList from './ImageList';

class CharacterList extends React.Component {
    componentDidMount() {
        this.props.fetchCharacter();
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <ImageList images={this.props.character} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        character: Object.values(state.character),
    }
}
export default connect(mapStateToProps, { fetchCharacter })(CharacterList);