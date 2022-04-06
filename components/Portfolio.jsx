import Image from 'next/image'
import { useState } from 'react'
import { shimmerUrl } from '../lib/shimmer'
import Modal from './Modal'

const modalData = [
  {
    id: 'gois-street',
    title: 'Gois Street',
    url: 'https://www.behance.net/gallery/134595173/Gois-Street-Identidade-Visual',
    images: [1, 2],
  },
  {
    id: 'beloni-acessorios',
    title: 'Beloni Acessórios',
    url: 'https://www.behance.net/gallery/128442559/Beloni-Acessorios-Identidade-Visual',
    images: [1, 2],
  },
  {
    id: 'ocl-engenheiro-civil',
    title: 'OCL Engenheiro Civil',
    url: 'https://www.behance.net/gallery/125338315/Otavio-Campos-Lopes-Eng-Civil-Identidade-Visual',
    images: [1, 2],
  },
  {
    id: 'my-adhd',
    title: 'My ADHD',
    url: 'https://www.behance.net/gallery/120762549/MyADHD-Identidade-Visual-e-UI-UX',
    images: [0, 1, 2],
  },
  {
    id: 'robinpack',
    title: 'Robinpack',
    url: 'https://www.behance.net/gallery/90808651/Robinpack-Identidade-Visual',
    images: [0, 1, 2],
  },
  // {
  //   id: 'gata-mineira',
  //   title: 'Gata Mineira',
  //   url: 'https://www.behance.net/gallery/106178891/Gata-Mineira-Conceito-de-Identidade-Visual',
  //   images: [0, 1, 2],
  // },
  // {
  //   id: 'inove',
  //   title: 'Inove 4.0',
  //   url: 'https://www.behance.net/gallery/97911067/Inove-40-Consultoria-de-Negocios-Identidade-Visual',
  //   images: [0, 1],
  // },
  // {
  //   id: 'pacocao',
  //   title: 'Paçocão',
  //   url: 'https://www.behance.net/gallery/111853811/Pacocao-Identidade-Visual',
  //   images: [0, 1],
  // },
  {
    id: 'olivier',
    title: 'Olivier Semijoias',
    url: 'https://www.behance.net/gallery/92522585/Olivier-Semijoias-Identidade-Visual',
    images: [0, 1, 2, 3],
  },
]

export default function Portfolio() {
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState('')

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfólio</h2>
        <Modal
          onClose={() => setShow(false)}
          show={show}
          content={modalContent}
        />
        <div className="portfolio__cases">
          <div className="grid-2">
            {modalData.map((item, index) => (
              <Image
                key={index}
                onClick={() => {
                  setModalContent(item)
                  setShow(true)
                }}
                src={`/images/portfolio/${item.id}/thumbnail.png`}
                alt={`Portfolio Image Thumbnail of ${item.title}`}
                className={`responsive-img modal-${index}`}
                width={632}
                height={380}
                placeholder="blur"
                blurDataURL={shimmerUrl}
                loading="eager"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
