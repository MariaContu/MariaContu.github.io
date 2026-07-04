import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEducation } from './skills-education';

describe('SkillsEducation', () => {
  let component: SkillsEducation;
  let fixture: ComponentFixture<SkillsEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsEducation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsEducation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
