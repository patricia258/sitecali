import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUp, ArrowUpRight, Check, ChevronDown, Instagram, Linkedin, Mail, Menu, X } from 'lucide-react';

const whatsapp = 'https://wa.me/5541987791933?text=';
const talk = (subject = 'conversar sobre a minha empresa') => `${whatsapp}${encodeURIComponent(`Olá, Pati! Vim pelo site da CALI e gostaria de ${subject}.`)}`;
const images = {
  hero: '/images/projetos.jpg',
  culture: '/images/cultura-hero.jpg',
  leadership: '/images/treinamentos-hero.jpg',
  founder: '/images/patricia-cali-original.jpg',
};

type Solution = { id: string; title: string; signal: string; action: string; result: string; examples: string[] };
const projects: Solution[] = [
  { id: 'diagnostico', title: 'Diagnóstico Executivo de People', signal: 'Os problemas de pessoas aparecem no resultado, mas ainda não está claro onde agir primeiro.', action: 'Leitura da estrutura, da liderança, dos processos e dos indicadores para separar sintomas de causas.', result: 'Uma visão de prioridades para decidir o que corrigir, em qual ordem e com qual esforço.', examples: ['Mapa dos pontos críticos', 'Prioridades e recomendações', 'Devolutiva para a liderança'] },
  { id: 'cultura', title: 'Projeto de Cultura e Direção', signal: 'A empresa cresceu e cada liderança passou a decidir e conduzir pessoas de um jeito.', action: 'Alinhamento dos princípios, comportamentos e rituais que precisam aparecer nas decisões do dia a dia.', result: 'Mais coerência entre o que a empresa diz, o que a liderança pratica e o que o time vive.', examples: ['Leitura da cultura atual', 'Direcionadores de cultura', 'Plano de ativação com líderes'] },
  { id: 'shadowing', title: 'Shadowing de Liderança', signal: 'A liderança quer entender o efeito real da própria atuação sobre as pessoas e as decisões.', action: 'Observação estruturada de situações de trabalho com devolutiva sobre comunicação, postura e decisão.', result: 'Pontos de melhoria concretos para a liderança praticar.', examples: ['Observação em contexto', 'Devolutiva técnica', 'Plano de desenvolvimento'] },
  { id: 'treinamentos', title: 'Treinamentos e Palestras', signal: 'Um tema importante precisa chegar às pessoas de forma clara e útil.', action: 'Conteúdo desenhado para o público, a situação e o objetivo da empresa.', result: 'Aprendizado com aplicação concreta, adequado à demanda do negócio.', examples: ['Liderança e conversas', 'Cultura e comportamento', 'Temas de gestão de pessoas'] },
  { id: 'marca', title: 'Marca Empregadora', signal: 'A empresa não consegue atrair ou manter os profissionais de que precisa.', action: 'Leitura da percepção interna e externa e definição de uma proposta de valor para as pessoas.', result: 'Uma mensagem empregadora coerente com a experiência de quem trabalha na empresa.', examples: ['Diagnóstico de percepção', 'Proposta de valor ao colaborador', 'Plano de ativação'] },
  { id: 'personalizada', title: 'Solução Personalizada', signal: 'Seu desafio de pessoas não cabe em uma oferta pronta.', action: 'Entendemos o problema, definimos o objetivo e desenhamos um escopo específico.', result: 'Uma proposta com entregas e responsabilidades adequadas ao cenário.', examples: ['Conversa de contexto', 'Escopo sob medida', 'Proposta de atuação'] },
  { id: 'mentoria', title: 'Mentoria para Profissionais de RH', signal: 'O RH resolve demandas o dia inteiro, mas ainda tem pouca influência nas decisões do negócio.', action: 'Discussão de casos reais, orientação técnica e desenvolvimento da leitura estratégica.', result: 'Mais critério, repertório e segurança para atuar ao lado da liderança.', examples: ['Casos do contexto profissional', 'Direção para decisões', 'Plano de evolução'] },
];

