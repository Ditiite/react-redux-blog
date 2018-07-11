import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { NewPost } from './components/NewPost';
import { ListPage } from './containers/ListPage';
import { PostDetail } from './components/PostDetail';

const App = () => (

	<div className="container">
		<Route exact path="/" component={ListPage} />
		<Route exact path="/newpost" component={NewPost} />
		<Route exact path="/posts/:id" component={PostDetail} />
	</div>
		
);


export default App;
