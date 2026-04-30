# CivicPulse - Smart Election Assistant

CivicPulse is an interactive, AI-powered assistant designed to help voters navigate the complexities of the election process. It provides a clear roadmap, answers specific civic questions through a neutral AI expert, and simplifies voter registration steps.

## Challenge Vertical
**Election Process Assistant**

## Approach and Logic

### 1. User-Centric Design
We adopted the **Recipe 8: Clean Utility / Minimal** design philosophy. For a civic application, trustworthiness and clarity are paramount. The interface uses high-contrast typography (Inter), generous whitespace, and meaningful motion (Framer Motion) to guide users without overwhelming them.

### 2. Smart AI Integration (Google Gemini)
At the heart of CivicPulse is a smart assistant powered by the `gemini-3-flash-preview` model. 
- **System Instructions**: The AI is strictly guided to be non-partisan, action-oriented, and simple (8th-grade reading level).
- **Streaming Responses**: We implemented streaming to provide a responsive, "live" feel to the assistance.
- **Voter Guardrails**: The assistant explicitly avoids candidate recommendations and reminds users to verify local specifics with official authorities.

### 3. Interactive Roadmap
The election timeline is not just a static list but a visual journey. We broke down the process into five key phases:
- **Registration** (The Foundation)
- **Research** (Information Gathering)
- **Planning** (Logistics)
- **Voting** (The Action)
- **Certification** (The Verification)

### 4. Accessibility & Inclusion
- **Semantic HTML**: Proper use of `<header>`, `<main>`, `<section>`, and `<nav>` tags.
- **ARIA Compliance**: Added ARIA labels, roles, and expansion states to ensure screen readers can navigate the interactive components like the AI chat and FAQ accordion.
- **Mobile-First**: Fully responsive design that ensures voters can access information on any device, especially important for on-the-go research.

## How the Solution Works

1. **Dashboard Home**: Users are greeted with a clear mission statement and immediate access to the AI assistant.
2. **Roadmap**: As users scroll, they see a chronological timeline of the election process with detailed descriptions for each step.
3. **AI Chat Interface**: Users can type natural language questions (e.g., "how do I vote by mail?") and receive immediate, context-aware guidance. We provide "quick-reply" suggestions to help users discover features.
4. **FAQ Section**: Addresses common administrative questions that voters often have, reducing the "friction" of looking up rules.

## Assumptions Made
1. **Generalization**: While election rules vary by state/country, this tool acts as a "General Guide" and emphasizes that users should verify details with their local Registrar of Voters.
2. **Language**: The current version is in English, but the Gemini integration allows for multi-lingual Q&A if the user interacts in another language.
3. **Technical**: Assumes the presence of a `GEMINI_API_KEY` in the environment for the AI features to function.

## Code Quality & Security
- **Type Safety**: Built with TypeScript for robust development.
- **Proprietary Logic**: No sensitive logic or API keys are exposed to the client besides what is necessary for functional AI interaction.
- **Modular Architecture**: Separate components and services for easy maintainability.

---
*Created for the 2026 Antigravity Challenge.*
