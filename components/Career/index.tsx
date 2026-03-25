'use client';

import { CAREER } from '@/constants/data';
import {
  CareerWrapper,
  SectionLabel,
  SectionTitle,
  CareerCard,
  CareerHeader,
  CareerBody,
  WorkGroup,
  WorkList,
  WorkItem,
  StackFooter,
  StackTag,
} from './Career.style';

export default function Career() {
  return (
    <CareerWrapper>
      <SectionLabel>Experience</SectionLabel>
      <SectionTitle>
        경력 <span>사항</span>
      </SectionTitle>

      <CareerCard>
        <CareerHeader>
          <div className="career_top">
            <h3 className="career_company">{CAREER.company}</h3>
            <span className="career_period">{CAREER.period}</span>
          </div>
          <p className="career_role">{CAREER.role}</p>
          <p className="career_desc">{CAREER.description}</p>
        </CareerHeader>

        <CareerBody>
          {CAREER.works.map((work) => (
            <WorkGroup key={work.category}>
              <p className="work_category">{work.category}</p>
              <WorkList>
                {work.items.map((item) => (
                  <WorkItem key={item}>{item}</WorkItem>
                ))}
              </WorkList>
            </WorkGroup>
          ))}
        </CareerBody>

        <StackFooter>
          <span className="stack_label">Tech</span>
          {CAREER.techStack.map((t) => (
            <StackTag key={t}>{t}</StackTag>
          ))}
        </StackFooter>
      </CareerCard>
    </CareerWrapper>
  );
}