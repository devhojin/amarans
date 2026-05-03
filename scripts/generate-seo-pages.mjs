import { mkdirSync, writeFileSync } from 'node:fs';

const site = {
  baseUrl: 'https://www.amarans.co.kr',
  name: 'AMARANS · 아마란스',
  email: 'korea@amarans.co.kr',
  phone: '010-9940-7909',
  address: '경기도 광명시 소하로 190, 광명G타워 12층',
  lastmod: '2026-05-03',
};

const moneyPages = [
  {
    slug: 'public-procurement-proposal',
    h1: '공공입찰 제안서, 평가표부터 다시 설계합니다',
    title: '공공입찰 제안서 작성 대행 | AMARANS 아마란스',
    description: '나라장터와 공공기관 제안 평가 기준에 맞춰 공고 분석, 제안 전략, 기술제안서, 발표 PT까지 수주 중심으로 설계합니다.',
    label: '공공입찰 제안서',
    intent: '나라장터, 지자체, 공공기관 시스템 구축 제안에 필요한 제안 전략과 기술제안서 작성 지원',
    audience: ['공공입찰을 처음 준비하는 기술기업', '기술력은 있지만 제안서 구조가 약한 SI·AI·IoT 기업', '기존 제안서의 평가점수가 낮아 개선이 필요한 팀'],
    sections: [
      ['평가표를 먼저 읽고 제안서를 씁니다', '공공입찰 제안서는 좋은 문장보다 평가항목 대응력이 먼저입니다. 아마란스는 배점표, 제안요청서, 발주기관 정책 맥락을 분해한 뒤 기술, 수행, 관리, 품질 항목이 점수로 연결되도록 목차와 문장을 설계합니다.'],
      ['기술을 평가자 언어로 바꿉니다', '개발팀의 기능 목록을 그대로 옮기지 않습니다. 시스템 구성, 보안, 운영, 유지관리, 장애 대응, 품질관리 체계를 심사자가 확인 가능한 실행 계획으로 재구성합니다.'],
      ['제출 이후 발표와 질의까지 연결합니다', '제안서와 발표자료가 서로 다른 메시지를 말하면 감점 위험이 커집니다. 서면 제안서, 발표 PT, 예상 질의응답을 같은 수주 논리로 묶어 최종 평가까지 대응합니다.'],
    ],
    deliverables: ['공고 및 평가표 분석서', '제안서 목차와 Win Theme', '기술제안서 본문 고도화', '발표 PT 스토리라인', '심사 질의응답 시나리오'],
    faq: [
      ['초안이 없어도 의뢰할 수 있나요?', '가능합니다. 공고문, 제안요청서, 회사 소개자료, 솔루션 자료만 있어도 분석부터 시작할 수 있습니다.'],
      ['마감이 촉박한 입찰도 가능한가요?', '일정과 자료 수준에 따라 범위를 나눠 대응합니다. 단기 일정은 핵심 평가항목과 발표 리스크부터 우선 보강합니다.'],
    ],
  },
  {
    slug: 'g2b-proposal-consulting',
    h1: '나라장터 제안서, 조달 평가 흐름에 맞춰 준비합니다',
    title: '나라장터 제안서 컨설팅 | 조달·공공사업 제안 전략',
    description: '나라장터 입찰 공고 분석부터 제안서 목차, 기술 차별화, 수행계획, 발표 대응까지 조달 평가 흐름에 맞춰 지원합니다.',
    label: '나라장터 제안서',
    intent: '나라장터 공고에 맞춘 조달 제안서 작성과 평가 대응',
    audience: ['나라장터 입찰을 준비하는 중소·중견기업', '공공 조달 사업으로 매출 채널을 확장하려는 기업', '협력사로 참여하지만 기술 파트 완성도가 필요한 팀'],
    sections: [
      ['공고 요구사항을 누락 없이 대응합니다', '나라장터 제안은 필수 제출서류, 정량 지표, 정성 평가항목이 동시에 움직입니다. 제출 형식과 평가 논리를 함께 점검해 실격 리스크와 감점 리스크를 줄입니다.'],
      ['조달 문법에 맞는 신뢰 신호를 만듭니다', '수행조직, 일정관리, 품질보증, 보안관리, 하자보수 계획을 조달 심사자가 익숙하게 확인할 수 있는 형식으로 정리합니다.'],
      ['가격이 아니라 기술점수로 경쟁합니다', '기술점수 차이를 만드는 차별화 포인트를 발굴하고, 기존 레퍼런스와 인증, 특허, 운영 경험이 평가항목 안에서 드러나도록 배치합니다.'],
    ],
    deliverables: ['나라장터 공고 분석', '필수 제출자료 체크리스트', '기술제안서 구조 설계', '수행계획 및 관리계획 보강', '발표자료 및 질의응답 정리'],
    faq: [
      ['컨소시엄 제안도 가능한가요?', '가능합니다. 주관사와 참여사 역할, 기술 범위, 책임 경계를 제안서 안에서 명확하게 정리합니다.'],
      ['기존 제안서 리뉴얼도 가능한가요?', '가능합니다. 기존 문서를 평가표 기준으로 다시 진단하고 감점 가능성이 큰 항목부터 보강합니다.'],
    ],
  },
  {
    slug: 'startup-business-plan',
    h1: '창업지원 사업계획서, 선정되는 구조로 정리합니다',
    title: '창업지원 사업계획서 작성 | 예비·초기창업패키지 컨설팅',
    description: '예비창업패키지, 초기창업패키지, 정부 창업지원사업 선정을 위한 문제정의, 시장분석, BM, 실행계획을 구조화합니다.',
    label: '창업지원 사업계획서',
    intent: '창업지원사업 선정을 위한 사업계획서 작성과 발표 준비',
    audience: ['예비창업패키지와 초기창업패키지를 준비하는 창업자', '아이템은 있으나 사업계획서 구조가 부족한 팀', 'BM, 시장성, 실행계획 보강이 필요한 스타트업'],
    sections: [
      ['아이디어를 평가 가능한 사업으로 바꿉니다', '심사위원은 아이디어 자체보다 문제의 크기, 고객 검증, 수익 구조, 실행 가능성을 봅니다. 아마란스는 아이템을 평가항목에 맞는 사업계획 구조로 재정렬합니다.'],
      ['시장성과 차별성을 근거로 설명합니다', '막연한 시장 규모가 아니라 목표 고객, 구매 동기, 경쟁 대안, 진입 전략을 중심으로 설득 가능한 시장 논리를 만듭니다.'],
      ['서면과 발표를 동시에 준비합니다', '사업계획서 문장과 발표 슬라이드의 핵심 메시지가 일치해야 합니다. 서면 통과 이후 발표평가까지 이어지는 질의 대응 구조를 함께 설계합니다.'],
    ],
    deliverables: ['사업계획서 목차 설계', '문제정의 및 고객군 정리', '시장·경쟁 분석', 'BM 및 수익모델 보강', '발표 PT와 예상 질의응답'],
    faq: [
      ['초기 아이디어 단계도 가능한가요?', '가능합니다. 다만 선정 가능성을 높이려면 고객 문제와 검증 근거를 빠르게 정리해야 합니다.'],
      ['이미 탈락한 사업계획서도 개선할 수 있나요?', '가능합니다. 평가항목별 약점을 진단하고 메시지, 근거, 실행계획을 다시 구성합니다.'],
    ],
  },
  {
    slug: 'pre-startup-package-business-plan',
    h1: '예비창업패키지 사업계획서, 평가항목별로 보강합니다',
    title: '예비창업패키지 사업계획서 작성 | 선정 전략 컨설팅',
    description: '예비창업패키지 선정을 위해 창업 아이템, 고객 문제, 실현 가능성, 성장 전략, 발표평가 대응을 평가 기준에 맞춰 정리합니다.',
    label: '예비창업패키지',
    intent: '예비창업패키지 사업계획서 작성과 발표평가 대비',
    audience: ['예비창업패키지 첫 지원자', '기술은 있지만 시장 설명이 약한 예비창업자', '서면 통과 이후 발표평가까지 준비하려는 팀'],
    sections: [
      ['심사자가 보는 질문에 먼저 답합니다', '왜 지금 이 문제인가, 왜 이 팀이 해결할 수 있는가, 지원금으로 무엇을 검증할 것인가를 중심으로 사업계획서를 정리합니다.'],
      ['지원금 집행계획을 실행계획과 연결합니다', '예산표만 채우지 않고 제품 개발, 고객 검증, 시장 진입 일정과 예산 사용 목적이 하나의 로드맵으로 보이게 만듭니다.'],
      ['발표평가에서 흔들리지 않는 답변을 준비합니다', '시장성, 차별성, 수익성, 팀 역량 질문에 대비해 예상 질의응답과 발표 메시지를 함께 설계합니다.'],
    ],
    deliverables: ['아이템 진단', '예비창업패키지 사업계획서 고도화', '지원금 사용계획 정리', '발표자료 구조', '예상 질의응답'],
    faq: [
      ['혼자 창업을 준비해도 가능한가요?', '가능합니다. 팀 역량을 보완할 실행 계획과 외부 협력 구조를 함께 설계합니다.'],
      ['평가 직전 발표만 도와줄 수 있나요?', '가능합니다. 발표자료와 질의응답 중심의 단기 점검도 진행합니다.'],
    ],
  },
  {
    slug: 'government-rnd-business-plan',
    h1: '정부지원사업·R&D 사업계획서, 기술성과 사업성을 함께 설계합니다',
    title: '정부지원사업 사업계획서 작성 | R&D 과제 기획 컨설팅',
    description: '정부지원사업과 R&D 과제 선정을 위해 기술개발 목표, 사업화 전략, 수행체계, 정량 성과지표를 평가 기준에 맞춰 구성합니다.',
    label: '정부지원사업 사업계획서',
    intent: '정부지원사업과 R&D 과제 사업계획서 작성',
    audience: ['R&D 과제를 준비하는 기술기업', '정부지원사업으로 제품 검증과 사업화를 추진하는 스타트업', '기술개발 내용과 사업화 계획 연결이 필요한 팀'],
    sections: [
      ['기술개발 목표를 평가 가능한 언어로 씁니다', 'R&D 과제는 기술의 우수성만으로 선정되지 않습니다. 개발 목표, 성능 지표, 검증 방법, 사업화 계획이 평가표 안에서 이어져야 합니다.'],
      ['사업화 가능성을 숫자와 실행계획으로 보강합니다', '시장 진입 전략, 판매 채널, 예상 고객, 수익모델, 파트너십을 근거 중심으로 정리해 기술개발 이후의 매출 가능성을 보여줍니다.'],
      ['수행체계와 리스크 대응을 명확히 합니다', '인력 구성, 일정, 외주·협력 범위, 지식재산, 인증, 보안, 품질관리 계획을 사업계획서 안에서 일관되게 정리합니다.'],
    ],
    deliverables: ['R&D 과제 기획서', '기술개발 목표 및 성능지표', '사업화 전략', '수행체계 및 일정표', '평가 질의응답'],
    faq: [
      ['기술자료만 있고 사업화 자료가 부족합니다', '가능합니다. 목표 고객과 판매 시나리오부터 재구성해 사업화 계획을 보강합니다.'],
      ['컨소시엄 R&D도 가능한가요?', '가능합니다. 기관별 역할, 성과물, 책임 범위를 평가자가 이해하기 쉽게 정리합니다.'],
    ],
  },
  {
    slug: 'proposal-presentation-pt',
    h1: '제안 발표 PT, 심사위원 질문까지 설계합니다',
    title: '제안 발표 PT 자료 제작 | 공공입찰 발표평가 컨설팅',
    description: '공공입찰과 사업계획서 발표평가를 위해 발표자료 스토리라인, 핵심 메시지, 예상 질의응답, 발표 리허설을 지원합니다.',
    label: '제안 발표 PT',
    intent: '제안서 발표자료 제작과 발표평가 대응',
    audience: ['서면 제안서는 준비됐지만 발표가 불안한 팀', '심사위원 질의 대응을 체계화하려는 발표자', '기술 내용을 짧은 발표 시간 안에 설득해야 하는 기업'],
    sections: [
      ['서면 제안서를 발표 언어로 다시 압축합니다', '제안서 내용을 그대로 슬라이드로 옮기면 발표력이 떨어집니다. 평가자가 기억해야 할 핵심 메시지와 근거만 남겨 발표 흐름을 다시 만듭니다.'],
      ['질문을 예상하고 답변 구조를 만듭니다', '기술, 일정, 예산, 수행조직, 리스크, 보안, 유지관리 질문을 미리 분류해 발표자가 흔들리지 않도록 답변 프레임을 준비합니다.'],
      ['리허설로 감점 요소를 줄입니다', '발표 시간, 문장 길이, 슬라이드 전환, 질의응답 태도를 점검해 최종 평가장에서 메시지가 일관되게 전달되도록 훈련합니다.'],
    ],
    deliverables: ['발표 PT 목차', '슬라이드 스토리라인', '핵심 메시지 문장', '예상 질의응답', '발표 리허설 피드백'],
    faq: [
      ['기존 PPT를 고도화할 수 있나요?', '가능합니다. 기존 자료를 평가항목과 발표시간 기준으로 재구성합니다.'],
      ['발표자 코칭도 포함되나요?', '필요 시 포함합니다. 발표자의 말투와 답변 습관까지 점검합니다.'],
    ],
  },
  {
    slug: 'service-planning-isp',
    h1: '서비스 기획·ISP, 개발 전에 사업 구조부터 정리합니다',
    title: '서비스 기획·ISP 컨설팅 | RFP·화면설계·요구사항 정의',
    description: '공공·민간 시스템 구축 전 서비스 기획, ISP, 요구사항 정의, 화면설계서, RFP 구성을 사업 목표와 실행 기준에 맞춰 설계합니다.',
    label: '서비스 기획·ISP',
    intent: '서비스 기획, ISP, RFP, 요구사항 정의 컨설팅',
    audience: ['시스템 구축 전 요구사항을 정리해야 하는 기관·기업', '개발팀과 현업 사이의 언어가 맞지 않는 프로젝트', 'RFP 또는 화면설계서 작성이 필요한 팀'],
    sections: [
      ['기능 목록보다 사용 흐름을 먼저 설계합니다', '서비스 기획은 화면을 많이 그리는 일이 아니라 사용자의 업무 흐름과 운영 기준을 명확히 하는 일입니다. 목적, 사용자, 권한, 데이터, 프로세스를 함께 정리합니다.'],
      ['RFP와 개발 산출물을 연결합니다', '요구사항 정의, 화면설계, 기능정의, 일정, 검수 기준이 서로 다른 말을 하지 않도록 제안과 개발 사이의 문서를 정렬합니다.'],
      ['공공사업과 민간 구축 모두 대응합니다', '공공 RFP, ISP, 민간 플랫폼 기획, 운영정책서 등 프로젝트 성격에 따라 필요한 산출물을 조합해 제공합니다.'],
    ],
    deliverables: ['요구사항 정의서', 'IA 및 사용자 흐름', '화면설계서', 'RFP 초안', 'ISP 및 실행 로드맵'],
    faq: [
      ['개발 없이 기획 문서만 의뢰할 수 있나요?', '가능합니다. 개발사 선정 전 RFP와 요구사항 정의를 먼저 정리할 수 있습니다.'],
      ['기존 서비스 개선 기획도 가능한가요?', '가능합니다. 현재 운영 데이터를 기준으로 개선 과제와 우선순위를 도출합니다.'],
    ],
  },
  {
    slug: 'system-integration-proposal',
    h1: '시스템 구축 제안서, 기술·운영·수행체계를 한 번에 정리합니다',
    title: '시스템 구축 제안서 작성 | SI·플랫폼 구축 제안 컨설팅',
    description: '공공·민간 시스템 구축 제안서에서 기술 아키텍처, 수행조직, 일정, 품질, 보안, 운영계획을 평가 기준에 맞춰 작성합니다.',
    label: '시스템 구축 제안서',
    intent: 'SI, 플랫폼, 정보시스템 구축 제안서 작성',
    audience: ['SI 사업 수주를 준비하는 기업', '기술 아키텍처 설명을 제안서로 정리해야 하는 팀', '품질·보안·운영계획 보강이 필요한 구축 프로젝트'],
    sections: [
      ['기술 구성도를 수행계획으로 연결합니다', '아키텍처 그림만으로는 점수가 나지 않습니다. 시스템 구성, 데이터 흐름, 보안, 장애 대응, 운영 체계가 수행계획 안에서 논리적으로 연결되어야 합니다.'],
      ['PMO와 품질관리 체계를 구체화합니다', '일정관리, 산출물 관리, 위험관리, 변경관리, 검수 기준을 사업 규모와 발주기관 기대 수준에 맞춰 정리합니다.'],
      ['운영과 유지관리까지 설계합니다', '구축 이후 운영 안정성, 전환 계획, 교육, 유지보수, SLA를 포함해 발주기관이 안심할 수 있는 제안 구조를 만듭니다.'],
    ],
    deliverables: ['기술제안서 구조', '아키텍처 설명문', '수행조직 및 일정계획', '품질·보안·위험관리 계획', '운영 및 유지관리 계획'],
    faq: [
      ['기술 아키텍처는 내부에서 제공해야 하나요?', '기본 자료는 필요합니다. 다만 평가자 관점의 설명과 구성 방식은 함께 재정리합니다.'],
      ['유지보수 제안서도 가능한가요?', '가능합니다. SLA, 장애대응, 정기점검, 개선관리 체계를 중심으로 구성합니다.'],
    ],
  },
];

