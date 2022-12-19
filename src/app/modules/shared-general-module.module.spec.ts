import { SharedGeneralModuleModule } from './shared-general-module.module';

describe('SharedGeneralModuleModule', () => {
  let sharedGeneralModuleModule: SharedGeneralModuleModule;

  beforeEach(() => {
    sharedGeneralModuleModule = new SharedGeneralModuleModule();
  });

  it('should create an instance', () => {
    expect(sharedGeneralModuleModule).toBeTruthy();
  });
});
