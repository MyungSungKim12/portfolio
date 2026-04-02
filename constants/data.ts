// ── 현재 회사 경력 ──────────────────────────────────────
export const CAREER = {
  company: '(주)한국모바일인증',
  role: '웹 개발자',
  period: '2023.10 ~ 현재 (재직 중)',
  description: '개인서비스(MyOTP, 인포캡) 운영 및 내부시스템 개발',
  works: [
    {
      category: 'MyOTP 서비스 운영 및 통신사 API 연동',
      items: [
        '통신 3사(SKT·KT·LGU+) API 연동 운영으로 1회용 안심 비밀번호 부가서비스 안정적 유지',
        '신규 통신사 API 연동 개발로 서비스 기능 확장에 기여',
        'API 장애 발생 시 Linux 서버 로그 분석을 통한 신속한 원인 파악 및 처리, 서비스 다운타임 최소화',
        '반복 장애 패턴 분석을 통한 사전 예방 프로세스 수립으로 장애 발생 빈도 감소에 기여',
      ],
    },
    {
      category: '내부시스템 개발 및 디지털 전환 주도',
      items: [
        '사내 업무 관리 시스템(고객사 정보, 일일 영업 보고서, 매출 관리) 신규 기능 개발 및 운영',
        '종이 기반 휴가 신청 프로세스를 전자 휴가관리 시스템으로 전환, 업무 처리 시간 단축',
        '전자결재 시스템 도입으로 사내 문서 결재 프로세스 디지털화, 직원 업무 효율성 향상',
        '직원 요구사항 수집 → 설계 → 개발 → 배포까지 개발 사이클 전반 담당',
      ],
    },
    {
      category: '배치 작업 운영 및 레거시 유지보수',
      items: [
        '일 마감 배치 작업 설계 및 운영으로 데이터 정합성 유지, 배치 이상 감지 및 재처리 프로세스 수립',
        'JSP/Java 기반 레거시 시스템 코드 분석 및 리팩토링으로 유지보수성 향상',
        'Linux 서버 환경에서 로그 모니터링 및 장애 대응 수행',
      ],
    },
  ],
  techStack: ['Java', 'JSP', 'Spring Framework', 'Spring Boot', 'JavaScript', 'jQuery', 'MSSQL', 'Linux'],

  troubles: [
    {
      problem: '통신사 API 응답 스펙 차이로 인한 데이터 파싱 오류',
      solution: 'SKT·KT·LGU+ 3사 응답 포맷을 공통 인터페이스로 추상화하고, 통신사별 파싱 로직을 분리하여 처리',
    },
    {
      problem: 'API 장애 발생 시 원인 파악이 지연되어 서비스 다운타임 증가',
      solution: 'Linux 서버 로그 패턴 분석으로 반복 장애 유형을 분류하고, 장애 유형별 대응 프로세스를 문서화하여 초기 대응 시간 단축',
    },
    {
      problem: '일 마감 배치 작업 실패 시 데이터 정합성 깨지는 문제',
      solution: '배치 실행 결과 로그 모니터링 체계 구축 및 실패 시 재처리 프로세스 수립으로 데이터 정합성 유지',
    },
    {
      problem: '전자결재 시스템 도입 시 기존 종이 결재 프로세스와 워크플로우 불일치',
      solution: '부서별 결재 단계를 인터뷰로 수집하여 시스템 워크플로우로 재설계, 단계별 승인 상태 관리 로직 구현',
    },
    {
      problem: 'JSP 레거시 코드의 비즈니스 로직과 View 로직이 혼재되어 유지보수 어려움',
      solution: '기능 단위로 로직을 분리하고 공통 유틸 함수로 추출하여 리팩토링, 유지보수성 향상에 기여',
    },
  ],
};

