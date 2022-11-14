import Head from 'next/head'
import JobItem from '../components/JobItem'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Jobs</title>
      </Head>
      <JobItem 
        title="Arbeitsmediziner/-in/Betriebsmediziner/-in(m/w/d) oder einen Arzt/eine Arztin(m/w/d)fur die Weiterbildung zum Facharzt/zur Facharztin fur Arbeitsnedizin(m/w/d)" 
        description="Department name. Allgemeines krankenhaus der Stadt Wien-AKH " 
        address="Vienna, Austria"
      />
    </div>
  )
}


