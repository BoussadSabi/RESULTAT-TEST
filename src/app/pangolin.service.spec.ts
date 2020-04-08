import { TestBed } from '@angular/core/testing';

import { PangolinService } from './pangolin.service';

describe('PangolinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PangolinService = TestBed.get(PangolinService);
    expect(service).toBeTruthy();
  });
});
