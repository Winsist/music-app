import jsonp from 'common/js/jsonp';
import {sameParams,options} from './config.js'


export function getSingerList(){
    const url= 'https://u.y.qq.com/cgi-bin/musicu.fcg';
    // const url= 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';

    const data = Object.assign({},sameParams,{
        "-": "getUCGI38658013684782233",
        g_tk: 97769522,
        loginUin: 1610490093,
        hostUin: 0,
        platform: "yqq.json",
        uin: 0,
        needNewCode: 0


        // channel:'singer',
        // page:'list',
        // key:'all_all_all',
        // pagesize:100,
        // pagenum:1,
        // hostUin:0,
        // needNewCode:0,
        // platform:'yqq',
        // g_tk:1664029744
    })
    return jsonp(url,data,options)
}  