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
				<div className="row">
					<div className="col-sm-2"></div>
					<div className="col-sm-8">
						<form method="POST" encType="multipart/form-data" action="http://localhost:8080/upload" >
							<table style={{ border: '1px solid black' }}>
								<thead style={{ border: '1px solid black' }}>
								<tr>
									<th>Upload a file to backend server</th>
								</tr>
								</thead>
								<tbody>
									<tr><td>File to upload:</td><td><input type="file" name="file" /></td></tr>
									<tr><td><input type="submit" value="Upload" /></td></tr>
								</tbody>
							</table>
						</form>
					</div>
					<div className="col-sm-2"></div>
				</div>
				<div className="row" style={{position:'relative', paddingTop:'5px'}}>
					<div className="col-sm-2"></div>
					<div className="col-sm-8">
						<table style={{ border: '1px solid black' }}>
							<thead style={{ border: '1px solid black' }}>
							<tr>
								<th>Axios call to backend server to get all files in file folder</th>
							</tr>
							</thead>
							<tbody>
								{this.state.posts.map(post => 
								<tr key={post.url}>
								<td>{post.name}</td>
								</tr>)}
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-sm-2"></div>
			</div>
		);
	}
}