import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import CardComponent from './CardComponent';

const UsersComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(getUsers([{
            id: 1,
            name: 'Leanne Graham',
            company: {
                name: 'Crona',
                catchPhrase: 'Neural Net Work',
            }
        }]))
    }, [])
    return (
        <>
     {users.length > 0 && users.map((user) => (
        <CardComponent key={user.id} user={user} />
      ))}
      {users.length === 0 && <p>No users available!</p>}
        </>
    )
}

export default UsersComponent
