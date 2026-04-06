import {ArrowRight, Building2, Factory, Handshake, Leaf, MapPin, ShieldCheck, Sprout, Trees, TrendingUp} from 'lucide-react';

const links = [
  {label: 'Projeto', href: '#projeto'},
  {label: 'Modelo', href: '#modelo'},
  {label: 'Parcerias', href: '#parcerias'},
  {label: 'Governança', href: '#governanca'},
  {label: 'Impacto', href: '#impacto'},
  {label: 'Contato', href: '#contato'},
];

const fases = [
  {
    etapa: '01',
    titulo: 'Recuperação de solo',
    texto:
      'Mapeamento técnico e manejo de áreas degradadas no Acre para retomar fertilidade, biodiversidade e capacidade produtiva.',
    icon: Sprout,
  },
  {
    etapa: '02',
    titulo: 'Sistemas agroflorestais',
    texto:
      'Implantação de Açaí, Cacau e madeira certificada em consórcios com espécies nativas para produção e restauração simultâneas.',
    icon: Trees,
  },
  {
    etapa: '03',
    titulo: 'Processamento integrado',
    texto:
      'Verticalização local para manter valor agregado na origem, fortalecer cadeias regionais e melhorar margem do território.',
    icon: Factory,
  },
  {
    etapa: '04',
    titulo: 'Ativos ambientais',
    texto:
      'Geração de créditos de carbono com monitoramento satelital e rastreabilidade completa para mercados regulados e voluntários.',
    icon: Leaf,
  },
];

const produtos = [
  ['Açaí nativo', 'Origem rastreável, padrão premium e logística de escala.'],
  ['Cacau de sombra', 'Modelo agroflorestal com produtividade e conservação do dossel.'],
  ['Madeira certificada', 'Manejo de baixo impacto orientado por conformidade internacional.'],
  ['Óleos e resinas', 'Extração botânica para cosméticos, farmacêutica e especialidades.'],
];

const numeros = [
  ['10 mil', 'hectares de restauração planejada'],
  ['100%', 'sistemas nativos e certificados'],
  ['500+', 'famílias beneficiadas'],
  ['3,5x', 'potencial de valorização da terra'],
];

