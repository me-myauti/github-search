import styles from '../styles/styles.module.css';
import{ useState, useEffect } from 'react'
import axios from '../services/axiosConfig';

export default function Index() {
  const [name, setName] = useState('');
  const [dataUser, setData] = useState({user: ''});

  const getInputValue = (event)=>{
    const userValue = event.target.value;
    setName(userValue)
  };

  async function userData(){
    axios.get(`/${name}`)
    .then((res)=>{
      setData(res.data)
      document.getElementById('bio').innerHTML = res.data.bio
      document.getElementById('img').src = res.data.avatar_url
    })
    .catch((err)=>{
      console.log(err)
    })
  }
    

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img id="img" src={dataUser?.login}>

        </img>
        <h3 id="bio">{dataUser?.bio}</h3>
        <input 
          type="text" 
          placeholder='Search your github profile' 
          onChange={getInputValue}
          className={styles.input}
        />
        <button className={styles.btn} onClick={userData}>
          Search profile
        </button>
      </div>
    </div>
  )
  
}


