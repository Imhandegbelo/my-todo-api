const toDoModel = require("../models/ToDoModel");

// Get saved todos
module.exports.getTodo = async (req, res) => {
	const toDo = await toDoModel.find();
	res.send(toDo);
};

// To save todos
module.exports.saveTodo = async (req, res) => {
	const { title, description } = req.body;

	toDoModel.create({ title, description }).then((data) => {
		console.log("Added successfully");
		console.log(data);

		res.send(data);
	});
};

// To update todos by id
module.exports.updateTodo = async (req, res) => {
	const { id, title, description } = req.body;
	toDoModel.findByIdAndUpdate(id, { title, description })
		.then(() => {
			console.log("Updated successfully");
			res.send();
		})
		.catch((err) => {
			console.log(err);
		});
};

// To delete todos by id
module.exports.deleteTodo = async (req, res) => {
	// Get the id fro the body
	const { id } = req.body;
	toDoModel.findByIdAndDelete(id)
		.then(() => {
			console.log("Deleted successfully");
			res.send();
		})
		.catch((err) => {
			console.log(err);
		});
};
