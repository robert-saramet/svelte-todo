<script>
	let title = 'Svelte To-Do List';
	let items = [];
	if (!localStorage.getItem('notes')) {
		items[0] = {name: "Don't be shy, add some tasks", checked: false};
		updateStorage();
	} else {
		let str = localStorage.getItem('notes');
		items = JSON.parse(str);
	}
	
	function updateStorage() {
		let str = JSON.stringify(items);
		localStorage.setItem('notes', str);
	}
	
	let text = '';
	function newItem() {
		let item = {name: text, checked: false}
		items = [...items, item];
		updateStorage();
		text = '';
	}
	function deleteItem(id) {
		items.splice(id, 1);
		items = items;
		updateStorage()
	}
	
	function checkItem(id) {
		items[id].checked = true;
		updateStorage();
	}
	
	$: count = items.length
	const words = ['zero', 'one', 'two', 'three', 'four', 'five',
								'six', 'seven', 'eight', 'nine', 'ten']
</script>

<style>
	:global(body) {
		background-color: azure;
		text-align: center;
		align-content: center;
		display: inline-block;
	}
	p {
		color: #5F5F5F;
	}
	ul {
		list-style-type: none;
	}
	li {
		display: inline-block;
		text-align: left;
		padding: 0rem 3rem 0rem 0rem
	}
	.item-checked {
		opacity: 0.5;
		font-style: italic;
		text-decoration: line-through;
	}
	strong {
		color: #4F4F4F;
	}
	input {
		background-color: #FDFDFD;
		color: #555555;
		border-color: #00AAFF;
		border-radius: 7px;
		width: 18rem;
	}
	input:focus {
		background-color: white;
	}
	.icon-btn {
		background-color: azure;
		border: none;
	}
	.delete-btn {
		color: red;
	}
	.check-btn {
		color: green;
	}
	.add-btn {
		background-color: #00AAFF;
		color: #FFFFFF;
		font-size: 1rem;
		border: none;
		border-radius: 7px;
		width: 18rem;
		transition-property: color background-color;
		transition-duration: 0.3s;
	}
	.add-btn:hover {
		
		transition-property: color background-color;
		transition-duration: 0.3s;
		background-color: #FFFFFF;
		color: #00AAFF;
	}
	.add-btn-disabled {
		opacity: 0.5;
  	cursor: not-allowed;
		pointer-events: none;
	}
</style>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<h1>{title}</h1>
<p>You have <strong>{typeof words[count] === 'undefined' ? count : words[count]}</strong> {count == 1 ? 'task' : 'tasks'} left</p>
<ul>
	{#each items as item, id}
	<li>
		{#if !item.checked}
			<button class="icon-btn check-btn" on:click={() => checkItem(id)}><i class="fa fa-check"></i></button>
			{item.name}
		{:else}
			<button class="icon-btn delete-btn" on:click={() => deleteItem(id)}><i class="fa fa-trash"></i></button>
			<span class = "item-checked">{item.name}</span>
		{/if}
	</li>
	{/each}
</ul>
<form on:submit|preventDefault autocomplete="off">
	<input id = "task-input" placeholder="New task" bind:value={text}><br>
	<button class="add-btn {text == '' ? 'add-btn-disabled' : ''}" on:click={newItem}>Add</button>
</form>
