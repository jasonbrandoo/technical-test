import React from 'react';
import {
  Card, Button, CardTitle,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import withApp from '../containers/withApp';

const UserList = (props) => {
  const { users } = props;
  const renderUsers = users.map(user => (
    <Card body className="text-center">
      <CardTitle>
        {user.name}
      </CardTitle>
      <NavLink to={`/user/${user.id}`}>
        <Button>
            See Profile
        </Button>
      </NavLink>
    </Card>
  ));
  return (
    <div>
      {renderUsers}
    </div>
  );
};

export default withApp(UserList);
