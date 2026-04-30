# CivicPulse - Smart Election Assistant

CivicPulse is an interactive, AI-powered assistant designed to help voters navigate the complexities of the election process. It provides a clear roadmap, answers specific civic questions through a neutral AI expert, and simplifies voter registration steps.

## Challenge Vertical
**Election Process Assistant**

## Google Services Integration (100% Focused)

### 1. Google Gemini AI (Grounding + Dynamic Reasoning)
- **Model**: Powered by `gemini-3-flash-preview` via the `@google/genai` TypeScript SDK.
- **Grounding**: Integrated **Google Search Grounding** (`tools: [{ googleSearch: {} }]`) to ensure the assistant provides the most up-to-date information regarding registration deadlines and local rules.
- **Tone & Persona**: Engineered with strict system instructions to remain non-partisan and accessible (8th-grade level).
- **Streaming**: Implemented `generateContentStream` for a low-latency, conversational user experience.

### 2. Firebase & Firestore (Real-world Utility)
- **Feedback Loop**: Integrated **Firestore** to capture anonymous user feedback on AI responses. This demonstrates real-world data collection and iterative improvement logic.
- **Security**: Hardened Firestore rules following the "Eight Pillars" of security (Identity check, Schema validation, Temporal integrity, etc.).

## Security & Reliability

### 1. Hardened Firestore Rules
We implemented a locked-down permission model:
- `isValidId()`: Guards against ID poisoning attacks.
- `isValidFeedback()`: Strict schema matching for incoming payloads to prevent "Shadow Updates" or resource exhaustion.
- `immutability`: Feedback cannot be modified or deleted once submitted.

### 2. AI Safety
- **Prompt Injection Guard**: Strict system instruction barriers.
- **Verification Clause**: Every AI response includes a disclaimer prompting users to verify specifics with local authorities.

## Accessibility & Inclusive Design
- **Semantic Structure**: Proper use of landmarks (`<header>`, `<main>`, `<footer/>`).
- **ARIA Compliance**:
  - Interactive accordions (FAQ) use `aria-expanded` and `aria-controls`.
  - Chat interface includes `aria-label` for inputs and forms.
  - Mobile menus are fully navigable via screen readers.
- **High Contrast**: Adheres to readability standards with appropriate color contrast.
- **Responsive**: Fluid layouts that scale from mobile devices to ultra-wide desktops.

## Approach & Logic
- **Architecture**: Modular React components styled with **Tailwind CSS**.
- **Animation**: Used **Motion** for subtle, non-distracting transitions that guide the user's eye along the timeline.
- **Utility**: Added direct "Find Sites" deep-links to Google Search to bridge the gap between information and action.

## Assumptions Made
1. **Neutrality**: Assumes a non-partisan stance is the most effective way to help the broadest range of users.
2. **Context**: Assumes users are looking for US-based or generalized democratic process guidance (Gemini handles the context multi-lingually if needed).

## Testing
- **Security Assertion Test**: Added `firestore.rules.test.ts` to document and simulate the "Dirty Dozen" payload checks against our security rules.

---
*Developed for the 2026 Google Antigravity Challenge.*

