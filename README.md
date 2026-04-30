# CivicPulse - Smart Election Assistant

CivicPulse is an interactive, AI-powered assistant designed to help voters navigate the complexities of the election process. It provides a clear roadmap, answers specific civic questions through a neutral AI expert, and simplifies voter registration steps.

## Challenge Vertical
**Election Process Assistant**

## Google Services Integration (100% Focused)

### 1. Google Gemini AI (Grounding + Dynamic Reasoning)
- **Model**: Powered by `gemini-3-flash-preview` via the modern `@google/genai` TypeScript SDK.
- **Grounding**: Integrated **Google Search Grounding** to provide live, factual data about election cycles.
- **Efficiency**: Used **Streaming Responses** to reduce perceived latency and provide immediate feedback.

### 2. Google Maps Platform
- **Polling Site Locator**: Integrated a dynamic map interface using Google Maps Embed API to provide local utility for voters.
- **Deep Linking**: Enhanced accessibility by providing direct "intent" links into the Google Maps application.

### 3. Google Calendar
- **Save the Date**: Implemented a "Save Election Day" feature that dynamically creates Google Calendar events to ensure citizens don't miss their opportunity to vote.

### 4. Firebase & Firestore (Zero-Trust Security)
- **Scalable Feedback**: Real-time Firestore integration for gathering user sentiment.
- **Security Protocols**: Implemented the "Eight Pillars" of Firestore hardening, including schema strictness and temporal integrity.

## Security & Reliability

### 1. Hardened Firestore Rules
We implemented a locked-down permission model:
- `isValidId()`: Guards against ID poisoning attacks.
- `isValidFeedback()`: Strict schema matching for incoming payloads to prevent "Shadow Updates" or resource exhaustion.
- `immutability`: Feedback cannot be modified or deleted once submitted.

### 2. AI Safety
- **Prompt Injection Guard**: Strict system instruction barriers.
- **Verification Clause**: Every AI response includes a disclaimer prompting users to verify specifics with local authorities.

## Testing Strategy
- **Unit Testing**: Integrated **Vitest** and **React Testing Library** for component and service validation.
- **Security Assertion Test**: `firestore.rules.test.ts` for policy verification.

## Accessibility & Inclusive Design
- **Skip Links**: Implemented skip-to-content navigation for keyboard users.
- **Semantic Structure**: Proper use of landmarks (`<header>`, `<main>`, `<footer/>`).
- **ARIA Compliance**:
  - Interactive accordions (FAQ) use `aria-expanded` and `aria-controls`.
  - Chat interface includes `aria-live` regions and `aria-label` for inputs.
  - Mobile menus are fully navigable via screen readers.
- **High Contrast**: Adheres to readability standards with appropriate color contrast.
- **Responsive**: Fluid layouts that scale from mobile devices to ultra-wide desktops.

## Approach & Logic
- **Architecture**: Modular React components styled with **Tailwind CSS**.
- **Animation**: Used **Motion** for subtle, non-distracting transitions that guide the user's eye along the timeline.
- **Utility**: Added direct "Find Sites" deep-links to Google Search and Google Maps to bridge the gap between information and action.

## Assumptions Made
1. **Neutrality**: Assumes a non-partisan stance is the most effective way to help the broadest range of users.
2. **Context**: Assumes users are looking for US-based or generalized democratic process guidance (Gemini handles the context multi-lingually if needed).

## Testing
- **Security Assertion Test**: Added `firestore.rules.test.ts` to document and simulate the "Dirty Dozen" payload checks against our security rules.

---
*Developed for the 2026 Google Antigravity Challenge.*

