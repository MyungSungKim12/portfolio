'use client';

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 12px rgba(172, 229, 255, 0.2); }
  50%       { box-shadow: 0 0 28px rgba(172, 229, 255, 0.5); }
`;

export const ContactWrapper = styled.section`
  width: 100%;
  background: #05070A;
  padding: 10rem 2rem 14rem;
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
  margin-bottom: 1.6rem;
  text-align: center;

  span { color: #ACE5FF; }
`;

export const SectionDesc = styled.p`
  font-size: 1.6rem;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  margin-bottom: 5.6rem;
  line-height: 1.7;
`;

export const LinkGrid = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  width: 180px;
  height: 160px;
  border: 1px solid rgba(172, 229, 255, 0.15);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  .icon_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 1px solid rgba(172, 229, 255, 0.2);
    border-radius: 12px;
    background: rgba(172, 229, 255, 0.07);
    color: #ACE5FF;
  }

  &:hover {
    border-color: rgba(172, 229, 255, 0.4);
    background: rgba(172, 229, 255, 0.06);
    color: #ffffff;
    transform: translateY(-4px);
    animation: ${glowPulse} 2s ease infinite;

    .icon_wrap {
      background: rgba(172, 229, 255, 0.15);
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 80px;
  background: linear-gradient(to bottom, transparent, rgba(172, 229, 255, 0.3), transparent);
  margin: 8rem 0 4rem;
`;

export const Footer = styled.footer`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.2);
  text-align: center;
  letter-spacing: 0.05em;
`;