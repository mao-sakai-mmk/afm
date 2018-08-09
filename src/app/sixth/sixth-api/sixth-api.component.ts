import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
    selector: 'app-sixth-api',
    templateUrl: './sixth-api.component.html',
    styleUrls: ['./sixth-api.component.css']
})
export class SixthApiComponent {
    public keyword: string = '';
    public optionData: any = {order: 'desc'};

    public languages: string[] = [
        'PHP', 'Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'Objective-C', 'HTML', 'CSS', 'Ruby', 'C', 'C#'
    ];
    public sorts: {name: string; value: string}[] = [
        {name: 'スター数', value: 'stars'},
        {name: 'フォーク数', value: 'forks'},
        {name: '更新日時', value: 'updated'}
    ];
    public orders: {name: string; value: string}[] = [
        {name: '昇順', value: 'asc'},
        {name: '降順', value: 'desc'}
    ];

    public repositories: any[] = [];
    public total: number = 0;

    constructor(private githubService: GithubService) { }

    public search(): void {
        this.githubService.searchRepositories(this.keyword, this.optionData)
            .subscribe(result => {
                this.repositories = result.items;
                this.total = result.total_count;
            });
    }
}
