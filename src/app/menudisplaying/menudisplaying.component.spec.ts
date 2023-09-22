import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudisplayingComponent } from './menudisplaying.component';

describe('MenudisplayingComponent', () => {
  let component: MenudisplayingComponent;
  let fixture: ComponentFixture<MenudisplayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudisplayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudisplayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
