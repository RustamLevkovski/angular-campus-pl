export type BlockType = 'text' | 'title' | 'ordered-list' | 'unordered-list';

export interface SectionBlock {
  type: BlockType;
  
  // For 'title'
  titleText?: string;
  isBold?: boolean;
  
  // For 'text'
  textContent?: string;
  
  // For 'ordered-list' and 'unordered-list'
  listItems?: string[];
}
