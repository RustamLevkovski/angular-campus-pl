import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClickLoggerDirective } from './click-logger.directive';

@Component({
  standalone: true,
  template: `<div appClickLogger>Test Log</div>`,
  imports: [ClickLoggerDirective]
})
class TestComponent {}

describe('ClickLoggerDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let div: HTMLElement;

  beforeEach(async () => {
    vi.spyOn(console, 'log');
    await TestBed.configureTestingModule({
      imports: [TestComponent, ClickLoggerDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    div = fixture.debugElement.query(By.directive(ClickLoggerDirective)).nativeElement;
  });

  it('should log to console on click', () => {
    div.click();
    expect(console.log).toHaveBeenCalledWith('Element clicked at:', expect.any(String));
  });
});
