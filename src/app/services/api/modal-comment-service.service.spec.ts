import { TestBed } from '@angular/core/testing';

import { ModalCommentServiceService } from './modal-comment-service.service';

describe('ModalCommentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalCommentServiceService = TestBed.get(ModalCommentServiceService);
    expect(service).toBeTruthy();
  });
});
