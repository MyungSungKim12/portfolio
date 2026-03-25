import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';

export const metadata: Metadata = {
  title: 'Portfolio | MovieFilter',
  description: '감정 기반 영화 추천 서비스 MovieFilter 포트폴리오',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}