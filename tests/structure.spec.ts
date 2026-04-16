import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Project Structure', () => {
  const rootDir = path.resolve(__dirname, '..');

  const requiredFiles = [
    'src/app/core/services/auth.service.ts',
    'src/app/core/services/forms.service.ts',
    'src/app/core/services/menu.service.ts',
    'src/app/core/services/sections.service.ts',
    'src/app/core/services/store.service.ts',
    'src/app/layouts/auth-layout/auth-layout.component.ts',
    'src/app/layouts/content-layout/content-layout.component.ts',
    'src/app/pages/angular-page/angular-page.component.ts',
    'src/app/pages/js-page/js-page.component.ts',
    'src/app/pages/common-webdev-page/common-webdev-page.component.ts',
    'src/app/pages/login-page/login-page.component.ts',
    'src/app/pages/register-page/register-page.component.ts',
    'src/app/shared/components/section-view/section-view.component.ts',
    'src/app/shared/components/auth-form/auth-form.component.ts',
    'src/app/shared/directives/interactive-card.directive.ts',
    'src/app/shared/directives/hover-elevation.directive.ts',
    'src/app/shared/directives/click-logger.directive.ts'
  ];

  requiredFiles.forEach(file => {
    const fileName = path.basename(file);
    it(`File integrity check: ${fileName}`, () => {
      const filePath = path.join(rootDir, file);
      expect(fs.existsSync(filePath), `Requirement failed: Missing file at ${file}`).toBe(true);
    });
  });
});
