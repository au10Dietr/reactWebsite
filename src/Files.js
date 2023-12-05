import React from 'react';
import axios from 'axios';

export default class Files extends React.Component {
	state = {
		posts: []
	};
	componentDidMount() {
		axios
			.get(
				`http://localhost:8080/files`
			)
			.then((response) => {
				const posts = response.data;
				this.setState({ posts });
			});
	}
	render() {
		return (
			<div>
				<form method="POST" encType="multipart/form-data" action="http://localhost:8080/upload">
					<table>
						<tbody>
							<tr><td>File to upload:</td><td><input type="file" name="file" /></td></tr>
							<tr><td></td><td><input type="submit" value="Upload" /></td></tr>
						</tbody>
					</table>
				</form>
				<ul>{this.state.posts.map(post => <li>{post.name}</li>)}</ul>
			</div>
		);
	}
}