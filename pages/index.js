import styles from '../styles/styles.module.css';
import{ useState } from 'react'
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
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className={styles.wrapper}>
    <h1 className={styles.title}>Github portfolio</h1>
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
            src={dataUser?.avatar_url || 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'}
          />
        </div>
        <h3 id="name">{dataUser?.login}</h3>
        <div className={styles.flex}>
          <div>
            <p className={styles.role}>Seguidores:<span id="followers">{dataUser?.followers == 0 ? '0' : dataUser?.followers || '😴'}</span></p>
          </div>
          <div>
            <p className={styles.role}>Seguindo:<span id="following">{dataUser?.following == 0 ? '0' : dataUser?.following || '😴'}</span></p>
          </div>
          <div>
            <p className={styles.role}>Repos:<span id="repos">{dataUser?.public_repos == 0 ? '0' : dataUser?.public_repos || '😴'}</span></p>
          </div>
        </div>
        <p className={styles.bio}id="bio">{dataUser?.bio}</p>
      </div>
    </div>
  </div>
  )
}


