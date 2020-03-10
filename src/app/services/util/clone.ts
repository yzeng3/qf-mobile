import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Clone {


    /**
     * JSON 进行深拷贝
     * 但是不能拷贝对象里的方法
     * @param obj 待拷贝的数据
     */
    public static deepClone(obj: any) {
        const objTo = JSON.stringify(obj);
        const result = JSON.parse(objTo);
        return result;
    }

    // 使用递归的方式实现数组、对象的深拷贝
    public recursionClone(obj: any) {
        // 判断拷贝的要进行深拷贝的是数组还是对象，是数组的话进行数组拷贝，对象的话进行对象拷贝
        const objClone = Array.isArray(obj) ? [] : {};
        // 进行深拷贝的不能为空，并且是对象或者是
        if (obj && typeof obj === 'object') {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] && typeof obj[key] === 'object') {
                        objClone[key] = this.recursionClone(obj[key]);
                    } else {
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }
}
