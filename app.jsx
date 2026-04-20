const { useState, useEffect } = React;

// ============ NAV ============
function Nav() {
  return (
    <nav className="nav">
      <div className="page nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">A</span>
          <span>AMARANS<span className="brand-sub"> · 아마란스</span></span>
        </a>
        <div className="nav-links">
          <a href="#services">서비스</a>
          <a href="#process">업무 프로세스</a>
          <a href="#care">케어 서비스</a>
          <a href="#team">팀.아마란스</a>
          <a href="#archive">실적</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#contact" className="nav-cta">
          Start a project
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6h6m0 0L6 3m3 3L6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </a>
      </div>
    </nav>
  );
}

// ============ HERO ============
function Hero() {
  const [ts, setTs] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const kst = new Date(d.getTime() + (9*60 + d.getTimezoneOffset()) * 60000);
      setTs(kst.toISOString().slice(0,19).replace('T',' ') + ' KST');
    };
    tick(); const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero page" id="top">
      <div className="hero-symbol" aria-hidden="true">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          {Array.from({length: 12}).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const r = 32;
            const cx = 50 + Math.cos(angle) * r;
            const cy = 50 + Math.sin(angle) * r;
            const opacity = 0.25 + (i / 12) * 0.75;
            return <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor" opacity={opacity} />;
          })}
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </div>
      <div className="hero-eyebrow mono">AMARANS · 아마란스 — EST. 2019</div>
      <h1 className="hero-title hero-title-center">
        <span>Plan the Win,</span><br/>
        <span className="hi">Design the Proposal.</span>
      </h1>
      <p className="hero-sub hero-sub-center">
        아마란스(AMARANS)와 함께 공공·B2B 수주의 작동 원리를 설계하세요.<br/>
        RFP 해석부터 제안 설계, 수행 체계까지 — 결과로 증명되는 기획.
      </p>
      <div className="hero-ctas hero-ctas-center">
        <a href="#contact" className="btn btn-primary">
          프로젝트 시작하기
          <span className="arrow">→</span>
        </a>
        <a href="#archive" className="btn btn-ghost">수행 실적 보기</a>
      </div>
      <div className="hero-meta mono dim">{ts}  ·  2026 Q1 SLOTS 4 / 8 OPEN</div>

      <div className="hero-stats">
        <div className="hs-cell">
          <div className="hs-label">Win Rate</div>
          <div className="hs-num">72<sup>%</sup></div>
          <div className="hs-delta">2023–2025 누적 수주율</div>
        </div>
        <div className="hs-cell">
          <div className="hs-label">Projects</div>
          <div className="hs-num">140<sup>+</sup></div>
          <div className="hs-delta">공공·B2B 기획 프로젝트</div>
        </div>
        <div className="hs-cell">
          <div className="hs-label">Scale</div>
          <div className="hs-num">320<sup>억</sup></div>
          <div className="hs-delta">최대 단일 사업 규모</div>
        </div>
        <div className="hs-cell">
          <div className="hs-label">Clients</div>
          <div className="hs-num">48<sup>+</sup></div>
          <div className="hs-delta">정부·공공·민간 파트너</div>
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES ============
const SERVICES = [
  { n: '01', t: 'Proposal Strategy', d: 'RFP 해체부터 심사 포인트 설계까지. 평가자 관점에서 역설계하는 제안 전략.', tags: ['RFP Analysis','Win Theme','Scoring'], ico: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 3h12M2 8h8M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { n: '02', t: 'Public Sector Bids', d: '나라장터·국방·지자체 사업 특화. 기술점수를 극대화하는 구조화된 제안서 설계.', tags: ['조달청','방사청','지자체'], ico: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 6l5-3 5 3v7H3V6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
  { n: '03', t: 'Business Design', d: '신사업·ICT 기획. 기술·시장·운영 관점을 통합한 사업 설계와 재무 모델링.', tags: ['Roadmap','Finance','GTM'], ico: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 3v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
  { n: '04', t: 'Tech Advisory', d: 'AI·클라우드·데이터 인프라 자문. 기술 타당성과 사업성의 교차점을 찾는 설계.', tags: ['AI','Cloud','Data'], ico: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" stroke="currentColor" strokeWidth="1.5"/><rect x="9" y="9" width="5" height="5" stroke="currentColor" strokeWidth="1.5"/><path d="M7 4h4M4 7v4" stroke="currentColor" strokeWidth="1.5"/></svg> },
  { n: '05', t: 'Execution Support', d: '수주 이후 착수·PMO까지. 제안서를 실행 가능한 계약·운영 체계로 연결합니다.', tags: ['PMO','Kickoff','Delivery'], ico: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { n: '06', t: 'Research & Insight', d: '시장·정책·경쟁 리서치. 이기는 각도를 발굴하는 근거 기반 인사이트.', tags: ['Policy','Market','Benchmark'], ico: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
];

function Services() {
  return (
    <section className="sec" id="services">
      <div className="page">
        <div className="sec-head">
          <div className="sec-head-left">
            <div className="sec-kicker mono"><span className="dot"></span>SERVICES / 01</div>
            <h2 className="sec-title">제안서가 아니라,<br/><span className="low">수주 결과를 만듭니다.</span></h2>
          </div>
          <p className="sec-desc">여섯 개의 핵심 영역에서 기획·실행·증명이 한 흐름으로 연결됩니다. 필요한 조합만 선택해 사용하실 수 있습니다.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map(s => (
            <div className="svc" key={s.n}>
              <div className="svc-idx">{s.n} / 06</div>
              <div className="svc-ico">{s.ico}</div>
              <h3 className="svc-title">{s.t}</h3>
              <p className="svc-desc">{s.d}</p>
              <div className="svc-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROCESS ============
const PROCESS = [
  { t: '분석', d: 'RFP·발주기관·경쟁구도 해체', long: '발주기관의 정책 맥락과 평가자 구성, 경쟁사의 제안 패턴까지 구조적으로 해체합니다.', duration: '1–2주', output: 'RFP 분석서 · 경쟁사 벤치마크' },
  { t: '설계', d: 'Win Theme · 점수 구조 역설계', long: '평가표를 역산해 점수가 움직이는 지점을 찾고, Win Theme과 차별화 서사를 설계합니다.', duration: '2–3주', output: 'Win Theme · Storyline' },
  { t: '기획', d: '제안서·발표자료 통합 기획', long: '기술·사업·운영 섹션을 심사 동선에 맞춰 통합 기획합니다. 초안이 아닌 완성형을 목표로.', duration: '3–4주', output: '제안서 · 발표자료' },
  { t: '리허설', d: 'PT 코칭 · 예상 질의 훈련', long: '질의응답 시나리오 80+ 케이스를 구축하고, 발표자 개인 맞춤 코칭을 진행합니다.', duration: '1–2주', output: 'PT 리허설 · Q&A 북' },
  { t: '수행', d: '착수·운영·증빙 관리', long: '수주 이후 착수 체계와 PMO 운영, 증빙·보고 체계까지 연결합니다.', duration: '프로젝트 기간 전체', output: '착수보고 · PMO 운영' },
];

function Process() {
  const [i, setI] = useState(0);
  const cur = PROCESS[i];
  return (
    <section className="sec" id="process">
      <div className="page">
        <div className="sec-head">
          <div className="sec-head-left">
            <div className="sec-kicker mono"><span className="dot"></span>PROCESS / 02</div>
            <h2 className="sec-title">다섯 단계로<br/><span className="low">작동하는 시스템.</span></h2>
          </div>
          <p className="sec-desc">한 번 쓰는 제안서가 아니라, 반복 가능한 수주 시스템을 구축합니다.</p>
        </div>
        <div className="proc">
          <div className="proc-list">
            {PROCESS.map((p, idx) => (
              <div key={idx} className={`proc-item ${i===idx ? 'is-on' : ''}`} onClick={() => setI(idx)}>
                <div className="proc-n">{String(idx+1).padStart(2,'0')}</div>
                <div>
                  <div className="proc-t">{p.t}</div>
                  <div className="proc-d-mini">{p.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="proc-detail">
            <div className="proc-detail-n">{String(i+1).padStart(2,'0')}</div>
            <div className="proc-detail-t">{cur.t} · {cur.d}</div>
            <div className="proc-detail-d">{cur.long}</div>
            <div className="proc-detail-meta">
              <div>
                <span className="mono">DURATION</span>
                <strong>{cur.duration}</strong>
              </div>
              <div>
                <span className="mono">OUTPUT</span>
                <strong>{cur.output}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CARE ============
const CARE = [
  {
    ed: 'TECH', kr: '테크 케어', en: 'Technology Track',
    tagline: 'AI·데이터 기반 사업을 위한 전문 트랙',
    intro: '기술적 타당성과 평가점수를 동시에 끌어올리는, AI·클라우드·데이터 분야 특화 제안 케어 프로그램입니다.',
    what: ['AI·데이터 아키텍처 자문','기술 적합성 평가 대응','R&D 사업 연계 전략'],
    get: ['전문가 1:1 자문 월 4회','기술 평가표 역설계','레퍼런스 아키텍처 제공'],
    hi: false,
  },
  {
    ed: 'CORE', kr: '수주 케어', en: 'Winning Program',
    tagline: '가장 많이 선택되는 대표 상품',
    intro: '제안서부터 발표·Q&A까지 수주 전 과정을 전담하는 풀 서비스. 평균 수주율 72%를 만드는 대표 프로그램.',
    what: ['전담 TF 구성·운영','제안서·PT 통합 제작','리허설·Q&A 코칭 무제한'],
    get: ['Win Theme 설계','예상 질의 80+ 케이스','수주 시 성과 보너스 옵션'],
    hi: true,
  },
  {
    ed: 'PLAN', kr: '플랜 케어', en: 'Planning Foundation',
    tagline: '사업 초기·신규 진출 기업을 위한',
    intro: '신사업·신규 진출 단계의 기업을 위한 기반 설계 트랙. 사업계획·자금조달·파트너십까지 연결합니다.',
    what: ['사업계획서·BM 설계','투자·R&D 자금 전략','파트너십 매칭'],
    get: ['월 2회 정기 미팅','시장·정책 리서치 리포트','VC·공공자금 네트워크'],
    hi: false,
  },
];

function Care() {
  return (
    <section className="sec" id="care">
      <div className="page">
        <div className="sec-head">
          <div className="sec-head-left">
            <div className="sec-kicker mono"><span className="dot"></span>CARE PRODUCTS / 03</div>
            <h2 className="sec-title">세 개의 트랙,<br/><span className="low">하나의 목표.</span></h2>
          </div>
          <p className="sec-desc">단계와 목적에 맞는 케어 상품을 선택하실 수 있습니다. 필요 시 결합 운용도 가능합니다.</p>
        </div>
        <div className="care-grid">
          {CARE.map(c => (
            <div key={c.ed} className={`care ${c.hi ? 'care-hi' : ''}`}>
              <div className="care-top">
                <span className="care-ed">{c.ed} EDITION</span>
                <span className="care-en">{c.en}</span>
              </div>
              <div className="care-kr">{c.kr}</div>
              <div className="care-tagline">{c.tagline}</div>
              <p className="care-intro">{c.intro}</p>
              <div className="care-group">
                <div className="care-label">WHAT WE DO</div>
                <ul>{c.what.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="care-group">
                <div className="care-label">WHAT YOU GET</div>
                <ul>{c.get.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
              <div className="care-foot">
                <span className="mono dim">01 / 03</span>
                <a href="#contact">상담 요청 <span>→</span></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TEAM ============
const TEAM = [
  { n: '정현우', r: 'Founder · Managing Partner', ini: 'H', bio: '삼성SDS·Deloitte 출신. 공공사업 수주 120건 이상 설계.', tags: ['Strategy','Public Sector','Proposal'] },
  { n: '이서연', r: 'Head of Research', ini: 'S', bio: 'KAIST 박사. 정책·기술 연동 리서치 리드.', tags: ['Policy','R&D','Tech'] },
  { n: '박민준', r: 'Principal · Bid Design', ini: 'M', bio: '대형 SI·방산 제안 설계 15년. PT 코칭 전문가.', tags: ['Bid','PT','Defense'] },
  { n: '김하린', r: 'Business Designer', ini: 'H', bio: '신사업 BM 설계와 재무 모델링 전문.', tags: ['BM','Finance','GTM'] },
  { n: '최도윤', r: 'Tech Advisor', ini: 'D', bio: 'AI·MLOps 엔지니어 출신. 기술 제안 총괄.', tags: ['AI','Cloud','MLOps'] },
  { n: '오유진', r: 'Client Partner', ini: 'Y', bio: '고객 파트너십·프로젝트 딜리버리 담당.', tags: ['Delivery','PMO','Client'] },
];

function Team() {
  return (
    <section className="sec" id="team">
      <div className="page">
        <div className="sec-head">
          <div className="sec-head-left">
            <div className="sec-kicker mono"><span className="dot"></span>TEAM.AMARANS · 팀.아마란스 / 04</div>
            <h2 className="sec-title">현장에서 검증된<br/><span className="low">여섯 명의 설계자.</span></h2>
          </div>
          <p className="sec-desc">대형 SI·컨설팅·정책기관 출신. 자문이 아닌 실전 경험에서 만들어진 팀입니다.</p>
        </div>
        <div className="team">
          {TEAM.map(m => (
            <div key={m.n} className="tm">
              <div className="tm-head">
                <div className="tm-av">{m.ini}</div>
                <div>
                  <div className="tm-name">{m.n}</div>
                  <div className="tm-role">{m.r}</div>
                </div>
              </div>
              <p className="tm-bio">{m.bio}</p>
              <div className="tm-tags">{m.tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ ARCHIVE ============
const ARC = [
  { n: '001', cat: 'Public',     t: '45억 규모 공공 시스템 구축 제안서',       d: '부처급 정보시스템 구축 제안 — A4/세로형 구조, 기술·가격 통합 대응.',          s: '45억' },
  { n: '002', cat: 'Gov',        t: '000 지자체 홈페이지 통합 유지보수·고도화', d: '다중 사이트 관제, 접근성·UI 리뉴얼 포함 통합 유지보수 제안 총괄.',          s: '9.9억' },
  { n: '003', cat: 'Finance',    t: '000 은행 금융 시스템 유지운영 제안',       d: '핵심계정계·채널계 24/7 SLA 기반 유지운영 체계 설계. 월 1억 매출 규모.', s: '월 1억' },
  { n: '004', cat: 'Defense',    t: '000 부대 IoT 시설물 원격감시체계 구축',    d: '보안성 검토 전용망 기반 IoT 관제·점검 플랫폼 제안.',                       s: '9.9억' },
  { n: '005', cat: 'Security',   t: '악성코드 은닉사이트 조치·기술지원 용역',   d: '민간·공공 웹사이트 지속 모니터링·침해 대응 운영 체계 제안.',               s: '4.5억' },
  { n: '006', cat: 'Public IT',  t: '정보보안 업무관리 시스템 구축 (27억 규모)', d: '기관 보안업무 워크플로우 표준화·DX 기획 및 감리 대응.',                    s: '27억' },
  { n: '007', cat: 'Smart City', t: '000 지자체 여객서비스 입주기업 포털',      d: '지역산업 진흥·입주기업 지원 포털 서비스 기획·제안.',                       s: '4.5억' },
  { n: '008', cat: 'ISP',        t: '통합전산망 구축 정보화 전략계획 (ISP)',   d: 'AS-IS / TO-BE 분석·EA 수립·중장기 정보화 로드맵 수립.',                    s: '9.9억' },
];

function Archive() {
  return (
    <section className="sec" id="archive">
      <div className="page">
        <div className="sec-head">
          <div className="sec-head-left">
            <div className="sec-kicker mono"><span className="dot"></span>ARCHIVE / 05</div>
            <h2 className="sec-title">수주가 된 기획,<br/><span className="low">선택된 실적.</span></h2>
          </div>
          <p className="sec-desc">2022–2025, 공공·민간 주요 프로젝트에서 기획·수주·수행을 맡았습니다.</p>
        </div>
        <div className="arc">
          <div className="arc-h">
            <div>Idx</div><div>Category</div><div>Project</div><div>Summary</div><div>Scale</div>
          </div>
          {ARC.map(r => (
            <div className="arc-r" key={r.n}>
              <div className="arc-n">{r.n}</div>
              <div className="arc-cat">{r.cat}</div>
              <div className="arc-title">{r.t}</div>
              <div className="arc-body">{r.d}</div>
              <div className="arc-scale">{r.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FAQ ============
const FAQ = [
  { q: '어떤 규모의 사업에 적합한가요?', a: '10억 원 이상 공공·민간 사업을 주요 대상으로 합니다. 전략적 중요도가 높은 경우 규모와 무관하게 협업합니다.' },
  { q: '수행 기간은 얼마나 걸리나요?', a: '제안서 기반 프로젝트는 평균 6–10주, 수주 이후 수행까지 이어지는 장기 협업은 3–12개월 범위입니다.' },
  { q: '단일 단계만 위탁할 수 있나요?', a: '가능합니다. 서비스 6개 영역 중 필요한 영역만 선택해 진행하실 수 있습니다.' },
  { q: '비용 구조는 어떻게 되나요?', a: '고정 자문료 + 수주 성과 보너스 혼합형이 기본이며, 프로젝트 성격에 따라 유연하게 조정됩니다.' },
  { q: '비밀유지는 어떻게 보장되나요?', a: 'NDA 체결이 기본이며, 경쟁사와의 동시 수행을 방지하는 배타 조항도 적용 가능합니다.' },
  { q: '어디에 위치해 있나요?', a: '서울 강남 본사, 부산·대전 위성 오피스를 운영합니다. 원격 협업 체계도 구축되어 있습니다.' },
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec" id="faq">
      <div className="page">
        <div className="sec-head">
          <div className="sec-head-left">
            <div className="sec-kicker mono"><span className="dot"></span>FAQ / 06</div>
            <h2 className="sec-title">자주 묻는 질문.</h2>
          </div>
          <p className="sec-desc">더 궁금한 점은 아래 Contact 폼으로 보내주세요. 24시간 내 회신드립니다.</p>
        </div>
        <div className="faq">
          {FAQ.map((f, i) => (
            <div key={i} className={`faq-item ${open===i ? 'is-open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open===i ? -1 : i)}>
                <span className="faq-n">{String(i+1).padStart(2,'0')}</span>
                <span className="faq-txt">{f.q}</span>
                <span className="faq-plus">+</span>
              </button>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT ============
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyklpday';
const PLAN_LABELS = { tech: '테크 케어', core: '수주 케어', plan: '플랜 케어', etc: '기타 / 상담' };

function Contact() {
  const [plan, setPlan] = useState('core');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const form = e.currentTarget;
    const data = new FormData(form);

    // Client-side validation
    const email = (data.get('email') || '').toString().trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setErrMsg('올바른 이메일 주소를 입력해주세요. (예: name@company.com)');
      setStatus('error');
      form.querySelector('input[name="email"]')?.focus();
      return;
    }

    data.set('_subject', `[AMARANS] 신규 문의 · ${data.get('name') || '이름 미기재'} · ${PLAN_LABELS[plan]}`);
    data.set('interested_in', PLAN_LABELS[plan]);
    setStatus('sending'); setErrMsg('');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        setPlan('core');
      } else {
        const j = await res.json().catch(() => ({}));
        const raw = (j.errors && j.errors[0] && j.errors[0].message) || '';
        const friendly = /email/i.test(raw)
          ? '이메일 형식이 올바르지 않습니다. 다시 확인해주세요.'
          : raw || '전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
        setErrMsg(friendly);
        setStatus('error');
      }
    } catch (err) {
      setErrMsg('네트워크 오류가 발생했습니다. 이메일(korea@amarans.co.kr)로 직접 연락주세요.');
      setStatus('error');
    }
  };

  return (
    <section className="sec" id="contact">
      <div className="page">
        <div className="sec-head">
          <div className="sec-head-left">
            <div className="sec-kicker mono"><span className="dot"></span>CONTACT / 07</div>
            <h2 className="sec-title">이기는 기획,<br/><span className="low">지금 시작합니다.</span></h2>
          </div>
          <p className="sec-desc">문의 후 24시간 내 담당 파트너가 직접 회신드립니다. 상담은 무료입니다.</p>
        </div>
        <div className="ct">
          <aside className="ct-aside">
            <div className="ct-head">프로젝트를 <em>함께 설계</em>할 준비가 되어 있습니다.</div>
            <a href="mailto:korea@amarans.co.kr" className="ct-email">korea@amarans.co.kr</a>
            <div className="ct-meta">
              <div className="ct-meta-row"><span className="mono">PHONE</span><span>010-9940-7909</span></div>
              <div className="ct-meta-row"><span className="mono">HQ</span><span>경기도 광명시 소하로 190, 광명G타워 12층</span></div>
              <div className="ct-meta-row"><span className="mono">HOURS</span><span>평일 10:00 – 19:00 KST</span></div>
            </div>
            <div className="mono dim" style={{fontSize:10.5}}>
              현재 2026 Q1 슬롯 <span style={{color:'var(--accent)'}}>4 / 8 OPEN</span>
            </div>
          </aside>
          {status === 'success' ? (
            <div className="ct-form ct-success">
              <div className="ct-success-ico">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 20l6 6 12-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="ct-success-h">문의가 정상 접수되었습니다.</h3>
              <p className="ct-success-p">담당 파트너가 24시간 내 <strong>korea@amarans.co.kr</strong>에서 직접 회신드립니다.<br/>급한 건은 <strong>010-9940-7909</strong>로 전화 주셔도 좋습니다.</p>
              <button className="btn btn-ghost" onClick={() => setStatus('idle')}>새 문의 작성</button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={onSubmit}>
              <div className="ct-row2">
                <label><span>NAME</span><input name="name" required placeholder="홍길동" /></label>
                <label><span>ORGANIZATION</span><input name="organization" placeholder="회사 / 기관" /></label>
              </div>
              <div className="ct-row2">
                <label><span>EMAIL</span><input name="email" type="email" required placeholder="you@company.com" /></label>
                <label><span>PHONE</span><input name="phone" placeholder="010 0000 0000" /></label>
              </div>
              <label>
                <span>INTERESTED IN</span>
                <div className="ct-radio">
                  {Object.entries(PLAN_LABELS).map(([k, v]) => (
                    <label key={k} className={plan===k ? 'is-on' : ''}>
                      <span className="dot"></span>
                      <span>{v}</span>
                      <input type="radio" name="plan" value={k} checked={plan===k} onChange={() => setPlan(k)} />
                    </label>
                  ))}
                </div>
              </label>
              <label><span>PROJECT BRIEF</span><textarea name="message" placeholder="사업 개요 · 일정 · 예산 규모 · 요청 사항" /></label>
              {/* Honeypot for spam */}
              <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{position:'absolute',left:'-9999px',opacity:0}} />
              {status === 'error' && errMsg && (
                <div className="ct-error-banner" role="alert">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l7 13H1L8 1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 6v3M8 11.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <span>{errMsg}</span>
                </div>
              )}
              <div className="ct-foot">
                <span className="mono dim">REPLY WITHIN 24 HOURS</span>
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <span className="ct-spin"></span>
                      전송 중...
                    </>
                  ) : (
                    <>
                      문의 보내기
                      <span className="arrow">→</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ============ CLOSING ============
function Closing() {
  return (
    <section className="close-banner">
      <div className="page">
        <div className="close-title">
          <span className="low">Plan First.</span><br/>
          <em>Design the Win.</em>
        </div>
        <div className="close-sub">— AMARANS · 아마란스, since 2019</div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="foot">
      <div className="page">
        <div className="foot-top">
          <div>
            <div className="foot-brand">
              <span className="brand-mark">A</span>
              <span>AMARANS</span>
            </div>
            <p style={{fontSize: 13.5, maxWidth: 320, color: 'var(--ink-3)'}}>공공·B2B 수주에 특화된 전략 기획 파트너.<br/>2019년부터 결과로 증명해왔습니다.</p>
          </div>
          <div className="foot-col">
            <span className="mono">SITEMAP</span>
            <a href="#services">서비스</a>
            <a href="#process">업무 프로세스</a>
            <a href="#care">케어 서비스</a>
            <a href="#team">팀.아마란스</a>
            <a href="#archive">실적</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="foot-col">
            <span className="mono">CONTACT</span>
            <a href="mailto:korea@amarans.co.kr">korea@amarans.co.kr</a>
            <a href="tel:01099407909">010-9940-7909</a>
            <span>경기도 광명시 소하로 190, 광명G타워 12층</span>
          </div>
          <div className="foot-col">
            <span className="mono">LEGAL</span>
            <a href="#" data-legal="privacy">개인정보처리방침</a>
            <a href="#" data-legal="terms">이용약관</a>
            <a href="#" data-legal="business">사업자 정보</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="mono">© 2026 AMARANS · 아마란스</span>
          <span className="mono">MADE IN SEOUL · KST</span>
        </div>
      </div>
    </footer>
  );
}

// ============ TWEAKS ============
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "lime",
  "density": "normal"
}/*EDITMODE-END*/;

const ACCENTS = {
  lime:    { main: '#C7F85E', alt: '#9EE024' },
  cyan:    { main: '#5EE3F8', alt: '#24C0E0' },
  amber:   { main: '#FFB547', alt: '#E8932A' },
  violet:  { main: '#B28DFF', alt: '#8C62E6' },
};

function Tweaks() {
  const [on, setOn] = useState(false);
  const [v, setV] = useState(TWEAK_DEFAULTS);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setOn(true);
      if (e.data?.type === '__deactivate_edit_mode') setOn(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  useEffect(() => {
    const a = ACCENTS[v.accent] || ACCENTS.lime;
    document.documentElement.style.setProperty('--accent', a.main);
    document.documentElement.style.setProperty('--accent-2', a.alt);
    document.documentElement.style.setProperty('--accent-dim', a.main + '1f');
  }, [v.accent]);

  const set = (patch) => {
    const nx = { ...v, ...patch };
    setV(nx);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  return (
    <div className={`tw-panel ${on ? 'is-open' : ''}`}>
      <div className="tw-head"><span>Tweaks</span><span className="mono dim">v1.0</span></div>
      <div className="tw-row">
        <label>Accent</label>
        <div className="tw-swatches">
          {Object.entries(ACCENTS).map(([k, a]) => (
            <div key={k} className={`tw-sw ${v.accent===k ? 'is-on' : ''}`} style={{background: a.main}} onClick={() => set({accent: k})} title={k}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ LEGAL MODAL ============
const LEGAL_CONTENT = {
  privacy: {
    title: '개인정보처리방침',
    updated: '2026. 01. 15. 시행',
    sections: [
      { h: '제1조 (개인정보의 처리 목적)', p: '주식회사 아마란스(AMARANS, 이하 "회사")는 다음의 목적을 위하여 개인정보를 처리하며, 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않습니다.\n\n1. 문의·상담 응대 및 결과 회신\n2. 계약 체결·유지·이행 및 서비스 제공\n3. 세금계산서 발행 등 법령상 의무 이행\n4. 마케팅 및 광고에의 활용 (별도 동의 시)' },
      { h: '제2조 (수집하는 개인정보의 항목 및 수집 방법)', p: '회사는 다음의 항목을 수집합니다.\n\n- 필수항목: 이름, 이메일, 연락처, 소속(기관/회사)\n- 선택항목: 직책, 프로젝트 개요, 예산 규모\n- 자동수집: 접속 IP, 쿠키, 방문 일시, 서비스 이용 기록\n\n수집 방법: 홈페이지 Contact 폼, 이메일, 전화, 서면 계약서 등' },
      { h: '제3조 (개인정보의 보유 및 이용 기간)', p: '회사는 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후 지체 없이 파기합니다. 단, 관련 법령에 의해 보존 의무가 있는 경우 해당 기간 동안 보관합니다.\n\n- 계약 및 청약철회 기록: 5년 (전자상거래법)\n- 대금결제 및 재화공급 기록: 5년\n- 소비자 불만·분쟁 처리 기록: 3년\n- 문의·상담 기록: 3년' },
      { h: '제4조 (개인정보의 제3자 제공)', p: '회사는 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.' },
      { h: '제5조 (정보주체의 권리·의무 및 행사 방법)', p: '정보주체는 언제든지 다음과 같은 권리를 행사할 수 있습니다.\n\n1. 개인정보 열람 요구\n2. 오류 등이 있을 경우 정정 요구\n3. 삭제 요구\n4. 처리 정지 요구\n\n권리 행사는 korea@amarans.co.kr 또는 010-9940-7909를 통해 요청하실 수 있으며, 회사는 지체 없이 조치하겠습니다.' },
      { h: '제6조 (개인정보 보호책임자)', p: '회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해 구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n\n- 성명: 개인정보보호 책임자\n- 연락처: 010-9940-7909\n- 이메일: korea@amarans.co.kr' },
      { h: '제7조 (개인정보의 안전성 확보 조치)', p: '회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.\n\n1. 관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육\n2. 기술적 조치: 접근권한 관리, 접근통제시스템 설치, 고유식별정보 암호화, 보안프로그램 설치\n3. 물리적 조치: 전산실 및 자료보관실의 접근통제' },
      { h: '제8조 (고지의 의무)', p: '본 개인정보처리방침은 관련 법령 및 회사 내부 정책에 따라 변경될 수 있으며, 변경 시에는 변경사항의 시행 7일 전부터 홈페이지를 통해 고지합니다.' },
    ],
  },
  terms: {
    title: '이용약관',
    updated: '2026. 01. 15. 시행',
    sections: [
      { h: '제1조 (목적)', p: '본 약관은 주식회사 아마란스(AMARANS, 이하 "회사")가 제공하는 전략 기획·제안 컨설팅 서비스 및 관련 부가 서비스(이하 "서비스")의 이용과 관련하여, 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.' },
      { h: '제2조 (용어의 정의)', p: '1. "서비스"란 회사가 제공하는 제안 전략, 공공사업 수주 자문, 사업 기획, 기술 자문, 수행 지원, 리서치 등 일체의 컨설팅 서비스를 말합니다.\n2. "이용자"란 본 약관에 따라 회사와 계약을 체결하고 서비스를 이용하는 개인 또는 법인을 말합니다.\n3. "계약서"란 회사와 이용자 간 체결되는 개별 용역·자문 계약서를 말합니다.' },
      { h: '제3조 (약관의 게시와 개정)', p: '1. 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 홈페이지 초기 화면에 게시합니다.\n2. 회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 개정 시에는 적용일자 및 개정 사유를 명시하여 적용일자 7일 전부터 공지합니다.' },
      { h: '제4조 (서비스의 제공 및 변경)', p: '1. 회사는 이용자에게 다음과 같은 서비스를 제공합니다.\n\n  - Proposal Strategy, Public Sector Bids, Business Design\n  - Tech Advisory, Execution Support, Research & Insight\n  - 테크·수주·플랜 케어 프로그램 및 부가 서비스\n\n2. 구체적 서비스 범위·기간·대가·산출물은 개별 계약서에서 정합니다.' },
      { h: '제5조 (서비스의 중단)', p: '회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적 사유가 발생한 경우 서비스 제공을 일시적으로 중단할 수 있습니다. 이 경우 회사는 이용자에게 사전 또는 사후에 통지합니다.' },
      { h: '제6조 (비밀유지 의무)', p: '1. 회사와 이용자는 서비스 수행 과정에서 취득한 상대방의 영업비밀, 기술정보, 사업정보 등 일체의 정보를 제3자에게 누설하거나 본 서비스 수행 목적 외로 사용하지 않습니다.\n2. 비밀유지 의무는 계약 종료 후에도 3년간 존속합니다.\n3. 세부 비밀유지 조항은 별도의 NDA(비밀유지계약)로 정할 수 있습니다.' },
      { h: '제7조 (지식재산권)', p: '1. 서비스 수행 결과 생성된 산출물의 저작권 등 지식재산권은 개별 계약서에서 정하는 바에 따르며, 별도 정함이 없는 경우 회사에 귀속됩니다.\n2. 이용자는 산출물을 계약 목적의 범위 내에서 사용할 수 있으며, 제3자에게 양도·재라이선스 할 수 없습니다.' },
      { h: '제8조 (대금의 지급)', p: '1. 서비스 대금 및 지급 방법은 개별 계약서에서 정합니다.\n2. 이용자가 대금을 기일 내 지급하지 않을 경우, 회사는 미지급액에 대해 연 12%의 지연손해금을 청구할 수 있습니다.\n3. 수주 성과 보너스 등 조건부 대금은 계약서에 명시된 조건 충족 시 지급됩니다.' },
      { h: '제9조 (계약의 해지)', p: '1. 이용자는 서비스 수행 기간 중 7일 전 서면 통지로 계약을 해지할 수 있습니다. 이 경우 해지일까지의 수행 분에 대한 대가는 정산·지급되어야 합니다.\n2. 다음 각 호의 경우 회사는 즉시 계약을 해지할 수 있습니다.\n\n  - 이용자가 대금을 30일 이상 연체한 경우\n  - 비밀유지 의무를 위반한 경우\n  - 본 약관 또는 계약서상 중대한 의무를 위반한 경우' },
      { h: '제10조 (책임의 제한)', p: '1. 회사는 이용자에게 제공한 서비스와 관련하여 고의 또는 중대한 과실이 없는 한 손해에 대해 책임을 지지 않습니다.\n2. 회사의 손해배상 책임은 해당 계약의 연간 총 계약금액을 한도로 합니다.' },
      { h: '제11조 (준거법 및 관할)', p: '본 약관의 해석 및 회사와 이용자 간 분쟁에 대해서는 대한민국 법령을 적용하며, 소송이 제기될 경우 회사의 본점 소재지를 관할하는 법원을 제1심 관할 법원으로 합니다.' },
    ],
  },
  business: {
    title: '사업자 정보',
    updated: '사업자등록증 기준',
    sections: [
      { h: '회사 정보', p: '상호: 주식회사 아마란스 (AMARANS CO., LTD.)\n대표자: Roy. Chae\n소재지: 경기도 광명시 소하로 190, 광명G타워 12층\n사업자등록번호: 682-53-00808\n통신판매업 신고번호: 제2023-수원권선-0773호\n설립: 2023년' },
      { h: '연락처', p: '대표번호: 010-9940-7909\n이메일: korea@amarans.co.kr\n운영시간: 평일 10:00 – 19:00 (KST)\n휴무: 주말 및 법정공휴일' },
      { h: '주요 사업영역', p: '- 공공·B2B 제안 전략 컨설팅\n- 사업 기획 및 신사업 설계\n- AI·클라우드·데이터 기술 자문\n- PMO 및 프로젝트 수행 지원\n- 정책·시장·기술 리서치' },
    ],
  },
};

function LegalModal({ kind, onClose }) {
  const data = LEGAL_CONTENT[kind];
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!data) return null;

  return (
    <div className="lm-backdrop" onClick={onClose}>
      <div className="lm-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={data.title}>
        <div className="lm-head">
          <div>
            <div className="mono dim" style={{fontSize: 10.5}}>LEGAL · AMARANS</div>
            <h3 className="lm-title">{data.title}</h3>
            <div className="lm-updated mono dim">{data.updated}</div>
          </div>
          <button className="lm-close" onClick={onClose} aria-label="닫기">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="lm-body">
          {data.sections.map((s, i) => (
            <div key={i} className="lm-sec">
              <h4 className="lm-sec-h">{s.h}</h4>
              <p className="lm-sec-p">{s.p}</p>
            </div>
          ))}
          <div className="lm-foot mono dim">
            문의: korea@amarans.co.kr · 010-9940-7909
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ APP ============
function App() {
  const [legal, setLegal] = useState(null);
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a[data-legal]');
      if (a) { e.preventDefault(); setLegal(a.dataset.legal); }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Process />
      <Care />
      <Team />
      <Archive />
      <Faq />
      <Contact />
      <Closing />
      <Footer />
      <Tweaks />
      {legal && <LegalModal kind={legal} onClose={() => setLegal(null)} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
