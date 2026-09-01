import { Button } from '@/components/ui/Button'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { mapsDirectionsUrl, mapsEmbedUrl, SITE } from '@/lib/site'
import { whatsappUrl } from '@/lib/whatsapp'

const photos = [
  {
    slot: 'IMG_ESPACO_01',
    src: '/espaco/pes-terra.png',
    caption: 'Onde os pés descobrem a terra',
    alt: 'Criança brincando descalça na canoa de madeira no quintal da Brincando em Casa',
    objectPosition: 'center 45%',
    aspect: '4/5',
  },
  {
    slot: 'IMG_ESPACO_02',
    src: '/espaco/cantinho-brincar.png',
    caption: 'Cantinho de brincar, cheio de histórias',
    alt: 'Educadora puxando crianças em um carrinho de madeira no quintal',
    objectPosition: '42% 50%',
    aspect: '4/5',
  },
  {
    slot: 'IMG_ESPACO_03',
    src: '/espaco/luz-natural.png',
    caption: 'Luz natural, tempo de sobra',
    alt: 'Lanche ao ar livre com colher de madeira e tangerina na Brincando em Casa',
    objectPosition: '38% 55%',
    aspect: '4/5',
  },
  {
    slot: 'IMG_ESPACO_04',
    src: '/espaco/quintal.png',
    caption: 'Nosso quintal é a maior sala da escola',
    alt: 'Crianças e educadora pintando juntas à mesa no quintal',
    objectPosition: '52% 48%',
    aspect: '4/5',
  },
  {
    slot: 'IMG_ESPACO_05',
    src: '/espaco/materiais.png',
    caption: 'Materiais simples, imaginação sem limite',
    alt: 'Tintas, pincéis e paletas sobre a mesa da Brincando em Casa',
    objectPosition: 'center',
    aspect: '4/5',
  },
  {
    slot: 'IMG_ESPACO_06',
    src: '/espaco/ritmo-crianca.png',
    caption: 'Cada criança no seu próprio ritmo',
    alt: 'Criança com o avental laranja da Brincando em Casa',
    objectPosition: 'center 42%',
    aspect: '4/5',
  },
] as const

export function Espaco() {
  return (
    <section
      id="espaco"
      className="cv-auto relative bg-brincando-salvia-clara/55 py-20 sm:py-24"
    >
      <div className="container-page">
        <SectionReveal className="max-w-2xl">
          <p className="font-hand text-2xl text-brincando-terra">O espaço</p>
          <h2 className="mt-2 text-[1.7rem] sm:text-4xl">
            Um espaço pensado para a infância
          </h2>
          <p className="mt-5 text-brincando-terra">
            Cada canto da Brincando em Casa foi pensado para acolher, não para
            impressionar. Aqui, os materiais são naturais, os brinquedos
            convidam à imaginação e o quintal é tão sala de aula quanto qualquer
            outra.
          </p>
        </SectionReveal>

        <div className="snap-scroller mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">
          {photos.map((photo) => (
            <div
              key={photo.slot}
              className="w-[min(78vw,19.5rem)] shrink-0 snap-start lg:w-auto"
            >
              {/* {photo.slot} */}
              <ImagePlaceholder
                slot={photo.slot}
                src={photo.src}
                note="Foto do espaço físico, fornecida pela cliente."
                caption={photo.caption}
                alt={photo.alt}
                aspect={photo.aspect}
                objectPosition={photo.objectPosition}
              />
            </div>
          ))}
        </div>

        <SectionReveal className="mt-14 grid items-start gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl">Como chegar</h3>
            <p className="mt-3 text-brincando-terra">{SITE.address.full}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappUrl('espaco')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                WhatsApp
              </Button>
              <Button
                href={mapsDirectionsUrl()}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Abrir no mapa
              </Button>
            </div>
          </div>
          <div className="organic-border overflow-hidden shadow-frame ring-1 ring-brincando-terra/15">
            <iframe
              title="Mapa da Brincando em Casa, Flores, Manaus"
              src={mapsEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-same-origin"
              allow=""
              className="h-64 w-full border-0 grayscale-[20%] sm:h-80"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
