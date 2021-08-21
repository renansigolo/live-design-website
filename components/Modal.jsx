import Image from 'next/image'
import { shimmerUrl } from '../lib/shimmer'

export default function Modal(props) {
  if (!props.show) {
    return null
  }
  const { id, title, url, images } = props.content
  return (
    <div className="modal-container" onClick={props.onClose}>
      <div id={`modal-${id}`} className="custom-modal">
        <div
          className="grid-1 modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h4>{title}</h4>
          <Image
            src={`/images/portfolio/${id}/thumbnail.png`}
            alt={`Modal Image Thumbnail ${id}`}
            width={512}
            height={512}
            layout="intrinsic"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={shimmerUrl}
          />
          {images.map((imageIndex, index) => (
            <Image
              key={index}
              src={`/images/portfolio/${id}/modal-${imageIndex + 1}.png`}
              alt={`Modal Image ${imageIndex + 1}`}
              width={512}
              height={680}
              layout="intrinsic"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={shimmerUrl}
            />
          ))}
          <div className="modal-footer">
            <a
              href={url}
              className="modal-close btn-flat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mais
              <i className="material-icons">open_in_new</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
