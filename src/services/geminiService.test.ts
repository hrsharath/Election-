import { describe, it, expect, vi } from 'vitest';
import { getElectionAdvice } from '../services/geminiService';

// Mock the Gemini SDK
vi.mock('@google/genai', () => {
  return {
    GoogleGenAI: class {
      constructor() {}
      models = {
        generateContent: vi.fn().mockResolvedValue({
          text: 'Mocked Gemini response'
        }),
        generateContentStream: vi.fn().mockResolvedValue({
          [Symbol.asyncIterator]: async function* () {
            yield { text: 'Mocked' };
            yield { text: ' stream' };
          }
        })
      };
      // For compatibility with previous implementations
      getGenerativeModel = vi.fn().mockReturnValue({
        generateContent: vi.fn().mockResolvedValue({
          response: { text: () => 'Mocked text' }
        }),
        generateContentStream: vi.fn().mockResolvedValue({
          stream: (async function* () {
            yield { text: () => 'Chunk' };
          })()
        })
      });
    }
  };
});

describe('geminiService', () => {
  it('should return a response from getElectionAdvice', async () => {
    const response = await getElectionAdvice('What is voter registration?');
    expect(response).toBe('Mocked Gemini response');
  });
});
