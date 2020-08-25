import { TestBed } from '@angular/core/testing';

import { PositionConfigurationService } from './position-configuration.service';

describe('PositionConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionConfigurationService = TestBed.get(PositionConfigurationService);
    expect(service).toBeTruthy();
  });
});
