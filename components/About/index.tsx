'use client';

import {
  AboutWrapper, SectionLabel, SectionTitle,
  AboutGrid, AboutCard,
  StackSection, StackTitle, StackGrid, StackRow, StackTag,
} from './About.style';

const CARDS = [
  { title: '현업 실무', desc: '통신사 API 연동으로 서비스를 운영하고, JSP/Java 레거시 시스템부터 사내 시스템 디지털 전환을 주도했습니다.' },
  { title: '개인 프로젝트', desc: 'Next.js + Spring Boot 풀스택으로 영화 추천 서비스와 복지 정보 통합 서비스를 직접 설계하고 구현하고 있습니다.' },
  { title: '트러블슈팅', desc: '장애 패턴 분석부터 JWT 인증 플로우 개선까지, 문제의 근본 원인을 파악하고 해결하는 과정을 즐깁니다.' },
  { title: '꾸준한 성장', desc: '레거시 시스템 유지보수와 모던 스택 개발을 병행하며, 실무와 사이드 프로젝트 모두에서 지속 학습하고 있습니다.' },
];

const STACKS = [
  { label: 'Backend',  tags: ['Java', 'JSP', 'Spring Framework', 'Spring Boot 3'] },
  { label: 'Frontend', tags: ['Next.js 15', 'React 19', 'TypeScript', 'Styled-components'] },
  { label: 'Database', tags: ['MSSQL', 'Supabase PostgreSQL'] },
  { label: 'Etc',      tags: ['SVN', 'Git / GitHub', 'Linux', 'ChatGPT', 'Claude AI'] },
];

export default function About() {
  return (
    <AboutWrapper>
      <SectionLabel>About</SectionLabel>
      <SectionTitle>저를 <span>소개</span>합니다</SectionTitle>

      <AboutGrid>
        {CARDS.map((c) => (
          <AboutCard key={c.title}>
            <h3 className="card_title">{c.title}</h3>
            <p className="card_desc">{c.desc}</p>
          </AboutCard>
        ))}
      </AboutGrid>

      <StackSection>
        <StackTitle>Tech Stack</StackTitle>
        <StackGrid>
          {STACKS.map((s) => (
            <StackRow key={s.label}>
              <span className="stack_label">{s.label}</span>
              <div className="stack_tags">
                {s.tags.map((t) => <StackTag key={t}>{t}</StackTag>)}
              </div>
            </StackRow>
          ))}
        </StackGrid>
      </StackSection>
    </AboutWrapper>
  );
}