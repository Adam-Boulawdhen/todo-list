import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';

function App() {
	const [ input, setInput ] = useState('');
	const [ todos, setTodos ] = useState([]);

	useEffect(() => {
		db.collection('todos').onSnapshot((snapshot) => {
			setTodos(snapshot.docs.map((doc) => doc.data().todo));
		});
	}, []);

	const addTodo = (e) => {
		e.preventDefault();
		db.collection('todos').add({
			todo: input
		});

		setInput('');
	};

	return (
		<div className="App">
			<h1>Todo app</h1>

			<form className="form">
				<input className="form__input" value={input} onChange={(e) => setInput(e.target.value)} type="text" />
				<button className="form__button" disabled={!input} type="submit" onClick={addTodo}>
					Add todo
				</button>
			</form>

			{todos.map((todo, i) => <Todo title={todo} key={i} />)}
		</div>
	);
}

export default App;
