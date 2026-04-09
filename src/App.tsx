import {useState} from 'react';
import {CheckCircle2, CircleHelp, Menu, ShieldCheck, Sprout, TrendingUp, X} from 'lucide-react';

const navLinks = [
  {label: 'Resultados', href: '#resultados'},
  {label: 'Modelo', href: '#modelo'},
  {label: 'Para quem', href: '#publico'},
  {label: 'FAQ', href: '#faq'},
];

const beneficios = [
  {
    titulo: 'Restauração produtiva da floresta',
    texto: 'Transformamos pastagem degradada em floresta nativa gerando bioeconomia real: açaí, cacau, madeira certificada, óleos, resinas e créditos de carbono.',
    icon: Sprout,
  },
  {
    titulo: 'Parceria sem investimento de capital',
    texto: 'Fazendeiros e comunidades indígenas e ribeirinhas entram como parceiros. A floresta que cresce na sua terra gera renda crescente.',
    icon: TrendingUp,
  },
  {
    titulo: 'Gestão integrada da cadeia',
    texto: 'Produção, processamento e comercialização geridos pela AVA, com certificações FSC, Verra VCS+CCB e SIF desde o primeiro ano.',
    icon: ShieldCheck,
  },
];

const etapas = [
  {
    passo: '01',
    titulo: 'Restauração da floresta nativa',
    texto: 'Em 10.000 hectares de pastagem degradada no Acre, restauramos floresta nativa para regeneração produtiva.',
  },
  {
    passo: '02',
    titulo: 'Transformação em bioeconomia',
    texto: 'Integramos a floresta em cadeias de valor: açaí, cacau, madeira, óleos, resinas e créditos de carbono.',
  },
  {
    passo: '03',
    titulo: 'Gestão e comercialização',
    texto: 'Toda a cadeia é gerida pela AVA, do campo ao mercado, com certificações e rastreabilidade.',
  },
];

const provas = [
  ['10.000 ha', 'de pastagem degradada no Acre'],
  ['Bioeconomia ', 'açaí, cacau, madeira certificada, óleos, resinas'],
  ['Certificações', 'FSC, Verra VCS+CCB e SIF desde o primeiro ano'],
  ['Parceiros', 'fazendeiros e comunidades indígenas e ribeirinhas'],
];

