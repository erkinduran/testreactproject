import React from 'react';
import {
	UserAction,
} from '../Redux/Actions';
import connect from 'react-redux/es/connect/connect';

import IRecipeProps from "../Types/IRecipeProps"
import IRecipeState from "../Types/IRecipeState"

class Body extends React.Component<IRecipeProps, IRecipeState>
{
  constructor(props: any){
    super(props)
    this.state = {
      displayUser:false
    }
  }

  openUser(id){
    if(typeof id !== undefined && id){
      
    }
  }

  render()
 {
   const {users}=this.props
  return (
      <div className="row mt-15 mb-15">
        <div className="col-12">
        <table className="table table-striped">
          <thead>
          <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
        {(users?users.map((user,key)=>{
          return <tr className="anchor" onClick={() => this.openUser(user.Id)} key={key}>
            <td>{user.Name}</td>
            <td>{user.UserName}</td>
            <td>{user.Email}</td>
          </tr>
        }):"")}
        </tbody>
        </table>
        </div>
      </div>
  );
 }
}

const mapDispatchToProps = {
	UserAction,
};

const mapStateToProps = state => state;

export default connect ( mapStateToProps, mapDispatchToProps ) ( Body );
