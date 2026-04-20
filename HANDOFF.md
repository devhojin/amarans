# AMARANS 사이트 — 핸드오프 문서

## 🎯 목표
이 프로젝트를 **Vercel에 배포**하고 **`amarans.co.kr` (또는 사용자가 지정한 도메인)** 에 연결합니다.

---

## 📦 프로젝트 구조

```
/
├── index.html          # 메인 진입점
├── styles.css          # 전체 스타일
├── app.jsx             # React 컴포넌트 (Nav, Hero, Services, Contact 폼 등)
├── src/
│   └── data.js         # 사이트 콘텐츠 데이터 (window.AMARANS_DATA)
└── (기타 이미지/에셋)
```

### 기술 스택
- **정적 HTML** + React 18 (CDN) + Babel Standalone (CDN, 브라우저 트랜스파일)
- 빌드 도구 없음. 모든 게 브라우저에서 직접 실행.
- **중요**: `app.jsx`는 `<script type="text/babel">` 로 로드됨. 프로덕션에서는 번들/트랜스파일하면 더 좋지만, 현 상태로도 정상 작동.

### 로컬 확인
- 그냥 `index.html`을 웹서버로 서빙하면 됨 (`python3 -m http.server 8000` 등)
- `file://` 직접 열기는 안 됨 (CORS로 JSX 로드 실패)

---

## 📧 Contact 폼 — Formspree 연동