const perguntas = [
  {
    pergunta: 'Quem pode ser parceiro da AVA?',
    resposta: 'Fazendeiros e comunidades indígenas e ribeirinhas entram como parceiros sem investir capital. A floresta gera renda crescente.',
  },
  {
    pergunta: 'O que vendemos além de créditos de carbono?',
    resposta: 'Vendemos a floresta em vida: seus frutos, madeira, óleos, resinas e biodiversidade. O carbono é consequência.',
  },
  {
    pergunta: 'Como a cadeia produtiva é gerida?',
    resposta: 'Toda a cadeia — produção, processamento e comercialização — é gerida pela AVA com certificações desde o primeiro ano.',
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="lp-shell">
      <a className="lp-skip" href="#conteudo">Pular para conteúdo</a>

      <div className="lp-alert">
        <div className="lp-wrap">
          <p><b>Floresta que produz. Terra que vale. Amazônia que fica.</b></p>
        </div>
      </div>

      <header className="lp-header" id="topo">
        <div className="lp-wrap lp-header-row">
          <a className="lp-logo" href="#topo" aria-label="Aliança Verde Amazônia">
            <img src="/logo-alianca.png" alt="Logo Aliança Verde Amazônia" className="lp-logo-img" />
          </a>
          <nav aria-label="Navegação principal">
            <ul className="lp-nav">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="lp-menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
        <nav id="mobile-nav" aria-label="Navegação mobile" className={`lp-mobile-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul className="lp-mobile-list">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="conteudo" className="lp-main">
        <section className="lp-hero">
          <div className="lp-wrap lp-hero-grid">
            <article className="lp-hero-copy">
              <h1>Aliança Verde Amazônia</h1>
              <p>
                A Amazônia não precisa escolher entre floresta e renda. Esse é o ponto de partida do nosso projeto.
              </p>
            </article>
          </div>
        </section>

        <section className="lp-wrap lp-core-focus" aria-labelledby="core-focus-title">
          <article className="lp-core-content">
            <p className="lp-kicker">NOSSO FOCO PRINCIPAL</p>
            <h2 id="core-focus-title">Transformar áreas de pastagem devastadas em floresta produtiva.</h2>
            <p>
              O coração da AVA é recuperar terras degradadas e devolver vida ao solo com floresta nativa.
              Esse processo gera restauração ambiental real e cria uma base econômica sustentável no território.
            </p>
            <p>
              Onde antes havia improdutividade, implantamos sistemas que combinam regeneração, biodiversidade
              e oportunidades de renda de longo prazo.
            </p>
          </article>
          <div className="lp-core-media">
            <img
              src="/transicao1.png"
              alt="Área de pastagem com recuperação florestal em andamento"
              loading="lazy"
            />
          </div>
        </section>

        <section className="lp-results-band" id="resultados" aria-labelledby="resultados-title">
          <div className="lp-wrap lp-results-head">
            <p className="lp-kicker">RESULTADOS ESPERADOS</p>
            <h2 id="resultados-title">Uma proposta de valor construída para escalar.</h2>
          </div>
          <div className="lp-wrap lp-metrics-grid">
            {provas.map(([valor, legenda], index) => (
              <article key={legenda} className={`lp-metric-item lp-metric-item--${index + 1}`}>
                <strong>{valor}</strong>
                <p>{legenda}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lp-wrap lp-model-track" id="modelo" aria-labelledby="modelo-title">
          <div className="lp-model-head">
            <p className="lp-kicker">MODELO OPERACIONAL</p>
            <h2 id="modelo-title">Da restauração à bioeconomia em três etapas.</h2>
          </div>
          <ol className="lp-track-list">
            {etapas.map((etapa) => (
              <li key={etapa.titulo} className="lp-track-step">
                <span>{etapa.passo}</span>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="lp-wrap lp-public-mosaic" id="publico" aria-labelledby="publico-title">
          <div className="lp-public-intro">
            <p className="lp-kicker">PARA QUEM É</p>
            <h2 id="publico-title">Para fazendeiros e comunidades que querem floresta produtiva sem escolher entre floresta e renda.</h2>
          </div>
          <div className="lp-public-columns">
            {beneficios.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.titulo} className={`lp-public-card lp-public-card--${index + 1}`}>
                  <Icon size={20} aria-hidden="true" />
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="lp-wrap lp-faq-split" id="faq" aria-labelledby="faq-title">
          <header className="lp-faq-intro">
            <p className="lp-kicker">DÚVIDAS FREQUENTES</p>
            <h2 id="faq-title">Perguntas comuns antes de iniciar.</h2>
            <p>Respostas diretas para as decisões iniciais de parceria e execução.</p>
          </header>
          <div className="lp-faq-list">
            {perguntas.map((item) => (
              <details key={item.pergunta}>
                <summary><CircleHelp size={16} aria-hidden="true" /> {item.pergunta}</summary>
                <p>{item.resposta}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="lp-footer" id="contato">
        <div className="lp-wrap lp-footer-grid">
          <div>
            <a className="lp-logo" href="#topo" aria-label="Aliança Verde Amazônia">
              <img src="/logo-alianca.png" alt="Logo Aliança Verde Amazônia" className="lp-logo-img" />
            </a>
            <p>Floresta que produz. Terra que vale. Amazônia que fica.</p>
          </div>
          <nav aria-label="Navegação de rodapé">
            <ul className="lp-footer-links">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lp-footer-contact">
            <p>Falar com especialista</p>
            <a className="lp-btn lp-btn--sm" href="#topo">Iniciar conversa</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
