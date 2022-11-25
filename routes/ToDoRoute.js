const { Router } = require("express");
const router = Router();
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controllers/ToDoController");

router.get("/todo", getTodo);
router.post("/todo/save", saveTodo);
router.patch("/todo/update", updateTodo);
router.delete("/todo/delete", deleteTodo);



module.exports = router;
