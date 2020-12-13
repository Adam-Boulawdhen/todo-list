import React from 'react';

const Todo = (props) => {
	return (
		<div className="form__todo">
			<h1 className="todo">{props.title}</h1>
		</div>
	);
};

export default Todo;
