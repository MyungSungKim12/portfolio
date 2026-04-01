'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { GitBranch, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECT_MOVIEFILTER, PROJECT_WELFAREMAP, PROJECT_ILHAEYO } from '@/constants/data';
import {
  ProjectsWrapper, SectionLabel, SectionTitle,
  TabBar, TabButton,
  ProjectCard, CardHeader, CardSection,
  StackGroup, StackRow, StackTag,
  FeatureList, FeatureItem,
  GithubLinks, GithubButton,
  // 새로 추가
  ImageSlider, SliderTrack, SliderImage,
  SliderBtn, SliderDots, SliderDot,
  TroubleList, TroubleItem,
} from './Projects.style';

const TABS = [
  { key: 'moviefilter', label: 'MovieFilter', data: PROJECT_MOVIEFILTER },
  { key: 'welfaremap',  label: 'WelfareMap',  data: PROJECT_WELFAREMAP },
  { key: 'ilhaeyo',    label: '일해요',       data: PROJECT_ILHAEYO },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'moviefilter' | 'welfaremap' | 'ilhaeyo'>('moviefilter');
  const [slideIdx, setSlideIdx] = useState(0);
  const project = TABS.find((t) => t.key === activeTab)!.data;
  const images = (project as any).images ?? [];

  const handleTab = (key: string) => {
    setActiveTab(key as typeof activeTab);
    setSlideIdx(0);
  };

  const prev = () => setSlideIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setSlideIdx((i) => (i + 1) % images.length);

  return (
    <ProjectsWrapper>
      <SectionLabel>Projects</SectionLabel>
      <SectionTitle>주요 <span>프로젝트</span></SectionTitle>

      <TabBar>
        {TABS.map((tab) => (
          <TabButton
            key={tab.key}
            $active={activeTab === tab.key}
            onClick={() => handleTab(tab.key)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabBar>

      <ProjectCard key={activeTab}>

        {/* 이미지 슬라이더 */}
        {images.length > 0 && (
          <ImageSlider>
            <SliderBtn $dir="left" onClick={prev}><ChevronLeft size={20} /></SliderBtn>
            <SliderTrack>
              <SliderImage
                src={images[slideIdx]}
                alt={`${project.title} 스크린샷 ${slideIdx + 1}`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </SliderTrack>
            <SliderBtn $dir="right" onClick={next}><ChevronRight size={20} /></SliderBtn>
            <SliderDots>
              {images.map((_: string, i: number) => (
                <SliderDot key={i} $active={i === slideIdx} onClick={() => setSlideIdx(i)} />
              ))}
            </SliderDots>
          </ImageSlider>
        )}

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
                {(tags as string[]).map((t) => <StackTag key={t}>{t}</StackTag>)}
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

        {/* 트러블슈팅 */}
        {(project as any).troubles?.length > 0 && (
          <CardSection>
            <p className="section_title">Trouble Shooting</p>
            <TroubleList>
              {(project as any).troubles.map((t: any, i: number) => (
                <TroubleItem key={i}>
                  <div className="trouble_problem">
                    <span className="trouble_label">Problem</span>
                    <p className="trouble_title">{t.problem}</p>
                    {t.problemDetail && <p className="trouble_detail">{t.problemDetail}</p>}
                  </div>
                  <div className="trouble_solution">
                    <span className="trouble_label">Solution</span>
                    <p className="trouble_detail">{t.solution}</p>
                  </div>
                </TroubleItem>
              ))}
            </TroubleList>
          </CardSection>
        )}

        {/* 링크 버튼 */}
        <GithubLinks>
          {(project as any).deployUrl && (
            <GithubButton href={(project as any).deployUrl} target="_blank" rel="noopener noreferrer" $primary>
              <ExternalLink size={15} /> 배포 사이트
            </GithubButton>
          )}
          <GithubButton href={project.github.fe} target="_blank" rel="noopener noreferrer">
            <GitBranch size={15} /> Frontend 레포
          </GithubButton>
          {project.github.be && (
            <GithubButton href={project.github.be} target="_blank" rel="noopener noreferrer">
              <GitBranch size={15} /> Backend 레포
            </GithubButton>
          )}
        </GithubLinks>

      </ProjectCard>
    </ProjectsWrapper>
  );
}