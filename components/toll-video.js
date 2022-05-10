
export default function TollVideo({children, videoID}) {

    //https://player.vimeo.com/video/35055590?h=92bfa7a71b
    return (
        <div>
          <iframe src={`https://player.vimeo.com/video/${videoID}?h=92bfa7a71b`} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/35055590">Hello</a> from <a href="https://vimeo.com/ant1mat3rie">Matthijs_Vlot</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
        </div>
    )
}