import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';
import { ImageComponentFixture } from './image.component.fixture';
import { ImageTypes } from './image.models';
import { DEFAULT_IMAGE_OPTIONS, IMAGE_OPTIONS } from './image.options';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;
  let imageFixture: ImageComponentFixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageComponent],
      providers: [
        {
          provide: IMAGE_OPTIONS,
          useValue: DEFAULT_IMAGE_OPTIONS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    imageFixture = new ImageComponentFixture(fixture.debugElement);
  });

  it('creates image element', () => {
    component.width = '50';
    component.height = '50';
    component.altText = 'profile image';
    component.source = 'assests/profile.png';
    component.type = ImageTypes.ROUNDED_CIRCLE;

    fixture.detectChanges();

    const img = imageFixture.getImage();

    expect(img?.width).toBe(50);
    expect(img?.height).toBe(50);
    expect(img?.alt).toBe('profile image');
    expect(img?.src).toContain('assests/profile.png');
    expect(img?.classList).toContain('rounded-circle');
  });
});
