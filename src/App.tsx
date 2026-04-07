import {ArrowRight, CheckCircle2, CircleHelp, Leaf, ShieldCheck, Sprout, TrendingUp} from 'lucide-react';

const navLinks = [
  {label: 'Modelo', href: '#modelo'},
  {label: 'Resultados', href: '#resultados'},
  {label: 'Para quem', href: '#publico'},
  {label: 'FAQ', href: '#faq'},
];

const beneficios = [
  {
    titulo: 'Receita recorrente com floresta em pé',
    texto: 'Integramos produção, processamento e ativos ambientais para gerar fluxo de caixa de longo prazo.',
    icon: TrendingUp,
  },
  {
    titulo: 'Governança pronta para due diligence',
    texto: 'Operação com rastreabilidade, métricas de impacto e conformidade para parceiros institucionais.',
    icon: ShieldCheck,
  },
  {
    titulo: 'Execução local de ponta a ponta',
    texto: 'Equipe técnica em campo no Acre com monitoramento contínuo e coordenação operacional centralizada.',
    icon: Sprout,
  },
];

const etapas = [
  {
    passo: '01',
    titulo: 'Diagnóstico e desenho técnico',
    texto: 'Levantamento agronômico, mapeamento de risco e plano de implantação por área.',
  },
  {
    passo: '02',
    titulo: 'Implantação produtiva regenerativa',
    texto: 'Sistemas agroflorestais combinando espécies nativas e cadeias bioeconômicas de alta demanda.',
  },
  {
    passo: '03',
    titulo: 'Monetização e escala',
    texto: 'Comercialização de produtos e créditos ambientais com governança para expansão regional.',
  },
];

const provas = [
  ['10.000 ha', 'em estruturação para restauração produtiva'],
  ['500+ famílias', 'envolvidas no território ao longo da cadeia'],
  ['100% rastreável', 'da origem ao ativo comercializado'],
  ['3,5x potencial', 'de valorização patrimonial da terra'],
];

const perguntas = [
  {
    pergunta: 'Qual perfil de parceiro faz sentido para a AVA?',
    resposta: 'Estruturamos modelos para investidores, empresas compradoras de créditos e produtores com área disponível.',
  },
  {
    pergunta: 'Quando o projeto começa a gerar retorno?',
    resposta: 'As primeiras receitas vêm da cadeia bioeconômica e o retorno acelera com o amadurecimento do portfólio de ativos ambientais.',
  },
  {
    pergunta: 'Como a governança é garantida?',
    resposta: 'Operamos com monitoramento contínuo, indicadores públicos de desempenho e auditorias externas por padrão.',
  },
];

export default function App() {
  return (
    <div className="site">
      <a className="skip" href="#conteudo">Pular para conteúdo</a>

      <header className="topbar">
        <div className="frame topbar-inner">
          <a className="brand" href="#topo">Aliança Verde Amazônia</a>
          <nav aria-label="Navegação principal">
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
            <h1>Transforme área degradada em floresta produtiva e ativo regenerativo com retorno econômico.</h1>
            <p className="lead">
              A AVA estrutura projetos de restauração produtiva no Acre com execução local,
              governança institucional e comercialização em cadeias de alto valor.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#contato">Quero uma proposta</a>
              <a className="btn ghost" href="#modelo">Como funciona <ArrowRight size={16} aria-hidden="true" /></a>
            </div>
            <ul className="trust-badges" aria-label="Credenciais">
              <li><CheckCircle2 size={16} aria-hidden="true" /> Due diligence simplificada</li>
              <li><Leaf size={16} aria-hidden="true" /> Modelo com impacto ambiental mensurável</li>
              <li><ShieldCheck size={16} aria-hidden="true" /> Governança e rastreabilidade integradas</li>
            </ul>
          </div>
        </section>

        <section className="frame section" id="resultados" aria-labelledby="resultado-title">
          <p className="section-tag">RESULTADOS ESPERADOS</p>
          <h2 id="resultado-title">Uma proposta de valor construída para escalar.</h2>
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
          <h2 id="modelo-title">Do desenho técnico à monetização em três etapas.</h2>
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
          <h2 id="publico-title">Feito para quem busca impacto com retorno e segurança de execução.</h2>
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
          <p className="section-tag">DÚVIDAS FREQUENTES</p>
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
          <p className="section-tag">PRÓXIMO PASSO</p>
          <h2 id="cta-title">Receba um plano inicial para seu perfil em até 48 horas úteis.</h2>
          <p>Compartilhe seus objetivos e retornamos com escopo, cronograma e formato de parceria recomendado.</p>
          <div className="cta-actions">
            <a className="btn primary" href="#topo">Iniciar agora</a>
            <a className="btn ghost" href="#modelo">Ver metodologia</a>
          </div>
        </section>  
      </main>

      <footer className="footer">
        <div className="frame footer-inner">
          <p className="brand">Aliança Verde Amazônia</p>
          <small>© 2026 - Projeto de restauração produtiva com foco em bioeconomia de escala.</small>
        </div>
      </footer>
    </div>
  );
}