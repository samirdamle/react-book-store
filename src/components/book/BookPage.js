import React from 'react';
import {connect}  from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component {
    constructor(props) {
        // pass props back to parent class
        super(props);
    }

    // submit book handler
    submitBook(input) {
        this.props.createBook(input);
    }

    render() {

        let titleInput;

        return (
            <div>
                <h3>Books</h3>
                <br/>
                <ul>
                    {this.props.books.map((b, i) => <li key={i}>{b.title}</li>)}
                </ul>

                <div>
                    <h3>Books Form</h3>

                    <form onSubmit={e => {
                        // prevent defaults
                        e.preventDefault();

                        // assemble inputs
                        let input = {title: titleInput.value};

                        // call handler
                        this.submitBook(input);

                        e.target.reset();

                    }}>

                        <input type="text" name="title" ref={node => titleInput = node}/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

Book.propTypes = {
    title: React.PropTypes.string
};

//const mapStateToProps = (state, ownProps) => {
const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: book => dispatch(bookActions.createBook(book))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
