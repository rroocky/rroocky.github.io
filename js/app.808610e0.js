(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0142":function(t,e,i){t.exports={mobile:"mobile-nav_mobile_3KQwE",nav:"mobile-nav_nav_3jcRG",active:"mobile-nav_active_2JA3x"}},"07d7":function(t,e,i){"use strict";var n=i("a8b3"),a=i.n(n);e["default"]=a.a},"180c":function(t,e,i){"use strict";var n=i("ddf7"),a=i.n(n);e["default"]=a.a},"24f8":function(t,e,i){},"270a":function(t,e,i){"use strict";var n=i("7cca"),a=i.n(n);e["default"]=a.a},"2a41":function(t,e,i){t.exports={slidebox:"fadeSlider_slidebox_1MXtO"}},4218:function(t,e,i){"use strict";var n=i("c136"),a=i.n(n);e["default"]=a.a},"44c9":function(t,e,i){"use strict";var n=i("5548"),a=i.n(n);a.a},4528:function(t,e,i){"use strict";var n=i("24f8"),a=i.n(n);a.a},"4d79":function(t,e,i){"use strict";var n=i("bd9c"),a=i.n(n);e["default"]=a.a},5548:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",[t.$route.meta.keepAlive?i("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():i("router-view")],1)},s=[],o={},r=o,l=i("2877"),c=Object(l["a"])(r,a,s,!1,null,null,null),u=c.exports,d=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("Nav",{attrs:{scrollChange:!0}}),i("Fade-slider"),i("Des"),i("List"),i("Book-list"),i("Footer")],1)},m=[],f=i("795b"),v=i.n(f),g=i("bc3a"),h=i.n(g),_={ajax:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",i=arguments.length>2?arguments[2]:void 0;return new v.a(function(n,a){"get"===e?h.a.get(t,i).then(function(t){n(t)}).catch(function(t){a(t)}):h.a.post(t,i).then(function(t){n(t)}).catch(function(t){a(t)})})}},b=_,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{class:{ontop:t.ontop}},[i("div",[i("div",{staticClass:"logo"}),i("ul",{staticClass:"navbar"},[i("li",[i("router-link",{attrs:{to:{name:"home"}}},[t._v("全版权运营")])],1),i("li",[i("router-link",{attrs:{to:{name:"mobile"}}},[t._v("移动产品")])],1),i("li",[i("router-link",{attrs:{to:{name:"products"}}},[t._v("旗下品牌")])],1),i("li",[i("router-link",{attrs:{to:{name:"cooperation"}}},[t._v("投资者关系")])],1),i("li",[i("router-link",{attrs:{to:{name:"news"}}},[t._v("新闻中心")])],1),i("li",[i("router-link",{attrs:{to:{name:"contact"}}},[t._v("联系我们")])],1)]),i("div",{staticClass:"logon"},[t.isLogin()?[i("a",{attrs:{href:"javasctipt:"}},[t._v(t._s(t.getUser()))]),i("a",{attrs:{href:"javasctipt:"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("退出")])]:[i("router-link",{attrs:{to:{name:"logon"}}},[t._v("登录")]),i("router-link",{attrs:{to:{name:"logon"}}},[t._v("注册")])]],2)])])},w=[],x={data:function(){return{ontop:!0}},props:{scrollChange:{type:Boolean,default:!1}},mounted:function(){this.scrollChange?window.addEventListener("scroll",this.handleScroll):this.ontop=!1},destroyed:function(){this.scrollChange&&window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.ontop=!(t>0)},isLogin:function(){return this.$store.state.login},getUser:function(){return this.$store.state.userName},logout:function(){window.localStorage.removeItem("yuewen"),this.$store.commit("logOut")}}},$=x,k=(i("4528"),i("830a"),Object(l["a"])($,y,w,!1,null,null,null)),j=k.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"fadeSlider"},[i("swiper",{attrs:{options:t.swiperOption,"not-next-tick":t.swiperOption.notNextTick}},[t._l(t.items,function(e){return i("swiper-slide",{key:e.src},[i("div",{class:t.$style.slidebox},[i("img",{attrs:{src:e.src}}),i("div",{class:{animate:t.animate,animatebox:!0}},[i("h2",[t._v(t._s(e.title))]),i("p",[t._v(t._s(e.desc))]),i("span",[t._v(t._s(e.link))])])])])}),t.swiperOption.pagination?i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}):t._e()],2)],1)},O=[],N=i("7212"),I={components:{swiper:N["swiper"],swiperSlide:N["swiperSlide"]},data:function(){var t=this;return{swiperOption:{spaceBetween:30,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0,notNextTick:!1,on:{slideChangeTransitionEnd:function(){t.animate=!0},slideChangeTransitionStart:function(){t.animate=!1}}},items:[{src:"//qidian.gtimg.com/yuewen/v1/css/images/yw-hd-ip.jpg",title:"数字阅读，文创未来",desc:"引领行业的正版数字阅读平台和文学 IP 培育平台",link:"了解更多"},{src:"//qidian.gtimg.com/yuewen/v1/css/images/yw-hd-ft.png",title:"以梦为马，不负韶华",desc:"加入阅文，携手共铸文学梦",link:"了解更多"}],animate:!0}}},P=I,E=(i("5aa4"),i("aede"));function A(t){this["$style"]=E["default"].locals||E["default"]}var S=Object(l["a"])(P,q,O,!1,A,null,null),H=S.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$style.des},[t._m(0)])},L=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("\n      阅文集团旗下囊括 QQ 阅读、起点中文网等业界知名品牌，\n      "),i("br"),t._v("拥有上千万部作品储备、730 万名创作者，覆盖 200 多种内容品类，\n      "),i("br"),t._v("占据国内 IP 改编市场优势份额，成功输出《鬼吹灯》、《盗墓笔记》、\n      "),i("br"),t._v("《琅琊榜》、《择天记》等大量优秀改编作品。\n      "),i("i")])])}],Z={},T=Z,F=i("07d7");function M(t){this["$style"]=F["default"].locals||F["default"]}var Q=Object(l["a"])(T,C,L,!1,M,null,null),X=Q.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$style.list},[t._m(0),t._m(1),t._m(2),t._m(3)])},B=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[i("i",{staticClass:"icon"}),i("span",[t._v("730万作家")])]),i("dd",[t._v("完善的作家孵化和培养体系，打造作家、读者、平台互生共荣的文化生态体系。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[i("i",{staticClass:"icon"}),i("span",[t._v("上千万部作品")])]),i("dd",[t._v("原创小说已覆盖行业半壁江山，覆盖200多种内容品类。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[i("i",{staticClass:"icon"}),i("span",[t._v("数亿活跃用户")])]),i("dd",[t._v("以 QQ 阅读为中心，包罗网络原创、传统出版、音频听书等品牌功能的多元产品矩阵。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",[i("dt",[i("i",{staticClass:"icon"}),i("span",[t._v("深受用户欢迎")])]),i("dd",[t._v('QQ 阅读入选了 QuestMobile 发布的 "2017年度中国移动互联网用户粘性TOP10行业NO.1 APP"全版权运营')])])}],W={},D=W,J=i("4218");function K(t){this["$style"]=J["default"].locals||J["default"]}var R=Object(l["a"])(D,z,B,!1,K,null,null),U=R.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{class:t.$style.footer},[i("div",{class:t.$style.companyinfo},[i("div",[i("p",[t._v("© 2019 上海玄霆娱乐信息科技有限公司版权所有")]),i("p",[t._v("增值电信业务经营许可证：沪B2-20080046-23")]),i("p",[t._v("舞弊监督举报 | 舞弊举报电话：021-61870509 | 内容举报电话：13785633681；010-5935705")]),i("div",{class:t.$style.icon},[i("a",{attrs:{href:"javascript:"}}),i("a",{attrs:{href:"javascript:"}})])])])])},Y=[],V={},tt=V,et=i("57ab");function it(t){this["$style"]=et["default"].locals||et["default"]}var nt=Object(l["a"])(tt,G,Y,!1,it,null,null),at=nt.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$style.booklist},[i("div",{class:t.$style.slidewrap},[i("ul"),i("ul"),i("ul"),i("ul"),i("ul"),i("h3",[t._v("全版权运营")]),i("p",[t._v(t._s(t.bookDescription))])]),i("div",{class:t.$style.slidebook},t._l(t.items,function(e,n){return i("img",{key:e.description,staticClass:"assign-img",attrs:{src:e.src},on:{click:function(e){return t.clickHandle(n)}}})}),0)])},ot=[],rt={data:function(){return{items:[{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/doupocangqiong.jpg",description:"《斗破苍穹》是天蚕土豆首发于起点中文网的古装玄幻小说。其改编的动漫、游戏均广受欢迎，同名电视剧也即将上映。电影由万达影业、腾讯影业和阅文集团联合打造，将于2018年上映。 ",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/wudongqiankun.jpg",description:"《武动乾坤》自2011年于起点中文网连载起，便常居起点热销榜前列，目前全网点击量达数十亿，积累了大量的读者粉丝。同名改编电视剧由阅文集团携手深蓝影业、优酷等联合出品，2018年在东方卫视周播剧场首播，并在优酷视频同步播出。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/bubujingxin.jpg",description:"《步步惊心》是作家桐华创作的穿越小说。同名改编的电视剧于2012年在湖南卫视上映并在中日韩同时热播，荣获2012年第七届首尔国际电视节最佳海外电视剧大奖，并于2016年再度翻拍成《步步惊心：丽》。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/jiangye.png",description:"《将夜》是阅文白金作家猫腻的第四部玄幻小说，首发于起点中文网。同名改编古装电视剧将于2018年上映，腾讯影业、阅文集团参与出品。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/yinianyongheng.jpg",description:"《一念永恒》是阅文白金作家耳根在起点中文网的又一力作，新书提笔不久便吸引一响天开影业掷千万重金夺下影视版权。在影游联动的互助驱动下，其游戏改编权的市场价值有望再刷新高。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/langyabang.jpg",description:"《琅琊榜》是首发在起点女生网上的一本架空权谋类小说，作者海宴。改编电视剧2015年播出后，口碑收视双红，胡歌饰演的梅长苏等角色深入人心。 ",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/daomubiji.jpg",description:"《盗墓笔记》最初连载于起点中文网，是南派三叔成名代表作。2015年网剧开播首日点击破亿，开启了盗墓文学 IP 年。电影于2016年上映，由井柏然、鹿晗、马思纯等主演，累计票房10亿元。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/quanzhigaoshou3.png",description:"《全职高手》最初连载于起点中文网，是阅文白金作家蝴蝶蓝的封神之作。改编动漫受到热捧，在腾讯视频播放量超10亿，成为2017国漫标杆。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/shengxu.jpg",description:"《圣墟》是阅文集团白金作家辰东所著的第六部小说，2016年首发于起点中文网和创世中文网。一经推出，各大公司就争相了解版权情况，目前同名游戏火热上线中。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/guichuideng.jpg",description:"《鬼吹灯》是天下霸唱创作的经典悬疑盗墓小说，连载于起点中文网。先后进行过漫画、游戏、电影、网络电视剧的改编，均取得不俗的成绩，是当之无愧的超级IP。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/zetianji.jpg",description:"《择天记》于创世中文网首发，是阅文白金作家猫腻的第五部玄幻作品。作为阅文重点 IP，进行了影视、游戏、动漫的联合开发，成为阅文集团全版权运营的标杆之作。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/fuyao.jpg",description:"《扶摇皇后》是阅文集团旗下潇湘书院金牌女作家天下归元的经典力作，该作在连载期间，屡屡打破网站古言类作品订阅纪录，点击量超百亿，收藏量达数十万。改编电视剧《扶摇》于2018年播出 。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/zhuxian.jpg",description:"《诛仙》是阅文大神作家萧鼎的经典作品，文风干练，辞藻唯美。2016年改编电视剧《诛仙：青云志》上映，还原著粉十年「诛仙梦」。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/minyuezhuan.jpg",description:"《芈月传》是蒋胜男的原创小说，电子版由阅文独家首发。小说进行了电视剧、游戏等多种形式的改编，一度掀起芈月热潮。",title:""},{src:"//qidian.gtimg.com/yuewen/v1/css/images/ip2/book/lingjianshan.png",description:"《从前有座灵剑山》是国王陛下在创世中文网连载的仙侠类小说。2014年由腾讯动漫改编漫画，2016年由 Studio DEEN 制作动画并在日本播出，成为国漫创新之作。",title:""}],itemStyles:[{transform:"translateX(-1140px) translateZ(-500px)"},{transform:"translateX(-960px) translateZ(-390px)"},{transform:"translateX(-800px) translateZ(-320px)"},{transform:"translateX(-640px) translateZ(-170px)"},{transform:"translateX(-480px) translateZ(-60px)"},{transform:"translateX(-320px) translateZ(50px)"},{transform:"translateX(-160px) translateZ(160px)"},{transform:"translateX(0) translateZ(300px)",filter:"brightness(100%)"},{transform:"translateX(160px) translateZ(160px)"},{transform:"translateX(320px) translateZ(50px)"},{transform:"translateX(480px) translateZ(-60px)"},{transform:"translateX(640px) translateZ(-170px)"},{transform:"translateX(800px) translateZ(-320px)"},{transform:"translateX(960px) translateZ(-390px)"},{transform:"translateX(1120px) translateZ(-500px)"}],timer:null}},computed:{bookDescription:function(){return this.items[Math.floor(this.items.length/2)].description}},mounted:function(){var t=this;this.assign(),this.timer=setInterval(function(){var e=t.items.splice(0,1)[0];t.items.push(e),setTimeout(function(){t.assign()},100)},5e3)},destroyed:function(){clearInterval(this.timer),this.timer=null},methods:{assign:function(){for(var t=document.querySelectorAll(".assign-img"),e=0;e<t.length;e++)t[e].style.transform=this.itemStyles[e].transform},movePrev:function(){for(var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=0;i<e;i++){var n=this.items.splice(0,1);this.items.push(n[0])}setTimeout(function(){t.assign()},100),console.log("before")},moveAfter:function(){for(var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=0;i<e;i++){var n=this.items.splice(this.items.length-1,1);this.items.unshift(n[0])}setTimeout(function(){t.assign()},100),console.log("moveafter")},clickHandle:function(t){var e=Math.floor(this.items.length/2),i=Math.abs(t-e);t!=e&&(t<e?this.moveAfter(i):this.movePrev(i))}}},lt=rt,ct=i("8a54");function ut(t){this["$style"]=ct["default"].locals||ct["default"]}var dt=Object(l["a"])(lt,st,ot,!1,ut,null,null),pt=dt.exports,mt={name:"home",components:{Nav:j,FadeSlider:H,Des:X,List:U,Footer:at,BookList:pt},data:function(){return{recommend:[],err:!1}},methods:{getRecommend:function(){var t=this;b.ajax("https://www.mock.com/recommend","get").then(function(e){t.recommend=e.data.recomendList}).catch(function(e){t.err=!0})}},created:function(){this.getRecommend()}},ft=mt,vt=Object(l["a"])(ft,p,m,!1,null,null,null),gt=vt.exports,ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mobile"},[i("Nav"),i("Mobile-nav"),i("Footer")],1)},_t=[],bt=function(){var t,e,i,n,a,s=this,o=s.$createElement,r=s._self._c||o;return r("div",{class:s.$style.mobile,style:{height:this.mainHeight+"px"}},[r("ul",{class:s.$style.nav},[r("li",{class:(t={},t[s.$style.active]=this.isActive(0),t),on:{click:function(t){return s.handleClick(0,t)}}},[s._v("QQ阅读")]),r("li",{class:(e={},e[s.$style.active]=this.isActive(1),e),on:{click:function(t){return s.handleClick(1,t)}}},[s._v("起点读书")]),r("li",{class:(i={},i[s.$style.active]=this.isActive(2),i),on:{click:function(t){return s.handleClick(2,t)}}},[s._v("读书助手")]),r("li",{class:(n={},n[s.$style.active]=this.isActive(3),n),on:{click:function(t){return s.handleClick(3,t)}}},[s._v("七点国际")]),r("li",{class:(a={},a[s.$style.active]=this.isActive(4),a),on:{click:function(t){return s.handleClick(4,t)}}},[s._v("红袖读书")]),r("i",{style:{left:this.left+"px"}})]),s._l(s.items,function(t){return r("Panel",{directives:[{name:"show",rawName:"v-show",value:s.isShow(t.navIndex),expression:"isShow(item.navIndex)"}],key:t.titleImg,attrs:{titleImg:t.titleImg,introduce:t.introduce,img:t.img}})})],2)},yt=[],wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.$style.panel},[i("h3",{style:{backgroundImage:this.h3bg}}),i("p",[t._v(t._s(t.introduce))]),i("div",{class:t.$style.btn},[t._v("了解更多")]),i("div",{class:t.$style.imgbox},[i("img",{attrs:{src:this.img}})])])},xt=[],$t={props:{titleImg:{type:String,default:""},introduce:{type:String,default:""},img:{type:String,default:""}},computed:{h3bg:function(){return"url("+this.titleImg+")"}}},kt=$t,jt=i("7e4a");function qt(t){this["$style"]=jt["default"].locals||jt["default"]}var Ot=Object(l["a"])(kt,wt,xt,!1,qt,null,null),Nt=Ot.exports,It={components:{Panel:Nt},data:function(){return{items:[{titleImg:"//qidian.gtimg.com/yuewen/v1/css/images/yw-h-qq.png",introduce:"海量原著，想读就读。个性推荐，拥有你的专属书城；精致排版，感受个性阅读体验。",img:"//qidian.gtimg.com/yuewen/v1/css/images/yw-app-qq-new@2x.png",navIndex:0},{titleImg:"//qidian.gtimg.com/yuewen/v1/css/images/yw-h-qd2.png",introduce:"看原创正版小说，追大神作家；广大读者的选择，百万作家在此创作；热门影视、游戏 IP 发源地。",img:"//qidian.gtimg.com/yuewen/v1/css/images/yw-app-qd-new3@2x.png",navIndex:1},{titleImg:"//qidian.gtimg.com/yuewen/v1/css/images/yw-h-zj.png",introduce:"随身记录乍现灵感，发布专属自己的作品，与数亿读者分享你的故事。",img:"//qidian.gtimg.com/yuewen/v1/css/images/yw-app-zj-new3@2x.png",navIndex:2},{titleImg:"//qidian.gtimg.com/yuewen/v1/css/images/yw-h-wbn2.png",introduce:"面向全球的网络文学阅读与原创平台",img:"//qidian.gtimg.com/yuewen/v1/css/images/yw-app-wbn-new@2x.png",navIndex:3},{titleImg:"//qidian.gtimg.com/yuewen/v1/css/images/yw-h-hx.png",introduce:"女频 IP 抢先看，女生爱看的小说都在这",img:"//qidian.gtimg.com/yuewen/v1/css/images/yw-app-hx-new@2x.png",navIndex:4}],activePanel:0,activeNav:0,left:0,mainHeight:700}},created:function(){this.mainHeight=this.$store.state.fullPageHeight},methods:{handleClick:function(t,e){this.activePanel=t,this.activeNav=t;var i=e.target.offsetLeft;this.left=i},isShow:function(t){return t===this.activePanel},isActive:function(t){return t===this.activeNav}}},Pt=It,Et=i("cb4e");function At(t){this["$style"]=Et["default"].locals||Et["default"]}var St=Object(l["a"])(Pt,bt,yt,!1,At,null,null),Ht=St.exports,Ct={components:{Nav:j,Footer:at,MobileNav:Ht}},Lt=Ct,Zt=Object(l["a"])(Lt,ht,_t,!1,null,"6fd74174",null),Tt=Zt.exports,Ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Nav"),i("Production"),i("Foter")],1)},Mt=[],Qt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$style.product,style:{height:this.mainHeight+"px"}},[i("h2",{class:t.$style.title},[t._v("旗下品牌")]),i("div",{class:t.$style.production},t._l(t.items,function(e,n){var a;return i("div",{key:e.title},[i("a",{class:(a={},a[t.$style.active]=t.isActive(n),a),attrs:{href:"javascript:"},on:{mouseover:function(e){return t.handleMouseover(n)}}},[t._v(t._s(e.title))])])}),0),i("div",{class:t.$style.introbox},[i("transition-group",{attrs:{name:"fade",tag:"div",mode:"out-in"}},t._l(t.items,function(e,n){return i("p",{directives:[{name:"show",rawName:"v-show",value:t.isActive(n),expression:"isActive(index)"}],key:e.title},[t._v(t._s(e.description))])}),0)],1)])},Xt=[],zt={data:function(){return{items:[{title:"起点中文网",description:"起点中文网创建于2002年5月，是国内引领行业的原创文学门户网站和写作平台，隶属于数字阅读综合平台——阅文集团。起点中文网前身为起点原创文学协会，长期致力于原创文学作者的挖掘与培养工作，并以推动中国文学原创事业为发展宗旨，并以此为契机开创了在线收费阅读即电子出版的新模式。"},{title:"创世中文网",description:"创世中文网成立于2013年，是由资深网络文学团队精心打造的集阅读、创作、互动社区、版权运营于一体的全开放网络文学平台。依托阅文集团，基于团队经验和影响力以及旗下大批知名网络作家，致力于推进网络文学泛娱乐运营、用户阅读和互动体验、原创扶持力度的升级，成为网络文学行业格局的主要变革者。"},{title:"云起书院",description:"云起书院是引领行业的女性文学创作基地，成就无数平民作者的文学梦想。作为网络文学产业的重要细分市场，女性文学有着巨大的市场想象空间。云起书院将肩负起打造全新女性文学产业生态的重任，基于腾讯强大的资源平台和运营体系，促进中国女性文学市场的健康、持续发展，迎接“全民阅读”时代的到来。"},{title:"红袖添香",description:"红袖添香创办于1999年，国内引领行业的女性文学数字版权运营商。 红袖添香为用户提供涵盖小说、散文、杂文、诗歌、歌词、剧本、日记等体裁的高品质创作和阅读服务，在言情、职场小说等女性文学写作及出版领域具有巨大影响力。"},{title:"潇湘书院",description:"潇湘书院一直以做中国最好的女生原创网站为目标，立志为广大的原创作者提供一个公平、公正、健康的文学发展平台。优秀的工作团队和人性化的管理模式，使潇湘书院成为女性原创作者群体以及读者群体中具备强大吸引力和归属感的原创网站。"},{title:"起点女生网",description:"起点女生网成立于2009年11月，其前身是「起点女生频道」，致力于对女性网络原创文学及作者的培养和挖掘。起点女生网依托起点中文网的成熟运作机制，成功实现了女性网络原创文学的商业化发展模式。囊括了《步步惊心》、《搜索》、《毒胭脂》等多部热门影视剧的原著小说版权。"},{title:"小说阅读网",description:"小说阅读网是国内优质文学版权运营商，网站拥有海量原创作品、签约作家、签约编剧及用户群，自 2009 年 4 月新版上线、开通 VIP 系统以来，打造出数部点击过亿的超人气签约作品，迅速创下单部作品点击逾两亿、单章订阅超三万、月稿酬收入过六万等各项辉煌记录，缔造出白金高薪网络作家十多人，月薪过万作家一百五十多人。"},{title:"言情小说吧",description:"言情小说吧成立于2005年，从建立之初至今，一直秉承着为用户提供优质的言情小说阅读体验平台，打造全球华语言情小说阅读基地的理念，在网络文学界走出了一条专业化的独特发展道路。言情小说吧拥有人气超高的论坛、方便快捷的网游以及站内家园等，能给用户提供读书、休闲、娱乐的多方位体验。"},{title:"天方听书网",description:"天方听书网创建于2004年，经过多年的运营和发展，已经成为国内引领行业的听书网站。天方听书网专注于有声读物的研发和市场运作，为广大听友提供时尚前沿的听书资讯和听书内容。网站内容涉及经济管理、中外文学、古典文学、现代文学、儿童文学、探案悬疑、科幻文学、百科知识等近20个大类。"},{title:"懒人听书",description:"懒人听书成立于2012年，专注移动互联网有声数字领域，立足移动音频行业，为用户提供所需的书籍节目以及有声数字交流服务等高品质内容。 上线至今，懒人听书始终坚持产品第一、用户至上，不断优化产品，丰富平台资源，形成多项行业优势，业已成为移动音频行业优质品牌。"},{title:"QQ阅读",description:"最早始于 WAP 版 QQ书城的 QQ阅读，早在前智能手机年代就积累了大量用用户基础。有着优良用户体验和海量原创作品的QQ阅读早已覆盖 iOS 、Android 等主流移动设备，是目前市面上广受用户欢迎的移动读书软件。"},{title:"起点读书",description:"起点读书是起点中文网首创「在线收费阅读」服务的移动应用，原创作家与读者在此互动创作，10 年来大神作家群星璀璨，积累了数百万部优秀原创作品。让亿万书友在 iOS、Android 等移动设备随时随地，畅享阅读。"},{title:"作家助手",description:"作家助手是阅文集团诚意打造的一款移动创作应用，覆盖 Android、iOS 等主流移动平台，凭借流畅的用户体验、强大的创作工具、可视化的统计分析等优势，迅速成为市场上深受作家喜爱的移动创作应用之一。"},{title:"Webnovel",description:"Webnovel作为阅文全球化策略的重要产品，提供高质量的英文虚构小说内容给全球英文读者。全面覆盖各个终端，除了优秀体验的网页以外，也一如既往的为 iOS 和 Android 等主流移动设备提供服务，是优秀的英文网文内容平台。"},{title:"红袖读书",description:"自千禧年来，红袖一直致力于为用户提供原创作品，并成为孕育中国原创文化的沃土，成功打造出多部诸如《裸婚》、《欢乐颂》、《萌妻食神》等一批高质量的IP作品。而经红袖精心开发出的红袖读书APP，兼顾优良的用户体验以及海量的书城作品两大特色，已覆盖iOS以及Android等主流移动设备，当前在女性阅读市场独占鳌头"},{title:"元气阅读",description:"元气阅读创建于2018年3月，是国内领先的二次元网络文学网站，隶属于数字阅读综合平台--阅文集团。元气阅读以推动中国二次元文学事业为宗旨，长期致力于二次元文学的挖掘与培养，并取得了巨大成就。"},{title:"中智博文",description:"中智博文图书有限公司成立于2003年，是一家专业从事图书策划、营销推广和发行代理的民营图书企业。公司以高品质、高效率、高市场敏锐度和实用性、艺术性相结合的原则，成功策划、出版发行了上千种图书品种，内容涵盖史地文化、少儿百科、经管励志、健康生活、学生读物、世界名著等诸多方面。"},{title:"聚石文华",description:"聚石文华的运营团队以专业出版策划人为主体，汇集行业精英凝聚而成；公司的整体运作主要包括图书的策划出版及发行 ，立志于为出版市场提供卓越的文学作品。自筹备阶段起，聚石文华已然洽谈并签约数名国内一流作家新作；并携手搜狐、腾讯、新浪、起点、晋江、红袖、四月天、17K等原创文学网站搭建出版文学的战略合作平台。"},{title:"华文天下",description:"天津华文天下图书有限公司成立于2001年，是中国民营书业具有深远影响力的公司之一。公司策划了大量优秀畅销图书。其中多本图书单品销量超过百万册，在版权引进和国内原创作家的打造上，探索出一整套畅销书运营模式。"}],activeIndex:0,mainHeight:700}},methods:{isActive:function(t){return this.activeIndex===t},handleMouseover:function(t){this.activeIndex=t}},created:function(){this.mainHeight=this.$store.state.fullPageHeight}},Bt=zt,Wt=i("4d79");i("e06c");function Dt(t){this["$style"]=Wt["default"].locals||Wt["default"]}var Jt=Object(l["a"])(Bt,Qt,Xt,!1,Dt,null,null),Kt=Jt.exports,Rt={components:{Nav:j,Production:Kt,Foter:at}},Ut=Rt,Gt=Object(l["a"])(Ut,Ft,Mt,!1,null,"bfe62b1a",null),Yt=Gt.exports,Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cooperation"},[i("Nav"),i("Banner"),i("Footer")],1)},te=[],ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$style.cooperation,style:{height:this.mainHeight+"px"}},[i("div",[i("h2",{class:t.$style.title},[t._v("投资者关系")]),i("p",{class:t.$style.article},[t._v("文集团是中国网络文学市场的先锋，运营领先的网络文学平台。\n      "),i("br"),t._v("按作家、读者以及提供文学内容的规模和质量等维度，阅文都在中国网络文学市场中\n      "),i("br"),t._v("处于领先地位\n    ")]),i("p",{class:t.$style.gu},[t._v("2017年11月8日，阅文集团在香港联交所主板上市，股份代号：0772。")]),i("img",{attrs:{src:"//qidian.gtimg.com/yuewen/v1/css/images/yw-invest-pic@2x.png",alt:""}})])])},ie=[],ne={data:function(){return{mainHeight:700}},created:function(){this.mainHeight=this.$store.state.fullPageHeight}},ae=ne,se=i("180c");function oe(t){this["$style"]=se["default"].locals||se["default"]}var re=Object(l["a"])(ae,ee,ie,!1,oe,null,null),le=re.exports,ce={components:{Nav:j,Footer:at,Banner:le}},ue=ce,de=Object(l["a"])(ue,Vt,te,!1,null,"95df137a",null),pe=de.exports,me=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news"},[i("Nav"),i("News"),i("Footer")],1)},fe=[],ve=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{class:t.$style.news,style:{height:this.mainHeight+"px"}},[i("div",t._l(t.items,function(t){return i("News-panel",{key:t.img,attrs:{items:t}})}),1)])},ge=[],he=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.$style.panel},[i("div",{class:t.$style.imgbox},[i("img",{attrs:{src:t.items.img,alt:""}})]),i("div",{class:t.$style.articlebox},[i("h3",{class:t.$style.title},[i("span",[t._v(t._s(t.items.title))])]),i("div",{class:t.$style.date},[t._v(t._s(t.items.date))]),i("div",{class:t.$style.article},[t._v(t._s(t.items.article))]),i("a",{class:t.$style.more,attrs:{href:"javascript:"}},[t._v("\n      阅读详情\n      "),i("i",{class:t.$style.arr})])])])},_e=[],be={props:{items:{type:Object,default:{}}}},ye=be,we=i("c1b0");function xe(t){this["$style"]=we["default"].locals||we["default"]}var $e=Object(l["a"])(ye,he,_e,!1,xe,null,null),ke=$e.exports,je={components:{NewsPanel:ke},data:function(){return{mainHeight:700,items:[{img:"//qidian.qpic.cn/qidian_common/349573/0ee585d5b7694f7bb9dfa12ec5e08a67/0",title:"当代女子图鉴出炉 红袖读书发布2019女性婚恋观研究报告",date:"2019-03-12",article:"3月8日，阅文集团旗下女性阅读旗舰品牌红袖读书发布当代女子图鉴——《2019红袖读书女性婚恋观研究报告》（下称“报告”）。此次研究报告以红袖读书APP内用户线上调研结果为蓝本，从感情经历、择偶要求、婚姻期待等多方面对“90后”、“95后”、“00后”三个年龄阶段女性读者的婚恋观进行了全面的剖析，相信这会是一份了解年轻女性的快速指南和实用的“脱单攻略”。"},{img:"//qidian.qpic.cn/qidian_common/349573/c3b149f9169151cfe3c9cf90a95c2dbe/0",title:"上海市委书记李强一行走访调研阅文集团",date:"2019-02-22",article:"李强来到阅文集团后，了解了企业发展历程、创新模式以及未来发展战略，同企业负责人亲切交流，认真听取大家关于产业发展、营商环境的意见建议。"},{img:"//qidian.qpic.cn/qidian_common/349573/dec0ccae2f521106346d80b356330834/0",title:"《流浪地球》票房破40亿，阅文科幻IP生态定义未来",date:"2019-02-22",article:""},{img:"//qidian.qpic.cn/qidian_common/349573/7e4872880ee9a25066c99b2cbc0bd7dd/0",title:"阅文集团发布《2018网络文学发展报告》 新生代用户带来行业新趋势",date:"2019-02-22",article:"阅文集团正式发布2018网络文学发展报告，指出已有多年发展历史的网络文学正不断进化和迭代，在各个维度均展现出全新的面貌特征，其中新生代的崛起和粉丝价值的凸显更促使行业产生内生式的升级和变革。"}]}},created:function(){this.mainHeight=this.$store.state.fullPageHeight}},qe=je,Oe=i("874f");function Ne(t){this["$style"]=Oe["default"].locals||Oe["default"]}var Ie=Object(l["a"])(qe,ve,ge,!1,Ne,null,null),Pe=Ie.exports,Ee={components:{Nav:j,Footer:at,News:Pe}},Ae=Ee,Se=Object(l["a"])(Ae,me,fe,!1,null,"d74db12a",null),He=Se.exports,Ce=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[i("Nav"),i("Cooperation"),i("Footer")],1)},Le=[],Ze=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{class:t.$style.productionInfo,style:{height:this.mainHeight+"px"}},[i("div",[i("div",{class:t.$style.left},[i("i",{class:t.$style.logo}),t._m(0)]),i("div",{class:t.$style.right},[i("dl",{class:t.$style.contactwrap},[i("dt",{class:t.$style.contactTitle},[t._v("联系我们")]),i("dd",{class:t.$style.contact},[i("div",t._l(t.cooeration1,function(e){return i("dl",{key:e.title},[i("dt",[t._v(t._s(e.title))]),i("div",{class:t.$style.hide},t._l(e.infoList,function(e,n){return i("dd",{key:n},[t._v(t._s(e))])}),0)])}),0),i("div",t._l(t.cooeration2,function(e){return i("dl",{key:e.title},[i("dt",[t._v(t._s(e.title))]),i("div",{class:t.$style.hide},t._l(e.infoList,function(e,n){return i("dd",{key:n},[t._v(t._s(e))])}),0)])}),0),i("div",t._l(t.cooeration3,function(e){return i("dl",{key:e.title},[i("dt",[t._v(t._s(e.title))]),i("div",{class:t.$style.hide},t._l(e.infoList,function(e,n){return i("dd",{key:n},[t._v(t._s(e))])}),0)])}),0)])]),i("dl",{class:t.$style.mobile},[i("dt",{class:t.$style.mobiletTitle},[t._v("移动产品")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6)])])])])])},Te=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("北京")]),i("li",[t._v("上海")]),i("li",[t._v("杭州")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dd",[i("a",{attrs:{href:"javascript:"}},[t._v("阅读")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dd",[i("a",{attrs:{href:"javascript:"}},[t._v("起点读书")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dd",[i("a",{attrs:{href:"javascript:"}},[t._v("作家助手")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dd",[i("a",{attrs:{href:"javascript:"}},[t._v("Webnovel")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dd",[i("a",{attrs:{href:"javascript:"}},[t._v("红袖读书")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dd",[i("a",{attrs:{href:"javascript:"}},[t._v("飞读免费小说")])])}],Fe={data:function(){return{cooeration1:[{title:"IP衍生品合作",infoList:["朱女士","电话：021-61870500-82012","邮箱：zhudandan@yuewen.com"]},{title:"影视合作 (联合开发出品和制作)",infoList:["李女士","电话：021-61870500-82012","电话：021-61870500-82029"]},{title:"活动推广 (联合开发出品和制作)",infoList:["李女士","电话：021-61870500-82012","电话：021-61870500-82029"]},{title:"动画合作",infoList:["李女士","电话：021-61870500-82012","电话：021-61870500-82029"]}],cooeration2:[{title:"市场商务合作",infoList:["朱女士","电话：021-61870500-82012","邮箱：zhudandan@yuewen.com"]},{title:"海外商务合作",infoList:["李女士","电话：021-61870500-82012","电话：021-61870500-82029"]},{title:"App推广合作",infoList:["李女士","电话：021-61870500-82012","电话：021-61870500-82029"]},{title:"音频业务合作",infoList:["李女士","电话：021-61870500-82012","电话：021-61870500-82029"]}],cooeration3:[{title:"影视及游戏改编授权",infoList:["朱女士","电话：021-61870500-82012","邮箱：zhudandan@yuewen.com"]},{title:"出版版权合作",infoList:["李女士","电话：021-61870500-82012","电话：021-61870500-82029"]},{title:"媒体联系",infoList:["李女士","电话：021-61870500-82012","电话：021-61870500-82029"]}],mainHeight:700}},created:function(){this.mainHeight=this.$store.state.fullPageHeight}},Me=Fe,Qe=i("8f23");function Xe(t){this["$style"]=Qe["default"].locals||Qe["default"]}var ze=Object(l["a"])(Me,Ze,Te,!1,Xe,null,null),Be=ze.exports,We={components:{Nav:j,Cooperation:Be,Footer:at}},De=We,Je=Object(l["a"])(De,Ce,Le,!1,null,null,null),Ke=Je.exports,Re=function(){var t,e,i=this,n=i.$createElement,a=i._self._c||n;return a("div",[a("Nav"),a("section",{class:i.$style.logon,style:{height:i.mainHeight+"px"}},[a("img",{attrs:{src:"//img1.write.qq.com/writer/p1/contentv2/slogan.jpg",alt:""}}),a("div",{class:i.$style.logonbox},[a("div",[a("div",{staticClass:"clearfix"},[a("div",{class:(t={},t[i.$style.tabbtn]=!0,t[i.$style.active]=i.isActive("logon"),t),on:{click:function(t){return i.changeOper("logon")}}},[i._v("登录")]),a("div",{class:(e={},e[i.$style.tabbtn]=!0,e[i.$style.active]=i.isActive("register"),e),on:{click:function(t){return i.changeOper("register")}}},[i._v("注册")])]),a("div",{class:i.$style.inputgroup},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:i.userName,expression:"userName"}],attrs:{type:"text",id:"username",placeholder:"请输入用户名"},domProps:{value:i.userName},on:{change:function(t){return i.check("userName",t)},input:function(t){t.target.composing||(i.userName=t.target.value)}}})]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:i.pwd,expression:"pwd"}],attrs:{type:"password",id:"pwd",placeholder:"请输入密码"},domProps:{value:i.pwd},on:{change:function(t){return i.check("pwd",t)},input:function(t){t.target.composing||(i.pwd=t.target.value)}}})]),i.isActive("logon")?a("div",{attrs:{id:i.$style.submit},on:{click:i.login}},[i._v("登录")]):i.isActive("register")?a("div",{attrs:{id:i.$style.submit},on:{click:i.register}},[i._v("注册")]):i._e()])])])]),a("Foter")],1)},Ue=[],Ge=(i("28a5"),{components:{Nav:j,Foter:at},data:function(){return{mainHeight:700,oper:"logon",userName:"",pwd:"",forMate:!1}},methods:{isActive:function(t){return this.oper===t},changeOper:function(t){this.oper=t},check:function(t,e){var i=/^[A-Za-z][0-9A-Za-z]{5,}/.test(this.userName),n=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}/.test(this.pwd);"userName"===t?i?e.target.parentNode.classList.remove("username-tip"):e.target.parentNode.classList.add("username-tip"):"pwd"===t&&(n?e.target.parentNode.classList.remove("pwd-tip"):e.target.parentNode.classList.add("pwd-tip")),this.forMate=!(!i||!n)},login:function(){if(this.forMate){var t=window.localStorage.getItem("user").split(":")[1];this.pwd===t?(this.$store.commit("logon",this.userName),window.localStorage.removeItem("yuewen"),window.localStorage.setItem("yuewen","login"),alert(this.userName+" 登陆成功"),this.$router.push({path:"/"})):alert("用户名密码错误")}else alert("用户名或密码格式错误")},register:function(){this.forMate?(window.localStorage.removeItem("user"),window.localStorage.setItem("user",this.userName+":"+this.pwd),alert("注册成功")):alert("用户名或密码格式错误")}},created:function(){this.mainHeight=this.$store.state.fullPageHeight}}),Ye=Ge,Ve=i("270a");i("44c9");function ti(t){this["$style"]=Ve["default"].locals||Ve["default"]}var ei=Object(l["a"])(Ye,Re,Ue,!1,ti,null,null),ii=ei.exports;n["a"].use(d["a"]);var ni=new d["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:gt,meta:{keepAlive:!0}},{path:"/mobile",name:"mobile",component:Tt,meta:{keepAlive:!0}},{path:"/products",name:"products",component:Yt,meta:{keepAlive:!0},beforeEnter:function(t,e,i){window.localStorage.getItem("yuewen")?i():i({path:"/logon"})}},{path:"/cooperation",name:"cooperation",component:pe,meta:{keepAlive:!0}},{path:"/news",name:"news",component:He,meta:{keepAlive:!0}},{path:"/contact",name:"contact",component:Ke,meta:{keepAlive:!0}},{path:"/logon",name:"logon",component:ii,meta:{keepAlive:!1}},{path:"*",redirect:"/"}]}),ai=i("2f62");n["a"].use(ai["a"]);var si=new ai["a"].Store({state:{fullPageHeight:window.screen.availHeight-170,login:!!window.localStorage.getItem("yuewen"),userName:window.localStorage.getItem("user")?window.localStorage.getItem("user").split(":")[0]:""},mutations:{logon:function(t,e){t.login=!0,t.userName=e},logOut:function(t){t.login=!1,t.userName=""}},actions:{}});i("f5fa"),i("a1a3");i("baee"),n["a"].config.productionTip=!1,new n["a"]({router:ni,store:si,render:function(t){return t(u)}}).$mount("#app")},"57ab":function(t,e,i){"use strict";var n=i("776c"),a=i.n(n);e["default"]=a.a},"5aa4":function(t,e,i){"use strict";var n=i("a6b0"),a=i.n(n);a.a},"776c":function(t,e,i){t.exports={footer:"footer_footer_3LJ2s",companyinfo:"footer_companyinfo_hQ3TU",icon:"footer_icon_13BWE"}},"7cca":function(t,e,i){t.exports={logon:"logon_logon_2Zmb8",logonbox:"logon_logonbox_3xrOY",tabbtn:"logon_tabbtn_1EPj_",active:"logon_active_1p1Rq",inputgroup:"logon_inputgroup_36Eww",submit:"logon_submit_2oEty"}},"7e4a":function(t,e,i){"use strict";var n=i("985a"),a=i.n(n);e["default"]=a.a},"830a":function(t,e,i){"use strict";var n=i("badd"),a=i.n(n);a.a},"874f":function(t,e,i){"use strict";var n=i("ded4"),a=i.n(n);e["default"]=a.a},"8a54":function(t,e,i){"use strict";var n=i("9864"),a=i.n(n);e["default"]=a.a},"8f23":function(t,e,i){"use strict";var n=i("974b"),a=i.n(n);e["default"]=a.a},"974b":function(t,e,i){t.exports={productionInfo:"cooperation_panel_productionInfo_3F9C8",left:"cooperation_panel_left_2yf-U",logo:"cooperation_panel_logo_2468r",right:"cooperation_panel_right_18uKi",contactwrap:"cooperation_panel_contactwrap_2S3rc",contactTitle:"cooperation_panel_contactTitle_1M0lH",contact:"cooperation_panel_contact_2bJS_",hide:"cooperation_panel_hide_V0icH",mobile:"cooperation_panel_mobile_1Efd9",mobiletTitle:"cooperation_panel_mobiletTitle_15Wpi"}},"985a":function(t,e,i){t.exports={panel:"mobile-panel_panel_3ZePM",btn:"mobile-panel_btn_1HU2d",imgbox:"mobile-panel_imgbox_EHODY"}},9864:function(t,e,i){t.exports={booklist:"booklist_booklist_r90rZ",slidewrap:"booklist_slidewrap_1c72n","moved-bg":"booklist_moved-bg_2e7MZ",slidebook:"booklist_slidebook_2TWsG"}},"9f94":function(t,e,i){t.exports={panel:"news-panel_panel_2kNKx",imgbox:"news-panel_imgbox_2Fyza",articlebox:"news-panel_articlebox_3KF6F",title:"news-panel_title_3wbPj",date:"news-panel_date_3SI15",article:"news-panel_article_2nfZT",more:"news-panel_more_3qk2B",arr:"news-panel_arr_3PTBf"}},a1a3:function(t,e,i){t.exports={clearfix:"app_clearfix_20tR3"}},a6b0:function(t,e,i){},a8b3:function(t,e,i){t.exports={des:"description_des_18wH8"}},aede:function(t,e,i){"use strict";var n=i("2a41"),a=i.n(n);e["default"]=a.a},badd:function(t,e,i){},baee:function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("96eb"),a=i.n(n),s="https://www.mock.com";a.a.mock(s+"/recommend","get",{recomendList:[{id:0,title:"斗罗大陆",author:"唐家三少"},{id:1,title:"善良的死神",author:"唐家三少"},{id:2,title:"食神",author:"唐家三少"},{id:3,title:"光之子",author:"唐家三少"},{id:4,title:"十二生肖",author:"唐家三少"},{id:5,title:"天珠变",author:"唐家三少"},{id:6,title:"神印王座",author:"唐家三少"},{id:7,title:"琴帝",author:"唐家三少"},{id:8,title:"星辰变",author:"唐家三少"},{id:9,title:"狂神",author:"唐家三少"},{id:10,title:"星火大道",author:"唐家三少"}]})},bd9c:function(t,e,i){t.exports={product:"product_product_3ijG3",title:"product_title_oUCWQ",production:"product_production_1Rdem",active:"product_active_2tHi4",introbox:"product_introbox_3seOA"}},c136:function(t,e,i){t.exports={list:"list_list_3gge0"}},c1b0:function(t,e,i){"use strict";var n=i("9f94"),a=i.n(n);e["default"]=a.a},cb4e:function(t,e,i){"use strict";var n=i("0142"),a=i.n(n);e["default"]=a.a},ddf7:function(t,e,i){t.exports={cooperation:"banner_cooperation_2Lazy",title:"banner_title_35Kja",article:"banner_article_-GIA1",gu:"banner_gu_9o9r5"}},ded4:function(t,e,i){t.exports={news:"news_news_5FeYJ"}},e06c:function(t,e,i){"use strict";var n=i("ee01"),a=i.n(n);a.a},ee01:function(t,e,i){},f5fa:function(t,e,i){}});