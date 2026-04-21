import React, { useState } from 'react'

export const App = () => {
    let [data, setData] = useState({
        username: "",
        password: ""
    })

    let handleChange = (e) => {
        let {name, value} = e.target;
        //* to partially update
        setData({...data, [name]:value})
    }


    return (
   <div>
    <form>
        <input 
            type="text" 
            placeholder="username" 
            onChange={handleChange} 
            name="username"
            value={data.username} 
        />
        <br /><br />

        <input 
            type="password" 
            placeholder="enter password" 
            name="password" 
            onChange={handleChange}
            value={data.password}
        />
    </form>

    <br /><br />
    <h1>username : {data.username}</h1>
    <h2>password : {data.password}</h2>
</div>
    )
}
