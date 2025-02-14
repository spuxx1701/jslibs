import { describe, expect, it, vitest } from 'vitest';
import { TestContainer } from '@spuxx/nest-testing';
import { AppModule } from './app.module';
import { EnvModule } from './env/env.module';

describe('AppModule', () => {
  it('should be ok', async () => {
    vitest.stubEnv('AUTH_CLIENT_SECRET', 'something');
    EnvModule.load();
    const container = await TestContainer.create({
      imports: [AppModule],
    });
    expect(container.module).toBeDefined();
  });
});
