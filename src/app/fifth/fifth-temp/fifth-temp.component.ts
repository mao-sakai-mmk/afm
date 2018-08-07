import { Component } from '@angular/core';

class Profile {
    name: string;
    company: string;
    introduce: string;
    like: number;
    constructor(profile: any) {
        this.name = profile.name;
        this.company = profile.company;
        this.introduce = profile.introduce;
        this.like = 0;
    }

    public addLike(): void {
        this.like++;
    }
}

@Component({
    selector: 'app-fifth-temp',
    templateUrl: './fifth-temp.component.html',
    styleUrls: ['./fifth-temp.component.css']
})
export class FifthTempComponent {
    public formProfile: any = {};
    public yourProfile: Profile;

    public myProfile: Profile = new Profile({
        name: 'Mao Miyaji',
        company: 'FOX HOUND 株式会社',
        introduce: `
            どうもこんにちは！
            千葉にある夢の国を愛して止まない、元「魚のお姉さん」なエンジニアです！
            文才ないながらも技術ブログ投稿してます。AFM以外も良ければみてください！
            <a href="https://www.fox-hound.tech/author/mao-miyaji/">FOX HOUND TECH</a>
        `
    });

    constructor() { }

    public preview(): void {
        this.yourProfile = new Profile(this.formProfile);
    }
}
