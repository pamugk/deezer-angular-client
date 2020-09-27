export class SearchResult<T> {
    data: Array<T>;
    prev: URL;
    next: URL;
    total: number;
}
