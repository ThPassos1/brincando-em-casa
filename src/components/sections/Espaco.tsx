import { Button } from '@/components/ui/Button'
import { DoodleField } from '@/components/ui/Doodle'
import {
  PhotoClothesline,
  type ClotheslinePhoto,
} from '@/components/ui/PhotoClothesline'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { mapsDirectionsUrl, mapsEmbedUrl, SITE } from '@/lib/site'
import { whatsappUrl } from '@/lib/whatsapp'

const photos: ClotheslinePhoto[] = [
  {
    src: '/espaco/pes-terra.webp',
    caption: 'Onde os pés descobrem a terra',
    alt: 'Criança brincando descalça na canoa de madeira no quintal da Brincando em Casa',
    objectPosition: 'center 45%',
    size: 'lg',
    rotate: -6,
    hang: 10,
    paper: '#f7f1e4',
  },
  {
    src: '/espaco/tenda-lilas.webp',
    caption: 'Um esconderijo de faz de conta',
    alt: 'Criança brincando dentro de um cantinho coberto por tecido lilás',
    objectPosition: 'center 40%',
    size: 'sm',
    rotate: 5,
    hang: 28,
    paper: '#fbf6ee',
  },
  {
    src: '/espaco/cantinho-brincar.webp',
    caption: 'Cantinho de brincar, cheio de histórias',
    alt: 'Educadora puxando crianças em um carrinho de madeira no quintal',
    objectPosition: '42% 50%',
    size: 'md',
    rotate: -3,
    hang: 6,
    paper: '#f3e6d4',
  },
  {
    src: '/espaco/roda-historias.webp',
    caption: 'Roda de histórias no cantinho',
    alt: 'Educadora e crianças sentadas em roda na salinha da Brincando em Casa',
    objectPosition: 'center 35%',
    size: 'lg',
    rotate: 7,
    hang: 18,
    paper: '#f6efe3',
  },
  {
    src: '/espaco/luz-natural.webp',
    caption: 'Luz natural, tempo de sobra',
    alt: 'Lanche ao ar livre com colher de madeira e tangerina na Brincando em Casa',
    objectPosition: '38% 55%',
    size: 'md',
    rotate: 4,
    hang: 22,
    paper: '#f4ebe0',
  },
  {
    src: '/espaco/fogao-madeira.webp',
    caption: 'Fogão de madeira, brincar de verdade',
    alt: 'Criança brincando com fogão de madeira sobre o tapete',
    objectPosition: 'center 60%',
    size: 'sm',
    rotate: -7,
    hang: 8,
    paper: '#fbf6ee',
  },
  {
    src: '/espaco/quintal.webp',
    caption: 'Nosso quintal é a maior sala da escola',
    alt: 'Crianças e educadora pintando juntas à mesa no quintal',
    objectPosition: '52% 48%',
    size: 'lg',
    rotate: -4,
    hang: 14,
    paper: '#f7f1e4',
  },
  {
    src: '/espaco/mesa-aquarela.webp',
    caption: 'A mesa pronta para o fazer do dia',
    alt: 'Mesa da salinha preparada com papéis, tintas e pincéis para aquarela',
    objectPosition: 'center 45%',
    size: 'md',
    rotate: 6,
    hang: 26,
    paper: '#f3e6d4',
  },
  {
    src: '/espaco/materiais.webp',
    caption: 'Materiais simples, imaginação sem limite',
    alt: 'Tintas, pincéis e paletas sobre a mesa da Brincando em Casa',
    objectPosition: 'center',
    size: 'sm',
    rotate: 8,
    hang: 12,
    paper: '#f6efe3',
  },
  {
    src: '/espaco/bonequinhas.webp',
    caption: 'Um mundinho do tamanho da infância',
    alt: 'Bonecas de pano e móveis de madeira em brincadeira no chão',
    objectPosition: 'center 55%',
    size: 'md',
    rotate: -5,
    hang: 24,
    paper: '#f4ebe0',
  },
  {
    src: '/espaco/ritmo-crianca.webp',
    caption: 'Cada criança no seu próprio ritmo',
    alt: 'Criança com o avental laranja da Brincando em Casa',
    objectPosition: 'center 42%',
    size: 'lg',
    rotate: 3,
    hang: 4,
    paper: '#f7f1e4',
  },
  {
    src: '/espaco/pao-maos.webp',
    caption: 'O pão que as mãos fizeram',
    alt: 'Mãos de uma criança mostrando um pão feito na Brincando em Casa',
    objectPosition: 'center 40%',
    size: 'md',
    rotate: -8,
    hang: 20,
    paper: '#fbf6ee',
  },
]

export function Espaco() {
  return (
    <section
      id="espaco"
      className="relative overflow-x-clip bg-brincando-salvia-clara/55 py-20 sm:py-24"
    >
      <DoodleField
        items={[
          { name: 'passarinho', className: 'top-5 right-3 h-9 w-12 text-brincando-terra/30 sm:top-8 sm:right-12 sm:h-12 sm:w-16' },
          { name: 'flor', className: 'bottom-6 left-2 h-12 w-11 text-brincando-laranja/35 sm:bottom-10 sm:left-8 sm:h-16 sm:w-14' },
          { name: 'sol', className: 'top-8 left-3 h-10 w-10 text-brincando-laranja/30 sm:top-12 sm:left-10 sm:h-14 sm:w-14' },
          { name: 'cogumelo', className: 'right-3 top-[42%] h-10 w-10 text-brincando-terra/25 sm:right-8 sm:h-14 sm:w-14' },
          { name: 'gota', className: 'right-8 bottom-16 h-9 w-7 text-brincando-salvia sm:right-20 sm:bottom-20 sm:h-12 sm:w-9' },
        ]}
      />
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

        <PhotoClothesline photos={photos} />

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
