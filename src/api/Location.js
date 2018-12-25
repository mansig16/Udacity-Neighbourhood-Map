function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

//getting the locations using fourSquare api
export const getLocations=()=>{
return fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=chandigarh&client_id=""&client_secret=""&v=20182507`
	).then(handleErrors).then(resp =>resp.json())
.then(result =>result.response.groups[0].items)
.catch(error => alert("Foursquare error. Try to restart the page."));
};
