export const sample = (): string => {
  try {
    return 'Output';
  } catch {
    throw new Error('An error occurred while generating output');
  }
};
