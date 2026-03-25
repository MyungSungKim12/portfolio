'use client';

import { GitBranch, Mail } from 'lucide-react';
import {
  HeroWrapper, HeroInner, HeroBadge, HeroTitle,
  HeroSubtitle, HeroButtons, PrimaryButton,
  SecondaryButton, HeroScrollIndicator,
} from './Hero.style';

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroInner>
        <HeroBadge>
          <span className="dot" />
          Developer in Progress
        </HeroBadge>

        <HeroTitle>
          안녕하세요,<br />
          개발자 <span>김명성</span>입니다
        </HeroTitle>

        <HeroSubtitle>
          통신사 API 연동 실무와 레거시 시스템 운영 경험을 바탕으로,<br />
          더 나은 코드와 안정적인 서비스를 고민하며 성장 중인 개발자입니다.
        </HeroSubtitle>

        <HeroButtons>
          <PrimaryButton href="https://github.com/MyungSungKim12" target="_blank" rel="noopener noreferrer">
            <GitBranch  size={18} />
            GitHub
          </PrimaryButton>
          <SecondaryButton href="mailto:korgoddd@gmail.com">
            <Mail size={18} />
            Contact
          </SecondaryButton>
        </HeroButtons>
      </HeroInner>

      <HeroScrollIndicator>
        <span className="scroll_text">SCROLL</span>
        <div className="scroll_bar" />
      </HeroScrollIndicator>
    </HeroWrapper>
  );
}