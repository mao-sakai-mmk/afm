import { Component } from '@angular/core';

@Component({
    selector: 'app-slice-pipe',
    templateUrl: './slice-pipe.component.html',
    styleUrls: ['./slice-pipe.component.css']
})
export class SlicePipeComponent {
    public sliceData: any = {start: 0};
    public alphabets: string = 'ABCDEFGHIJKLMNOPQESTUVWXYZ';
    public sliceArrs: string[] = [
        'チーズ', 'ハム', '肉', 'きゅうり', 'ゴルフ', 'スライム', 'ロールスロイス'
    ];
}
