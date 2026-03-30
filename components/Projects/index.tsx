'use client';

import { useState } from 'react';
import { GitBranch } from 'lucide-react';
import { PROJECT_MOVIEFILTER, PROJECT_WELFAREMAP, PROJECT_ILHAEYO } from '@/constants/data';
import {
  ProjectsWrapper, SectionLabel, SectionTitle,
  TabBar, TabButton,
  ProjectCard, CardHeader, CardSection,
  StackGroup, StackRow, StackTag,
  FeatureList, FeatureItem,
  GithubLinks, GithubButton,
} from './Projects.style';

const TABS = [
  { key: 'moviefilter',  label: 'MovieFilter',  data: PROJECT_MOVIEFILTER },
  { key: 'welfaremap',   label: 'WelfareMap',   data: PROJECT_WELFAREMAP },
  { key: 'ilhaeyo',      label: '일해요',        data: PROJECT_ILHAEYO },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'moviefilter' | 'welfaremap' | 'ilhaeyo'>('moviefilter');
  const project = TABS.find((t) => t.key === activeTab)!.data;

  return (
    <ProjectsWrapper>
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>주요 <span>프로젝트</span></SectionTitle>

      {/* 탭 버튼 */}
      <TabBar>
        {TABS.map((tab) => (
          <TabButton
            key={tab.key}
            $active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabBar>

      {/* 프로젝트 카드 — key로 탭 전환 시 애니메이션 재실행 */}
      <ProjectCard key={activeTab}>

        {/* 헤더 */}
        <CardHeader>
          <div className="header_top">
            <h3 className="header_title">
              {project.title}
              <span>{project.subtitle}</span>
            </h3>
            <div className="header_badges">
              <span className="badge_period">{project.period}</span>
              <span className="badge_type">{project.type}</span>
            </div>
          </div>
          <p className="header_desc">{project.description}</p>
        </CardHeader>

        {/* 기술 스택 */}
        <CardSection>
          <p className="section_title">Tech Stack</p>
          <StackGroup>
            {Object.entries(project.techStack).map(([layer, tags]) => (
              <StackRow key={layer}>
                <span className="layer_label">{layer}</span>
                {tags.map((t: string) => <StackTag key={t}>{t}</StackTag>)}
              </StackRow>
            ))}
          </StackGroup>
        </CardSection>

        {/* 주요 구현 내용 */}
        <CardSection>
          <p className="section_title">주요 구현 내용</p>
          <FeatureList>
            {project.features.map((f) => (
              <FeatureItem key={f.title}>
                <span className="feature_icon">{f.icon}</span>
                <div className="feature_content">
                  <p className="feature_title">{f.title}</p>
                  <p className="feature_desc">{f.desc}</p>
                </div>
              </FeatureItem>
            ))}
          </FeatureList>
        </CardSection>

        {/* GitHub 링크 */}
        <GithubLinks>
          <GithubButton href={project.github.fe} target="_blank" rel="noopener noreferrer">
            <GitBranch size={15} /> Frontend 레포
          </GithubButton>
          <GithubButton href={project.github.be} target="_blank" rel="noopener noreferrer">
            <GitBranch size={15} /> Backend 레포
          </GithubButton>
        </GithubLinks>

      </ProjectCard>
    </ProjectsWrapper>
  );
}