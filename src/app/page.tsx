import Image from 'next/image'
import styles from './page.module.css'
import { Wrapper } from '@/components/map/Wrapper'

export default function Home() {
  return (
    <main className={styles.main}>
      <Wrapper />
    </main>
  )
}
