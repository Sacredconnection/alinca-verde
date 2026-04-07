import {ArrowRight, CheckCircle2, CircleHelp, Leaf, ShieldCheck, Sprout, TrendingUp} from 'lucide-react';

const navLinks = [
  {label: 'Modelo', href: '#modelo'},
  {label: 'Resultados', href: '#resultados'},
  {label: 'Para quem', href: '#publico'},
  {label: 'FAQ', href: '#faq'},
];

const beneficios = [
  {
    titulo: 'Receita recorrente com floresta em pe',
    texto: 'Integramos producao, processamento e ativos ambientais para gerar fluxo de caixa de longo prazo.',
    icon: TrendingUp,
  },
  {
    titulo: 'Governanca pronta para due diligence',
    texto: 'Operacao com rastreabilidade, metricas de impacto e conformidade para parceiros institucionais.',
    icon: ShieldCheck,
  },
  {
    titulo: 'Execucao local de ponta a ponta',
    texto: 'Equipe tecnica em campo no Acre com monitoramento continuo e coordenacao operacional centralizada.',
    icon: Sprout,
  },
];

const etapas = [
  {
    passo: '01',
    titulo: 'Diagnostico e desenho tecnico',
    texto: 'Levantamento agronomico, mapeamento de risco e plano de implantacao por area.',
  },
  {
    passo: '02',
    titulo: 'Implantacao produtiva regenerativa',
    texto: 'Sistemas agroflorestais combinando especies nativas e cadeias bioeconomicas de alta demanda.',
  },
  {
    passo: '03',
    titulo: 'Monetizacao e escala',
    texto: 'Comercializacao de produtos e creditos ambientais com governanca para expansao regional.',
  },
];

const provas = [
  ['10.000 ha', 'em estruturacao para restauracao produtiva'],
  ['500+ familias', 'envolvidas no territorio ao longo da cadeia'],
  ['100% rastreavel', 'da origem ao ativo comercializado'],
  ['3,5x potencial', 'de valorizacao patrimonial da terra'],
];

const perguntas = [
  {
    pergunta: 'Qual perfil de parceiro faz sentido para a AVA?',
    resposta: 'Estruturamos modelos para investidores, empresas compradoras de creditos e produtores com area disponivel.',
  },
  {
    pergunta: 'Quando o projeto comeca a gerar retorno?',
    resposta: 'As primeiras receitas vem da cadeia bioeconomica e o retorno acelera com o amadurecimento do portfolio de ativos ambientais.',
  },
  {
    pergunta: 'Como a governanca e garantida?',
    resposta: 'Operamos com monitoramento continuo, indicadores publicos de desempenho e auditorias externas por padrao.',
  },
];

export default function App() {
  return (
    <div className="site">
      <a className="skip" href="#conteudo">Pular para conteudo</a>

      <header className="topbar">
        <div className="frame topbar-inner">
          <a className="brand" href="#topo">Alianca Verde Amazonia</a>
          <nav aria-label="Navegacao principal">
            <ul className="menu">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn mini" href="#contato">Falar com especialista</a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="topo">
          <div className="frame hero-wrap">
            <p className="eyebrow"></p>
            <h1>Transforme area degradada em um ativo regenerativo com retorno economico.</h1>
            <p className="lead">
              A AVA estrutura projetos de restauracao produtiva no Acre com execucao local,
              governanca institucional e comercializacao em cadeias de alto valor.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contato">Quero uma proposta</a>
              <a className="btn ghost" href="#modelo">Como funciona <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <ul className="trust-badges" aria-label="Credenciais">
              <li><CheckCircle2 size={16} aria-hidden="true" /> Due diligence simplificada</li>
              <li><Leaf size={16} aria-hidden="true" /> Modelo com impacto ambiental mensuravel</li>
              <li><ShieldCheck size={16} aria-hidden="true" /> Governanca e rastreabilidade integradas</li>
            </ul>
          </div>
        </section>

        <section className="frame section" id="resultados" aria-labelledby="resultado-title">
          <p className="section-tag">RESULTADOS ESPERADOS</p>
          <h2 id="resultado-title">Uma proposta de valor construida para escalar.</h2>
          <div className="proof-grid">
            {provas.map(([valor, legenda]) => (
              <article key={legenda}>
                <strong>{valor}</strong>
                <p>{legenda}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="frame section" id="modelo" aria-labelledby="modelo-title">
          <p className="section-tag">MODELO OPERACIONAL</p>
          <h2 id="modelo-title">Do desenho tecnico a monetizacao em tres etapas.</h2>
          <div className="steps-grid">
            {etapas.map((etapa) => (
              <article key={etapa.titulo}>
                <span>{etapa.passo}</span>
                <h3>{etapa.titulo}</h3>
                <p>{etapa.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="frame section" id="publico" aria-labelledby="publico-title">
          <p className="section-tag">PARA QUEM É</p>
          <h2 id="publico-title">Feito para quem busca impacto com retorno e seguranca de execucao.</h2>
          <div className="benefits-grid">
            {beneficios.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.titulo}>
                  <Icon size={19} aria-hidden="true" />
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="frame section faq" id="faq" aria-labelledby="faq-title">
          <p className="section-tag">DUVIDAS FREQUENTES</p>
          <h2 id="faq-title">Perguntas comuns antes de iniciar.</h2>
          <div className="faq-list">
            {perguntas.map((item) => (
              <details key={item.pergunta}>
                <summary><CircleHelp size={16} aria-hidden="true" /> {item.pergunta}</summary>
                <p>{item.resposta}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="frame cta" id="contato" aria-labelledby="cta-title">
          <p className="section-tag">PROXIMO PASSO</p>
          <h2 id="cta-title">Receba um plano inicial para seu perfil em ate 48 horas uteis.</h2>
          <p>Compartilhe seus objetivos e retornamos com escopo, cronograma e formato de parceria recomendado.</p>
          <div className="cta-actions">
            <a className="btn primary" href="#topo">Iniciar agora</a>
            <a className="btn ghost" href="#modelo">Ver metodologia</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="frame footer-inner">
          <p className="brand">Alianca Verde Amazonia</p>
          <small>© 2026 - Projeto de restauracao produtiva com foco em bioeconomia de escala.</small>
        </div>
      </footer>
    </div>
  );
}