// ── 개인 프로젝트: MovieFilter ──────────────────────────
export const PROJECT_MOVIEFILTER = {
  title: 'MovieFilter',
  subtitle: '감정 기반 영화 추천 서비스',
  period: '2026.01 ~ 2026.03',
  type: '2인 팀 프로젝트',
  deployUrl: 'https://movie-filter-fe-mauve.vercel.app',
  description:
    '사용자의 감정과 장르를 선택하면 어울리는 영화를 추천해주는 풀스택 웹 서비스. TMDB / IMDb / Metacritic / Rotten Tomatoes 4개 평점을 동시에 연동하고, OTT 플랫폼 바로가기 및 YouTube 예고편을 제공.',
  images: [
    '/images/moviefilter/01_main.png',
    '/images/moviefilter/02_option.png',
    '/images/moviefilter/03_movie_list.png',
    '/images/moviefilter/04_movie_detail.png',
    '/images/moviefilter/05_movie_rating.png',
    '/images/moviefilter/06_naver_review.png',
    '/images/moviefilter/07_mypage.png',
  ],
  github: {
    fe: 'https://github.com/rlawo32/movie-filter-fe',
    be: 'https://github.com/rlawo32/movie-filter-be',
  },
  techStack: {
    frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Styled-components', 'Zustand', 'TanStack Query'],
    backend: ['Spring Boot 3.4', 'Java 21', 'Spring Security', 'OAuth2', 'JWT', 'Cloudflare R2'],
    database: ['Supabase PostgreSQL', 'RPC 함수 설계', 'RLS 정책 관리'],
    infra: ['Vercel', 'Oracle Cloud VM', 'systemd', 'iptables'],
  },
  features: [
    { icon: '◆', title: 'OAuth2 소셜 로그인 & 인증 체계', desc: 'Google / Kakao / Naver OAuth2 소셜 로그인 연동 및 JWT AccessToken / RefreshToken 이중 인증 체계 구현' },
    { icon: '◆', title: '감정 기반 영화 추천', desc: '사용자 감정·장르 선택 기반 영화 추천 시스템 구현, TMDB / IMDb / Metacritic / Rotten Tomatoes 4개 평점 연동' },
    { icon: '◆', title: '멀티미디어 콘텐츠 연동', desc: 'YouTube 예고편 및 네이버 블로그 리뷰 탭 연동, OTT 플랫폼(Netflix · Wavve · Disney+ · Tving) 바로가기 제공' },
    { icon: '◆', title: '마이페이지 통계 시각화', desc: 'Supabase RPC 함수로 클릭·취향 통계 집계, 바 차트 시각화 마이페이지 구현' },
    { icon: '◆', title: 'Cloudflare R2 이미지 관리', desc: 'Cloudflare R2 연동 프로필 이미지 업로드 / 관리 기능 구현' },
    { icon: '◆', title: 'Vercel + Oracle Cloud 배포', desc: 'Next.js 프론트엔드 Vercel 배포, Spring Boot 백엔드 Oracle Cloud VM에 systemd 서비스로 운영' },
  ],
  troubles: [
    {
      problem: 'Next.js rewrite의 Authorization 헤더 차단 이슈',
      problemDetail: 'Next.js rewrites로 백엔드 API 프록시 구성 시 Authorization 헤더가 자동으로 제거되어 인증이 필요한 모든 API 호출 실패. withCredentials 설정과 함께 사용 시 CORS 정책 충돌 발생.',
      solution: 'API Route Handler로 커스텀 프록시 서버(/local/[...path]/route.ts) 구현. 클라이언트 요청을 Next.js 서버가 중계하여 백엔드로 전달, Authorization 헤더와 쿠키를 그대로 유지하면서 CORS 문제 동시 해결.',
    },
    {
      problem: 'OAuth2 소셜 로그인 배포 환경 리디렉트 오류',
      problemDetail: '로컬 개발 환경에서 소셜 로그인 성공 후 localhost:3000으로 리디렉트 URL이 하드코딩되어 있어 배포 환경에서 로그인 후 연결 거부 오류 발생. 카카오·네이버 개발자 콘솔의 Redirect URI와 실제 서버 주소 불일치 문제 동반.',
      solution: 'OAuth2SuccessHandler에서 리디렉트 URL을 환경변수로 분리하고 배포 도메인으로 변경. 각 소셜 플랫폼 개발자 콘솔에 배포 서버 Redirect URI 등록, 쿠키 secure 옵션도 HTTPS 환경에 맞게 수정.',
    },
    {
      problem: 'CORS 설정 누락으로 배포 후 API 전면 차단',
      problemDetail: '백엔드 CorsConfig에 localhost:3000만 허용되어 있어 Vercel 배포 도메인에서 오는 모든 API 요청 차단. withCredentials: true 설정으로 인해 와일드카드(*) 허용 불가능한 상황.',
      solution: 'CorsConfig에 Vercel 배포 도메인을 명시적으로 추가하고 addAllowedOriginPattern으로 Vercel 프리뷰 URL 패턴도 함께 허용. withCredentials와 함께 특정 도메인 허용 방식으로 CORS 문제 완전 해결.',
    },
    {
      problem: '회사 방화벽으로 인한 8080 포트 아웃바운드 차단',
      problemDetail: '오라클 클라우드 Security List에 8080 포트를 열어도 회사 네트워크 방화벽에서 아웃바운드 8080 포트를 차단하여 배포된 프론트에서 백엔드 API 호출 불가.',
      solution: 'iptables PREROUTING 규칙으로 80 포트 요청을 8080으로 포워딩 설정. 오라클 Security List에 80 포트 Ingress Rule 추가, netfilter-persistent로 규칙 영구 저장하여 재부팅 후에도 유지.',
    },
    {
      problem: 'JWT 토큰 인증 누락으로 API 403 오류',
      problemDetail: 'Vercel 서버에서 백엔드로 요청 중계 시 클라이언트의 Authorization 헤더가 누락되어 인증이 필요한 API에서 403 Forbidden 반환. axios 인스턴스 baseURL이 localhost:8080으로 하드코딩되어 배포 환경에서 모든 API 호출 실패.',
      solution: 'axios 요청 인터셉터에서 localStorage의 accessToken을 읽어 모든 요청에 Authorization 헤더 자동 주입. baseURL을 /local 상대경로로 변경해 Next.js 프록시를 통하도록 수정, 환경변수로 로컬·배포 환경 분리.',
    },
    {
      problem: '서버 재부팅 시 Spring Boot 프로세스 자동 종료',
      problemDetail: 'nohup으로 백엔드 실행 시 서버 재부팅하면 프로세스가 자동 종료되어 서비스 중단. 메모리 부족으로 프로세스가 비정상 종료되어도 자동 복구 불가.',
      solution: 'systemd 서비스로 등록해 서버 부팅 시 자동 실행(systemctl enable). Restart=always 옵션으로 비정상 종료 시 자동 재시작, RestartSec으로 재시작 간격 설정하여 서비스 안정성 확보.',
    },
    {
      problem: 'Gradle 빌드 시 Java 버전 충돌',
      problemDetail: '서버에 Java 17과 Java 21이 동시 설치된 환경에서 Gradle이 Java 17을 자동 감지하여 빌드 실패. Spring Boot 3.4가 Java 17에서 특정 기능 미지원으로 컴파일 오류 발생.',
      solution: 'JAVA_HOME 환경변수를 Java 21 경로로 명시 지정 후 빌드. sudo apt remove로 Java 17 제거하여 버전 충돌 근본 해결.',
    },
  ],
};

