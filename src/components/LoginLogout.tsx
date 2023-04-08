import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0/client';
type Props = {};

const LoginLogout = ({}:Props) => {
    const {error, isLoading, user} = useUser();
    if (error) return <div>{error.message}</div>;
    if (isLoading) return <div>Loading...</div>;
   return (
    <div className={styles.grid}>
        {!user && (        <a href="/api/auth/login" className={styles.card} target="_blank" rel="noopener noreferrer"><h2>Login</h2></a>)}
        {user && (        <a href="/api/auth/logout" className={styles.card} target="_blank" rel="noopener noreferrer"><h2>Logout</h2></a>)}
    </div>
  );
};

export default LoginLogout;