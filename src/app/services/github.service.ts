import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

const GITHUB_API_URL = 'https://api.github.com';

class SearchRepoOption {
    language: string;
    order: 'asc' | 'desc';
    sort: 'stars' | 'forks' | 'updated' | '';
    get param(): string {
        const language = this.language ? `+language:${encodeURIComponent(this.language)}` : '';
        const sort = this.sort ? `&sort=${this.sort}` : '';
        const order = this.order ? `&order=${this.order}` : '';
        return language + sort + order;
    }
    constructor(option?: any) {
        this.language = option ? option.language : '';
        this.order = option ? option.order : 'desc';
        this.sort = option ? option.sort : '';
    }
}

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private commonService: CommonService) { }

    /**
     * リポジトリ検索
     * @param {string} keyword キーワード
     * @param {{[key: string]: any}} options 検索オプション
     * @returns {Observable<any>}
     */
    public searchRepositories(keyword: string, options?: {[key: string]: any}): Observable<any> {
        const searchOpt = new SearchRepoOption(options);
        const url = `${GITHUB_API_URL}/search/repositories?q=${keyword}${searchOpt.param}`;
        return this.commonService.call('GET', url);
    }
}
