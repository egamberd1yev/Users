import React, { useEffect, useState } from 'react'
import { usersApi } from '../hooks/users.js';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(undefined);
  const navigate = useNavigate()



  useEffect(() => {
    const getData = async () => {
      const data = await usersApi.getUsers(user)

      setUsers(data)
    }

    getData()
  }, [user])

  return (
    <div className='container' style={{marginTop: '20px'}}>

      <div className="d-flex flex-column gap-3 flex-wrap">
        {users?.map(user => (
          <div className="card" onClick={() => navigate(`/posts/${user.id}`)}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.username}</p>
              <button className="btn btn-primary" onClick={() => navigate(`/posts/${user.id}/comments`)}>Ko'rish</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home