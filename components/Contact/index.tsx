'use client';

import { GitBranch, Mail, FileText } from 'lucide-react';
import {
  ContactWrapper,
  SectionLabel,
  SectionTitle,
  SectionDesc,
  LinkGrid,
  ContactLink,
  Divider,
  Footer,
} from './Contact.style';

export default function Contact() {
  return (
    <ContactWrapper>
      <SectionLabel>Contact</SectionLabel>
      <SectionTitle>
        함께 <span>일해요</span>
      </SectionTitle>
      <SectionDesc>
        새로운 기회나 협업 제안은 언제든 환영합니다.<br />
        아래 링크로 편하게 연락주세요.
      </SectionDesc>

      <LinkGrid>
        <ContactLink
          href="https://github.com/MyungSungKim12"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon_wrap">
            <GitBranch size={22} />
          </div>
          GitHub
        </ContactLink>

        <ContactLink href="mailto:your@email.com">
          <div className="icon_wrap">
            <Mail size={22} />
          </div>
          Email
        </ContactLink>

        <ContactLink
          href="https://github.com/MyungSungKim12/portfolio_MovieFilter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon_wrap">
            <FileText size={22} />
          </div>
          Portfolio
        </ContactLink>
      </LinkGrid>

      <Divider />
      <Footer>© 2026 MyungSung Kim. All rights reserved.</Footer>
    </ContactWrapper>
  );
}