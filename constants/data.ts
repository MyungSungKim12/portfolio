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
  period: '2026.01 ~ 진행 중',
  type: '개인 프로젝트',
  description:
    '사용자의 감정과 장르를 선택하면 어울리는 영화를 추천해주는 풀스택 웹 서비스입니다. TMDB / IMDb / Metacritic / Rotten Tomatoes 4개 평점을 동시에 연동하고, OTT 플랫폼 바로가기 및 YouTube 예고편을 제공합니다.',
  github: {
    fe: 'https://github.com/rlawo32/movie-filter-fe',
    be: 'https://github.com/rlawo32/movie-filter-be',
  },
  techStack: {
    frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Styled-components', 'Zustand', 'TanStack Query'],
    backend: ['Spring Boot 3.4', 'Java 21', 'Spring Security', 'OAuth2', 'JWT', 'Cloudflare R2'],
    database: ['MSSQL', 'Supabase PostgreSQL', 'RPC 함수 설계', 'RLS 정책 관리'],
  },
  features: [
    { icon: '🔐', title: 'OAuth2 소셜 로그인 & 인증 체계', desc: 'Google / Kakao / Naver OAuth2 소셜 로그인 연동 및 JWT AccessToken / RefreshToken 이중 인증 체계 구현' },
    { icon: '🎬', title: '감정 기반 영화 추천', desc: '사용자 감정·장르 선택 기반 영화 추천 시스템 구현, TMDB / IMDb / Metacritic / Rotten Tomatoes 4개 평점 연동' },
    { icon: '▶️', title: '멀티미디어 콘텐츠 연동', desc: 'YouTube 예고편 및 네이버 블로그 리뷰 탭 연동, OTT 플랫폼(Netflix · Wavve · Disney+ · Tving) 바로가기 제공' },
    { icon: '📊', title: '마이페이지 통계 시각화', desc: 'Supabase RPC 함수로 클릭·취향 통계 집계, 바 차트 시각화 마이페이지 구현' },
    { icon: '🖼️', title: 'Cloudflare R2 이미지 관리', desc: 'Cloudflare R2 연동 프로필 이미지 업로드 / 관리 기능 구현' },
  ],
  troubles: [
    { problem: 'Next.js rewrite의 Authorization 헤더 차단 이슈', solution: 'API Route 커스텀 프록시 서버로 전환하여 해결' },
    { problem: 'Supabase RLS INSERT 정책 미설정으로 데이터 저장 실패', solution: 'RLS 정책 및 RPC 실행 권한 추가로 해결' },
    { problem: '모든 사용자 데이터가 동일 계정에 쌓이는 인증 오류', solution: 'JWT payload 파싱으로 user_id 저장 플로우 전면 수정' },
    { problem: 'React Query 타이밍 이슈로 인한 조기 실행', solution: 'enabled 조건에 userId 유효성 체크 추가로 조기 실행 방지' },
  ],
};

// ── 교육 프로젝트: 일해요 ───────────────────────────────
export const PROJECT_ILHAEYO = {
  title: '일해요',
  subtitle: '아르바이트 간편 매니저',
  period: '2023.04 ~ 2023.06',
  type: '6인 팀 프로젝트',
  description:
    '사업자와 근로자를 구분한 회원 시스템을 기반으로, 직원 관리 · 급여명세서 · 근태 · 연차 · 전자결재 기능을 통합한 아르바이트 관리 플랫폼입니다. 인천일보아카데미 수료 프로젝트로 팀 내 DB 설계 및 기획을 총괄했습니다.',
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
    { icon: '👥', title: '사업자 / 근로자 구분 회원 시스템', desc: '사업자와 근로자 역할을 구분한 회원가입 및 로그인 시스템 풀스택 구현' },
    { icon: '📋', title: '직원 관리 & 급여명세서', desc: '직원 정보 관리, 급여 계산 및 명세서 발급 기능 구현' },
    { icon: '📅', title: '근태 · 연차 · 전자결재 관리', desc: '출퇴근 기록, 연차 신청/승인, 전자결재 워크플로우 구현 및 외부 캘린더 API 연동' },
    { icon: '🗄️', title: 'DB 설계 및 팀 기획 총괄', desc: 'MySQL DB 설계, 팀 내 스토리보드·ERD 총괄, 팀 소통 및 회의 주도' },
  ],
  troubles: [],
};

// 기존 코드 호환용
export const PROJECT = PROJECT_MOVIEFILTER;