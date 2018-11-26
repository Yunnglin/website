var section = -1;

//信息组合
var information = [
    //5. 霸王别姬                 √0
    BWBJ = {
        "name": [
            "霸王别姬",
            "Farewell My Concubine"
        ],
        "intro": [
            "段小楼（张丰毅）与程蝶衣（张国荣）是一对打小一起长大的师兄弟。两人一个演生，一个饰旦，一向配合天衣无缝，尤其一出《霸王别姬》，更是誉满京城。为此，两人约定合演一辈子《霸王别姬》。但两人对戏剧与人生关系的理解有本质不同：",
            "段小楼深知戏非人生，程蝶衣则是人戏不分。",
            "段小楼在认为该成家立业之时迎娶了名妓菊仙（巩俐），致使程蝶衣认定菊仙是可耻的第三者，使段小楼做了叛徒，自此，三人围绕一出《霸王别姬》生出的爱恨情仇战开始随着时代风云的变迁不断升级，终酿成悲剧..."
        ],
        "director": [
            "陈凯歌"
        ],
        "actors": [
            "张国荣",
            "巩俐",
            "张丰毅"
        ],
        "releasetime": "1993年01月01日",
        "color": "#f66355",
        "reason": [
            "说的是一辈子！差一年，一个月，一天，一个时辰，都不算一辈子！"
        ]
    },

    //9. 毒液：致命守护者         √1
    DY = {
        "name": [
            "毒液：致命守护者",
            "Venom"
        ],
        "intro": [
            "2018漫威压轴巨制，蜘蛛侠最强劲敌“毒液”强势来袭！曾主演《敦刻尔克》《盗梦空间》等口碑大片的肌肉型男汤姆·哈迪在本片中饰演“毒液”的宿主–埃迪·布洛克。",
            "身为记者的埃迪在调查生命基金会老板卡尔顿·德雷克（里兹·阿迈德饰）的过程中，事业遭受重创，与未婚妻安妮·韦英（米歇尔·威廉姆斯饰）的关系岌岌可危，并意外被外星共生体入侵，历经挣扎对抗，最终成为拥有强大超能力，无人可挡的“毒液”。"
        ],
        "director": [
            "鲁本·弗雷斯彻"
        ],
        "actors": [
            "汤姆·哈迪",
            "米歇尔·威廉姆斯",
            "里兹·阿迈德",
            "斯科特·黑兹",
            "瑞德·斯科特"
        ],
        "releasetime": "2018年10月05日",
        "color": "#0f0b0b",
        "reason": [
            "I'm Venom and you are mine."
        ]
    },

    //12. 疯狂动物城              √2
    FKDWC = {
        "name": [
            "疯狂动物城",
            "Zootopia"
        ],
        "intro": [
            "故事发生在一个所有哺乳类动物和谐共存的美好世界中。",
            "兔子朱迪（金妮弗·古德温 Ginnifer Goodwin 配音）从小就梦想着能够成为一名惩恶扬善的刑警。",
            "凭借着智慧和努力，朱迪成功的从警校中毕业进入了疯狂动物城警察局。",
            "殊不知，这里是大型肉食类动物的领地。",
            "作为第一只，也是唯一的小型食草类动物，朱迪会遇到怎样的故事呢？",
            "近日里，城中接连发生动物失踪案件，就在全部警员都致力于调查案件真相之时，朱迪却被局长（伊德瑞斯·艾尔巴 Idris Elba 配音）发配成为了一名无足轻重的交警。",
            "某日，正在执勤的兔子遇见了名为尼克（杰森·贝特曼 Jason Bateman 配音）的狐狸，两人不打不相识，之后又误打误撞的接受了寻找失踪的水獭先生的任务：",
            "“如果不能在两天之内找到水獭先生，朱迪就必须自愿离开警局。”",
            "朱迪找到了尼克，两人联手揭露了一个隐藏在疯狂动物城之中的惊天秘密..."
        ],
        "director": [
            "拜伦·霍华德",
            "瑞奇·摩尔",
            "杰拉德·布什"
        ],
        "actors": [
            "金妮弗·古德温",
            "杰森·贝特曼",
            "伊德里斯·艾尔巴",
            "珍妮·斯蕾特",
            "内特·托伦斯"
        ],
        "releasetime": "2016年03月04日",
        "color": "#f6bc51",
        "reason": [
            "过来，抱抱！"
        ]
    },

    //6. 摔跤吧！爸爸             √3
    SJBBB = {
        "name": [
            "摔跤吧！爸爸",
            "Dangal"
        ],
        "intro": [
            "马哈维亚（阿米尔·汗 Aamir Khan 饰）曾经是一名前途无量的摔跤运动员，在放弃了职业生涯后，他最大的遗憾就是没有能够替国家赢得金牌。",
            "马哈维亚将这份希望寄托在了尚未出生的儿子身上，哪知道妻子接连给他生了两个女儿，取名吉塔（法缇玛·萨那·纱卡 Fatima Sana Shaikh 饰）和巴比塔（桑亚·玛荷塔 Sanya Malhotra 饰）。",
            "让马哈维亚没有想到的是，两个姑娘展现出了杰出的摔跤天赋，让他幡然醒悟，就算是女孩，也能够昂首挺胸的站在比赛场上，为了国家和她们自己赢得荣誉。",
            "就这样，在马哈维亚的指导下，吉塔和巴比塔开始了艰苦的训练，两人进步神速，很快就因为在比赛中连连获胜而成为了当地的名人。为了获得更多的机会，吉塔进入了国家体育学院学习，在那里，她将面对更大的诱惑和更多的选择..."
        ],
        "director": [
            "尼特什·提瓦瑞"
        ],
        "actors": [
            "阿米尔·汗",
            "萨卡诗·泰瓦",
            "桑亚·玛荷塔",
            "法缇玛·萨那·纱卡"
        ],
        "releasetime": "2016年12月23日",
        "color": "#fad3a8",
        "reason": [
            "这个世界充满假象，唯有痛楚永不说谎。"
        ]
    },

    //2. 大象席地而坐             √4
    DXXDRZ = {
        "name": [
            "大象席地而坐",
            "An Elephant Sitting Still"
        ],
        "intro": [
            "满州里动物园有一头大象，每天坐在那里。为朋友出头的少年、为弟报仇的恶霸哥哥、身陷囹圄的女生，卡在世界灰暗的缝隙里无法脱身，却挣扎着去看大象。",
            "萧瑟寒冬的一天，绝望身影在不对称不平衡的影像中碰撞， 爆裂了压抑的沉郁，在粗糙布景、朦胧灯光的低成本制作中肆意蔓延。",
            "作者兼导演胡波 （笔名胡迁）首作，以青涩朴质与震撼感性，获柏林影展赏识入围论坛单元， 却是无法嵌合和谐主旋律的一块失落拼图。看不见大象是共同宿命，胡波骤然陨落，也成了这一代人的遗憾..."
        ],
        "director": [
            "胡波"
        ],
        "actors": [
            "章宇",
            "彭昱畅",
            "王玉雯",
            "李从喜"
        ],
        "releasetime": "2018年2月16日",
        "color": "#ddd9d4",
        "reason": [
            "“我要去满洲了。”",
            "“为什么？”",
            "“那里坐着一头大象”",
            "“和你有什么关系？”",
            "“没关系。”"
        ]
    },

    //3. 复仇者联盟3：无限战争    √5          //reson要改hhh
    FCZLM3 = {
        "name": [
            "复仇者联盟3：无限战争",
            "Avengers: Infinity War"
        ],
        "intro": [
            "银河系中的至尊霸主灭霸（乔什·布洛林饰）带着几个得力手下洗劫了全宇宙，只为了将所有的无限宝石镶嵌于金属手套上，这个手套可以将整个银河系毁灭于弹指间。",
            "为了拯救宇宙，托尼·斯塔克（小罗伯特·唐尼饰）和史蒂夫·罗杰斯（克里斯·埃文斯饰）需要摒弃前嫌，重组复仇者联盟，并与蜘蛛侠（汤姆·赫兰德饰）、奇异博士（本尼迪克特·康伯巴奇饰）、银河护卫队、黑豹（查德维克·博斯曼饰）以及瓦坎达人民的力量一同作战。",
            "攸关整个宇宙命运的史诗战役全面展开，超级英雄们为了平凡而自由的生命将奋不顾身的投入其中..."
        ],
        "director": [
            "安东尼·罗素",
            "乔·罗素"
        ],
        "actors": [
            "小罗伯特·唐尼",
            "乔什·布洛林",
            "克里斯·埃文斯",
            "克里斯·海姆斯沃斯",
            "斯嘉丽·约翰逊",
            "马克·鲁法洛"
        ],
        "releasetime": "2018年4月27日",
        "color": "#8b8176",
        "reason": [
            "两个福尔摩斯跑来纽约玩Cosplay不务正业，案子不用查了吗？"
        ]
    },

    //8. 寻梦环游记               √6
    XMHYJ = {
        "name": [
            "寻梦环游记",
            "Coco"
        ],
        "intro": [
            "热爱音乐的米格尔（安东尼·冈萨雷兹 Anthony Gonzalez 配音）不幸地出生在一个视音乐为洪水猛兽的大家庭之中，一家人只盼着米格尔快快长大，好继承家里传承了数代的制鞋产业。",
            "业。一年一度的亡灵节即将来临，每逢这一天，去世的亲人们的魂魄便可凭借着摆在祭坛上的照片返回现世和生者团圆。 ",
            "在一场意外中，米格尔竟然穿越到了亡灵国度之中，在太阳升起之前，他必须得到一位亲人的祝福，否则就将会永远地留在这个世界里。",
            "米格尔决定去寻找已故的歌神德拉库斯（本杰明·布拉特 Benjamin Bratt 配音），因为他很有可能就是自己的祖父。",
            "途中，米格尔邂逅了落魄乐手埃克托（盖尔·加西亚·贝纳尔 Gael García Bernal 配音），也渐渐发现了德拉库斯隐藏已久的秘密..."
        ],
        "director": [
            "李·昂克里奇",
            "阿德里安·莫利纳"
        ],
        "actors": [
            "安东尼·冈萨雷斯",
            "盖尔·加西亚·贝纳尔",
            "本杰明·布拉特",
            "阿兰纳·乌巴奇",
            "芮妮·维克托"
        ],
        "releasetime": "2017年10月20日",
        "color": "#280b56",
        "reason": [
            "真正的死亡是再也没有人记得你。"
        ]
    },

    //1. 我不是药神               √7
    WBSYS = {
        "name": [
            "我不是药神",
            "Dying to Survive"
        ],
        "intro": [
            "普通中年男子程勇（徐峥 饰）经营着一家保健品店，失意又失婚。",
            "不速之客吕受益（王传君 饰）的到来，让他开辟了一条去印度买药做“代购”的新事业，虽然困难重重，但他在这条“买药之路”上发现了商机，一发不可收拾地做起了治疗慢粒白血病的印度仿制药独家代理商。",
            "赚钱的同时，他也认识了几个病患及家属，为救女儿被迫做舞女的思慧（谭卓 饰）、说一口流利“神父腔”英语的刘牧师（杨新鸣 饰），以及脾气暴烈的“黄毛”（章宇 饰），几个人合伙做起了生意，利润倍增的同时也危机四伏。",
            "程勇昔日的小舅子曹警官（周一围 饰）奉命调查仿制药的源头，假药贩子张长林（王砚辉 饰）和瑞士正牌医药代表（李乃文 饰）也对其虎视眈眈，生意逐渐变成了一场关于救赎的拉锯战。",
            "本片改编自慢粒白血病患者陆勇代购抗癌药的真实事迹。"
        ],
        "director": [
            "文牧野"
        ],
        "actors": [
            "徐峥",
            "周一围",
            "王传君",
            "谭卓",
            "章宇",
            "杨新鸣"
        ],
        "releasetime": "2018年7月5日",
        "color": "#fefdd2",
        "reason": [
            "只愿世间无疾病，何愁架上药染尘。"
        ]
    },

    //4. 肖申克的救赎
    XSKDJS = {
        "name": [
            "肖申克的救赎",
            "The Shawshank Redemption"
        ],
        "intro": [
            "20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。",
            "未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。",
            "表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……",
            "本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。"
        ],
        "director": [
            "弗兰克·达拉邦特"
        ],
        "actors": [
            "蒂姆·罗宾斯",
            "摩根·弗里曼"
        ],
        "releasetime": "1994年9月10日"
    },

    //7. 星际穿越
    XJCY = {
        "name": [
            "星际穿越",
            "Interstellar"
        ],
        "intro": [
            "Do not go gentle into that good night.",
            "Old age should burn and rave at close of day.",
            "Rage, rage against the dying of the light...",
            "不远的未来，随着地球自然环境的恶化，人类面临着无法生存的威胁。",
            "这时科学家们在太阳系中的土星附近发现了一 个虫洞，通过它可以打破人类的能力限制，到更遥远外太空寻找延续生命希望的机会。",
            "一个探险小组通过这个虫洞穿越到太阳系之外，他们的目标是找到一颗适合人类移民的星球。",
            "在这艘名叫做“Endurance”的飞船上，探险队员着面临着前所未有，人类思想前所未及的巨大挑战。"
        ],
        "director": [
            "克里斯托弗·诺兰"
        ],
        "actors": [
            "马修·麦康纳",
            "安妮·海瑟薇",
            "杰西卡·查斯坦",
            "迈克尔·凯恩"
        ],
        "releasetime": "2014-11-07"
    },

    //10. 三块广告牌——空
    SKGGP = {
        "name": [
            "三块广告牌",
            "Three Billboards Outside Ebbing"
        ],
        "intro": [
            "",
            "",
            "",
            "",
            ""
        ],
        "director": [
            ""
        ],
        "actors": [
            "",
            "",
            ""
        ],
        "releasetime": ""
    },

    //11. 海上钢琴师——箜
    HSGQS = {
        "name": [
            "",
            ""
        ],
        "intro": [
            "",
            "",
            "",
            "",
            ""
        ],
        "director": [
            ""
        ],
        "actors": [
            "",
            "",
            ""
        ],
        "releasetime": ""
    },

    //13. 芳华——空
    FW = {
        "name": [
            "",
            ""
        ],
        "intro": [
            "",
            "",
            "",
            "",
            ""
        ],
        "director": [
            ""
        ],
        "actors": [
            "",
            "",
            ""
        ],
        "releasetime": ""
    }
];

