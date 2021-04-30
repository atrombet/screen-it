import { SelectOption } from '../interfaces';

export const CATEGORIES: { [key: string]: SelectOption } = {
  action: { value: 'action', displayText: 'Action/Adventure' },
  comedy: { value: 'comedy', displayText: 'Comedy' },
  drama: { value: 'drama', displayText: 'Drama' },
  scifi: { value: 'scifi', displayText: 'Science Fiction' },
  fantasy: { value: 'fantasy', displayText: 'Fantasy' }
};
