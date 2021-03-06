import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Factory {

    // 热门
    public static hotFactory = [
        {
            modelNo: '101',
            modelName: '圆领短袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        }
    ];

    // 男装
    public static manFactory = [
        {
            modelNo: '201',
            modelName: '圆领短袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        },
        {
            modelNo: '202',
            modelName: '圆领长袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        },
        {
            modelNo: '203',
            modelName: 'polo衫',
            factory: [
                {
                    _id: '0',
                    name: '白色', color: '#DCDEF3', front: 'public/model/man/polo/baif.jpg', back: 'public/model/man/polo/baib.jpg'
                },
                {
                    _id: '1',
                    name: '黑色', color: '#111112', front: 'public/model/man/polo/heif.jpg', back: 'public/model/man/polo/heib.jpg'
                },
                {
                    _id: '2',
                    name: '红色', color: '#ac0521', front: 'public/model/man/polo/hongf.jpg', back: 'public/model/man/polo/hongb.jpg'
                },
                {
                    _id: '3',
                    name: '粉色', color: '#d52668', front: 'public/model/man/polo/hongsf.jpg', back: 'public/model/man/polo/hongsb.jpg'
                },
                {
                    _id: '4',
                    name: '淡黄色', color: '#dacc6b', front: 'public/model/man/polo/huangf.jpg', back: 'public/model/man/polo/huangb.jpg'
                },
                {
                    _id: '5',
                    name: '蓝色', color: '#3a78b8', front: 'public/model/man/polo/lanf.jpg', back: 'public/model/man/polo/lanb.jpg'
                },
                {
                    _id: '6',
                    name: '绿色', color: '#148043', front: 'public/model/man/polo/lvf.jpg', back: 'public/model/man/polo/lvb.jpg'
                },
                {
                    _id: '7',
                    name: '淡绿色', color: '#7eb54c', front: 'public/model/man/polo/lvsf.jpg', back: 'public/model/man/polo/lvsb.jpg'
                },
                {
                    _id: '8',
                    name: '紫色', color: '#3d1958', front: 'public/model/man/polo/zif.jpg', back: 'public/model/man/polo/zib.jpg'
                },
            ]
        }
    ];

    // 女装
    public static womanFactory = [
        {
            modelNo: '301',
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
            modelNo: '302',
            modelName: '圆领长袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        },
        {
            modelNo: '303',
            modelName: 'polo衫',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        },
    ];

    // 童装
    public static childFactory = [
        {
            modelNo: '401',
            modelName: '圆领短袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        }
    ];

    // 古风
    public static antiqueFactory = [
        {
            modelNo: '501',
            modelName: '圆领短袖',
            factory: [
                { _id: '1', name: '', picture: '' },
            ]
        }
    ];


    public static manModelMoreDesign = [
        {
            itemNo: '0', itemName: '圆领短袖',
            more: [
                {
                    itemNo: '1', itemName: '固定属性', supplement: '',
                    fixed: [
                        { opt_id: '1', opt_type: '主题风格', opt_name: '简约' },
                        { opt_id: '2', opt_type: '厚薄', opt_name: '薄款' },
                        { opt_id: '3', opt_type: '洗水工艺', opt_name: '普洗' },
                        { opt_id: '4', opt_type: '领型', opt_name: '圆领' },
                        { opt_id: '5', opt_type: '版型', opt_name: '修身款' },
                        { opt_id: '6', opt_type: '适用对象', opt_name: '青少年' },
                        { opt_id: '7', opt_type: '适用季节', opt_name: '四季' },
                        { opt_id: '8', opt_type: '袖长', opt_name: '短袖' },
                        { opt_id: '9', opt_type: '上市时间', opt_name: '2020年春季' }
                    ]
                },
                {
                    itemNo: '2', itemName: '面料', supplement: '',
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
                    itemNo: '3', itemName: '左袖子颜色', supplement: '特色选择',
                    options: [
                        { opt_id: '1', opt_name: '保持原样' },
                        { opt_id: '2', opt_name: '白色' },
                        { opt_id: '3', opt_name: '黑色' },
                        { opt_id: '4', opt_name: '蓝色' },
                        { opt_id: '5', opt_name: '红色' }
                    ]
                },
                {
                    itemNo: '4', itemName: '右袖子颜色', supplement: '特色选择',
                    options: [
                        { opt_id: '1', opt_name: '保持原样' },
                        { opt_id: '2', opt_name: '白色' },
                        { opt_id: '3', opt_name: '黑色' },
                        { opt_id: '4', opt_name: '蓝色' },
                        { opt_id: '5', opt_name: '红色' }
                    ]
                },
                {
                    itemNo: '5', itemName: '尺寸', supplement: '',
                    options: [
                        { opt_id: '1', opt_name: 'S' },
                        { opt_id: '2', opt_name: 'M' },
                        { opt_id: '3', opt_name: 'L' },
                        { opt_id: '4', opt_name: 'XL' },
                        { opt_id: '5', opt_name: 'XXL' },
                        { opt_id: '6', opt_name: 'XXXL' }
                    ]
                }
            ]
        },

        {
            itemNo: '1', itemName: '圆领长袖',
            more: [
                {
                    itemNo: '1', itemName: '固定属性', supplement: '',
                    fixed: [
                        { opt_id: '1', opt_type: '主题风格', opt_name: '简约' },
                        { opt_id: '2', opt_type: '厚薄', opt_name: '薄款' },
                        { opt_id: '3', opt_type: '洗水工艺', opt_name: '普洗' },
                        { opt_id: '4', opt_type: '领型', opt_name: '圆领' },
                        { opt_id: '5', opt_type: '版型', opt_name: '修身款' },
                        { opt_id: '6', opt_type: '适用对象', opt_name: '青少年' },
                        { opt_id: '7', opt_type: '适用季节', opt_name: '四季' },
                        { opt_id: '8', opt_type: '袖长', opt_name: '长袖' },
                        { opt_id: '9', opt_type: '上市时间', opt_name: '2020年春季' }
                    ]
                },
                {
                    itemNo: '2', itemName: '面料', supplement: '',
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
                    itemNo: '3', itemName: '左袖子颜色', supplement: '',
                    options: [
                        { opt_id: '1', opt_name: '保持原样' },
                        { opt_id: '2', opt_name: '白色' },
                        { opt_id: '3', opt_name: '黑色' },
                        { opt_id: '4', opt_name: '蓝色' },
                        { opt_id: '5', opt_name: '红色' }
                    ]
                },
                {
                    itemNo: '4', itemName: '右袖子颜色', supplement: '',
                    options: [
                        { opt_id: '1', opt_name: '保持原样' },
                        { opt_id: '2', opt_name: '白色' },
                        { opt_id: '3', opt_name: '黑色' },
                        { opt_id: '4', opt_name: '蓝色' },
                        { opt_id: '5', opt_name: '红色' }
                    ]
                },
                {
                    itemNo: '5', itemName: '尺寸', supplement: '',
                    options: [
                        { opt_id: '1', opt_name: 'S' },
                        { opt_id: '2', opt_name: 'M' },
                        { opt_id: '3', opt_name: 'L' },
                        { opt_id: '4', opt_name: 'XL' },
                        { opt_id: '5', opt_name: 'XXL' },
                        { opt_id: '6', opt_name: 'XXXL' }
                    ]
                }
            ]
        },

        {
            itemNo: '2', itemName: 'polo衫',
            more: [
                {
                    itemNo: '0', itemName: '固定属性', supplement: '',
                    fixed: [
                        { opt_id: '1', opt_header: 'main_style', opt_type: '主题风格', opt_name: '简约' },
                        { opt_id: '2', opt_header: 'thickness', opt_type: '厚薄', opt_name: '常规' },
                        { opt_id: '3', opt_header: 'washing', opt_type: '洗水工艺', opt_name: '普洗' },
                        { opt_id: '4', opt_header: 'collar_type', opt_type: '领型', opt_name: '圆领' },
                        { opt_id: '5', opt_header: 'model_type', opt_type: '版型', opt_name: '修身款' },
                        { opt_id: '6', opt_header: 'suitable', opt_type: '适用对象', opt_name: '青少年' },
                        { opt_id: '7', opt_header: 'season', opt_type: '适用季节', opt_name: '四季' },
                        { opt_id: '8', opt_header: 'sleeve', opt_type: '袖长', opt_name: '长袖' },
                        { opt_id: '9', opt_header: 'time_to_market', opt_type: '上市时间', opt_name: '2020年春季' },
                        { opt_id: '10', opt_header: 'reference_price', opt_type: '参考价格', opt_name: '150' },
                        { opt_id: '11', opt_header: 'reference_delivery', opt_type: '参考定制时间', opt_name: '60' },
                    ]
                },
                {
                    itemNo: '1', item_header: 'shell_fabric', itemName: '面料', supplement: '', option: '棉80%,涤纶20%',
                    options: [
                        { opt_id: '1', opt_name: '棉90%,涤纶10%' },
                        { opt_id: '2', opt_name: '棉80%,涤纶20%' },
                        { opt_id: '3', opt_name: '棉70%,涤纶30%' }
                    ]
                },
                {
                    itemNo: '2', item_header: 'sleeve_left_color', itemName: '左袖子颜色', supplement: '特色选择', option: '保持原样',
                    options: [
                        { opt_id: '1', opt_name: '保持原样' },
                        { opt_id: '2', opt_name: '白色' },
                        { opt_id: '3', opt_name: '黑色' },
                        { opt_id: '4', opt_name: '蓝色' },
                        { opt_id: '5', opt_name: '红色' }
                    ]
                },
                {
                    itemNo: '3', item_header: 'sleeve_right_color', itemName: '右袖子颜色', supplement: '特色选择', option: '保持原样',
                    options: [
                        { opt_id: '1', opt_name: '保持原样' },
                        { opt_id: '2', opt_name: '白色' },
                        { opt_id: '3', opt_name: '黑色' },
                        { opt_id: '4', opt_name: '蓝色' },
                        { opt_id: '5', opt_name: '红色' }
                    ]
                },
                {
                    itemNo: '4', item_header: 'size', itemName: '尺寸', supplement: '', option: 'M',
                    options: [
                        { opt_id: '1', opt_name: 'S' },
                        { opt_id: '2', opt_name: 'M' },
                        { opt_id: '3', opt_name: 'L' },
                        { opt_id: '4', opt_name: 'XL' },
                        { opt_id: '5', opt_name: 'XXL' },
                        { opt_id: '6', opt_name: 'XXXL' }
                    ]
                }
            ]
        }
    ];


    // 贴图地址
    public static mapFactory = [
        { itemNo: '0', itemPath: 'public/map/map01.png' },
        { itemNo: '1', itemPath: 'public/map/map02.png' },
        { itemNo: '2', itemPath: 'public/map/map03.png' },
        { itemNo: '3', itemPath: 'public/map/map04.png' },
        { itemNo: '4', itemPath: 'public/map/map05.png' },
        { itemNo: '5', itemPath: 'public/map/map06.png' },
        { itemNo: '6', itemPath: 'public/map/map07.png' },
        { itemNo: '7', itemPath: 'public/map/map08.png' },
        { itemNo: '8', itemPath: 'public/map/map09.png' },
        { itemNo: '9', itemPath: 'public/map/map10.png' },
        { itemNo: '10', itemPath: 'public/map/map11.png' },
        { itemNo: '11', itemPath: 'public/map/map12.png' },
        { itemNo: '12', itemPath: 'public/map/map13.png' },
        { itemNo: '13', itemPath: 'public/map/map14.png' },
    ];

    // 记录当前选中的颜色编号
    public colorId = '0';

    // 暂存更多设计
    public moreDesign = [];

    // 暂存设计稿
    public designDraft = [];



}
