import React from "react"

class Table extends React.Component {
  constructor(props, context) {
    (props, context);
    this.state = {
      users: this.props.users
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <Users users={this.state.users} />
      </table>
    )
  };
}

export default Table;