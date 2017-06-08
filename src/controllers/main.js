import Todo from '../models/Todo';

let mainController = {

	getIndex:(req, resp) =>{
		resp.render('index');
	},
	getTemplate:(req, resp)=>{
		resp.render('templates/'+req.params.template);
	},
	getAllTodos:(req, resp)=>{
		Todo.find({}, (err, data)=>{
			if(err)
				resp.send(err);
			else
				resp.json(data);
		});
	},
	postNewTodo:(req, resp)=>{
		Todo.create({
			text:req.body.text,
			done:false
		} , (err, todo)=>{
			Todo.find({}, (err, data)=>{
				if(err)
					resp.send(err);
				else
					resp.json(data);
			});
		});
	},
	deleteTodo:(req,resp)=>{
		Todo.remove({
			_id:req.params.id
		}, (err, todo)=>{
			Todo.find({}, (err, data)=>{
				if(err)
					resp.send(err);
				else
					resp.json(data);
			});
		});
	}
}

export default mainController;