const guidePages = [
  {
    slug: 'guides/public-bid-proposal-checklist',
    h1: '공공입찰 제안서 작성 전 반드시 점검할 10가지',
    title: '공공입찰 제안서 체크리스트 | RFP 분석과 제출 전 점검',
    description: '공공입찰 제안서 작성 전에 평가표, 제출서류, 기술 차별화, 수행계획, 발표 질의응답을 점검하는 실무 체크리스트입니다.',
    label: '공공입찰 체크리스트',
    intent: '공공입찰 제안서 작성 전 실무 점검',
    audience: ['공공입찰 준비 실무자', '제출 전 제안서 품질을 점검하는 PM', '외부 제안 컨설팅 전 내부 자료를 정리하는 팀'],
    sections: [
      ['1. 평가표와 목차가 1:1로 대응되는지 확인합니다', '좋은 목차보다 중요한 것은 평가항목 누락이 없는 목차입니다. 배점이 높은 항목은 별도 장으로 드러내고, 낮은 배점 항목도 필수 요구사항이면 빠짐없이 대응해야 합니다.'],
      ['2. 차별화 포인트가 증빙과 연결되는지 확인합니다', '차별화 문구만 있고 실적, 인증, 특허, 화면, 운영 경험이 연결되지 않으면 설득력이 약합니다. 각 차별화 주장에는 확인 가능한 근거를 붙여야 합니다.'],
      ['3. 발표 질의응답까지 같은 논리인지 확인합니다', '제안서 본문, 발표자료, 예상 답변이 다른 메시지를 말하면 평가장에서 신뢰가 떨어집니다. 제출 전 핵심 메시지를 하나로 통일해야 합니다.'],
    ],
    deliverables: ['평가항목 매핑표', '제출 전 체크리스트', '차별화 근거 정리표', '예상 질의응답 목록'],
    faq: [
      ['제출 전 하루만 남아도 점검할 수 있나요?', '가능합니다. 다만 이 경우 전체 재작성보다 감점 가능성이 큰 항목 위주로 점검합니다.'],
      ['체크리스트만 받아볼 수 있나요?', '프로젝트 상담 시 현재 공고에 맞는 점검 항목을 함께 정리합니다.'],
    ],
  },
  {
    slug: 'guides/startup-business-plan-checklist',
    h1: '창업지원 사업계획서에서 자주 탈락하는 이유',
    title: '창업지원 사업계획서 체크리스트 | 선정 가능성 점검',
    description: '예비창업패키지, 초기창업패키지 등 창업지원사업에서 사업계획서가 약해지는 원인과 보강 방법을 정리했습니다.',
    label: '창업지원 체크리스트',
    intent: '창업지원사업 사업계획서 탈락 원인 점검',
    audience: ['창업지원사업을 준비하는 창업자', '사업계획서 초안을 검토 중인 스타트업', '발표평가 전 약점을 확인하려는 팀'],
    sections: [
      ['문제정의가 고객의 언어로 쓰였는지 확인합니다', '기술 설명이 먼저 나오면 심사위원은 시장의 필요성을 파악하기 어렵습니다. 고객이 겪는 문제, 현재 대안, 비용과 불편을 먼저 설명해야 합니다.'],
      ['수익모델이 실행계획과 이어지는지 확인합니다', '수익모델 표만 있고 고객 확보 방법이 없으면 사업성이 약해 보입니다. 판매 채널, 가격, 초기 고객, 검증 일정이 함께 제시되어야 합니다.'],
      ['지원금 사용계획이 검증 목표와 맞는지 확인합니다', '예산은 단순 지출 목록이 아니라 제품 개발과 시장 검증을 위한 실행 도구입니다. 지원금 사용 목적이 사업 목표와 연결되어야 합니다.'],
    ],
    deliverables: ['사업계획서 진단', 'BM 보강안', '시장·경쟁 정리', '발표평가 예상 질문'],
    faq: [
      ['아이템을 바꾸지 않고도 개선할 수 있나요?', '대부분 가능합니다. 핵심은 아이템 자체보다 문제 정의와 실행 논리를 명확하게 만드는 것입니다.'],
      ['자료가 부족한 초기 팀도 가능한가요?', '가능합니다. 부족한 근거는 고객 인터뷰, 경쟁 분석, 실행계획으로 보완합니다.'],
    ],
  },
  {
    slug: 'guides/proposal-presentation-checklist',
    h1: '제안 발표 PT에서 점수를 잃는 지점과 보강 방법',
    title: '제안 발표 PT 체크리스트 | 발표평가 질의응답 준비',
    description: '공공입찰과 사업계획서 발표평가에서 발표자료, 시간관리, 질의응답, 핵심 메시지를 점검하는 체크리스트입니다.',
    label: '발표 PT 체크리스트',
    intent: '공공입찰 발표평가와 사업계획서 발표 준비',
    audience: ['제안 발표를 앞둔 PM과 발표자', 'PPT는 있지만 발표 흐름이 약한 팀', '심사위원 질의응답 대비가 필요한 기업'],
    sections: [
      ['첫 1분에 평가자가 들어야 할 메시지를 정합니다', '발표 초반에 사업 이해도, 차별성, 수행 가능성을 분명히 말해야 합니다. 배경 설명이 길어지면 핵심 메시지가 묻힙니다.'],
      ['슬라이드는 설명용이 아니라 판단 보조자료입니다', '글자가 많은 슬라이드는 발표자의 말을 방해합니다. 각 장은 하나의 주장과 하나의 근거를 보여주도록 정리합니다.'],
      ['질의응답은 방어가 아니라 신뢰 형성입니다', '예상 질문을 회피하지 않고 기술, 일정, 비용, 리스크별로 답변 구조를 만들어두면 평가장에서 신뢰를 얻을 수 있습니다.'],
    ],
    deliverables: ['발표자료 구조 점검', '핵심 메시지 문장', '시간 배분표', '예상 질의응답'],
    faq: [
      ['발표자 리허설만 받을 수 있나요?', '가능합니다. 발표자료를 기준으로 시간, 발음, 답변 구조를 점검합니다.'],
      ['온라인 발표도 대비할 수 있나요?', '가능합니다. 화면 공유, 카메라 시선, 답변 타이밍까지 함께 점검합니다.'],
    ],
  },
];

