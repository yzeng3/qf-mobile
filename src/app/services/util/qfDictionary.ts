import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class QfDictionary {
    item: object;
    constructor() {
        this.item = {};
    }

    // 添加
    set(key: string, value: string) {
        this.item[key] = value;
    }

    // 是否有
    has(key: string): boolean {
        return this.item.hasOwnProperty(key);
    }

    // 删除
    delete(key: string): boolean {
        if (this.has(key)) {
            delete this.item[key];
            return true;
        }
        return false;
    }

    // 得到
    get(key: any): any {
        return this.has(key) ? this.item[key] : undefined;
    }

    // 返回所有key
    keys(): string[] {
        const keys = [];
        // tslint:disable-next-line: forin
        for (const key in this.item) {
            keys.push(key);
        }
        return keys;
    }

    // 返回所有 value 列表
    values(): string[] {
        const value = [];
        for (const key in this.item) {
            if (this.has(key)) {
                value.push(this.item[key]);
            }
        }
        return value;
    }
}
