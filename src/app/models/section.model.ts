import { SectionBlock } from './section-block.model';

export interface Section {
  id: number;
  pageName?: string;
  title: string;
  content: string | SectionBlock[];
}

