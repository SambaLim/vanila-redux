import { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../store';
import ToDo from '../components/ToDo';

const Home = ({ toDos, addTodo }) => {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return { 
    addTodo: (text) => dispatch(add(text)),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
