import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { NewPost } from './components/NewPost';
import { ListPage } from './components/ListPage';
import { PostDetail } from './components/PostDetail';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Route exact path="/" component={ListPage} />
				<Route exact path="/newpost" component={NewPost} />
				<Route exact path="/posts/:id" component={PostDetail} />
			</div>
		);
	}
}

export default App;
