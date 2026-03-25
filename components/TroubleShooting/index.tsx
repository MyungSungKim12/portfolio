'use client';

import { useState } from 'react';
import { PROJECT_MOVIEFILTER, CAREER } from '@/constants/data';
import {
  TroubleWrapper,
  SectionLabel,
  SectionTitle,
  CardList,
  TroubleCard,
  ProblemRow,
  SolutionRow,
} from './TroubleShooting.style';
import styled from 'styled-components';

const TabBar = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 4rem;
  border: 1px solid rgba(172, 229, 255, 0.15);
  border-radius: 10px;
  overflow: hidden;
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: 1.1rem 3.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  border: none;
  outline: none;
  background: ${({ $active }) => $active ? 'rgba(0, 150, 255, 0.2)' : 'transparent'};
  color: ${({ $active }) => $active ? '#ACE5FF' : 'rgba(255,255,255,0.4)'};
  border-right: 1px solid rgba(172, 229, 255, 0.15);

  &:last-child { border-right: none; }
  &:hover {
    background: rgba(0, 150, 255, 0.12);
    color: rgba(255, 255, 255, 0.8);
  }
`;

const TABS = [
  {
    key: 'moviefilter',
    label: 'MovieFilter',
    troubles: PROJECT_MOVIEFILTER.troubles,
  },
  {
    key: 'career',
    label: '(주)한국모바일인증',
    troubles: CAREER.troubles,
  },
];

export default function TroubleShooting() {
  const [activeTab, setActiveTab] = useState<'moviefilter' | 'career'>('moviefilter');
  const troubles = TABS.find((t) => t.key === activeTab)!.troubles;

  return (
    <TroubleWrapper>
      <SectionLabel>Trouble Shooting</SectionLabel>
      <SectionTitle>
        트러블 <span>슈팅</span>
      </SectionTitle>

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

      <CardList key={activeTab}>
        {troubles.map((t, i) => (
          <TroubleCard key={i}>
            <ProblemRow>
              <span className="badge">문제</span>
              <p className="text">{t.problem}</p>
            </ProblemRow>
            <SolutionRow>
              <span className="badge">해결</span>
              <p className="text">{t.solution}</p>
            </SolutionRow>
          </TroubleCard>
        ))}
      </CardList>
    </TroubleWrapper>
  );
}