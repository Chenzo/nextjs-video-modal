//import styles from './toll-modal.module.scss'


export default function Vimeo( {children, videoID} ) {
    
    //src="https://player.vimeo.com/video/35055590?h=92bfa7a71b"
    return (
        <div>
            
            <iframe src={`https://player.vimeo.com/video/${videoID}`} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullscreen></iframe>

        </div>

    )
}