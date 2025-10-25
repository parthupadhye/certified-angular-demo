# certified-angular-demo

This is the final, comprehensive instruction set for Jules, covering the architecture, component creation, npm publishing, and the construction of all three demo repositories.
These instructions consolidate all previous discussions, ensuring the code is consistent with the genContentId and the robust Draft/Publish/Versioning security model.
Jules: Component Build and Demo Instructions
These instructions cover the technical build, NPM packaging, and the setup of the four required repositories for the Certified Content soft launch.
Phase 1: Foundation and Mock Data
The entire system relies on these stable identifiers and URLs. Jules should set these as environment variables or constants within the sandboxes.
| Identifier | Mock Value | Purpose |
|---|---|---|
| User API Key (USER_API_KEY) | cck-1425-MOCK-API-KEY-001 | Private key for validation. |
| Generated Content ID (Article) | FIN_DEFI_01_MOCK | Content for the main article (Secure Proxy Demo). |
| Generated Content ID (Glossary) | GLOSS_LIST_02_MOCK | Content for the glossary list (Obfuscated Key Demo). |
| Verification Endpoint Base URL | https://api.certified-content.com/v1/verify | The secure backend endpoint. |
Phase 2: Core Component Library (NPM Source)
The component logic must be centralized and designed for framework-agnostic usage.
Repository: https://github.com/parthupadhye/certified-components.git
 * Core Logic: Create a core TypeScript module containing the universal logic:
   * Data Fetcher: Function to handle the fetch call to the Verification Endpoint, implementing the retry and exponential backoff logic.
   * URL Builder: Logic to construct the final verification URL using genContentId and userKey.
   * Key Decoding: The Base64 decoding and salt stripping logic for the Obfuscated Key method.
   * State Machine: Logic to handle the component states: LOADING, CERTIFIED, UNCERTIFIED, ERROR.
 * React Wrapper: Create a functional React component (CertifiedContentBadge.jsx) that wraps the core logic, manages state via useState/useEffect, and exposes the required props: genContentId, userSecret, and proxyUrl.
 * Angular Wrapper: Create an Angular standalone component (CertifiedContentBadge.ts) that wraps the core logic, manages state via signals, and uses the required @Input() definitions: genContentId, userSecret, and proxyUrl.
 * Publishing: Publish the compiled JavaScript, React, and Angular components to npm under the @certified-content scope.
Phase 3: Demo Repository Construction
The goal of the demos is to prove the architecture works in a production-like environment (Vercel/Netlify). Each demo page must display two instances of the component, showcasing both security methods using the content specified in Phase 1.
1. React Demo (Next.js/Vercel Ready)
Repository: https://github.com/parthupadhye/certified-react-demo.git
 * Setup: Create a minimal Next.js or plain React project (Vite or CRA).
 * Component 1 (Article Content - Secure Proxy):
   * Content ID: FIN_DEFI_01_MOCK
   * Setup: The component must be rendered with only the genContentId and a mock proxyUrl (e.g., /api/certify-proxy). The logic must simulate successful proxy validation.
 * Component 2 (Glossary List - Obfuscated Key):
   * Content ID: GLOSS_LIST_02_MOCK
   * Setup: The component must be rendered without the userSecret prop, forcing it to look for the key on the parent div via the data-cc-secret attribute.
 * Display: Use the content from the AI Content Trust Crisis article (ai_trust_article.md) as the surrounding body text for context.
2. Angular Demo (Vercel/Netlify Ready)
Repository: https://github.com/parthupadhye/certified-angular-demo.git
 * Setup: Create a minimal Angular standalone component project.
 * Component 1 (Article Content - Secure Proxy): Render the component using the secure proxy method inputs (only genContentId and proxyUrl).
 * Component 2 (Glossary List - Obfuscated Key): Render the component using the simple obfuscated key method, utilizing the data-cc-secret attribute for the mock key.
 * Display: Integrate the AI Content Trust Crisis article as the template content.
3. Web Component Demo (Static HTML Sandbox)
Repository: https://github.com/parthupadhye/certified-web-demo.git
 * Setup: Create a single, self-contained index.html file.
 * Integration: Use native JavaScript to integrate the core component logic. The JavaScript must simulate the full logic of the unified component (checking for proxyUrl vs. data-cc-secret).
 * Component 1 (Article Content - Secure Proxy): Manually insert the required HTML/JS to load the component and set up the proxy simulation.
 * Component 2 (Glossary List - Obfuscated Key): Manually insert the required HTML/JS and the parent div with the data-cc-secret attribute.
 * Display: Include clear HTML/CSS wrappers and the article content, with a visible warning about the need for hosting to bypass CORS.
This single, consolidated set of instructions covers the entire process from foundation to final hosted demos.
