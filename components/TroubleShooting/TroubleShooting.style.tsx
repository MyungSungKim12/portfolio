'use client';

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const TroubleWrapper = styled.section`
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

export const CardList = styled.ul`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style: none;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

export const TroubleCard = styled.li`
  border: 1px solid rgba(172, 229, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
`;

export const ProblemRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 2rem 2.4rem;
  background: rgba(255, 100, 50, 0.05);
  border-bottom: 1px solid rgba(172, 229, 255, 0.08);

  .badge {
    flex-shrink: 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: #FF8C6B;
    border: 1px solid rgba(255, 140, 107, 0.4);
    border-radius: 4px;
    padding: 0.2rem 0.7rem;
    margin-top: 0.15rem;
    letter-spacing: 0.05em;
  }

  .text {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.6;
  }
`;

export const SolutionRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
  padding: 2rem 2.4rem;
  background: rgba(0, 200, 120, 0.04);

  .badge {
    flex-shrink: 0;
    font-size: 1.1rem;
    font-weight: 700;
    color: #6BFFB8;
    border: 1px solid rgba(107, 255, 184, 0.4);
    border-radius: 4px;
    padding: 0.2rem 0.7rem;
    margin-top: 0.15rem;
    letter-spacing: 0.05em;
  }

  .text {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.75);
    line-height: 1.6;
  }
`;