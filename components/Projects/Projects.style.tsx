'use client';

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const ProjectsWrapper = styled.section`
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
  margin-bottom: 4rem;
  text-align: center;

  span { color: #ACE5FF; }
`;

export const TabBar = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 4rem;
  border: 1px solid rgba(172, 229, 255, 0.15);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 960px;

  @media (max-width: 768px) {
    margin-bottom: 2.4rem;
  }
`;

export const TabButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 1.1rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  border: none;
  outline: none;

  background: ${({ $active }) =>
    $active ? 'rgba(0, 150, 255, 0.2)' : 'transparent'};
  color: ${({ $active }) =>
    $active ? '#ACE5FF' : 'rgba(255,255,255,0.4)'};
  border-right: 1px solid rgba(172, 229, 255, 0.15);

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: rgba(0, 150, 255, 0.12);
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 1rem 0.8rem;
  }
`;

export const ProjectCard = styled.div`
  width: 100%;
  max-width: 960px;
  border: 1px solid rgba(172, 229, 255, 0.15);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
  animation: ${fadeInUp} 0.5s ease forwards;
`;

export const CardHeader = styled.div`
  padding: 3.6rem 4rem;
  border-bottom: 1px solid rgba(172, 229, 255, 0.1);
  background: rgba(0, 150, 255, 0.05);

  @media (max-width: 768px) {
    padding: 2.4rem 2rem;
  }

  .header_top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-bottom: 1.6rem;
  }

  .header_title {
    font-size: 2.4rem;
    font-weight: 700;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    span {
      color: #ACE5FF;
      margin-left: 1.2rem;
      font-size: 1.5rem;
      font-weight: 400;

      @media (max-width: 768px) {
        display: block;
        margin-left: 0;
        margin-top: 0.4rem;
        font-size: 1.4rem;
      }
    }
  }

  .header_badges {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  .badge_period {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(172, 229, 255, 0.2);
    border-radius: 999px;
    padding: 0.3rem 1.1rem;
    white-space: nowrap;
  }

  .badge_type {
    font-size: 1.2rem;
    color: #ACE5FF;
    border: 1px solid rgba(172, 229, 255, 0.3);
    border-radius: 999px;
    padding: 0.3rem 1.1rem;
    background: rgba(172, 229, 255, 0.07);
    white-space: nowrap;
  }

  .header_desc {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.8;
    max-width: 680px;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

export const CardSection = styled.div`
  padding: 3.2rem 4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 2.4rem 2rem;
  }

  .section_title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ACE5FF;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 1.6rem;
  }
`;

export const StackGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StackRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  .layer_label {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.35);
    min-width: 72px;
  }
`;

export const StackTag = styled.span`
  display: inline-flex;
  padding: 0.4rem 1.1rem;
  border: 1px solid rgba(172, 229, 255, 0.2);
  border-radius: 6px;
  background: rgba(172, 229, 255, 0.06);
  font-size: 1.25rem;
  color: #ACE5FF;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(172, 229, 255, 0.12);
    border-color: rgba(172, 229, 255, 0.4);
  }
`;

export const FeatureList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  list-style: none;
`;

export const FeatureItem = styled.li`
  display: flex;
  gap: 1.4rem;
  align-items: flex-start;

  .feature_icon {
    font-size: 1.8rem;
    flex-shrink: 0;
  }

  .feature_content {
    .feature_title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 0.4rem;

      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
    }
    .feature_desc {
      font-size: 1.35rem;
      color: rgba(255, 255, 255, 0.5);
      line-height: 1.7;

      @media (max-width: 768px) {
        font-size: 1.3rem;
      }
    }
  }
`;

export const GithubLinks = styled.div`
  padding: 2.4rem 4rem;
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  border: 1px solid rgba(172, 229, 255, 0.3);
  border-radius: 8px;
  background: rgba(0, 150, 255, 0.1);
  color: #ACE5FF;
  font-size: 1.35rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 150, 255, 0.25);
    box-shadow: 0 0 16px rgba(172, 229, 255, 0.25);
    transform: translateY(-2px);
  }
`;