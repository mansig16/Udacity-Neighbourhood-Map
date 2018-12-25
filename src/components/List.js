import React from "react";

class List extends React.Component{
	render(){
		//Location List
		const locations=this.props.locations;
		return (
			<div id="List">
				<h2 tabindex="0">Locations</h2>
				<input type="text" aria-label="input-text" id="new" value={this.props.queryString} onChange={e =>this.props.handleChange(e.target.value)}/>
				<ol>
					{locations.map(loc => (
						<li key={loc.venue.id}>
							<div>
								<h5><a href="#" onClick={() =>this.props.showInfoContent(loc)}>{loc.venue.name}</a></h5>
								<h6><i>{loc.venue.location.address}</i></h6>
							</div>
						</li>
						))}
				</ol>
			</div>);
	}
}

export default List ;