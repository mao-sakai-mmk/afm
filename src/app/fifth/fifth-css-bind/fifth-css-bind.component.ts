import { Component } from '@angular/core';

@Component({
    selector: 'app-fifth-css-bind',
    templateUrl: './fifth-css-bind.component.html',
    styleUrls: ['./fifth-css-bind.component.css']
})
export class FifthCssBindComponent {
    // 背景色
    public bgColor: string = '#fff';
    // 文字サイズ
    public fontSize: number = 12;
    // 文字位置
    public textAlign: string = '';
    // BOXのstyleにバインドする値
    public boxStyle: any = {
        'height.px': 100,
        'width.px': 100,
        border: '1px solid #000'
    };

    public isChanged: boolean = false;

    constructor() { }

    /**
     * 文字のclassにバインドする値
     */
    public textClass(): any {
        return {
            'text-left': this.textAlign === 'left',
            'text-center': this.textAlign === 'center',
            'text-right': this.textAlign === 'right'
        };
    }

}
