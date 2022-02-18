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
          <img
            src={`/images/portfolio/${id}/thumbnail.png`}
            alt={`Modal Image Thumbnail ${id}`}
          />
          {images.map((imageIndex, index) => (
            <img
              key={index}
              src={`/images/portfolio/${id}/modal-${imageIndex + 1}.png`}
              alt={`Modal Image ${imageIndex + 1}`}
              loading="lazy"
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
