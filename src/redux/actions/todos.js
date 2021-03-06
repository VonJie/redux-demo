let nextTodoId = 0;

const addTodo = text => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	text
})

const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export default {
	addTodo,
	setVisibilityFilter,
	toggleTodo,
	VisibilityFilters
}