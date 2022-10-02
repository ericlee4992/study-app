import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.css'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      This is homepage??
      <div onClick={() => router.push('/bio')}>
        Go to bio page
      </div>
    </div>
  )
}
export default Home