// ── 개인 프로젝트: WelfareMap ───────────────────────────
export const PROJECT_WELFAREMAP = {
  title: 'WelfareMap',
  subtitle: '지역 기반 복지 정보 통합 서비스',
  period: '2026.03 ~ 진행 중',
  type: '개인 프로젝트',
  description:
    '고령화 사회를 염두한 지역 기반 복지 정보 통합 서비스입니다. 사용자의 위치·나이대·상황을 기반으로 맞춤 복지 정보를 한눈에 제공하며, 복지로 API와 공공데이터포털 API를 연동하여 실시간 데이터를 제공합니다.',
  images: [
    '/images/welfaremap/01.png',
    '/images/welfaremap/02.png',
    '/images/welfaremap/03.png',
    '/images/welfaremap/04.png',
  ],
  deployUrl: 'https://welfare-map-fe.vercel.app',
  github: {
    fe: 'https://github.com/MyungSungKim12/welfare-map-fe',
    be: 'https://github.com/MyungSungKim12/welfare-map-be',
  },
  techStack: {
    frontend: ['Next.js 15', 'TypeScript', 'Styled-components'],
    backend: ['Spring Boot 3', 'Java 21'],
    database: ['Supabase PostgreSQL'],
    etc: ['카카오맵 API', '복지로 API', '공공데이터포털 API'],
  },
  features: [
    { icon: '◆', title: '위치 기반 맞춤 복지 조회', desc: 'GPS 자동 감지 또는 직접 선택으로 현재 위치 기반 주변 복지 서비스 조회 기능 구현' },
    { icon: '◆', title: '생애주기별 빠른 진입', desc: '영유아·청년·신혼부부·중장년·노년·장애인 6가지 생애주기 카드로 빠른 필터 진입 UI 설계' },
    { icon: '◆', title: '맞춤 필터링 시스템', desc: '나이대·상황 조합 필터로 나에게 해당하는 복지 서비스만 선별 조회' },
    { icon: '◆', title: '고령자 친화 UI/UX', desc: '큰 글씨·큰 버튼·고대비 색상 적용으로 디지털 취약계층도 쉽게 이용 가능한 접근성 설계' },
    { icon: '◆', title: '실시간 복지 데이터 통합', desc: '복지로 API / 공공데이터포털 API 연동으로 전국 복지 서비스 실시간 조회' },
  ],
  troubles: [],
};

