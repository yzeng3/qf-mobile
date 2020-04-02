import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Menu {

    /****** 设计页面分类详细 ******/
    public static designCategory = [
        { itemNo: '1', itemName: '热门' },
        { itemNo: '2', itemName: '男装' },
        { itemNo: '3', itemName: '女装' },
        { itemNo: '4', itemName: '童装' },
        { itemNo: '5', itemName: '古风' }
    ];

    /****** 模型页面数据 ******/
    public static models = [
        {
            typeId: '1',
            typeName: '热门',
            child: [
                { modelNo: '101', index: '0', modelName: '圆领短袖', picture: 'public/model/man/myldx/myldxbaif.jpg' },
                { modelNo: '102', index: '1', modelName: '圆领长袖', picture: 'public/model/man/mylcx/baif.jpg' },
                { modelNo: '103', index: '2', modelName: 'polo衫', picture: 'public/model/man/polo/baif.jpg' }
            ]
        },
        {
            typeId: '2',
            typeName: '男装',
            child: [
                { modelNo: '201', index: '0', modelName: '圆领短袖', picture: 'public/model/man/myldx/myldxbaif.jpg' },
                { modelNo: '202', index: '1', modelName: '圆领长袖', picture: 'public/model/man/mylcx/baif.jpg' },
                { modelNo: '203', index: '2', modelName: 'polo衫', picture: 'public/model/man/polo/baif.jpg' },
            ]
        },
        {
            typeId: '3',
            typeName: '女装',
            child: [
                { modelNo: '301', index: '0', modelName: '圆领短袖', picture: 'public/model/woman/fyldx/fyldxbaif.jpg' },
                { modelNo: '302', index: '1', modelName: '圆领长袖', picture: 'public/model/woman/fylcx/baif.jpg' },
                { modelNo: '303', index: '2', modelName: 'polo衫', picture: 'public/model/woman/fweiyi/fweiyihuif.jpg' },
            ]
        },
        {
            typeId: '4',
            typeName: '童装',
            child: [
                { modelNo: '401', index: '0', modelName: '圆领短袖', picture: 'public/model/man/myldx/myldxbaif.jpg' },
                { modelNo: '402', index: '1', modelName: '圆领长袖', picture: 'public/model/man/mylcx/baif.jpg' },
                { modelNo: '403', index: '2', modelName: 'polo衫', picture: 'public/model/man/polo/baif.jpg' },
            ]
        },
        {
            typeId: '5',
            typeName: '古风',
            child: [
                { modelNo: '501', index: '0', modelName: '圆领短袖', picture: 'public/model/man/myldx/myldxbaif.jpg' },
                { modelNo: '502', index: '1', modelName: '圆领长袖', picture: 'public/model/man/mylcx/baif.jpg' },
                { modelNo: '503', index: '2', modelName: 'polo衫', picture: 'public/model/man/polo/baif.jpg' },
            ]
        }
    ];

    /****** 分类页面数据 ******/
    public static categoryData = [
        {
            itemNo: '10',
            itemName: '热门分类',
            data: []
        },
        {
            itemNo: '20',
            itemName: '热门设计',
            data: []
        },
        {
            itemNo: '30',
            itemName: '女装',
            data: [
                {
                    titleId: '301',
                    subtitle: '上装',
                    detail: [
                        { itemNo: '1', itemName: '衬衫', picture: 'public/clothes/woman/top/nz_chenshan.jpg' },
                        { itemNo: '2', itemName: '风衣', picture: 'public/clothes/woman/top/nz_fengyi.jpg' },
                        { itemNo: '3', itemName: '妈妈装', picture: 'public/clothes/woman/top/nz_mamazhuang.jpg' },
                        { itemNo: '4', itemName: '毛衣', picture: 'public/clothes/woman/top/nz_maoyi.jpg' },
                        { itemNo: '5', itemName: '皮衣', picture: 'public/clothes/woman/top/nz_piyi.jpg' },
                        { itemNo: '6', itemName: '外套', picture: 'public/clothes/woman/top/nz_waitao.jpg' },
                        { itemNo: '7', itemName: '卫衣', picture: 'public/clothes/woman/top/nz_weiyi.jpg' },
                        { itemNo: '8', itemName: '羽绒服', picture: 'public/clothes/woman/top/nz_yurongfu.jpg' }
                    ]
                },
                {
                    titleId: '302',
                    subtitle: '下装',
                    detail: [
                        { itemNo: '1', itemName: '哈伦裤', picture: 'public/clothes/woman/bottom/nz_halunku.jpg' },
                        { itemNo: '2', itemName: '九分裤', picture: 'public/clothes/woman/bottom/nz_jiufenku.jpg' },
                        { itemNo: '3', itemName: '阔腿裤', picture: 'public/clothes/woman/bottom/nz_kuotuiku.jpg' },
                        { itemNo: '4', itemName: '牛仔裤', picture: 'public/clothes/woman/bottom/nz_niuzaiku.jpg' },
                        { itemNo: '5', itemName: '小腿裤', picture: 'public/clothes/woman/bottom/nz_xiaotuiku.jpg' },
                        { itemNo: '6', itemName: '休闲裤', picture: 'public/clothes/woman/bottom/nz_xiuxianku.jpg' }
                    ]
                },
                {
                    titleId: '303',
                    subtitle: '裙子',
                    detail: [
                        { itemNo: '1', itemName: '蕾丝连衣裙', picture: 'public/clothes/woman/skirt/nz_leisilianyi.jpg' },
                        { itemNo: '2', itemName: '牛仔裙', picture: 'public/clothes/woman/skirt/nz_niuzaiqun.jpg' },
                        { itemNo: '3', itemName: '裙子', picture: 'public/clothes/woman/skirt/nz_qunzi.jpg' },
                        { itemNo: '4', itemName: '丝绒连衣裙', picture: 'public/clothes/woman/skirt/nz_sironglianyi.jpg' },
                        { itemNo: '5', itemName: '套装裙', picture: 'public/clothes/woman/skirt/nz_taozhuangqun.jpg' },
                        { itemNo: '6', itemName: '印花连衣裙', picture: 'public/clothes/woman/skirt/nz_yinhualianyi.jpg' }
                    ]
                },
                {
                    titleId: '304',
                    subtitle: '特色',
                    detail: [
                        { itemNo: '1', itemName: '大码女装', picture: 'public/clothes/woman/top/nz_chenshan.jpg' },
                        { itemNo: '2', itemName: '汉服', picture: 'public/clothes/woman/top/nz_fengyi.jpg' },
                        { itemNo: '3', itemName: '婚纱', picture: 'public/clothes/woman/top/nz_mamazhuang.jpg' },
                        { itemNo: '4', itemName: '礼服', picture: 'public/clothes/woman/top/nz_maoyi.jpg' },
                        { itemNo: '5', itemName: '旗袍', picture: 'public/clothes/woman/top/nz_piyi.jpg' }
                    ]
                }
            ]
        },
        {
            itemNo: '40',
            itemName: '男装',
            data: [
                {
                    titleId: '401',
                    subtitle: '上装',
                    detail: [
                        { itemNo: '1', itemName: '衬衫', picture: 'public/clothes/man/top/nanz_chenshan.jpg' },
                        { itemNo: '2', itemName: '风衣', picture: 'public/clothes/man/top/nanz_fengyi.jpg' },
                        { itemNo: '3', itemName: '夹克', picture: 'public/clothes/man/top/nanz_jiake.jpg' },
                        { itemNo: '4', itemName: '马甲', picture: 'public/clothes/man/top/nanz_majia.jpg' },
                        { itemNo: '5', itemName: '皮衣', picture: 'public/clothes/man/top/nanz_piyi.jpg' },
                        { itemNo: '6', itemName: 'polo衫', picture: 'public/clothes/man/top/nanz_poloshan.jpg' },
                        { itemNo: '7', itemName: 'T恤', picture: 'public/clothes/man/top/nanz_txu.jpg' },
                        { itemNo: '8', itemName: '卫衣', picture: 'public/clothes/man/top/nanz_weiyi.jpg' },
                        { itemNo: '9', itemName: '西服', picture: 'public/clothes/man/top/nanz_xifu.jpg' }
                    ]
                },
                {
                    titleId: '402',
                    subtitle: '下装',
                    detail: [
                        { itemNo: '1', itemName: '工裤男', picture: 'public/clothes/man/bottom/nanz_gongkunan.jpg' },
                        { itemNo: '2', itemName: '哈伦裤', picture: 'public/clothes/man/bottom/nanz_halunku.jpg' },
                        { itemNo: '3', itemName: '九分裤', picture: 'public/clothes/man/bottom/nanz_jiufenku.jpg' },
                        { itemNo: '4', itemName: '牛仔裤', picture: 'public/clothes/man/bottom/nanz_niuzaiku.jpg' },
                        { itemNo: '5', itemName: '卫裤', picture: 'public/clothes/man/bottom/nanz_weiku.jpg' },
                        { itemNo: '6', itemName: '西裤', picture: 'public/clothes/man/bottom/nanz_xiku.jpg' },
                        { itemNo: '7', itemName: '修身裤', picture: 'public/clothes/man/bottom/nanz_xiushenku.jpg' },
                        { itemNo: '8', itemName: '休闲裤', picture: 'public/clothes/man/bottom/nanz_xiuxianku.jpg' },
                        { itemNo: '9', itemName: '运动裤', picture: 'public/clothes/man/bottom/nanz_yundongku.jpg' }
                    ]
                }
            ]
        },
        {
            itemNo: '50',
            itemName: '童装',
            data: []
        },
        {
            itemNo: '60',
            itemName: '居家内衣',
            data: []
        },
        {
            itemNo: '70',
            itemName: '鞋包',
            data: []
        },
        {
            itemNo: '80',
            itemName: '饰品',
            data: []
        }
    ];

}
