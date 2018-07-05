import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
//import { NewPost } from './components/NewPost';
import ListPage from './container/ListPage';
import PostDetail from './container/PostDetails';
import NewPost from './components/NewPost';

class App extends Component {
	render() {
		return (
			<div className="container">
				<Route exact path="/" component={ListPage} />
				<Route exact path="/posts/:id" component={PostDetail} />
				<Route exact path="/newpost" component={NewPost} />
			</div>
		);
	}
}

export default App;
