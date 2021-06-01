import { TestBed } from '@angular/core/testing';

import { CargaArchivoServiceService } from './carga-archivo-service.service';

describe('CargaArchivoServiceService', () => {
  let service: CargaArchivoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaArchivoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
