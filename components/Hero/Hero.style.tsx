'use client';

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 12px rgba(172, 229, 255, 0.3); }
  50%       { box-shadow: 0 0 28px rgba(172, 229, 255, 0.7); }
`;

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: #05070A;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20%; left: -10%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(0,150,255,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%; right: -10%;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(172,229,255,0.05) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const HeroInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
  padding: 0 2rem;
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.4rem;
  margin-bottom: 2.8rem;
  border: 1px solid rgba(172, 229, 255, 0.25);
  border-radius: 999px;
  background: rgba(172, 229, 255, 0.07);
  font-size: 1.3rem;
  color: #ACE5FF;
  letter-spacing: 0.08em;
  animation: ${fadeInUp} 0.8s ease forwards;

  .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #ACE5FF;
    animation: ${blink} 2s ease infinite;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(3.6rem, 7vw, 7rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.6rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease 0.2s forwards;

  span { color: #ACE5FF; }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 1.9rem);
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: 4rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease 0.4s forwards;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease 0.6s forwards;

  @media (max-width: 768px) {
    gap: 1.2rem;
    width: 100%;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.4rem 3rem;
  border: 1px solid rgba(172, 229, 255, 0.5);
  border-radius: 8px;
  background: rgba(0, 150, 255, 0.15);
  backdrop-filter: blur(4px);
  color: #ACE5FF;
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${glowPulse} 3s ease infinite;

  &:hover {
    background: rgba(0, 150, 255, 0.3);
    box-shadow: 0 0 24px rgba(172, 229, 255, 0.4);
    color: #ffffff;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1.4rem 2rem;
    font-size: 1.4rem;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.4rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    padding: 1.4rem 2rem;
    font-size: 1.4rem;
  }
`;

export const HeroScrollIndicator = styled.div`
  position: absolute;
  bottom: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease 1s forwards;

  .scroll_text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.3);
    letter-spacing: 0.15em;
  }

  .scroll_bar {
    width: 1px;
    height: 48px;
    background: linear-gradient(to bottom, rgba(172, 229, 255, 0.6), transparent);
    animation: ${blink} 2s ease infinite;
  }
`;