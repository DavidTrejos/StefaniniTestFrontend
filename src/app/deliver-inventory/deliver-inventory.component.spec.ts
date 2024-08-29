import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverInventoryComponent } from './deliver-inventory.component';

describe('DeliverInventoryComponent', () => {
  let component: DeliverInventoryComponent;
  let fixture: ComponentFixture<DeliverInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverInventoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliverInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
