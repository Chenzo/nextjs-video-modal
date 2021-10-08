import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from 'react';
import TollModal from '../components/toll-modal';
import Vimeo from '../components/vimeo-comp';

export default function Home() {


  const [modalOpen, setModalOpen] = useState(false);

  const myThing = function(evt) {
    console.log("my Thing Fired");
    setModalOpen(true);
  }

  const closeModal = function(evt) {
    setModalOpen(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Modal And Video</title>
        <meta name="description" content="Simple NextJS Modal and Video example" />
      </Head>

      <main className={styles.main}>
          <p>
          Lorem ipsum dolor sit amet, <span onClick={myThing}>consectetur adipiscing elit</span>. Aenean tristique justo in velit malesuada, sed porta dui rutrum. Nulla facilisi. Aenean mauris augue, ultricies eu lacus quis, vulputate iaculis magna. Nunc venenatis euismod laoreet. Ut quis sapien blandit, semper purus id, varius sapien. Donec a porta arcu. Morbi id lacus mollis, dictum nisl in, lacinia lacus. Nullam aliquam venenatis tristique. Phasellus lacinia arcu at libero congue pretium. Praesent pretium risus dictum metus congue molestie. Integer cursus velit nisi, sit amet hendrerit tellus blandit euismod. Nunc cursus tellus id rhoncus semper.
          </p>
          <img src="/bill.jpg" />
      </main>


      {modalOpen &&
        <TollModal closeAction={closeModal}>
          <div>
            <Vimeo videoID="35055590"></Vimeo>
          </div>
        </TollModal>
      }

    </div>
  )
}