function ContactButton({ children = 'Fale com a Pati', subject, light = false }: { children?: React.ReactNode; subject?: string; light?: boolean }) {
  return <a className={`button ${light ? 'button-light' : 'button-primary'}`} href={talk(subject)} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => { const update = () => setScrolled(window.scrollY > 40); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <div className="nav-shell">
      <Link to="/" className="brand" aria-label="CALI RH, ir para a página inicial"><img src="/assets/cali-logo-light.svg" alt="CALI RH" /></Link>
      <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Menu principal">
        <NavLink to="/" end>Início</NavLink><NavLink to="/assessoria">Assessoria mensal</NavLink><NavLink to="/projetos">Projetos e soluções</NavLink><NavLink to="/sobre">A CALI</NavLink>
        <div className="mobile-utility"><a href="https://portal.calirh.com" target="_blank" rel="noopener noreferrer">Portal CALI <ArrowUpRight size={16}/></a><a href="https://app.calirh.com" target="_blank" rel="noopener noreferrer">CALI Workspace <ArrowUpRight size={16}/></a><div className="mobile-social"><a href="https://www.instagram.com/calirh_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={24}/></a><a href="https://www.linkedin.com/in/patriciaazumi/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={24}/></a><a href="mailto:patricia@calirh.com" aria-label="E-mail"><Mail size={24}/></a></div></div>
        <a className="mobile-contact" href={talk()} target="_blank" rel="noopener noreferrer">Fale com a Pati</a>
      </nav>
      <div className="nav-utilities"><a href="https://portal.calirh.com" target="_blank" rel="noopener noreferrer">Portal CALI</a><a href="https://app.calirh.com" target="_blank" rel="noopener noreferrer">Workspace</a><span className="nav-social"><a href="https://www.instagram.com/calirh_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={21}/></a><a href="https://www.linkedin.com/in/patriciaazumi/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={21}/></a><a href="mailto:patricia@calirh.com" aria-label="E-mail"><Mail size={21}/></a></span></div>
      <a className="nav-contact" href={talk()} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
function Footer() {
  return <footer className="site-footer" id="contato"><div className="container footer-top"><div><span className="eyebrow gold">PRÓXIMO PASSO</span><h2>O que sua empresa precisa resolver agora?</h2><p>Conte o cenário. A conversa começa pelo problema, antes de escolher uma solução.</p><ContactButton light>Fale comigo</ContactButton></div><img src="/assets/cali-lime-mark.svg" alt="" className="footer-mark" /></div><div className="container footer-bottom"><Link to="/"><img src="/assets/cali-logo-light.svg" alt="CALI RH" /></Link><div><Link to="/assessoria">Assessoria mensal</Link><Link to="/projetos">Projetos</Link><Link to="/sobre">A CALI</Link><a href="https://portal.calirh.com" target="_blank" rel="noopener noreferrer">Portal de propostas</a><a href="https://app.calirh.com" target="_blank" rel="noopener noreferrer">Acesso ao app</a><a href="/privacidade.html">Privacidade</a></div><div className="social"><a href="https://www.instagram.com/calirh_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={24}/></a><a href="https://www.linkedin.com/in/patriciaazumi/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={24}/></a><a href="mailto:patricia@calirh.com" aria-label="E-mail"><Mail size={24}/></a></div></div><div className="container copyright">© {new Date().getFullYear()} CALI RH · HRB — RH para o Negócio · Todos os direitos reservados.</div></footer>;
}
function Shell({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => { if (window.location.hash) { requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView()); } else { window.scrollTo(0, 0); } }, [pathname]);
  useEffect(() => {
    const targets = document.querySelectorAll('.page-hero-grid > *, .section-head, .section .split > div, .section .split > button, .image-card, .steps article, .plan, .project-card, .experience-grid article, .map-preview, .faq details, .recurring-aside, .feedback-heading, .feedback-card, .values-heading, .values-card');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target); } }), { threshold: .08, rootMargin: '0px 0px -35px 0px' });
    targets.forEach((target, index) => { target.classList.add('scroll-reveal'); if (target instanceof HTMLElement) { const valueIndex = Array.from(target.parentElement?.children ?? []).indexOf(target); target.style.setProperty('--reveal-delay', target.classList.contains('values-card') ? `${valueIndex * 140}ms` : `${Math.min(index % 3, 2) * 90}ms`); } observer.observe(target); });
    return () => observer.disconnect();
  }, [pathname]);
  return <><Header/><main id="conteudo" className="page-enter" key={pathname}>{children}</main><Footer/><BackToTop/><CookieNotice/><MapInvite/></>;
}
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const update = () => setVisible(window.scrollY > 500); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  return <button className={`back-to-top ${visible ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} aria-label="Voltar ao topo" tabIndex={visible ? 0 : -1}><ArrowUp size={20}/></button>;
}
function CookieNotice() {
  const [visible, setVisible] = useState(() => !window.localStorage.getItem('cali_privacy_notice_v1'));
  if (!visible) return null;
  return <div className="privacy-banner" role="region" aria-label="Aviso de privacidade"><div><strong>Privacidade, com clareza.</strong><p>Usamos recursos essenciais e métricas anônimas, sem cookies publicitários. Mapa e Portal pedem consentimento próprio.</p></div><div className="privacy-actions"><a href="/privacidade.html">Ler a política</a><button onClick={() => { window.localStorage.setItem('cali_privacy_notice_v1', 'accepted'); setVisible(false); }}>Entendi</button></div></div>;
}
function MapInvite() {
  const [open, setOpen] = useState(() => !window.sessionStorage.getItem('cali_mapa_popup_seen'));
  const dialog = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const close = () => { window.sessionStorage.setItem('cali_mapa_popup_seen', '1'); setOpen(false); previousFocus.current?.focus(); };
  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.querySelector<HTMLElement>('.map-invite-close')?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key !== 'Tab' || !dialog.current) return;
      const items = Array.from(dialog.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', onKey); };
  }, [open]);
  if (!open) return null;
  return <div className="modal-backdrop map-invite-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) close(); }}><div className="map-invite" role="dialog" aria-modal="true" aria-labelledby="map-invite-title" ref={dialog}><button className="map-invite-close" onClick={close} aria-label="Fechar convite"><X size={21}/></button><div className="map-invite-copy"><span className="eyebrow gold">MAPA DE PEOPLE · GRATUITO</span><h2 id="map-invite-title">Onde a gestão de pessoas pede atenção na sua empresa?</h2><p>Responda às perguntas e receba uma leitura do seu cenário, com riscos e prioridades para começar.</p><a className="button button-light" href="https://mapa.calirh.com/?utm_source=calirh.com&utm_medium=site&utm_campaign=mapa_gratuito&utm_content=popup" target="_blank" rel="noopener noreferrer" onClick={close}>Fazer o Mapa gratuitamente <ArrowUpRight size={18}/></a><button className="map-invite-later" onClick={close}>Agora não</button></div><div className="map-invite-visual"><img src="/images/mapa-de-people-mockup.png" alt="Exemplo visual das páginas do relatório Mapa de People da CALI"/></div></div></div>;
}
function SectionHead({ tag, title, copy }: { tag: string; title: string; copy?: string }) {
  return <div className="section-head"><span className="eyebrow">{tag}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
function CardLink({ to, number, title, copy, image }: { to: string; number: string; title: string; copy: string; image: string }) {
  return <Link to={to} className="image-card"><img src={image} alt="" loading="lazy"/><div className="image-card-content"><span>{number}</span><h3>{title}</h3><p>{copy}</p><span className="round-arrow" aria-hidden="true"><ArrowUpRight size={22}/></span></div></Link>;
}

const feedbacks = [
  { quote: 'Graças à Patrícia agora tenho um currículo alinhado com as tendências do mercado. Obrigado pelo ótimo serviço prestado!', name: 'Ana Luisa Santos', company: 'TS Assessoria' },
  { quote: 'A Patrícia me ajudou na reestruturação do currículo, muito atenciosa e prática, recomendo muito os seus serviços.', name: 'Cassia Prado', company: 'Prado Finanças' },
  { quote: 'Com uma liderança estratégica e assertiva, a Patrícia direciona suas equipes com maestria, parceria, com base em dados e visando resultados.', name: 'Claudia Cardoso', company: 'Mota Grupo' },
  { quote: 'Tive a oportunidade de conhecer o trabalho da Patrícia na reestruturação curricular. Que trabalho bacana. Recomendo demais.', name: 'Aliando Pedroso', company: 'Riachuelo' },
  { quote: 'Aprendi com a Patricia a dar o meu melhor, mesmo quando o meu melhor não for muito. Ela é boa ouvinte, paciente e cobra desempenho com humanidade.', name: 'Bruno Araujo', company: 'Kaz Distribuidora' },
  { quote: 'A Patrícia é uma excelente profissional, com boa capacidade analítica, foco em KPIs, operação e desenvolvimento de pessoas.', name: 'Leandra Alves', company: 'Ellos Contabilidades' },
];

function FeedbackSection() {
  const loop = [...feedbacks, ...feedbacks];

  return <section className="section feedback-section" id="feedbacks">
    <div className="container feedback-heading">
      <div>
        <span className="eyebrow">FEEDBACKS</span>
        <h2>O que meus <em>clientes</em> dizem.</h2>
        <div className="feedback-intro">
          <p className="feedback-quote">“Meu propósito é sempre entregar <strong>acima do esperado</strong>. Quando isso é alcançado, fica a sensação de <strong>dever cumprido</strong>.”</p>
          <span>— Patrícia Lima</span>
        </div>
        <p className="feedback-context">Algumas pessoas que já trabalharam comigo em diferentes momentos da minha trajetória.</p>
      </div>
    </div>

    <div className="feedback-marquee" aria-label="Feedbacks de clientes">
      <div className="feedback-marquee-track">
        {loop.map((item, index) => <blockquote className="feedback-card" key={`${item.name}-${index}`} aria-hidden={index >= feedbacks.length}>
          <span className="feedback-mark" aria-hidden="true">“</span>
          <p>{item.quote}</p>
          <footer><strong>{item.name}</strong><span>{item.company}</span></footer>
        </blockquote>)}
      </div>
    </div>
  </section>;
}

const clientLogos = [
  { src: '/assets/client-logos/kietec.webp', alt: 'Kie-Tec' },
  { src: '/assets/client-logos/kaz.webp', alt: 'Kaz' },
  { src: '/assets/client-logos/mota-engil.webp', alt: 'Mota-Engil' },
  { src: '/assets/client-logos/ts.webp', alt: 'TS' },
  { src: '/assets/client-logos/ken-taki.webp', alt: 'Ken Taki' },
  { src: '/assets/client-logos/inluz.webp', alt: 'Inluz Engenharia' },
];

function ClientLogoRail() {
  const loop = [...clientLogos, ...clientLogos];
  return <div className="client-logo-rail" aria-label="Empresas que já fizeram parte da trajetória da CALI">
    <div className="client-logo-viewport">
      <div className="client-logo-track">
        {loop.map((logo, index) => (
          <div className="client-logo-item" key={`${logo.alt}-${index}`} aria-hidden={index >= clientLogos.length}>
            <img src={logo.src} alt={index < clientLogos.length ? logo.alt : ''} loading="eager" />
          </div>
        ))}
      </div>
    </div>
  </div>;
}

function Home() {
  return <>
    <section className="hero"><div className="hero-glow glow-one"/><div className="hero-glow glow-two"/><div className="container hero-content"><span className="pill"><span/>HRB · RH PARA O NEGÓCIO</span><h1>RH sênior para a sua empresa, <em>na medida do que ela precisa.</em></h1><p>Assessoria mensal, implantação com o seu RH ou projetos para resolver desafios específicos de pessoas e liderança.</p><div className="hero-actions"><Link className="button button-primary" to="/assessoria">Conheça a assessoria <ArrowRight size={18}/></Link><Link className="text-link light" to="/projetos">Explore os projetos <ArrowUpRight size={17}/></Link></div></div><ClientLogoRail/></section>
    <section className="intro section"><div className="container split"><div><span className="eyebrow">A QUESTÃO</span><h2>O que está travando a <em>gestão de pessoas</em> na sua empresa?</h2></div><div className="body-copy"><p>Gestores decidem de formas diferentes. O RH passa o dia apagando urgências. A empresa sente os efeitos da rotatividade, dos papéis mal definidos ou de uma liderança sem apoio.</p><p>Eu ajudo a identificar o que precisa mudar, desenho o trabalho com a empresa e acompanho as decisões que dependem da liderança.</p><Link to="/sobre" className="text-link">Conheça a CALI <ArrowRight size={17}/></Link></div></div></section>
    <section className="section pathways" id="servicos"><div className="container"><SectionHead tag="COMO PODEMOS ATUAR" title="Escolha como a CALI entra na sua empresa." copy="A necessidade pode pedir direção contínua, implantação com o RH interno ou um projeto com objetivo definido."/><div className="pathway-grid three"><CardLink to="/assessoria" number="01 · ATUAÇÃO RECORRENTE" title="Assessoria Estratégica Mensal" copy="Direção sênior de RH ao lado da liderança para acompanhar decisões e prioridades." image={images.leadership}/><CardLink to="/assessoria#build" number="02 · IMPLANTAÇÃO ASSISTIDA" title="CALI Build" copy="Desenhamos o caminho com a empresa, orientamos e desenvolvemos o RH interno durante a implantação." image={images.culture}/><CardLink to="/projetos" number="03 · SOLUÇÕES POR PROJETO" title="Projetos especializados" copy="Um problema específico tratado com objetivo, escopo e entregas definidos." image={images.hero}/></div></div></section>
    <section className="section dark-band"><div className="container"><SectionHead tag="NA PRÁTICA" title="Do primeiro diagnóstico ao trabalho combinado."/><div className="steps"><article><b>01</b><h3>Ouvir e examinar</h3><p>Você traz a situação. Eu olho os fatos, as pessoas envolvidas e as decisões que já foram tomadas.</p></article><article><b>02</b><h3>Definir o escopo</h3><p>Combinamos o que será feito, quem participa, as entregas e o ritmo de acompanhamento.</p></article><article><b>03</b><h3>Trabalhar junto</h3><p>Conduzo a parte da CALI e mostro à liderança o que avançou e o que ainda depende dela.</p></article></div></div></section>
    <section className="section founder-preview"><div className="container split founder-preview-grid"><div className="founder-image founder-image-editorial"><img src="/images/patricia-escritorio.jpg" alt="Patrícia Lima, fundadora da CALI RH" loading="lazy"/></div><div><span className="eyebrow">QUEM CONDUZ</span><h2>Você fala <em>direto comigo,</em> Patrícia.</h2><p>Há mais de 15 anos construo áreas de RH, desenvolvo líderes e apoio empresas em decisões de pessoas. Na CALI, participo da leitura do problema e da condução do trabalho.</p><Link to="/sobre" className="text-link">Conheça minha trajetória <ArrowRight size={17}/></Link></div></div></section>
    <FeedbackSection/>
    <section className="section map-cta"><div className="container map-inner"><div><span className="eyebrow">MAPA DE PEOPLE · GRATUITO</span><h2>Descubra onde o seu RH <em>precisa de atenção.</em></h2><p>Responda às perguntas sobre a gestão de pessoas da sua empresa e receba um relatório com os riscos identificados e as prioridades recomendadas.</p><a className="button button-primary" href="https://mapa.calirh.com" target="_blank" rel="noopener noreferrer">Fazer o Mapa de People <ArrowUpRight size={18}/></a></div><div className="map-preview" aria-label="O que você recebe"><span>NO SEU RELATÓRIO</span><ol><li>Leitura do cenário atual</li><li>Principais riscos de pessoas</li><li>Prioridades para começar</li></ol><img src="/assets/cali-lime-mark.svg" alt=""/></div></div></section>
  </>;
}
const plans = [
  { name: 'CALI Partner', duration: '8 meses', summary: 'Para empresas que precisam de direção estratégica recorrente e uma parceira experiente nas decisões de pessoas.', fit: 'Quando a liderança precisa organizar prioridades, ganhar critério e acompanhar a evolução sem estruturar uma diretoria interna de RH.', items: ['10 a 15 horas por mês e reunião executiva mensal', 'Direção estratégica e leitura de indicadores', 'Apoio a decisões críticas e um ajuste de processo por mês'] },
  { name: 'CALI Full', duration: '12 meses', summary: 'Para empresas que precisam de uma atuação mais ampla e continuada em várias frentes da gestão de pessoas.', fit: 'Quando os desafios se conectam e exigem mais profundidade na estrutura, na liderança, nos processos e no acompanhamento.', items: ['20 a 25 horas por mês e reuniões quinzenais', 'Uma visita presencial por mês', 'Maior disponibilidade e frentes de implantação previstas no escopo'] },
];
function Advisory() {
  return <><section className="page-hero"><div className="container page-hero-grid"><div><span className="pill">SOLUÇÃO RECORRENTE</span><h1>RH sênior para apoiar <em>as decisões</em> da sua empresa.</h1><p>Na assessoria mensal, a CALI acompanha a liderança e as prioridades de pessoas. No CALI Build, orienta a implantação feita pelo RH interno.</p><ContactButton subject="conversar sobre a Assessoria Estratégica Mensal">Conversar sobre assessoria</ContactButton></div><img src={images.leadership} alt="Liderança reunida para discutir decisões do negócio"/></div></section>
    <section className="section"><div className="container split"><div><span className="eyebrow">QUANDO FAZ SENTIDO</span><h2>O crescimento trouxe questões que já não se resolvem caso a caso.</h2></div><div className="body-copy"><p>Os gestores tomam decisões diferentes, o RH fica preso às urgências e a empresa não consegue acompanhar se as iniciativas estão resolvendo o problema.</p><p>A assessoria cria um espaço recorrente para ler o cenário, priorizar ações e apoiar a liderança nas decisões de pessoas. A atuação é definida conforme o porte, a maturidade e as necessidades do negócio.</p></div></div></section>
    <section className="section plans"><div className="container"><SectionHead tag="FORMATOS DE ASSESSORIA" title="Duas formas de caminhar junto." copy="Partner e Full são formatos de assessoria mensal. O escopo e a dedicação são combinados antes de começar."/><div className="plan-grid">{plans.map((plan, i) => <article className={`plan ${i ? 'featured' : ''}`} key={plan.name}><span className="eyebrow">{i ? 'ATUAÇÃO MAIS AMPLA' : 'DIREÇÃO RECORRENTE'}</span><h3>{plan.name}</h3><span className="duration">Prazo mínimo: {plan.duration}</span><p>{plan.summary}</p><div className="plan-divider"/><h4>É para o momento em que</h4><p>{plan.fit}</p><h4>Como conduzimos</h4><ul>{plan.items.map(item=><li key={item}><Check size={17}/>{item}</li>)}</ul><ContactButton subject={`conversar sobre o ${plan.name}`}>Conversar sobre {plan.name}</ContactButton></article>)}</div></div></section>
    <section className="section build-section" id="build"><div className="container"><SectionHead tag="IMPLANTAÇÃO ASSISTIDA" title="CALI Build: construímos junto com o seu RH." copy="Para empresas que querem implantar ou estruturar o RH com uma pessoa ou equipe interna responsável pela execução. Desenho a estrutura, organizo o projeto, oriento a prática e desenvolvo quem executa ao longo da implantação."/><div className="plan-grid"><article className="plan"><span className="eyebrow">ATÉ DUAS FRENTES PRIORITÁRIAS</span><h3>Build Essencial</h3><span className="duration">Prazo mínimo: 6 meses</span><p>Para implantar até duas frentes de RH com orientação técnica, execução interna e desenvolvimento do profissional responsável.</p><ul><li><Check size={17}/>Diagnóstico e arquitetura-alvo</li><li><Check size={17}/>Roadmap, método e referências</li><li><Check size={17}/>Orientação prática e revisão das entregas do RH interno</li></ul><ContactButton subject="conversar sobre o CALI Build Essencial">Conversar sobre o Build</ContactButton></article><article className="plan featured"><span className="eyebrow">FRENTES CONECTADAS</span><h3>Build Completo</h3><span className="duration">Prazo mínimo: 8 meses</span><p>Para estruturar frentes conectadas, com o RH interno executando e se desenvolvendo durante o projeto.</p><ul><li><Check size={17}/>Arquitetura e prioridades integradas</li><li><Check size={17}/>Acompanhamento técnico da execução</li><li><Check size={17}/>Revisão de entregas, correção de rota e desenvolvimento da pessoa de RH</li></ul><ContactButton subject="conversar sobre o CALI Build Completo">Conversar sobre o Build</ContactButton></article></div></div></section>
    <FAQ items={[["Preciso já ter uma equipe de RH?", "Não. A configuração do trabalho considera a estrutura existente. Se o RH interno vai executar uma implantação, o CALI Build pode fazer mais sentido."],["O que muda entre Partner e Full?", "A profundidade e a abrangência do trabalho são definidas na proposta, conforme o cenário. Os prazos mínimos são de 8 meses para Partner e 12 meses para Full."],["A CALI executa toda a rotina de departamento pessoal?", "O escopo da assessoria é estratégico e é definido em proposta. Demandas operacionais específicas precisam ser avaliadas na conversa inicial."]]}/>
  </>;
}
function FAQ({items}: {items: [string,string][]}) { return <section className="section faq"><div className="container split"><div><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Antes de começar, vale alinhar.</h2></div><div>{items.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={18}/></summary><p>{a}</p></details>)}</div></div></section>; }
function AdvisoryPreviewModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);
  return <div className="modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="advisory-modal" role="dialog" aria-modal="true" aria-labelledby="advisory-modal-title">
      <button className="modal-close" onClick={onClose} autoFocus aria-label="Fechar"><X size={22}/></button>
      <span className="eyebrow">ATUAÇÃO RECORRENTE</span>
      <h2 id="advisory-modal-title">Qual acompanhamento combina com a sua empresa?</h2>
      <p>Se o desafio exige continuidade, a CALI pode acompanhar a liderança ou orientar o RH interno durante a implantação.</p>
      <div className="modal-options"><div><b>CALI Partner</b><span>Direção sênior recorrente · 8 meses</span></div><div><b>CALI Full</b><span>Atuação mais próxima · 12 meses</span></div><div><b>CALI Build</b><span>Implantação com o RH interno · 6 ou 8 meses</span></div></div>
      <Link to="/assessoria" onClick={onClose} className="button button-primary">Entender os formatos <ArrowRight size={18}/></Link>
    </div>
  </div>;
}
function Projects() {
  const [showAdvisory, setShowAdvisory] = useState(false);
  return <><section className="page-hero projects-hero"><div className="container page-hero-grid"><div><span className="pill">PROJETOS E SOLUÇÕES</span><h1>Um desafio claro pede <em>uma resposta feita para ele.</em></h1><p>Projetos com objetivo definido para resolver questões de cultura, estrutura, liderança e gestão de pessoas. Veja em qual situação sua empresa se reconhece.</p><a className="button button-primary" href="#solucoes">Explore as soluções <ArrowRight size={18}/></a></div><img src={images.culture} alt="Pessoas discutindo a organização do trabalho"/></div></section>
    <section className="section project-list" id="solucoes"><div className="container"><SectionHead tag="ESCOLHA PELO PROBLEMA" title="O que precisa mudar?" copy="Cada projeto começa com a situação que a empresa precisa resolver. O formato e as entregas são definidos na proposta."/><div className="project-grid">{projects.map((p,i)=><article className="project-card" id={p.id} key={p.id}><div className="project-top"><span>{String(i+1).padStart(2,'0')}</span><h3>{p.title}</h3></div><div className="project-body"><div><b>Quando procurar</b><p>{p.signal}</p></div><div><b>O que fazemos</b><p>{p.action}</p></div><div><b>O que muda</b><p>{p.result}</p></div></div><div className="project-foot"><details><summary>Possíveis entregas <ChevronDown size={16}/></summary><ul>{p.examples.map(e=><li key={e}>{e}</li>)}</ul></details><a href={talk(`conversar sobre ${p.title}`)} target="_blank" rel="noopener noreferrer" aria-label={`Conversar sobre ${p.title}`}><ArrowUpRight size={21}/></a></div></article>)}</div></div></section>
    <section className="section recurring-cta"><div className="container split"><div><span className="eyebrow">ALÉM DO PROJETO</span><h2>Precisa de alguém acompanhando as <em>próximas decisões?</em></h2><p><strong>Partner e Full</strong> acompanham a liderança mês a mês. No <strong>CALI Build</strong>, construímos o plano com o seu RH e orientamos a implantação.</p></div><div className="recurring-aside"><img src="/assets/cali-lime-mark.svg" alt=""/><span>ASSESSORIA MENSAL · CALI BUILD</span><button className="button button-light" onClick={() => setShowAdvisory(true)}>Comparar as opções <ArrowRight size={18}/></button></div></div></section>
    {showAdvisory && <AdvisoryPreviewModal onClose={() => setShowAdvisory(false)}/>}
  </>;
}
function FounderPortrait() {
  return <div className="founder-portrait" aria-label="Patrícia Lima">
    <img src="/images/patricia-cali-original.jpg" alt="Patrícia Lima em retrato preto e branco" loading="eager"/>
  </div>;
}
function About() {
  return <><section className="page-hero about-hero"><div className="container page-hero-grid"><div><span className="pill">A CALI RH</span><h1>Sou Patrícia Lima. A CALI <em>é o meu jeito de fazer RH</em> para o negócio.</h1><p>Trabalho com empresas que precisam organizar o RH, desenvolver lideranças e tomar decisões de pessoas com critério.</p><ContactButton>Fale comigo</ContactButton></div><FounderPortrait/></div></section>
    <section className="section"><div className="container split"><div><span className="eyebrow">QUEM ESTÁ DO OUTRO LADO</span><h2>Minha trajetória começou <em>dentro das empresas.</em></h2></div><div className="body-copy"><p>Minha trajetória reúne mais de 15 anos de atuação em RH, da construção de áreas do zero à direção de equipes e decisões estratégicas. Trabalhei com empresas de diferentes portes e contextos, sempre conectando gestão de pessoas ao que o negócio precisa realizar.</p><p>Na CALI, participo diretamente da leitura, da direção e da condução do trabalho. O objetivo é ajudar a liderança a tomar decisões melhores e dar consistência ao que precisa avançar.</p></div></div></section>
    <section className="section values-band" aria-labelledby="values-title"><div className="container values-inner"><div className="values-heading"><span className="eyebrow gold">O QUE SUSTENTA A CALI</span><h2 id="values-title">Meus valores estão em <span>cada decisão.</span></h2><p>A CALI é enraizada na minha fé cristã. Amo Jesus e quero honrar, com o meu trabalho, o dom que Deus me deu. É dessa base que vem meu compromisso de servir com responsabilidade e resultado.</p></div><div className="values-grid" tabIndex={0} aria-label="Os cinco valores da CALI; deslize para ver todos">
      <article className="values-card"><span className="values-icon values-icon-1" aria-hidden="true"/><h3>Integridade</h3><p>Lido com dados sensíveis e decisões que podem mudar vidas. Por isso, digo a verdade com responsabilidade, protejo a confiança de quem me procura e respeito a cultura da empresa e a individualidade de cada pessoa.</p></article>
      <article className="values-card"><span className="values-icon values-icon-2" aria-hidden="true"/><h3>Propósito</h3><p>Deus me deu um dom para servir. Quero que o meu trabalho chegue aos céus e agrade a Ele. Isso me chama a usar o que sei para transformar, de forma concreta, a vida das pessoas e o caminho das empresas.</p></article>
      <article className="values-card"><span className="values-icon values-icon-3" aria-hidden="true"/><h3>Amor pelo que faço</h3><p>Eu amo o que faço e cuido de cada interação e entrega. Meu mínimo precisa carregar o meu máximo: preparo, atenção e compromisso. É assim que o amor pelo trabalho se torna qualidade perceptível para quem está comigo.</p></article>
      <article className="values-card"><span className="values-icon values-icon-4" aria-hidden="true"/><h3>Colaboração</h3><p>Nada importante é feito por uma pessoa só. Trabalho com a liderança e com as equipes, com papéis claros e responsabilidade compartilhada. Celebramos os bons resultados juntos e também assumimos o que precisa ser corrigido.</p></article>
      <article className="values-card"><span className="values-icon values-icon-5" aria-hidden="true"/><h3>Excelência técnica</h3><p>Estudo, método e profundidade sustentam minhas recomendações. Acompanho o que muda em gestão de pessoas e capital humano para entender a expectativa de cada cliente e entregar respostas à altura do seu contexto.</p></article>
    </div></div></section>
    <section className="section dark-band origin-band"><div className="container split"><div><span className="eyebrow gold">DE ONDE VEM O NOME</span><h2>A CALI carrega minha <em>história e minha fé.</em></h2></div><div className="body-copy"><p>O nome é uma homenagem à minha família e às minhas raízes em Belém do Pará. <strong>Dedicação, equilíbrio e propósito</strong> são os pilares que levo comigo.</p><p><strong>Deus está no centro de tudo o que faço.</strong> É por Ele que a CALI existe. Essa direção aparece na forma como escuto cada empresa, digo o que precisa ser dito e sustento o trabalho combinado.</p></div></div></section>
    <section className="section about-experience"><div className="container"><SectionHead tag="MINHA ATUAÇÃO" title="O que levo para dentro do projeto."/><div className="experience-grid"><article><span>01</span><h3>Estrutura de RH</h3><p>Desenho de áreas, papéis, processos e formas de acompanhar o trabalho.</p></article><article><span>02</span><h3>Liderança</h3><p>Desenvolvimento de gestores e apoio em decisões concretas sobre pessoas.</p></article><article><span>03</span><h3>Leitura do negócio</h3><p>Mais de 15 anos em contextos diferentes, conectando o que acontece com as equipes ao que a empresa precisa decidir.</p></article></div><Link to="/assessoria" className="text-link">Veja como podemos trabalhar <ArrowRight size={17}/></Link></div></section></>;
}
function NotFound() { return <section className="section not-found container"><span className="eyebrow">PÁGINA NÃO ENCONTRADA</span><h1>Vamos voltar ao caminho?</h1><Link to="/" className="button button-primary">Voltar ao início <ArrowRight size={18}/></Link></section>; }
export default function App() { return <Shell><Routes><Route path="/" element={<Home/>}/><Route path="/assessoria" element={<Advisory/>}/><Route path="/projetos" element={<Projects/>}/><Route path="/sobre" element={<About/>}/><Route path="*" element={<NotFound/>}/></Routes></Shell>; }