// ── 교육 프로젝트: 일해요 ───────────────────────────────
export const PROJECT_ILHAEYO = {
  title: '일해요',
  subtitle: '아르바이트 직원 및 일정 관리 서비스 제공 시스템',  // ← 수정
  period: '2023.04 ~ 2023.06',
  type: '6인 팀 프로젝트',
  description:
    '사장과 직원 모두를 위한 업무 관리 매니저. 직원들 간 일정 관리 및 근무 내역을 한눈에 볼 수 있는 기능을 제공합니다. 사업자와 근로자를 구분한 회원 시스템을 기반으로, 직원 관리 · 급여명세서 · 근태 · 연차 · 전자결재 기능을 통합한 아르바이트 관리 플랫폼입니다.',  // ← 수정
  images: [
    '/images/ilhaeyo/1.png',
    '/images/ilhaeyo/2.png',
    '/images/ilhaeyo/3.png',
    '/images/ilhaeyo/4.png',
    '/images/ilhaeyo/5.png',
    '/images/ilhaeyo/6.png',
    '/images/ilhaeyo/7.png',
    '/images/ilhaeyo/8.png',
    '/images/ilhaeyo/9.png',
    '/images/ilhaeyo/10.png',
    '/images/ilhaeyo/11.png',
    '/images/ilhaeyo/12.png',
    '/images/ilhaeyo/13.png',
    '/images/ilhaeyo/14.png',
    '/images/ilhaeyo/15.png',
    '/images/ilhaeyo/16.png',
    '/images/ilhaeyo/17.png',
    '/images/ilhaeyo/18.png',
    '/images/ilhaeyo/19.png',
    '/images/ilhaeyo/20.png',
    '/images/ilhaeyo/21.png',
    '/images/ilhaeyo/22.png',
  ],
  github: {
    fe: 'https://github.com/sowh5462/profront',
    be: 'https://github.com/sowh5462/proback',
  },
  techStack: {
    frontend: ['React', 'JavaScript', 'HTML/CSS', 'Firebase'],
    backend: ['Spring Framework', 'Java', 'JSP', 'MySQL'],
    database: ['MySQL', 'ERD 설계', '외부 캘린더 API 연동'],
  },
  features: [
    { icon: '◆', title: '사업자 / 근로자 구분 회원 시스템', desc: '사업자와 근로자 역할을 구분한 회원가입 및 로그인 시스템 풀스택 구현' },
    { icon: '◆', title: '직원 관리 & 급여명세서', desc: '직원 정보 관리, 급여 계산 및 명세서 발급 기능 구현' },
    { icon: '◆', title: '근태 · 연차 · 전자결재 관리', desc: '출퇴근 기록, 연차 신청/승인, 전자결재 워크플로우 구현 및 외부 캘린더 API 연동' },
    { icon: '◆', title: 'DB 설계 및 팀 기획 총괄', desc: 'MySQL DB 설계, 팀 내 스토리보드·ERD 총괄, 팀 소통 및 회의 주도' },
  ],
  troubles: [],
};

// 기존 코드 호환용
export const PROJECT = PROJECT_MOVIEFILTER;