### 현재 세팅
- **서비스**: [Formspree](https://formspree.io) 무료 플랜
- **엔드포인트**: `https://formspree.io/f/xyklpday`
- **수신 이메일**: `sales@amarans.co.kr` (✅ 인증 완료)
- **폼 필드**:
  - `name` (이름)
  - `organization` (회사/조직)
  - `email` (이메일, 필수, 유효성 검증)
  - `phone` (연락처)
  - `interested_in` (관심 서비스: 테크 케어 / 수주 케어 / 플랜 케어 / 기타·상담)
  - `message` (프로젝트 설명)
  - `_subject` (자동 생성: `[AMARANS] 신규 문의 · {이름} · {선택케어}`)
  - `_gotcha` (honeypot 스팸 방지, hidden)

### 코드 위치
`app.jsx` 안 `ContactForm` 컴포넌트 근처:
```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyklpday';
```

### 동작
1. 사용자 제출 → 클라이언트 측 이메일 형식 검증 (정규식)
2. `fetch(POST)` 로 Formspree 전송 (FormData)
3. 성공 → 감사 메시지 화면으로 전환 (`ct-success`)
4. 실패 → 빨간 배너로 에러 메시지 노출 (`ct-error-banner`)
5. Formspree가 `sales@amarans.co.kr`로 이메일 발송 + 대시보드에 기록

### 관리 방법
- Formspree 대시보드 로그인: https://formspree.io/login
- 계정: (최초 가입자 이메일로 로그인)
- 폼 이름: `Amarans Contact`
- **Submissions** 탭: 모든 제출 기록 저장
- **Workflow** 탭 → **Actions** → **Email**: 수신 이메일 변경 가능
- 무료 플랜 한도: **월 50건**. 초과 시 대시보드에는 쌓이지만 이메일 발송이 중단됨.
  - 초과 걱정되면 **Basic 플랜($10/월, 1000건)** 으로 업그레이드

### 이메일/스팸 관련 팁
- Formspree에서 보내는 이메일 발신자는 `submissions@formspree.io` 류
- 스팸함에 들어가면 `sales@amarans.co.kr` 수신서버에 `formspree.io` 도메인을 화이트리스트 등록
- 스팸 늘어나면 Formspree → Settings → Spam Protection에서 **Formshield** 또는 **CAPTCHA** 켜기

---

## 🚀 Vercel 배포 방법 (권장: GitHub 연동)

### 1. GitHub에 코드 업로드
```bash
# 압축 풀린 폴더에서
git init
git add .
git commit -m "Initial: AMARANS site"
# GitHub에 new repository 생성 (예: amarans-site, Public)
git remote add origin https://github.com/<USER>/amarans-site.git
git branch -M main
git push -u origin main
```

### 2. Vercel 연동
1. https://vercel.com 가입 (GitHub로 로그인 권장)
2. 대시보드 → **Add New** → **Project**
3. GitHub repo (`amarans-site`) 선택 → **Import**
4. **Framework Preset**: `Other` (정적 사이트이므로)
5. **Build & Output Settings**: 전부 기본값 (빌드 명령어 없음)
6. **Deploy** 클릭 → 약 30초 후 `amarans-site.vercel.app` 에서 라이브

### 3. `vercel.json` (선택사항)
SPA가 아니라 단일 HTML이므로 특별한 설정 불필요. 필요시 리라이트·헤더 설정용:
```json
{
  "cleanUrls": true,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    }
  ]
}
```

---

## 🌐 도메인 연결 (`amarans.co.kr`)

### Vercel 쪽 설정
1. Vercel 프로젝트 → **Settings** → **Domains**
2. `amarans.co.kr` 입력 → **Add**
3. `www.amarans.co.kr` 도 추가 (둘 다 연결, Vercel이 자동으로 한쪽을 canonical로 설정)
4. Vercel이 요구하는 DNS 레코드 값을 보여줌:
   - **A 레코드**: `amarans.co.kr` → `76.76.21.21`
   - **CNAME 레코드**: `www.amarans.co.kr` → `cname.vercel-dns.com`
   
   (Vercel이 실제 값을 화면에 띄워주니 그 값을 그대로 사용)

### 도메인 등록처(가비아/후이즈/카페24 등)에서 DNS 설정
1. 등록처 관리 페이지 로그인 → **DNS 설정** / **네임서버 설정** 메뉴
2. 기존 A/CNAME 레코드 확인 (**⚠️ MX 레코드는 절대 건드리지 말 것** — 이메일 망가짐)
3. Vercel이 알려준 값으로 레코드 추가:
   - 호스트: `@` (또는 `amarans.co.kr`) / 타입: `A` / 값: `76.76.21.21`
   - 호스트: `www` / 타입: `CNAME` / 값: `cname.vercel-dns.com`
4. 저장 → DNS 전파 대기 (보통 5분~1시간, 최대 24시간)
5. Vercel 대시보드가 자동으로 검증 → **Valid Configuration** 뜨면 완료
6. SSL/HTTPS는 Vercel이 Let's Encrypt로 자동 발급

### 이메일 보호
- `sales@amarans.co.kr`, `korea@amarans.co.kr` 등 이메일은 **MX 레코드**로 작동 중
- DNS 변경 시 MX 레코드는 **그대로 유지**해야 함
- 현재 MX 레코드를 관리하는 곳(구글 워크스페이스 / 네이버웍스 / 카페24 메일 등)을 먼저 확인하고 문서화 권장

---

## ✏️ 콘텐츠 수정 방법

### 텍스트/데이터
- **`src/data.js`** — `window.AMARANS_DATA` 객체 안:
  - `services` — 3개 메인 서비스
  - `plans` — 케어 플랜
  - `cases` — 프로젝트 사례
  - `team` — 팀원 정보
  - `faq` — 자주 묻는 질문
  - `about` — 회사 소개
- 수정 후 git push → Vercel 자동 재배포

### 스타일
- **`styles.css`** — 모든 CSS
- CSS 변수 (상단 `:root`):
  - `--bg` (배경), `--fg` (전경), `--accent` (메인 액센트 컬러) 등
  - 전역 톤 변경하려면 이 변수들만 바꾸면 됨

### 레이아웃/기능
- **`app.jsx`** — React 컴포넌트
- 섹션별로 컴포넌트가 분리되어 있음 (Nav, Hero, Services, Plans, Cases, Team, FAQ, ContactForm, Footer 등)
- 캐시 무효화: `index.html` 하단 `src="app.jsx?v=11"`의 `v=` 숫자를 올리면 됨

---

## ⚠️ 알려진 한계 / 개선 여지

1. **JSX 브라우저 트랜스파일**: 첫 페이지 로드 시 Babel이 300KB+ 다운로드 후 JSX를 파싱. 초기 로딩이 1~2초 느림.
   - 개선: Vite/esbuild로 프리빌드하여 번들된 JS 파일로 교체 (선택사항)
2. **SEO**: React가 CSR이므로 초기 HTML에 콘텐츠 없음. 크롤러는 대부분 JS 렌더링 가능하지만, SSR/SSG로 가면 더 안전.
   - 개선: Next.js로 마이그레이션 (큰 작업)
3. **Formspree 월 50건 한도**: 문의가 많아지면 업그레이드 또는 자체 메일 백엔드 필요
4. **이미지 최적화**: 현재 원본 해상도 그대로 서빙 중일 수 있음. Vercel의 `next/image` 없이는 수동 최적화 필요

---

## 📞 빠른 체크리스트

- [ ] GitHub에 코드 업로드
- [ ] Vercel 프로젝트 생성 + 배포 확인 (`*.vercel.app` URL 동작)
- [ ] 도메인 등록처에서 현재 DNS(특히 MX) 백업/기록
- [ ] Vercel에 커스텀 도메인 추가
- [ ] 도메인 등록처 DNS에 A/CNAME 레코드 추가
- [ ] `https://amarans.co.kr` 접속 확인
- [ ] Contact 폼에서 실제 제출 테스트 → `sales@amarans.co.kr` 수신 확인
- [ ] (선택) `vercel.json` 추가로 헤더 강화
- [ ] (선택) `robots.txt`, `sitemap.xml` 추가 (SEO)

---

## 🆘 문제 생기면

- Vercel 빌드 실패: Vercel 대시보드 → Deployments → 해당 배포의 **Build Logs** 확인
- 도메인 연결 안 됨: 24시간 대기. 그래도 안 되면 `dig amarans.co.kr` / `dig www.amarans.co.kr` 로 DNS 전파 확인
- Formspree 이메일 안 옴: 스팸함 확인 → Formspree 대시보드 Submissions 기록 있는지 확인 (있으면 수신서버 문제, 없으면 폼 전송 문제)
- 폼 에러: 브라우저 DevTools → Network 탭에서 `formspree.io/f/xyklpday` 요청 응답 확인
