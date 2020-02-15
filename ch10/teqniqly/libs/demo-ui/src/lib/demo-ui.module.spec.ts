import { async, TestBed } from '@angular/core/testing';
import { DemoUiModule } from './demo-ui.module';

describe('DemoUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DemoUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DemoUiModule).toBeDefined();
  });
});
