'use client';

import { CAREER } from '@/constants/data';
import {
  TroubleWrapper,
  SectionLabel,
  SectionTitle,
  CardList,
  TroubleCard,
  ProblemRow,
  SolutionRow,
} from './TroubleShooting.style';

export default function TroubleShooting() {
  return (
    <TroubleWrapper>
      <SectionLabel>Trouble Shooting</SectionLabel>
      <SectionTitle>
        트러블 <span>슈팅</span>
      </SectionTitle>

      <CardList>
        {CAREER.troubles.map((t, i) => (
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