import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    render(){
        return (
            <section>
                <ul className="list-group col-sm-4">
                    {this.renderList()}
                </ul>
            </section>
        );
    }

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        })
    }
}

function mapStateToProps(state) {
    return {
        books:state.books
    }
}

export default connect(mapStateToProps)(BookList);