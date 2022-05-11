import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageType, ImageTypes } from './image.models';
import { ImageOptions, IMAGE_OPTIONS } from './image.options';

@Component({
  selector: 'desx-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImageComponent implements OnInit {
  @Input()
  id: string = '';

  @Input()
  options?: Partial<ImageOptions>;

  @Input()
  source: string = '';

  @Input()
  altText: string = '';

  @Input()
  width: string = '0';

  @Input()
  height: string = '0';

  @Input()
  type: ImageType = ImageTypes.ROUNDED;

  constructor(@Inject(IMAGE_OPTIONS) private defaultOptions: ImageOptions) {}

  ngOnInit(): void {
    this.options = {
      ...this.defaultOptions,
      ...this.options,
    };
  }
}
