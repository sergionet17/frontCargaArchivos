import { TestBed } from '@angular/core/testing';

import { CargaArchivosSService } from './carga-archivos-s.service';

describe('CargaArchivosSService', () => {
  let service: CargaArchivosSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaArchivosSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
