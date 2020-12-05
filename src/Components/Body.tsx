import React from 'react';
import {
  UserAction,
  displayUserAction
} from '../Redux/Actions';
import connect from 'react-redux/es/connect/connect';

import IRecipeProps from "../Types/IRecipeProps"
import IRecipeState from "../Types/IRecipeState"

class Body extends React.Component<IRecipeProps, IRecipeState>
{
  openUser(user){
    if(typeof user !== undefined && user){
      const {UserAction,displayUserAction,displayUser} = this.props;
      UserAction(user)
      displayUserAction(!displayUser)
    }
  }

  back=()=>{
    const {displayUserAction,displayUser} = this.props; 
    displayUserAction(!displayUser)
  }

  render()
 {
   const {user,users,displayUser}=this.props
  return (
      <div className="row mt-15 mb-15">
        <div className="col-12">

          {(displayUser === false?(
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
          return <tr className="anchor" onClick={() => this.openUser(user)} key={key}>
            <td>{user.Name}</td>
            <td>{user.UserName}</td>
            <td>{user.Email}</td>
          </tr>
        }):"")}
        </tbody>
        </table>
        ):(
          user?(
            <div className="col-12 p-0">
              <button type="button" className="btn btn-sm btn-light" onClick={this.back}>Back</button>
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th colSpan={2}>User Detail Form</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="userValue">Name</td>
                    <td className="userKey">{user.Name}</td>
                  </tr>
                  <tr>
                    <td className="userValue">User Name</td>
                    <td className="userKey">{user.UserName}</td>
                  </tr>
                  <tr>
                    <td className="userValue">Street</td>
                    <td className="userKey">{user.Street}</td>
                  </tr>
                  <tr>
                    <td className="userValue">City</td>
                    <td className="userKey">{user.City}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ):null
        ))}
        </div>
      </div>
  );
 }
}

const mapDispatchToProps = {
  UserAction,
  displayUserAction,
};

const mapStateToProps = state => state;

export default connect ( mapStateToProps, mapDispatchToProps ) ( Body );
