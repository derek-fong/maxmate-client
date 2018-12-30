import { TestBed } from '@angular/core/testing';

import { HomeContainerComponent } from './home-container.component';

describe('HomeContainerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContainerComponent ]
    })
      .compileComponents();
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(HomeContainerComponent);
    const component = fixture.componentInstance;

    expect(!!component).toBeTruthy();
  });
});
