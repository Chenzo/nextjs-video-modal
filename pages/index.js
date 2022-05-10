import styles from '../styles/Home.module.scss'
import TollModal from '../components/toll-modal'
import { useState } from 'react';
import TollVideo from '../components/toll-video'

export default function Home() {


  const [modalOpen, setModalOpen] = useState(false);

  const openThing = function() {
    console.log("open the thing");
    setModalOpen(true);
  }

  const closeThing = function() {
    console.log("close th thing");
    setModalOpen(false);
  }


  return (
    <div className={styles.container}>

      <main className={styles.main}>
          <p>
          Lorem ipsum dolor sit amet, <span onClick={openThing}>consectetur adipiscing elit</span>. Aenean tristique justo in velit malesuada, sed porta dui rutrum. Nulla facilisi. Aenean mauris augue, ultricies eu lacus quis, vulputate iaculis magna. Nunc venenatis euismod laoreet. Ut quis sapien blandit, semper purus id, varius sapien. Donec a porta arcu. Morbi id lacus mollis, dictum nisl in, lacinia lacus. Nullam aliquam venenatis tristique. Phasellus lacinia arcu at libero congue pretium. Praesent pretium risus dictum metus congue molestie. Integer cursus velit nisi, sit amet hendrerit tellus blandit euismod. Nunc cursus tellus id rhoncus semper.
          </p>
          <img src="/bill.jpg" />
      </main>


      {modalOpen &&
        <TollModal closeAction={closeThing}>
          <TollVideo videoID="32238183"></TollVideo>
        </TollModal>
      }

    </div>
  )
}
