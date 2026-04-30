import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Timeline from '../components/Timeline';
import React from 'react';

// Simplified mock for motion
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Timeline Component', () => {
  it('renders the roadmap title', () => {
    render(<Timeline />);
    expect(screen.getByText(/Election Roadmap/i)).toBeDefined();
  });

  it('renders all steps in the timeline', () => {
    render(<Timeline />);
    // Use getAllByText or more specific queries
    expect(screen.getAllByText(/Registration/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Certification/i).length).toBeGreaterThan(0);
  });
});