export default function App() {
  return (
    <div className="site">
      <a className="skip" href="#conteudo">Pular para conteúdo</a>

      <header className="topbar" aria-label="Cabeçalho">
        <div className="frame topbar-inner">
          <a className="logo" href="#topo">Aliança Verde Amazônia</a>
          <nav aria-label="Navegação principal">
            <ul className="menu">
              {links.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="chip" href="#contato">Fale com a AVA</a>
        </div>
      </header>

      <section className="hero" id="topo">
        <div className="frame hero-grid" id="projeto">
          <div>
            <p className="kicker">Restauração com retorno econômico</p>
            <h1>Floresta em pé como infraestrutura produtiva do século XXI.</h1>
            <p className="lead">
              Projeto de 10.000 hectares no Acre unindo restauração florestal,
              bioeconomia e governança para criar valor permanente no território.
            </p>
            <div className="hero-actions">
              <a className="btn solid" href="#contato">Conversar com a equipe</a>
              <a className="btn line" href="#modelo">Ver o modelo</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Pilares">
            <h2>Pilares do projeto</h2>
            <ul>
              <li><ShieldCheck size={16} aria-hidden="true" /> Governança institucional robusta</li>
              <li><TrendingUp size={16} aria-hidden="true" /> Bioeconomia com valor agregado local</li>
              <li><Handshake size={16} aria-hidden="true" /> Parceria com produtores e comunidades</li>
            </ul>
          </aside>
        </div>
      </section>

      <main id="conteudo">
        <section className="frame manifesto" aria-labelledby="manifesto-title">
          <div className="manifesto-mark">AVA</div>
          <div>
            <p className="kicker">Manifesto</p>
            <h2 id="manifesto-title">A floresta em pé é o ativo mais estratégico deste século.</h2>
            <p>
              A Aliança Verde Amazônia parte de uma premissa objetiva: regeneração não é custo,
              é investimento. Transformamos áreas degradadas em sistemas de alta performance,
              onde biodiversidade e renda avançam juntas.
            </p>
          </div>
        </section>

        <section className="frame modelo" id="modelo" aria-labelledby="modelo-title">
          <p className="kicker">Modelo operacional</p>
          <h2 id="modelo-title">Engenharia de regeneração em quatro etapas</h2>
          <ol className="timeline">
            {fases.map((fase) => {
              const Icon = fase.icon;
              return (
                <li key={fase.titulo}>
                  <div className="step">{fase.etapa}</div>
                  <article>
                    <h3><Icon size={18} aria-hidden="true" /> {fase.titulo}</h3>
                    <p>{fase.texto}</p>
                  </article>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="frame split" id="parcerias" aria-labelledby="parcerias-title">
          <div>
            <p className="kicker">Parcerias</p>
            <h2 id="parcerias-title">Capital, execução e território no mesmo alinhamento.</h2>
          </div>
          <div className="notes">
            <p>Produtor entra com a terra; AVA entra com capital, técnica e gestão.</p>
            <p>Comunidades locais participam da evolução do projeto no longo prazo.</p>
            <p>Conversão para agrofloresta eleva produtividade e valor patrimonial.</p>
          </div>
        </section>

        <section className="frame portfolio" aria-labelledby="portfolio-title">
          <div className="title-line">
            <div>
              <p className="kicker">Portfólio bioeconômico</p>
              <h2 id="portfolio-title">Produtos de uma floresta viva</h2>
            </div>
            <a href="#contato">Especificações técnicas <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
          <div className="product-list">
            {produtos.map(([titulo, texto]) => (
              <article key={titulo}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="frame split governanca" id="governanca" aria-labelledby="gov-title">
          <div>
            <p className="kicker">Governança</p>
            <h2 id="gov-title">Rigor institucional e segurança jurídica.</h2>
            <p>
              Compliance, auditoria externa e rastreabilidade de ponta a ponta da cadeia produtiva.
            </p>
          </div>
          <ul>
            <li><ShieldCheck size={16} aria-hidden="true" /> FSC - manejo florestal responsável</li>
            <li><ShieldCheck size={16} aria-hidden="true" /> Verra VCS + CCB - padrão internacional de carbono</li>
            <li><ShieldCheck size={16} aria-hidden="true" /> SIF - qualidade e conformidade agroindustrial</li>
          </ul>
        </section>

        <section className="frame impacto" id="impacto" aria-labelledby="impacto-title">
          <p className="kicker">Impacto</p>
          <h2 id="impacto-title">Escala com retorno social, ambiental e econômico</h2>
          <div className="metrics">
            {numeros.map(([valor, legenda]) => (
              <article key={legenda}>
                <strong>{valor}</strong>
                <p>{legenda}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="frame cta" id="contato" aria-labelledby="cta-title">
          <h2 id="cta-title">Acre como plataforma de bioeconomia de escala.</h2>
          <p>Rio Branco concentra biodiversidade, logística e capacidade de integração com cadeias globais.</p>
          <div>
            <a className="btn solid" href="#topo">Iniciar conversa</a>
            <a className="btn line" href="#parcerias">Tornar-se parceiro</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="frame footer-grid">
          <div>
            <p className="logo">Aliança Verde Amazônia</p>
            <p>Transformando capital natural em desenvolvimento econômico com restauração de escala.</p>
          </div>
          <div>
            <h3>Escritórios</h3>
            <p><MapPin size={14} aria-hidden="true" /> Rio Branco, Acre - BR</p>
            <p><Building2 size={14} aria-hidden="true" /> São Paulo, SP - BR</p>
          </div>
        </div>
        <div className="frame footer-base">
          <small>© 2026 Aliança Verde Amazônia. Todos os direitos reservados.</small>
        </div>
      </footer>
    </div>
  );
}
