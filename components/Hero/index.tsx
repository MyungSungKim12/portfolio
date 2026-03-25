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
          Frontend Developer
        </HeroBadge>

        <HeroTitle>
          안녕하세요,<br />
          개발자 <span>김명성</span>입니다
        </HeroTitle>

        <HeroSubtitle>
          Next.js와 Spring Boot로 풀스택 서비스를 개발합니다.<br />
          사용자 경험을 고민하며 완성도 높은 제품을 만들고 싶습니다.
        </HeroSubtitle>

        <HeroButtons>
          <PrimaryButton href="https://github.com/MyungSungKim12" target="_blank" rel="noopener noreferrer">
            <GitBranch  size={18} />
            GitHub
          </PrimaryButton>
          <SecondaryButton href="mailto:your@email.com">
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