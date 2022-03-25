import Head from 'next/head'
import Image from 'next/image'
import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.contentContainer}>
      <Head>
        <title>BatForms</title>
       </Head>
    </div>
  )
}