const allPages = [...moneyPages, ...guidePages];

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const absoluteUrl = (slug) => `${site.baseUrl}/${slug}`;

function jsonLd(page, isGuide) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${site.baseUrl}/#organization`,
        name: site.name,
        url: site.baseUrl,
        email: site.email,
        telephone: site.phone,
        address: site.address,
        areaServed: 'KR',
        knowsAbout: ['공공입찰 제안서', '창업지원 사업계획서', '제안 발표 PT', '서비스 기획', 'ISP', 'RFP'],
      },
      {
        '@type': isGuide ? 'Article' : 'Service',
        '@id': `${absoluteUrl(page.slug)}#primary`,
        name: page.label,
        headline: page.h1,
        description: page.description,
        url: absoluteUrl(page.slug),
        provider: { '@id': `${site.baseUrl}/#organization` },
        mainEntityOfPage: absoluteUrl(page.slug),
      },
      {
        '@type': 'FAQPage',
        '@id': `${absoluteUrl(page.slug)}#faq`,
        mainEntity: page.faq.map(([name, text]) => ({
          '@type': 'Question',
          name,
          acceptedAnswer: { '@type': 'Answer', text },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: site.baseUrl },
          { '@type': 'ListItem', position: 2, name: page.label, item: absoluteUrl(page.slug) },
        ],
      },
    ],
  }, null, 2);
}

