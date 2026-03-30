'use client';

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const CareerWrapper = styled.section`
  width: 100%;
  background: #05070A;
  padding: 10rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 7rem 1.6rem;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

export const CareerCard = styled.div`
  width: 100%;
  max-width: 960px;
  border: 1px solid rgba(172, 229, 255, 0.15);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
  animation: ${fadeInUp} 0.8s ease forwards;
`;

export const CareerHeader = styled.div`
  padding: 3.2rem 4rem;
  border-bottom: 1px solid rgba(172, 229, 255, 0.1);
  background: rgba(0, 150, 255, 0.05);

  @media (max-width: 768px) {
    padding: 2.4rem 2rem;
  }

  .career_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-bottom: 1rem;
  }

  .career_company {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .career_period {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(172, 229, 255, 0.2);
    border-radius: 999px;
    padding: 0.3rem 1.1rem;
    white-space: nowrap;
  }

  .career_role {
    font-size: 1.4rem;
    color: #ACE5FF;
    margin-bottom: 0.6rem;
  }

  .career_desc {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const CareerBody = styled.div`
  padding: 3.2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    padding: 2.4rem 2rem;
    gap: 2.4rem;
  }
`;

export const WorkGroup = styled.div`
  .work_category {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.45rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1.35rem;
    }

    &::before {
      content: '';
      display: inline-block;
      width: 3px;
      height: 1.4rem;
      background: #ACE5FF;
      border-radius: 2px;
      flex-shrink: 0;
    }
  }
`;

export const WorkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style: none;
  padding-left: 1.3rem;
`;

export const WorkItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.38rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  &::before {
    content: '•';
    color: #ACE5FF;
    flex-shrink: 0;
    margin-top: 0.05rem;
  }
`;

export const StackFooter = styled.div`
  padding: 2rem 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .stack_label {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.35);
    margin-right: 0.4rem;
  }
`;

export const StackTag = styled.span`
  display: inline-flex;
  padding: 0.3rem 1rem;
  border: 1px solid rgba(172, 229, 255, 0.2);
  border-radius: 6px;
  background: rgba(172, 229, 255, 0.06);
  font-size: 1.2rem;
  color: #ACE5FF;
`;