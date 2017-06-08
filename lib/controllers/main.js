'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Todo = require('../models/Todo');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainController = {

	getIndex: function getIndex(req, resp) {
		resp.render('index');
	},
	getTemplate: function getTemplate(req, resp) {
		resp.render('templates/' + req.params.template);
	},
	getAllTodos: function getAllTodos(req, resp) {
		_Todo2.default.find({}, function (err, data) {
			if (err) resp.send(err);else resp.json(data);
		});
	},
	postNewTodo: function postNewTodo(req, resp) {
		_Todo2.default.create({
			text: req.body.text,
			done: false
		}, function (err, todo) {
			_Todo2.default.find({}, function (err, data) {
				if (err) resp.send(err);else resp.json(data);
			});
		});
	},
	deleteTodo: function deleteTodo(req, resp) {
		_Todo2.default.remove({
			_id: req.params.id
		}, function (err, todo) {
			_Todo2.default.find({}, function (err, data) {
				if (err) resp.send(err);else resp.json(data);
			});
		});
	}
};

exports.default = mainController;