import React from "react";
import Map from "./Map";
import List from "./List";
import * as LocationsAPI from "../api/Location";


class Content extends React.Component{
	state ={
		locations: [],
		queryResult:[],
		query:""
	};

	componentDidMount(){
		console.log("Data");
		LocationsAPI.getLocations().then(resp =>this.setState({locations: resp,queryResult:resp}));
	}
	//function used to open infowindow and perform other animations when clickd in list
	handleClick=(location)=>
	{
		for(let i=0;i<window.markers.length;i++){
			if(location.venue.id===window.markers[i].title)
			{
				window.markers[i].setAnimation(window.google.maps.Animation.BOUNCE);
				let content=this.prepareContent(location);
				window.infoWindow.setContent(content);
				window.infoWindow.open(window.mapObject,window.markers[i]);
				window.markers[i].setAnimation(null);
			}
		}
	}

  handleTextChange= query =>
  {
  	this.setState({ query });
  	if(query)
  	{
  		this.setState({locations: this.filterLocations(query,this.state.locations)})
  	}else{
  		this.setState({locations:this.state.queryResult});
  	}
  };

//function used to filter the locations
  filterLocations =(query,locations)=>{
  	return locations.filter(location=>location.venue.name.toLowerCase().includes(query.toLowerCase()));
  }

  //function used to get the content of infowindow
	prepareContent(location)
  {
  	return `<div>
				<h5><a href="#">${location.venue.name}</a></h5>
				<h6><i>${location.venue.location.address}</i></h6>
			</div>`;
  };

	render(){
		console.log(this.state.locations);
		return(
			<div className="content">
			<List locations={this.state.locations} showInfoContent={this.handleClick} 
			queryString={this.state.query}
			handleChange={this.handleTextChange}
			/> 
			<Map locations={this.state.locations} prepareContent={this.prepareContent}/>
			</div>
			)
	}
}

export default Content;