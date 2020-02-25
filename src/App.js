import React from "react";
import { connect } from "react-redux";
import { addNote, completeNote, deleteNote } from "./actions";
import { InputItem, TodoList } from "./components";

class App extends React.Component {
  state = {
    note: "",
    disabled: true
  };

  handleChange = e => {
    const { note, disabled } = this.state;
    this.setState(
      {
        note: e.target.value
      },
      () => {
        if (!note && !note.length) {
          this.setState({
            disabled: !disabled
          });
        }
      }
    );
  };

  handleSubmit = e => {
    const { note, disabled } = this.state;
    const { add_note } = this.props;
    this.setState({
      note: "",
      disabled: !disabled
    });
    e.preventDefault();
    console.log(note);
    add_note(note);
  };

  handleDelete = id => {
    const { delete_note } = this.props;
    delete_note(id);
  };

  handleCompletion = id => {
    const { complete_note } = this.props;
    complete_note(id);
  };

  render() {
    const { note, disabled } = this.state;
    const { notes } = this.props;
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <InputItem
            onChange={this.handleChange}
            value={note}
            disabled={disabled}
          />
          <TodoList
            notesList={notes}
            handleDelete={this.handleDelete}
            handleCompletion={this.handleCompletion}
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToPros = dispatch => {
  return {
    add_note: n => {
      dispatch(addNote(n));
    },
    delete_note: id => {
      dispatch(deleteNote(id));
    },
    complete_note: id => {
      dispatch(completeNote(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToPros)(App);
