'use client';

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const AboutWrapper = styled.section`
  width: 100%;
  background: #05070A;
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionLabel = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #ACE5FF;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6rem;
  text-align: center;

  span { color: #ACE5FF; }
`;

export const AboutGrid = styled.div`
  width: 100%;
  max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.4rem;
  animation: ${fadeInUp} 0.8s ease forwards;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;   
  }
`;

export const AboutCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(172, 229, 255, 0.15);
  border-radius: 16px;
  padding: 2.8rem;

  .card_icon { font-size: 2.8rem; margin-bottom: 1.4rem; }
  .card_title { font-size: 1.7rem; font-weight: 700; color: #ffffff; margin-bottom: 1rem; }
  .card_desc { font-size: 1.4rem; color: rgba(255,255,255,0.5); line-height: 1.8; }
`;

export const StackSection = styled.div`
  width: 100%;
  max-width: 960px;
  margin-top: 4rem;
`;

export const StackTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: #ACE5FF;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1.6rem;
`;

export const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;   /* ← 추가 */
  }
`;

export const StackRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.4rem 1.8rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(172,229,255,0.1);
  border-radius: 10px;

  .stack_label { font-size: 1.2rem; color: rgba(255,255,255,0.35); min-width: 68px; }
  .stack_tags { display: flex; flex-wrap: wrap; gap: 0.6rem; }
`;

export const StackTag = styled.span`
  font-size: 1.2rem;
  padding: 0.3rem 1rem;
  border: 1px solid rgba(172,229,255,0.2);
  border-radius: 6px;
  background: rgba(172,229,255,0.06);
  color: #ACE5FF;
`;