import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Factory {

    // 热门
    public static hotFactory = [
        {
            modelNo: '1',
            modelName: '圆领短袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        }
    ];

    // 男装
    public static manFactory = [
        {
            modelNo: '1',
            modelName: '圆领短袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        },
        {
            modelNo: '2',
            modelName: '圆领长袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        },
        {
            modelNo: '3',
            modelName: 'polo衫',
            factory: [
                {
                    _id: '1',
                    name: 'polo衫白', color: '#dcdef3', front: 'public/model/man/polo/baif.jpg', back: 'public/model/man/polo/baib.jpg'
                },
                {
                    _id: '2',
                    name: '', color: '#111112', front: 'public/model/man/polo/huif.jpg', back: 'public/model/man/polo/huib.jpg'
                },
                {
                    _id: '3',
                    name: '', color: '#ac0521', front: 'public/model/man/polo/hongf.jpg', back: 'public/model/man/polo/hongb.jpg'
                },
                {
                    _id: '4',
                    name: '', color: '#d52668', front: 'public/model/man/polo/hongsf.jpg', back: 'public/model/man/polo/hongsb.jpg'
                },
                {
                    _id: '5',
                    name: '', color: '#dacc6b', front: 'public/model/man/polo/huangf.jpg', back: 'public/model/man/polo/huangb.jpg'
                },
                {
                    _id: '6',
                    name: '', color: '#237c62', front: 'public/model/man/polo/lanf.jpg', back: 'public/model/man/polo/lanb.jpg'
                },
                {
                    _id: '7',
                    name: '', color: '#148043', front: 'public/model/man/polo/lvf.jpg', back: 'public/model/man/polo/lvb.jpg'
                },
                {
                    _id: '8',
                    name: '', color: '#7eb54c', front: 'public/model/man/polo/lvsf.jpg', back: 'public/model/man/polo/lvsb.jpg'
                },
                {
                    _id: '9',
                    name: '', color: '#3d1958', front: 'public/model/man/polo/zif.jpg', back: 'public/model/man/polo/zib.jpg'
                },
            ]
        }
    ];

    // 女装
    public static womanFactory = [
        {
            modelNo: '1',
            modelName: '圆领短袖',
            factory: [
                { _id: '11', name: '', picture: 'public/model/man/myldx/myldxbaif.jpg' },
                { _id: '12', name: '', picture: '' },
                { _id: '21', name: '', picture: '' },
                { _id: '21', name: '', picture: '' },
                { _id: '31', name: '', picture: '' },
                { _id: '32', name: '', picture: '' },
                { _id: '41', name: '', picture: '' },
                { _id: '42', name: '', picture: '' },
                { _id: '51', name: '', picture: '' },
                { _id: '52', name: '', picture: '' },
                { _id: '61', name: '', picture: '' },
                { _id: '62', name: '', picture: '' },
            ]
        },
        {
            modelNo: '2',
            modelName: '圆领长袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        },
        {
            modelNo: '3',
            modelName: 'polo衫',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        },
    ];

    // 童装
    public static childFactory = [
        {
            modelNo: '1',
            modelName: '圆领短袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        }
    ];

    // 古风
    public static antiqueFactory = [
        {
            modelNo: '1',
            modelName: '圆领短袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        }
    ];

    // 可编辑类型1
    public static Tshirt = [
        {
            itemNo: '1',
            itemName: '固定属性',
            fixed: [
                { opt_id: '1', opt_type: '主题风格', opt_name: '简约' },
                { opt_id: '1', opt_type: '厚薄', opt_name: '薄款' },
                { opt_id: '1', opt_type: '洗水工艺', opt_name: '普洗' },
                { opt_id: '1', opt_type: '领型', opt_name: '圆领' },
                { opt_id: '1', opt_type: '版型', opt_name: '修身款' },
                { opt_id: '1', opt_type: '适用对象', opt_name: '青少年' },
                { opt_id: '1', opt_type: '适用季节', opt_name: '四季' },
                { opt_id: '1', opt_type: '袖长', opt_name: '短袖' },
                { opt_id: '1', opt_type: '上市时间', opt_name: '2020年春季' }
            ]
        },
        {
            itemNo: '2',
            itemName: '面料',
            options: [
                { opt_id: '1', opt_name: '棉100%' },
                { opt_id: '2', opt_name: '棉97% 涤纶3%' },
                { opt_id: '3', opt_name: '棉95% 涤纶5%' },
                { opt_id: '4', opt_name: '棉90% 涤纶10%' },
                { opt_id: '5', opt_name: '棉80% 涤纶20%' },
                { opt_id: '6', opt_name: '棉70% 涤纶30%' }
            ]
        },
        {
            itemNo: '3',
            itemName: '左袖子颜色',
            options: [
                { opt_id: '1', opt_name: '保持原样' },
                { opt_id: '2', opt_name: '白色' },
                { opt_id: '3', opt_name: '黑色' },
                { opt_id: '4', opt_name: '蓝色' },
                { opt_id: '5', opt_name: '红色' }
            ]
        },
        {
            itemNo: '4',
            itemName: '右袖子颜色',
            options: [
                { opt_id: '1', opt_name: '保持原样' },
                { opt_id: '2', opt_name: '白色' },
                { opt_id: '3', opt_name: '黑色' },
                { opt_id: '4', opt_name: '蓝色' },
                { opt_id: '5', opt_name: '红色' }
            ]
        }
    ];

}
