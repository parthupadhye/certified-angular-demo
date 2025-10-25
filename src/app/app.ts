import { Component } from '@angular/core';
import { CertifiedContentBadge } from './certified-content-badge/certified-content-badge';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CertifiedContentBadge],
  template: `
    <h1>Certified Content Demo</h1>

    <div [innerHTML]="articleContent"></div>

    <h2>Secure Proxy Method</h2>
    <app-certified-content-badge
      genContentId="FIN_DEFI_01_MOCK"
      proxyUrl="/api/certify-proxy"
    ></app-certified-content-badge>

    <h2>Obfuscated Key Method</h2>
    <div data-cc-secret="cck-1425-MOCK-API-KEY-001">
      <app-certified-content-badge
        genContentId="GLOSS_LIST_02_MOCK"
      ></app-certified-content-badge>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'certified-angular-demo';
  articleContent = `
    <h1>The AI Content Trust Crisis</h1>
    <p>
      In an era dominated by artificial intelligence, the line between human-created and machine-generated content is becoming increasingly blurred. This has led to a crisis of trust, where consumers and businesses alike are struggling to verify the authenticity and reliability of the information they consume.
    </p>
    <h2>The Problem</h2>
    <p>
      The proliferation of AI-generated content has several negative consequences:
    </p>
    <ul>
      <li>
        <strong>Misinformation:</strong> AI can be used to create convincing but false narratives, leading to the spread of misinformation.
      </li>
      <li>
        <strong>Erosion of Trust:</strong> As people become more aware of AI-generated content, they may start to distrust all content, including that which is created by humans.
      </li>
      <li>
        <strong>Economic Impact:</strong> The rise of AI-generated content could devalue the work of human creators, leading to job losses and a decline in the quality of content.
      </li>
    </ul>
    <h2>The Solution</h2>
    <p>
      Certified Content is a new technology that allows creators to prove the authenticity of their work. By embedding a cryptographic signature into their content, creators can show that their work is original and has not been tampered with.
    </p>
    <p>
      This technology has the potential to solve the AI content trust crisis by:
    </p>
    <ul>
      <li>
        <strong>Restoring Trust:</strong> Certified Content provides a clear and verifiable way to distinguish between human-created and machine-generated content.
      </li>
      <li>
        <strong>Empowering Creators:</strong> By giving creators a way to prove the authenticity of their work, Certified Content can help them to protect their intellectual property and command a fair price for their work.
      </li>
      <li>
        <strong>Promoting a Healthy Information Ecosystem:</strong> By making it easier to identify and filter out misinformation, Certified Content can help to create a more trustworthy and reliable information ecosystem.
      </li>
    </ul>
  `;
}