function pageTemplate(page, isGuide = false) {
  const related = allPages
    .filter((item) => item.slug !== page.slug)
    .slice(0, 5);
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${absoluteUrl(page.slug)}" />
<link rel="alternate" type="application/rss+xml" title="AMARANS 검색 콘텐츠 피드" href="${site.baseUrl}/rss.xml" />
<meta property="og:type" content="${isGuide ? 'article' : 'website'}" />
<meta property="og:site_name" content="${site.name}" />
<meta property="og:title" content="${escapeHtml(page.title)}" />
<meta property="og:description" content="${escapeHtml(page.description)}" />
<meta property="og:url" content="${absoluteUrl(page.slug)}" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css?v=11" />
<script type="application/ld+json">${jsonLd(page, isGuide)}</script>
</head>
<body>
<nav class="nav">
  <div class="page nav-inner">
    <a href="/" class="brand"><span class="brand-mark">A</span><span>AMARANS<span class="brand-sub"> · 아마란스</span></span></a>
    <div class="nav-links">
      <a href="/public-procurement-proposal">공공입찰</a>
      <a href="/startup-business-plan">사업계획서</a>
      <a href="/proposal-presentation-pt">발표 PT</a>
      <a href="/service-planning-isp">서비스 기획</a>
    </div>
    <a href="/#contact" class="nav-cta">상담 요청 →</a>
  </div>
</nav>
<main class="seo-shell">
  <section class="seo-hero page">
    <div class="seo-breadcrumb"><a href="/">홈</a><span>/</span><span>${escapeHtml(page.label)}</span></div>
    <p class="sec-kicker mono"><span class="dot"></span>${isGuide ? 'GUIDE' : 'SERVICE'} · AMARANS</p>
    <h1 class="seo-title">${escapeHtml(page.h1)}</h1>
    <p class="seo-lead">${escapeHtml(page.description)}</p>
    <div class="seo-hero-actions">
      <a class="btn btn-primary" href="/#contact">프로젝트 상담 요청 <span class="arrow">→</span></a>
      <a class="btn btn-ghost" href="mailto:${site.email}">${site.email}</a>
      <a class="btn btn-ghost" href="tel:01099407909">${site.phone}</a>
    </div>
    <div class="seo-meta-grid">
      <div><span class="mono dim">SEARCH INTENT</span><strong>${escapeHtml(page.intent)}</strong></div>
      <div><span class="mono dim">RESPONSE</span><strong>공고 분석 · 문서 설계 · 발표 대응</strong></div>
      <div><span class="mono dim">CONTACT</span><strong>${site.email}</strong></div>
    </div>
  </section>
  <section class="seo-section page">
    <div class="seo-grid">
      <article class="seo-card seo-card-wide">
        <h2>이런 팀에게 적합합니다</h2>
        <ul class="seo-list">${page.audience.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </article>
      <article class="seo-card">
        <h2>주요 산출물</h2>
        <ul class="seo-list">${page.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
      </article>
    </div>
  </section>
  ${page.sections.map(([heading, body]) => `<section class="seo-section page">
    <article class="seo-copy">
      <h2>${escapeHtml(heading)}</h2>
      <p>${escapeHtml(body)}</p>
    </article>
  </section>`).join('')}
  <section class="seo-section page">
    <div class="seo-cta">
      <div>
        <span class="mono dim">AMARANS CONSULTING</span>
        <h2>${escapeHtml(page.label)} 상담을 바로 시작하세요</h2>
        <p>현재 자료 상태와 마감 일정을 기준으로 가장 먼저 보강해야 할 평가 항목을 빠르게 정리해드립니다.</p>
      </div>
      <a class="btn btn-primary" href="/#contact">상담 요청하기 <span class="arrow">→</span></a>
    </div>
  </section>
  <section class="seo-section page">
    <h2 class="seo-small-title">자주 묻는 질문</h2>
    <div class="seo-faq">${page.faq.map(([question, answer]) => `<article>
      <h3>${escapeHtml(question)}</h3>
      <p>${escapeHtml(answer)}</p>
    </article>`).join('')}</div>
  </section>
  <section class="seo-section page">
    <h2 class="seo-small-title">관련 검색 페이지</h2>
    <div class="seo-related">${related.map((item) => `<a href="/${item.slug}"><span>${escapeHtml(item.label)}</span><small>${escapeHtml(item.intent)}</small></a>`).join('')}</div>
  </section>
</main>
<footer class="foot">
  <div class="page foot-bottom">
    <span class="mono">© 2026 AMARANS · 아마란스</span>
    <span class="mono"><a href="/sitemap-google.xml">Google Sitemap</a> · <a href="/sitemap-naver.xml">Naver Sitemap</a> · <a href="/rss.xml">RSS</a></span>
  </div>
</footer>
</body>
</html>
`;
}

const pageUrls = allPages.map((page) => ({
  loc: absoluteUrl(page.slug),
  lastmod: site.lastmod,
  priority: page.slug.startsWith('guides/') ? '0.70' : '0.90',
  changefreq: page.slug.startsWith('guides/') ? 'monthly' : 'weekly',
}));

function sitemap(urls, includeGoogleHints = false) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.baseUrl}/</loc>
    <lastmod>${site.lastmod}</lastmod>${includeGoogleHints ? '' : '\n    <changefreq>weekly</changefreq>\n    <priority>1.00</priority>'}
  </url>
${urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>${includeGoogleHints ? '' : `\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>`}
  </url>`).join('\n')}
</urlset>
`;
}

function rss(items) {
  const pubDate = new Date(`${site.lastmod}T00:00:00+09:00`).toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AMARANS 검색 콘텐츠 피드</title>
    <link>${site.baseUrl}/</link>
    <description>공공입찰 제안서, 창업지원 사업계획서, 발표 PT, 서비스 기획 실무 콘텐츠</description>
    <language>ko</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
${items.map((page) => `    <item>
      <title>${escapeHtml(page.title)}</title>
      <link>${absoluteUrl(page.slug)}</link>
      <description>${escapeHtml([page.description, ...page.sections.map(([, body]) => body)].join(' '))}</description>
      <pubDate>${pubDate}</pubDate>
      <guid>${absoluteUrl(page.slug)}</guid>
    </item>`).join('\n')}
  </channel>
</rss>
`;
}

for (const page of moneyPages) {
  writeFileSync(`${page.slug}.html`, pageTemplate(page), 'utf8');
}

mkdirSync('guides', { recursive: true });
for (const page of guidePages) {
  writeFileSync(`${page.slug}.html`, pageTemplate(page, true), 'utf8');
}

writeFileSync('sitemap-google.xml', sitemap(pageUrls, true), 'utf8');
writeFileSync('sitemap-naver.xml', sitemap(pageUrls, false), 'utf8');
writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site.baseUrl}/sitemap-google.xml</loc>
    <lastmod>${site.lastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${site.baseUrl}/sitemap-naver.xml</loc>
    <lastmod>${site.lastmod}</lastmod>
  </sitemap>
</sitemapindex>
`, 'utf8');
writeFileSync('rss.xml', rss([...guidePages, ...moneyPages.slice(0, 4)]), 'utf8');
