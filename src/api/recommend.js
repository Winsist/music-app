import jsonp from 'common/js/jsonp';
import {sameParams,options} from './config.js'

export function getRecommend(){
    const url= 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

    const data = Object.assign({},sameParams,{
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })
    return jsonp(url,data,options)
}

// export function getHotSongs(){
//     const url= 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg';

//     const data = Object.assign({},sameParams,{
//         platform: 'yqq.json ',
//         hostUin: 0,
//         needNewCode: 0,
//         ein:19,
//         sin:0,
//         sortId:5,
//         categoryId:10000000,
//         notice:0,
//         rnd:0.3135483199316138
//     })
//     return jsonp(url,data,options)
// }