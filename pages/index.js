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
      document.getElementById('name').innerHTML = res.data.login
      document.getElementById('followers').innerHTML = res.data.followers
      document.getElementById('following').innerHTML = res.data.following
      document.getElementById('repos').innerHTML = res.data.public_repos
      document.getElementById('img').src = res.data.avatar_url
    })
    .catch((err)=>{
      console.log(err)
    })
  }
    

  return (
    <div className={styles.wrapper}>
    <h1 className={styles.title}>GitHub portfolio</h1>
    <div className={styles.search}>
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
    <div className={styles.team}>
      <div className={styles.team_member}>
        <div className={styles.team_img}>
          <img
            id="img"
            src={dataUser?.avatar_url}
          />
        </div>
        <h3 id="name"/>
        <div className={styles.flex}>
          <div>
            <p className={styles.role}>Seguidores:<span id="followers"/></p>
          </div>
          <div>
            <p className={styles.role}>Seguindo:<span id="following"/></p>
          </div>
          <div>
            <p className={styles.role}>
                Repos:<span id="repos"/>
            </p>
          </div>
        </div>
        <p className={styles.bio}id="bio"/>
      </div>
    </div>
  </div>
  )
  
}