//中文名称集合
var nameCN = information.map(function (val) {
    return val["name"][0];
});

//英文名称集合
var nameEN = information.map(function (val) {
    return val["name"][1];
});

//导演集合
var directors = information.map(function (val) {
    return val["director"];
});

//演员集合
var actors = information.map(function (val) {
    return val["actors"];
});

//上映时间集合
var uptime = information.map(function (val) {
    return val["releasetime"];
});

//简介集合
var intro = information.map(function (val) {
    return val["intro"];
});

//主题颜色集合
var color = information.map(function (val) {
    return val["color"];
});

//推荐理由
var reason = information.map(function (val) {
    return val["reason"];
})

$(document).ready(function () {
    //Start...
    console.log("cm中::: cm.js 刷新啦");

    var frameId = window.frameElement && window.frameElement.id;
    var i = frameId;
    //console.log("cm中::: frameId = " + i);

    //简介intro
    $("#title").text(nameCN[i]);
    $("#subtitle").text(nameEN[i]);
    $("#director").text("");
    for (var m = 0; m < directors[i].length; m++) {
        $("#director").append(directors[i][m])
        if (m !== directors[i].length - 1) {
            $("#director").append(" / ");
        }
    }
    $("#actor").text("");
    for (var m = 0; m < actors[i].length; m++) {
        $("#actor").append(actors[i][m])
        if (m !== actors[i].length - 1) {
            $("#actor").append(" / ");
        }
    }
    $("#show-time").text(uptime[i]);
    $("#marks").text("???");
    $("#length").text("???min");

    //剧情plot
    $("#movie-intro").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
    for (var m = 0; m < intro[i].length; m++) {
        $("#movie-intro").append(intro[i][m]);
        if (m !== intro[i].length - 1) {
            $("#movie-intro").append("<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp")
        }
    }

    //剧照still

    //影评review
    
    
    {
        //$("#box1").css("background-color", "pink");
        //console.log("cm中::: section = " + section);

        //var frameId = window.frameElement && window.frameElement.id;
        //var iii = frameId;
        //console.log("cm中::: iii = " + iii);

        //var frameId2 = $(window.parent).find("iframe").prop("id");
        //var iv = frameId2;
        //console.log("cm中::: iv = " + iv);

        //var frameId3 = $(this).attr("id");
        //var v = frameId3;
        //console.log("cm中::: v = " + v);
    }
    {
        //if (iii >= 0) {
        //    var introduction = intro[iii].join("<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
        //    $("#text1").text(nameCN[iii]).css("font-family", "楷体");
        //    $("#text2").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + introduction).css("font-family", "Georgia,Serif");
        //}

        //if (section >= 0) {
        //    var introduction = intro[section].join("<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
        //    $("#text1").text(nameCN[section]).css("font-family", "楷体");
        //    $("#text2").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + introduction).css("font-family", "Georgia,Serif");
        //}

        //$("#buttonn").click(function () {
        //    console.log("cm中::: section: " + section);
        //});

        //$("button").click(function () {
        //    var IDofBtn = parseInt(this.id);

        //    if (IDofBtn >= 0 && IDofBtn <= 99) {
        //        section = IDofBtn;

        //        var introduction = intro[section].join("<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");

        //        $("#text1").text(nameCN[section]).css("font-family", "楷体");
        //        $("#text2").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + introduction).css("font-family", "Georgia,Serif");
        //        $("#box1").css("background-color", color[section]);
        //    }
        //});
    }
});