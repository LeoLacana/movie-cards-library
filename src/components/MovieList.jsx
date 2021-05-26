import React from 'react';

class MovieList extends React.Component {
    render() {
        return <div>{ this.props.movies }</div>
    }
}

export default MovieList;