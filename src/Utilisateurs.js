import React from 'react';


class Utilisateurs extends React.Component {
  render(){
  	const usersList = this.props.users;
  	const data = usersList.map(data => {
  		if(data.sexe === "Feminin") {
  			return (
    			<div className="App" key={data.id}>
      				<div className="App-header">
       					<p>Nom : {data.name}</p>
       					<p>Sex : {data.sexe}</p>
      				</div>
    			</div>
  			);
  		} else {
  			return null;
  		}
  		
  	})
    return <div>{data}</div>;
  } 
  
}

export default Utilisateurs;
