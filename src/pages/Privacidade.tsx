import { SITE } from '@/lib/site'

export function Privacidade() {
  return (
    <main className="bg-brincando-creme px-5 py-24 sm:px-8">
      <article className="mx-auto max-w-2xl">
        <p className="font-hand text-2xl text-brincando-laranja">Documento</p>
        <h1 className="mt-2 text-3xl sm:text-4xl">Política de Privacidade</h1>
        <p className="mt-6 text-brincando-terra">
          A {SITE.shortName} respeita a privacidade das famílias que nos
          procuram. Esta página explica, em linguagem simples, o que fazemos
          com os dados quando você visita o site ou nos chama no WhatsApp.
        </p>
        <h2 className="mt-10 text-2xl">Quem somos</h2>
        <p className="mt-3 text-brincando-terra">
          {SITE.name}, {SITE.address.full}. WhatsApp: {SITE.phoneDisplay}.
        </p>
        <h2 className="mt-10 text-2xl">O que coletamos</h2>
        <p className="mt-3 text-brincando-terra">
          Neste site não pedimos cadastro e não enviamos seus dados para um
          servidor nosso. O que aparece na página (endereço, WhatsApp, fotos
          e depoimentos) é informação pública do espaço.
        </p>
        <p className="mt-3 text-brincando-terra">
          Se você clica para falar no WhatsApp, a conversa acontece no
          aplicativo da Meta, sob as regras deles. O mapa e as fontes do site
          são carregados do Google. Esses serviços podem ver que alguém
          visitou esta página.
        </p>
        <p className="mt-3 text-brincando-terra">
          Anúncios (Meta Pixel ou Google Ads) só entram no site depois de
          configurados de forma explícita. Enquanto isso não acontecer, o
          site não dispara esses rastreadores.
        </p>
        <h2 className="mt-10 text-2xl">Para que usamos</h2>
        <p className="mt-3 text-brincando-terra">
          Para responder dúvidas, agendar visitas e, quando autorizado,
          entender quais anúncios trouxeram famílias até aqui. Não vendemos
          dados.
        </p>
        <h2 className="mt-10 text-2xl">Seus direitos</h2>
        <p className="mt-3 text-brincando-terra">
          Pela LGPD, você pode pedir acesso, correção ou exclusão dos dados
          que tivermos. É só chamar no WhatsApp ou nas redes oficiais.
        </p>
        <p className="mt-10">
          <a href="#inicio" className="font-semibold text-brincando-laranja">
            Voltar para a página inicial
          </a>
        </p>
      </article>
    </main>
  )
}
