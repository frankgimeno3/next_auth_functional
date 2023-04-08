import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0/client';
type Props = {};

const Profile = ({}:Props) => {
    
   return (
    <div className={styles.grid}>
       <h1>This is the profile</h1>
    </div>
  );
};

export default Profile;