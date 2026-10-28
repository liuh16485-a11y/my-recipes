const DEFAULT_RECIPES = [
  {
    id: "rec_001",
    name: "西红柿炒鸡蛋",
    category: "家常小炒",
    cover: "🍅",
    time: "10分钟",
    timeMinutes: 10,
    difficulty: 1,
    tags: ["快手菜", "新手入门", "经典家常", "酸甜下饭"],
    description: "国民家常第一菜，酸甜多汁，滑嫩适口，红亮诱人拌饭一绝。",
    calories: "~260 kcal",
    servings: 2,
    ingredients: [
      { name: "鸡蛋", amount: 3, unit: "个", category: "肉禽蛋品" },
      { name: "西红柿", amount: 2, unit: "个", category: "新鲜蔬菜" },
      { name: "小葱", amount: 1, unit: "根", category: "常用调味" },
      { name: "白糖", amount: 1, unit: "茶匙", category: "常用调味" },
      { name: "盐", amount: 0.5, unit: "茶匙", category: "常用调味" },
      { name: "食用油", amount: 2, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "准备食材",
        desc: "西红柿顶部划十字用开水烫一下去皮切块（保留汁水）；鸡蛋打入碗中，加半勺清水打散起泡（加水让炒蛋更松软）。",
        tip: "选成熟沙瓤番茄炒出的红汁最浓郁。"
      },
      {
        title: "嫩滑炒蛋",
        desc: "起锅热油，油热倒入蛋液，中火快速用筷子划炒凝固，刚成型尚嫩时立即关火盛出。",
        timer: 60,
        tip: "鸡蛋七八成熟盛出，避免后续二次回锅炒老。"
      },
      {
        title: "翻炒红汁",
        desc: "底油炒香葱白，倒入番茄块中火慢炒，铲子稍压出汁，调入 1 茶匙白糖中和酸度提鲜。",
        timer: 120
      },
      {
        title: "合锅出香",
        desc: "倒入炒好的鸡蛋块翻炒均匀，让蛋块充分吸饱番茄红汁，加少许食盐翻匀，撒上葱花出锅！",
        timer: 60
      }
    ]
  },
  {
    id: "rec_002",
    name: "秘制可乐鸡翅",
    category: "硬菜大餐",
    cover: "🍗",
    time: "25分钟",
    timeMinutes: 25,
    difficulty: 2,
    tags: ["老少皆宜", "焦香浓郁", "下饭硬菜", "零失败"],
    description: "色泽红亮如琥珀，肉质软嫩多汁，带有淡淡焦糖与可乐香气的经典硬菜。",
    calories: "~420 kcal",
    servings: 2,
    ingredients: [
      { name: "鸡翅", amount: 8, unit: "个", category: "肉禽蛋品" },
      { name: "可乐", amount: 300, unit: "毫升", category: "常用调味" },
      { name: "葱姜蒜", amount: 20, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 2, unit: "勺", category: "常用调味" },
      { name: "老抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "料酒", amount: 1, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "划刀腌制",
        desc: "鸡翅正反面各划两刀便于入味；冷水下锅，加姜片料酒焯水2分钟，捞出温水洗净沥干。",
        tip: "焯水一定要冷水下锅，彻底排出血沫。"
      },
      {
        title: "两面煎金黄",
        desc: "平底锅少许油，下鸡翅中小火慢煎，煎至两面微焦金黄，逼出鸡皮多余油脂。",
        timer: 300,
        tip: "煎出多余鸡油口感不腻而且皮更紧致。"
      },
      {
        title: "焖煮收汁",
        desc: "加入葱姜炒香，倒入整罐可乐没过鸡翅，加入 2勺生抽、1勺老抽上色，大火煮沸后盖盖转小火焖15分钟。",
        timer: 900
      },
      {
        title: "大火浓汁",
        desc: "开盖转大火不断用铲子搅动收汁，直至汤汁浓稠挂在鸡翅上红亮油润，撒白芝麻即可装盘。",
        timer: 180
      }
    ]
  },
  {
    id: "rec_003",
    name: "鱼香肉丝",
    category: "家常小炒",
    cover: "🥘",
    time: "20分钟",
    timeMinutes: 20,
    difficulty: 3,
    tags: ["川味经典", "酸甜微辣", "超级下饭", "刀工练习"],
    description: "无鱼而有鱼香！咸甜酸辣相得益彰，笋丝木耳脆嫩，肉丝滑润适口。",
    calories: "~360 kcal",
    servings: 2,
    ingredients: [
      { name: "猪里脊", amount: 250, unit: "克", category: "肉禽蛋品" },
      { name: "木耳", amount: 30, unit: "克", category: "菌菇豆品" },
      { name: "胡萝卜", amount: 0.5, unit: "根", category: "新鲜蔬菜" },
      { name: "青椒", amount: 1, unit: "个", category: "新鲜蔬菜" },
      { name: "葱姜蒜", amount: 25, unit: "克", category: "常用调味" },
      { name: "郫县豆瓣酱", amount: 1, unit: "勺", category: "常用调味" },
      { name: "生抽", amount: 2, unit: "勺", category: "常用调味" },
      { name: "白糖", amount: 2, unit: "勺", category: "常用调味" },
      { name: "料酒", amount: 1, unit: "勺", category: "常用调味" },
      { name: "淀粉", amount: 1.5, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "切丝与腌肉",
        desc: "猪里脊顺纹切细丝，加半勺料酒、1勺生抽、半个蛋清和水淀粉抓匀上浆，最后封少许食用油锁水备用。木耳胡萝卜青椒切丝。",
        tip: "封食用油腌制可以防止肉丝下锅粘连成坨。"
      },
      {
        title: "调绝密鱼香汁",
        desc: "碗中调制灵魂鱼香汁：生抽2勺、香醋2勺、白糖2勺、淀粉1勺、清水3勺，搅拌均匀备用。",
        tip: "鱼香汁核心口诀：糖醋等比（2:2），酸甜调和。"
      },
      {
        title: "滑散肉丝",
        desc: "油温四成热下肉丝快速划散至变色，盛出备用。",
        timer: 90
      },
      {
        title: "炒香配菜出锅",
        desc: "底油炒香葱姜蒜沫与豆瓣酱出红油，下胡萝卜、木耳、青椒丝大火断生，回入肉丝，淋入鱼香汁大火翻炒芡汁明亮出锅！",
        timer: 120
      }
    ]
  },
  {
    id: "rec_004",
    name: "正宗麻婆豆腐",
    category: "家常小炒",
    cover: "🌶️",
    time: "15分钟",
    timeMinutes: 15,
    difficulty: 2,
    tags: ["川菜之魂", "麻辣鲜香", "烫嫩下饭", "豆腐控"],
    description: "麻、辣、鲜、香、烫、嫩、酥、捆，豆腐入口即化，连汤汁都能拌下三碗米饭。",
    calories: "~310 kcal",
    servings: 2,
    ingredients: [
      { name: "嫩豆腐", amount: 1, unit: "盒", category: "菌菇豆品" },
      { name: "猪里脊", amount: 80, unit: "克", category: "肉禽蛋品" },
      { name: "郫县豆瓣酱", amount: 1.5, unit: "勺", category: "常用调味" },
      { name: "葱姜蒜", amount: 20, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "淀粉", amount: 2, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "豆腐焯水",
        desc: "豆腐切2厘米小方块。锅中加水放半茶匙盐煮沸，下豆腐轻焯水1分钟捞出沥水（盐水焯过豆腐更不易碎且除豆腥味）。",
        timer: 60
      },
      {
        title: "煸炒肉末",
        desc: "锅中倒油，下肉碎小火煸炒至金黄吐油干香，加入豆瓣酱炒出红油与豆香。",
        timer: 120
      },
      {
        title: "煨煮入味",
        desc: "加一小碗温水，调入生抽与姜蒜末，轻轻滑入豆腐块，中火慢煨3分钟让豆腐充分入味。",
        timer: 180
      },
      {
        title: "三次勾芡",
        desc: "分三次淋入水淀粉推匀（芡汁逐步浓稠包裹豆腐），关火撒上花椒面和小葱花出锅！",
        tip: "三次勾芡能保证豆腐亮油不吐水。"
      }
    ]
  },
  {
    id: "rec_005",
    name: "番茄浓汤肥牛卷",
    category: "营养靓汤",
    cover: "🍲",
    time: "15分钟",
    timeMinutes: 15,
    difficulty: 1,
    tags: ["一人食", "暖胃快手", "酸爽开胃", "低脂饱腹"],
    description: "浓郁番茄红汤包裹着鲜嫩肥牛与脆爽金针菇，酸爽浓醇，冬天暖心暖胃首选。",
    calories: "~380 kcal",
    servings: 1,
    ingredients: [
      { name: "肥牛卷", amount: 200, unit: "克", category: "肉禽蛋品" },
      { name: "西红柿", amount: 2, unit: "个", category: "新鲜蔬菜" },
      { name: "金针菇", amount: 150, unit: "克", category: "菌菇豆品" },
      { name: "葱姜蒜", amount: 15, unit: "克", category: "常用调味" },
      { name: "番茄酱", amount: 1, unit: "勺", category: "常用调味" },
      { name: "生抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "蚝油", amount: 1, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "焯烫肥牛",
        desc: "水开下料酒与肥牛卷，焯烫至变色变白（约15-20秒）立刻捞出温水洗去浮沫，沥干备用。",
        timer: 20,
        tip: "焯水时间绝不能长，变色即捞以保持肉嫩。"
      },
      {
        title: "熬制浓汤",
        desc: "热油爆香蒜末，下去皮切丁的番茄碎，加入1勺番茄酱和大半勺盐，大火压翻炒出红亮沙汁。",
        timer: 180
      },
      {
        title: "下金针菇焖煮",
        desc: "倒入一大碗开水煮沸，加入金针菇和生抽、蚝油，煮开2分钟让汤底鲜甜入味。",
        timer: 120
      },
      {
        title: "下肥牛起锅",
        desc: "最后滑入焯好的肥牛卷，轻推浸入浓汤煮半分钟，撒葱花白芝麻趁热享用！",
        timer: 30
      }
    ]
  },
  {
    id: "rec_006",
    name: "鲜虾滑蛋",
    category: "快手减脂",
    cover: "🦐",
    time: "12分钟",
    timeMinutes: 12,
    difficulty: 2,
    tags: ["高蛋白", "嫩滑鲜美", "减脂健身", "快手菜"],
    description: "爽脆弹牙的鲜虾仁被嫩滑如丝的蛋花温柔包裹，鲜甜原汁原味，营养满分。",
    calories: "~240 kcal",
    servings: 2,
    ingredients: [
      { name: "鲜虾/虾仁", amount: 12, unit: "只", category: "水产海鲜" },
      { name: "鸡蛋", amount: 4, unit: "个", category: "肉禽蛋品" },
      { name: "小葱", amount: 2, unit: "根", category: "常用调味" },
      { name: "料酒", amount: 0.5, unit: "勺", category: "常用调味" },
      { name: "盐", amount: 0.5, unit: "茶匙", category: "常用调味" },
      { name: "淀粉", amount: 1, unit: "茶匙", category: "常用调味" }
    ],
    steps: [
      {
        title: "腌制虾仁",
        desc: "虾仁开背去虾线，洗净吸干水分，加少许盐、白胡椒、料酒和水淀粉抓匀腌制5分钟。",
        tip: "开背受热更易卷曲受热均匀且更入味。"
      },
      {
        title: "调制蛋液",
        desc: "鸡蛋加葱花、少许盐、1勺水淀粉充分打散（水淀粉是滑蛋凝而不老的秘密神器）。",
        tip: "加水淀粉能让蛋液受热时保持滑润不松散。"
      },
      {
        title: "先煎虾仁",
        desc: "锅底放油烧热，下虾仁两面煎至变红变卷（约八成熟），盛出稍晾凉倒入蛋液碗中拌匀。",
        timer: 90
      },
      {
        title: "推炒滑蛋",
        desc: "锅重新热油转中小火，缓缓倒入虾仁蛋液，用锅铲由四周往中间轻轻推拢，蛋液凝结成大波浪嫩絮立即关火余温烘熟盛出。",
        timer: 60
      }
    ]
  },
  {
    id: "rec_007",
    name: "冬瓜排骨养生汤",
    category: "营养靓汤",
    cover: "🥣",
    time: "45分钟",
    timeMinutes: 45,
    difficulty: 1,
    tags: ["清热润燥", "原汁原味", "老少咸宜", "暖胃靓汤"],
    description: "排骨炖得脱骨软烂，冬瓜晶莹剔透吸饱肉香汤汁，清润回甘，利水消肿。",
    calories: "~320 kcal",
    servings: 3,
    ingredients: [
      { name: "排骨", amount: 400, unit: "克", category: "肉禽蛋品" },
      { name: "冬瓜", amount: 300, unit: "克", category: "新鲜蔬菜" },
      { name: "葱姜蒜", amount: 15, unit: "克", category: "常用调味" },
      { name: "料酒", amount: 1, unit: "勺", category: "常用调味" },
      { name: "盐", amount: 1, unit: "茶匙", category: "常用调味" }
    ],
    steps: [
      {
        title: "排骨焯水",
        desc: "排骨斩小块冷水下锅，加姜片料酒大火烧开撇去血沫2分钟，捞出温水冲洗干净沥干。",
        timer: 180
      },
      {
        title: "砂锅文火慢炖",
        desc: "砂锅加足量清水，放入焯好的排骨、拍破的姜块和葱结，大火烧开转微火慢煨30分钟。",
        timer: 1800,
        tip: "中途切忌频繁揭盖加冷水，一次性加足热水汤才清香甘甜。"
      },
      {
        title: "下冬瓜同炖",
        desc: "冬瓜去皮去瓤切厚块，下入排骨汤中，继续盖盖小火焖煮10-15分钟至冬瓜透亮软糯。",
        timer: 720
      },
      {
        title: "调味出锅",
        desc: "关火前5分钟加入适量食盐，出锅撒入葱花与几粒枸杞点缀即可享用纯净鲜甜。",
        timer: 60
      }
    ]
  },
  {
    id: "rec_008",
    name: "蒜蓉油麦菜",
    category: "家常小炒",
    cover: "🥬",
    time: "6分钟",
    timeMinutes: 6,
    difficulty: 1,
    tags: ["快手青菜", "清脆爽口", "素食清肠", "三分钟出锅"],
    description: "蒜香扑鼻，油麦菜翠绿欲滴，入口脆嫩多汁，大鱼大肉后的最佳解腻青菜。",
    calories: "~110 kcal",
    servings: 2,
    ingredients: [
      { name: "油麦菜", amount: 350, unit: "克", category: "新鲜蔬菜" },
      { name: "葱姜蒜", amount: 20, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "蚝油", amount: 1, unit: "勺", category: "常用调味" },
      { name: "盐", amount: 0.3, unit: "茶匙", category: "常用调味" }
    ],
    steps: [
      {
        title: "洗净沥水",
        desc: "油麦菜洗净沥干水分（水分越少越脆），切成两段；大蒜拍扁剁成金黄蒜末备用。",
        tip: "青菜下锅前一定要沥干水分，否则大火容易水汽多变焖菜。"
      },
      {
        title: "爆香金蒜",
        desc: "热锅倒油，先下大半蒜末中火煸炒出浓郁蒜香味至微微金黄。",
        timer: 30
      },
      {
        title: "大火快炒",
        desc: "转大火，猛然倒入油麦菜快速翻炒约40秒至菜叶稍塌软变深绿。",
        timer: 45
      },
      {
        title: "调味出锅",
        desc: "沿锅边淋入1勺生抽、半勺蚝油和少许盐，倒入剩下的生蒜末（金银蒜双重香气），翻炒10秒立刻出锅！",
        timer: 20
      }
    ]
  },
  {
    id: "rec_009",
    name: "经典老上海葱油拌面",
    category: "懒人主食",
    cover: "🍜",
    time: "15分钟",
    timeMinutes: 15,
    difficulty: 1,
    tags: ["碳水快乐", "葱香扑鼻", "经典面食", "深夜食堂"],
    description: "焦香小葱搭配浓油赤酱，面条根根裹满亮亮葱油，香气扑鼻直击灵魂。",
    calories: "~450 kcal",
    servings: 1,
    ingredients: [
      { name: "面条", amount: 150, unit: "克", category: "懒人主食" },
      { name: "小葱", amount: 80, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 2, unit: "勺", category: "常用调味" },
      { name: "老抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "白糖", amount: 1, unit: "勺", category: "常用调味" },
      { name: "食用油", amount: 3, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "切葱段熬油",
        desc: "小葱洗净晾干水分切长段。冷油下葱白慢炸，再下葱绿，中小火慢熬至葱段焦黄酥脆（约8分钟）。",
        timer: 480,
        tip: "葱一定要擦干水分再下锅，小火慢熬出香，忌大火炸焦发苦。"
      },
      {
        title: "调入酱汁煮沸",
        desc: "碗中调入生抽2勺、老抽1勺、白糖1勺搅拌均匀，倒入熬好葱油的锅中小火煮至酱汁冒大泡即可关火备用。",
        timer: 60
      },
      {
        title: "煮面条断生",
        desc: "水开下挂面或鲜切面，煮开点一次凉水，面条刚刚熟尚有嚼劲捞出沥水（可过一下凉开水更爽滑劲道）。",
        timer: 180
      },
      {
        title: "浇油拌面",
        desc: "面条装碗，淋上 2-3 大勺熬好的葱油酱汁，铺上酥脆焦香的葱段，趁热拌开，葱香满屋！",
        timer: 30
      }
    ]
  },
  {
    id: "rec_010",
    name: "秘制五花肉红烧肉",
    category: "硬菜大餐",
    cover: "🥩",
    time: "50分钟",
    timeMinutes: 50,
    difficulty: 3,
    tags: ["硬核硬菜", "肥而不腻", "软烂酥香", "经典本帮"],
    description: "色如红玛瑙，皮糯肉烂，肥而不腻入口即化，汁浓味美拌饭一绝。",
    calories: "~580 kcal",
    servings: 3,
    ingredients: [
      { name: "五花肉", amount: 500, unit: "克", category: "肉禽蛋品" },
      { name: "葱姜蒜", amount: 25, unit: "克", category: "常用调味" },
      { name: "白糖", amount: 25, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 2, unit: "勺", category: "常用调味" },
      { name: "老抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "料酒", amount: 2, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "切块焯水",
        desc: "五花肉切成3厘米见方的均匀麻将方块，冷水入锅加姜片料酒大火煮沸焯水3分钟，温水洗净擦干表面。",
        timer: 180
      },
      {
        title: "煸炒出油",
        desc: "热锅不放油，直接下五花肉块中小火慢煎，煎至四面金黄微焦，倒出锅内逼出的多余猪油（这是肥而不腻的关键秘密）。",
        timer: 300,
        tip: "逼出多余油脂既能减腻，又能让肉质紧实富有嚼劲。"
      },
      {
        title: "炒糖色上色",
        desc: "锅底留少许油下糖小火慢熬至琥珀色小泡，迅速下肉块翻炒挂上亮丽糖色，下葱姜、生抽、老抽翻匀。",
        timer: 120
      },
      {
        title: "慢炖与收汁",
        desc: "倒入没过肉块的热开水，大火烧沸后转微火慢炖40分钟，最后开大火翻炒收浓红亮酱汁装盘！",
        timer: 2400
      }
    ]
  },
  {
    id: "rec_011",
    name: "空气炸锅黑椒时蔬鸡胸肉",
    category: "快手减脂",
    cover: "🥗",
    time: "18分钟",
    timeMinutes: 18,
    difficulty: 1,
    tags: ["减脂神器", "低卡高蛋白", "免开火", "健身必备"],
    description: "鸡胸肉外焦里嫩爆汁不发柴，搭配西兰花胡萝卜烤至焦香，健康低卡饱腹感十足。",
    calories: "~290 kcal",
    servings: 1,
    ingredients: [
      { name: "鸡胸肉", amount: 200, unit: "克", category: "肉禽蛋品" },
      { name: "西兰花", amount: 100, unit: "克", category: "新鲜蔬菜" },
      { name: "胡萝卜", amount: 0.5, unit: "根", category: "新鲜蔬菜" },
      { name: "生抽", amount: 1.5, unit: "勺", category: "常用调味" },
      { name: "蚝油", amount: 1, unit: "勺", category: "常用调味" },
      { name: "黑胡椒", amount: 1, unit: "茶匙", category: "常用调味" }
    ],
    steps: [
      {
        title: "切块腌制",
        desc: "鸡胸肉切2厘米见方大丁，加1.5勺生抽、1勺蚝油、1勺料酒、半勺淀粉和大量现磨黑胡椒抓匀腌制15分钟入味软嫩。",
        tip: "加少许淀粉和少许水抓匀锁水，是鸡胸肉不发柴的秘诀。"
      },
      {
        title: "准备蔬菜",
        desc: "西兰花掰小朵洗净，胡萝卜切滚刀薄块，喷少许食用油和少许盐抓匀备用。",
        timer: 60
      },
      {
        title: "进炸锅烤制",
        desc: "空气炸锅铺好烘焙纸，先放入鸡胸肉丁，180度烤10分钟；拉出炸篮翻面并加入时蔬，继续180度烤6-8分钟即可！",
        timer: 1080
      }
    ]
  },
  {
    id: "rec_012",
    name: "金汤肥牛酸辣米线",
    category: "懒人主食",
    cover: "🍲",
    time: "15分钟",
    timeMinutes: 15,
    difficulty: 2,
    tags: ["酸辣过瘾", "暖心米线", "饭店同款", "深夜开胃"],
    description: "金黄酸爽汤底，浸润着劲道米线与肥牛片，酸辣过瘾直击味蕾。",
    calories: "~460 kcal",
    servings: 1,
    ingredients: [
      { name: "肥牛卷", amount: 150, unit: "克", category: "肉禽蛋品" },
      { name: "米线", amount: 150, unit: "克", category: "懒人主食" },
      { name: "金针菇", amount: 100, unit: "克", category: "菌菇豆品" },
      { name: "葱姜蒜", amount: 15, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "香醋", amount: 1.5, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "泡发与煮米线",
        desc: "干米线提前温水泡软，锅中水沸下米线煮3-5分钟至无硬芯捞出，过凉水沥干放入大海碗底。",
        timer: 300
      },
      {
        title: "焯烫肥牛卷",
        desc: "另一锅沸水加料酒，将肥牛卷下锅焯烫15秒至变色盛出沥水备用。",
        timer: 20
      },
      {
        title: "熬制金汤底",
        desc: "起油锅爆香蒜姜蓉与少许青红椒碎，加高汤或开水一大碗，加入金针菇、生抽、香醋大火煮沸2分钟。",
        timer: 150
      },
      {
        title: "合浇出锅",
        desc: "将焯好的肥牛片放入金汤中煮15秒立刻连汤带料倾倒在米线碗中，撒葱花即成！",
        timer: 30
      }
    ]
  },
  {
    id: "rec_013",
    name: "广式腊味香脆煲仔饭",
    category: "懒人主食",
    cover: "🍚",
    time: "25分钟",
    timeMinutes: 25,
    difficulty: 2,
    tags: ["一锅搞定", "焦香锅巴", "广式风味", "满口飘香"],
    description: "腊肠晶莹油润，米饭吸饱肉汁与特调豉油，锅底一圈金黄香脆锅巴最是诱人。",
    calories: "~510 kcal",
    servings: 2,
    ingredients: [
      { name: "米饭", amount: 1.5, unit: "杯米", category: "懒人主食" },
      { name: "腊肠", amount: 2, unit: "根", category: "肉禽蛋品" },
      { name: "鸡蛋", amount: 1, unit: "个", category: "肉禽蛋品" },
      { name: "油麦菜", amount: 2, unit: "棵", category: "新鲜蔬菜" },
      { name: "生抽", amount: 2, unit: "勺", category: "常用调味" },
      { name: "蚝油", amount: 1, unit: "勺", category: "常用调味" },
      { name: "白糖", amount: 0.5, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "泡米下锅",
        desc: "大米淘洗干净提前浸泡20分钟。砂锅内壁薄刷一层食用油，倒入米和1.2倍水，大火烧开转小火焖煮至水收干出现蜂窝小孔（约8分钟）。",
        timer: 480
      },
      {
        title: "铺腊肠打生蛋",
        desc: "将斜切成薄片的广式腊肠整齐铺在米饭上，中心打入一颗新鲜鸡蛋，沿砂锅边淋入一圈食用油（锅巴香脆秘方）。",
        tip: "沿锅边淋油会自然渗入锅底，产生金黄酥脆的灵魂锅巴。"
      },
      {
        title: "微火焖透",
        desc: "盖好锅盖，极微火焖煮10分钟，熄火后不要揭盖继续焖5分钟利用余温烘熟溏心蛋。",
        timer: 600
      },
      {
        title: "调汁拌匀",
        desc: "碗中混合生抽2勺、蚝油1勺、糖半勺、香油少许调匀成豉油汁，开盖摆烫熟青菜，淋上豉油大勺搅拌，咔嚓锅巴声中开吃！",
        timer: 60
      }
    ]
  },
  {
    id: "rec_014",
    name: "金牌蒜蓉粉丝蒸大虾",
    category: "硬菜大餐",
    cover: "🦐",
    time: "15分钟",
    timeMinutes: 15,
    difficulty: 2,
    tags: ["宴客大菜", "鲜美多汁", "粉丝吸汁", "简单快手"],
    description: "大虾鲜美紧实，粉丝吸饱了浓郁金银蒜蓉与大虾的鲜甜汤汁，回味无穷。",
    calories: "~330 kcal",
    servings: 2,
    ingredients: [
      { name: "鲜虾/虾仁", amount: 10, unit: "只", category: "水产海鲜" },
      { name: "粉丝", amount: 50, unit: "克", category: "懒人主食" },
      { name: "葱姜蒜", amount: 40, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 2, unit: "勺", category: "常用调味" },
      { name: "蚝油", amount: 1, unit: "勺", category: "常用调味" },
      { name: "食用油", amount: 2, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "处理大虾与粉丝",
        desc: "细粉丝温水泡软铺在盘底；大虾剪去虾须开背去虾线，用刀背轻拍断筋防卷曲，排在粉丝上摆成漂亮的孔雀开屏状。",
        tip: "刀背轻拍虾身能防止大虾蒸制时过度弯曲卷成一团。"
      },
      {
        title: "炒制金银蒜蓉",
        desc: "大蒜切碎分成两半。一半下油锅小火炸至金黄酥香（金蒜），关火倒入剩下的生蒜末（银蒜），加入2勺生抽、1勺蚝油拌匀成为金银蒜蓉酱。",
        timer: 120
      },
      {
        title: "铺酱上锅蒸",
        desc: "将金银蒜蓉酱满满舀在每只大虾的开背处与粉丝上。蒸锅水烧开，入锅大火蒸6分钟关火虚蒸1分钟。",
        timer: 420
      },
      {
        title: "热油激香",
        desc: "出锅撒上翠绿葱花，烧热一勺滚油淋在葱花蒜蓉上，滋啦一声香气四溢！",
        timer: 30
      }
    ]
  },
  {
    id: "rec_015",
    name: "酸爽开胃凉拌手撕鸡丝",
    category: "快手减脂",
    cover: "🥗",
    time: "20分钟",
    timeMinutes: 20,
    difficulty: 1,
    tags: ["低卡开胃", "夏日凉菜", "鸡胸肉妙用", "免开大火"],
    description: "鸡丝细嫩多汁，黄瓜爽脆解腻，酸辣开胃酱汁一拌，是夏日减脂期神仙美味。",
    calories: "~250 kcal",
    servings: 2,
    ingredients: [
      { name: "鸡胸肉", amount: 250, unit: "克", category: "肉禽蛋品" },
      { name: "黄瓜", amount: 1, unit: "根", category: "新鲜蔬菜" },
      { name: "葱姜蒜", amount: 20, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 2, unit: "勺", category: "常用调味" },
      { name: "香醋", amount: 2, unit: "勺", category: "常用调味" },
      { name: "白糖", amount: 0.5, unit: "茶匙", category: "常用调味" }
    ],
    steps: [
      {
        title: "煮熟鸡胸肉",
        desc: "鸡胸肉冷水下锅，加姜片葱结与料酒大火煮开转中火煮10分钟至筷子能轻松穿透，捞出立刻投入冰开水中浸泡降温（热胀冷缩使肉更Q弹）。",
        timer: 600
      },
      {
        title: "手撕鸡丝",
        desc: "降温后的鸡胸肉顺着纹理撕成细丝装入大盆，黄瓜切细丝同入盆中。",
        tip: "顺着肉质纤维手撕比刀切更能挂住酱汁。"
      },
      {
        title: "调绝味凉拌汁",
        desc: "碗中放蒜末、葱花、辣椒粉，泼半勺热油激香，加入2勺生抽、2勺香醋、半勺白糖、少许盐拌匀。",
        timer: 60
      },
      {
        title: "充分抓拌",
        desc: "将调味汁浇在鸡丝和黄瓜丝上，戴手套充分抓拌均匀，冷藏半小时风味更爽口诱人！",
        timer: 60
      }
    ]
  },
  {
    id: "rec_016",
    name: "青椒炒肉丝",
    category: "家常小炒",
    cover: "🫑",
    time: "12分钟",
    timeMinutes: 12,
    difficulty: 1,
    tags: ["经典家常", "镬气十足", "快手小炒", "下饭必备"],
    description: "青椒爽脆微辣，肉丝滑嫩鲜美，大火快炒镬气十足，家家户户餐桌上的常青树。",
    calories: "~310 kcal",
    servings: 2,
    ingredients: [
      { name: "青椒", amount: 3, unit: "个", category: "新鲜蔬菜" },
      { name: "猪里脊", amount: 200, unit: "克", category: "肉禽蛋品" },
      { name: "葱姜蒜", amount: 15, unit: "克", category: "常用调味" },
      { name: "生抽", amount: 1.5, unit: "勺", category: "常用调味" },
      { name: "老抽", amount: 0.5, unit: "勺", category: "常用调味" },
      { name: "淀粉", amount: 1, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "切丝与上浆",
        desc: "里脊肉切细丝，加1勺生抽、半勺老抽上色、1勺淀粉和1勺食用油抓匀腌制10分钟；青椒去籽去筋切细丝备用。",
        tip: "去青椒内白筋可以大大降低辛辣度，提升脆甜口感。"
      },
      {
        title: "滑熟肉丝",
        desc: "热锅凉油，油温热下肉丝迅速用筷子划散炒至变色八成熟，盛出备用。",
        timer: 90
      },
      {
        title: "炒香青椒",
        desc: "底油爆香蒜片，倒入青椒丝大火翻炒1分钟，调入少许盐使青椒快速断生入味变翠绿。",
        timer: 60
      },
      {
        title: "混合出锅",
        desc: "回入滑熟的肉丝，大火快炒30秒激出镬气，出锅装盘！",
        timer: 30
      }
    ]
  },
  {
    id: "rec_017",
    name: "金针菇鲜美豆腐汤",
    category: "营养靓汤",
    cover: "🍄",
    time: "10分钟",
    timeMinutes: 10,
    difficulty: 1,
    tags: ["减脂快手", "鲜甜无油", "刮油清肠", "暖心汤品"],
    description: "金针菇的鲜香与嫩豆腐的滑软交融，蛋花如云，热量极低且营养饱腹。",
    calories: "~160 kcal",
    servings: 2,
    ingredients: [
      { name: "嫩豆腐", amount: 0.5, unit: "盒", category: "菌菇豆品" },
      { name: "金针菇", amount: 150, unit: "克", category: "菌菇豆品" },
      { name: "鸡蛋", amount: 1, unit: "个", category: "肉禽蛋品" },
      { name: "小葱", amount: 1, unit: "根", category: "常用调味" },
      { name: "生抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "盐", amount: 0.5, unit: "茶匙", category: "常用调味" }
    ],
    steps: [
      {
        title: "食材准备",
        desc: "金针菇洗净切小段；豆腐切小方块；鸡蛋打成均匀蛋液备用。",
        timer: 60
      },
      {
        title: "煮沸下料",
        desc: "锅中放少许油炒香葱白，倒入两碗清水大火煮开，下入金针菇和豆腐块，调入1勺生抽与半茶匙盐，中火煮3分钟。",
        timer: 180
      },
      {
        title: "淋蛋花起锅",
        desc: "转小火让汤水微沸，缓缓转圈淋入蛋液形成细腻漂浮的云朵蛋花，关火滴几滴香油，撒葱花白胡椒即可！",
        timer: 45
      }
    ]
  },
  {
    id: "rec_018",
    name: "宫保鸡丁",
    category: "家常小炒",
    cover: "🌶️",
    time: "18分钟",
    timeMinutes: 18,
    difficulty: 2,
    tags: ["经典川菜", "酸甜微辣", "宴席名菜", "花生酥脆"],
    description: "鸡丁爽滑鲜嫩，花生米酥脆可口，荔枝微酸甜复合味型，吃一口就停不下来。",
    calories: "~390 kcal",
    servings: 2,
    ingredients: [
      { name: "鸡胸肉", amount: 300, unit: "克", category: "肉禽蛋品" },
      { name: "胡萝卜", amount: 0.5, unit: "根", category: "新鲜蔬菜" },
      { name: "黄瓜", amount: 0.5, unit: "根", category: "新鲜蔬菜" },
      { name: "葱姜蒜", amount: 20, unit: "克", category: "常用调味" },
      { name: "白糖", amount: 1.5, unit: "勺", category: "常用调味" },
      { name: "香醋", amount: 1.5, unit: "勺", category: "常用调味" },
      { name: "生抽", amount: 2, unit: "勺", category: "常用调味" },
      { name: "淀粉", amount: 1, unit: "勺", category: "常用调味" }
    ],
    steps: [
      {
        title: "鸡肉切丁腌制",
        desc: "鸡胸肉切均匀大丁，加1勺生抽、半勺料酒、半勺淀粉抓匀腌制上浆10分钟。黄瓜胡萝卜切丁。",
        tip: "上浆时肉丁充分吸收水分，滑油后才能保持嫩汁不柴。"
      },
      {
        title: "调配宫保滋汁",
        desc: "碗中加白糖1.5勺、香醋1.5勺、生抽2勺、淀粉1勺、清水2勺充分搅拌融化作为宫保小碗汁。",
        timer: 60
      },
      {
        title: "滑熟鸡丁",
        desc: "热锅倒油，油温四成热下鸡丁滑散至变白成熟（约2分钟），捞出控油。",
        timer: 120
      },
      {
        title: "大火烹汁裹芡",
        desc: "底油炒香葱姜蒜与干辣椒段，下胡萝卜黄瓜丁翻炒断生，倒入鸡丁，淋入宫保小碗汁大火快速颠翻裹匀，出锅前拌入酥花生米！",
        timer: 90
      }
    ]
  },
  {
    id: "rec_019",
    name: "焦糖丝滑鸡蛋布丁",
    category: "烘焙甜品",
    cover: "🍮",
    time: "25分钟",
    timeMinutes: 25,
    difficulty: 1,
    tags: ["免烤箱", "家常甜品", "奶香浓郁", "入口即化"],
    description: "不用烤箱，普通蒸锅就能做的神仙甜点！焦糖琥珀微苦，布丁奶香嫩滑细腻如丝。",
    calories: "~190 kcal",
    servings: 2,
    ingredients: [
      { name: "鸡蛋", amount: 2, unit: "个", category: "肉禽蛋品" },
      { name: "白糖", amount: 3, unit: "勺", category: "常用调味" },
      { name: "牛奶", amount: 250, unit: "毫升", category: "常用调味" }
    ],
    steps: [
      {
        title: "熬制琥珀焦糖",
        desc: "小奶锅放入2勺白糖和1勺清水，中小火慢熬，不要搅拌，直到糖浆冒大泡并变为诱人琥珀红褐色，立刻关火倒入布丁模具碗底铺平冷却硬化。",
        timer: 240,
        tip: "熬焦糖千万不要用勺子乱搅防结晶，晃动锅身即可。"
      },
      {
        title: "调制布丁液",
        desc: "牛奶加热温热加入1勺糖融化；鸡蛋打散后，边慢倒温牛奶边搅拌，混合后用细滤网过筛两次滤除气泡和蛋筋。",
        tip: "过筛两次是布丁蒸出镜面丝滑无蜂窝的关键核心！"
      },
      {
        title: "盖膜上锅慢蒸",
        desc: "将过滤好的布丁液缓缓倒入焦糖碗中，碗口盖上保鲜膜或铝箔纸（防冷凝水滴落）。蒸锅水沸后转中小火蒸10分钟，关火焖5分钟。",
        timer: 900
      },
      {
        title: "冷藏脱模",
        desc: "出锅自然放凉，放入冰箱冷藏2小时以上，沿碗边轻轻刮一圈倒扣在盘中，琥珀焦糖液倾泻而下，丝滑梦幻！",
        timer: 60
      }
    ]
  },
  {
    id: "rec_020",
    name: "快手番茄鸡蛋打卤面",
    category: "懒人主食",
    cover: "🍜",
    time: "15分钟",
    timeMinutes: 15,
    difficulty: 1,
    tags: ["碳水治愈", "酸甜浓厚", "家常手擀面", "一人食经典"],
    description: "热气腾腾的番茄鸡蛋浓汁浇在爽滑筋道的面条上，大口吸溜，汤汁拌面每一根都裹得满满当当。",
    calories: "~420 kcal",
    servings: 1,
    ingredients: [
      { name: "面条", amount: 150, unit: "克", category: "懒人主食" },
      { name: "鸡蛋", amount: 2, unit: "个", category: "肉禽蛋品" },
      { name: "西红柿", amount: 2, unit: "个", category: "新鲜蔬菜" },
      { name: "小葱", amount: 1, unit: "根", category: "常用调味" },
      { name: "生抽", amount: 1, unit: "勺", category: "常用调味" },
      { name: "白糖", amount: 1, unit: "茶匙", category: "常用调味" },
      { name: "盐", amount: 0.5, unit: "茶匙", category: "常用调味" }
    ],
    steps: [
      {
        title: "滑炒嫩蛋花",
        desc: "鸡蛋加少许盐打散，热油滑散刚凝固立刻盛出备用。",
        timer: 60
      },
      {
        title: "熬浓番茄打卤",
        desc: "少油炒番茄碎出浓红沙汁，加糖提鲜，倒入半碗水煮沸，倒入炒鸡蛋，淋少许水淀粉勾薄芡使汤汁变稠能挂在面上，加盐调味关火。",
        timer: 180
      },
      {
        title: "水沸煮面",
        desc: "另起一锅大火烧水，水滚下入面条煮断生，捞出控干水分装入大碗中。",
        timer: 180
      },
      {
        title: "淋卤开拌",
        desc: "将滚烫浓郁的番茄鸡蛋卤大勺浇在面条顶端，撒上一撮绿葱花，搅拌开吃！",
        timer: 30
      }
    ]
  }
, {
  "id": "rec_021",
  "name": "糖醋里脊",
  "category": "家常小炒",
  "cover": "🥩",
  "time": "20分钟",
  "timeMinutes": 20,
  "difficulty": 2,
  "tags": [
    "经典鲁菜",
    "酸甜酥脆",
    "老少皆宜",
    "外酥里嫩"
  ],
  "description": "色泽金黄红亮，外皮酥脆，里脊肉嫩多汁，酸甜酱汁包裹每一块肉条。",
  "calories": "~430 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "猪里脊",
      "amount": 300,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "鸡蛋",
      "amount": 1,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "番茄酱",
      "amount": 3,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "香醋/陈醋",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 4,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "料酒",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切条腌制",
      "desc": "猪里脊切成小拇指粗细的长条，加1勺料酒、少许盐、白胡椒粉和蛋清抓匀腌制10分钟。"
    },
    {
      "title": "挂糊裹粉",
      "desc": "淀粉加少许清水调成浓稠如酸奶状的水淀粉糊，加入半勺食用油拌匀，将肉条均匀裹满厚糊。"
    },
    {
      "title": "两次复炸",
      "desc": "油温六成热下肉条炸至定型微黄捞出；油温升至八成热复炸30秒至金黄酥脆捞出控油。",
      "timer": 60,
      "tip": "复炸是外壳保持长久酥脆不回软的关键。"
    },
    {
      "title": "裹糖醋汁",
      "desc": "锅中留少许油，下番茄酱、白糖、香醋和少许水淀粉小火熬至冒大红泡，迅速倒入炸好的里脊条翻匀出锅！",
      "timer": 45
    }
  ]
},
{
  "id": "rec_022",
  "name": "地三鲜",
  "category": "家常小炒",
  "cover": "🍆",
  "time": "18分钟",
  "timeMinutes": 18,
  "difficulty": 2,
  "tags": [
    "东北名菜",
    "浓油赤酱",
    "下饭无敌",
    "素食至味"
  ],
  "description": "土豆软糯香甜，茄子柔嫩多汁，青椒清脆爽口，三味交融浓香四溢。",
  "calories": "~350 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "土豆",
      "amount": 1,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "茄子",
      "amount": 1,
      "unit": "根",
      "category": "时令蔬菜"
    },
    {
      "name": "青椒/彩椒",
      "amount": 1,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 20,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切块裹粉",
      "desc": "土豆去皮切滚刀块；青椒掰小块；茄子切滚刀块洒少许水撒一层干淀粉抓匀防吸油。"
    },
    {
      "title": "过油炸透",
      "desc": "油温热先下土豆块中小火炸至外表微焦微黄捞出；再下茄子块大火炸至变软微黄捞出；青椒过油5秒捞出。",
      "timer": 300
    },
    {
      "title": "调碗汁爆炒",
      "desc": "碗中调入生抽2勺、蚝油1勺、糖半勺、淀粉1勺、清水半碗。底油爆香蒜末，倒入三鲜回锅，淋入碗汁大火翻匀芡汁浓稠出锅！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_023",
  "name": "经典回锅肉",
  "category": "硬菜大餐",
  "cover": "🥓",
  "time": "25分钟",
  "timeMinutes": 25,
  "difficulty": 2,
  "tags": [
    "川菜之王",
    "浓香扑鼻",
    "米饭杀手",
    "经典炒肉"
  ],
  "description": "肥瘦相间的二刀肉煸炒成微微卷起的灯盏窝，豆豉与青椒香气直击灵魂。",
  "calories": "~490 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "五花肉",
      "amount": 350,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "青椒/彩椒",
      "amount": 2,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 20,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "郫县豆瓣酱",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "煮肉切片",
      "desc": "整块五花肉冷水下锅加姜片料酒煮至筷子能插透（约15分钟），捞出放凉切成均匀薄大片。"
    },
    {
      "title": "煸出灯盏窝",
      "desc": "锅底少许油，下肉片中小火慢煸，煸出多余油脂直至肉片微微卷曲呈灯盏窝形状。",
      "timer": 180
    },
    {
      "title": "炒香红油出锅",
      "desc": "推开肉片，下豆瓣酱和蒜末炒出红油，再加入青椒块大火快炒断生，加生抽与半勺糖提鲜翻匀装盘！",
      "timer": 90
    }
  ]
},
{
  "id": "rec_024",
  "name": "鱼香茄子煲",
  "category": "家常小炒",
  "cover": "🍆",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 1,
  "tags": [
    "下饭神菜",
    "软烂入味",
    "砂锅保温",
    "咸甜微辣"
  ],
  "description": "茄条焖至软糯流油，吸饱了肉沫与酸甜鱼香汁，盛入砂锅中咕嘟咕嘟香气四溢。",
  "calories": "~320 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "茄子",
      "amount": 2,
      "unit": "根",
      "category": "时令蔬菜"
    },
    {
      "name": "肉沫/肉馅",
      "amount": 80,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "葱姜蒜",
      "amount": 20,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "郫县豆瓣酱",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "香醋/陈醋",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "茄子切条去水",
      "desc": "茄子切粗长条，加半茶匙盐腌制10分钟杀出多余水分挤干（这步能让茄子完全不吸油）。"
    },
    {
      "title": "煸炒肉末",
      "desc": "热油下肉沫炒散发白，下蒜末姜末与豆瓣酱炒出红油豆香。"
    },
    {
      "title": "下茄条焖软",
      "desc": "倒入茄条中火翻炒至变软，倒入调好的生抽、香醋、糖和小半碗水，盖盖焖煮3分钟收浓出锅！",
      "timer": 180
    }
  ]
},
{
  "id": "rec_025",
  "name": "川味香辣辣子鸡",
  "category": "硬菜大餐",
  "cover": "🍗",
  "time": "25分钟",
  "timeMinutes": 25,
  "difficulty": 3,
  "tags": [
    "川菜名菜",
    "麻辣干香",
    "下酒绝配",
    "香脆多汁"
  ],
  "description": "在红彤彤的干辣椒与花椒里寻觅外焦里嫩的鸡肉丁，麻辣鲜香越嚼越过瘾。",
  "calories": "~460 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鸡腿",
      "amount": 2,
      "unit": "只",
      "category": "肉禽蛋品"
    },
    {
      "name": "花椒/花椒油",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "葱姜蒜",
      "amount": 25,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "料酒",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "斩丁腌制",
      "desc": "鸡腿剔骨切大拇指大小的小丁，加生抽、料酒、胡椒粉、盐和淀粉抓匀腌制20分钟。"
    },
    {
      "title": "两遍炸干香",
      "desc": "油温六成热下鸡丁炸至微焦捞出，油温升至八成热复炸1分钟至表皮焦香酥脆捞出控油。",
      "timer": 120
    },
    {
      "title": "爆炒辣椒合锅",
      "desc": "底油爆香姜蒜、大量干辣椒段和花椒炒出麻辣香气，倒入炸好的鸡丁，撒白芝麻与白糖大火翻匀出锅！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_026",
  "name": "尖椒炒千张豆腐皮",
  "category": "家常小炒",
  "cover": "🫑",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 1,
  "tags": [
    "东北家常",
    "滑嫩鲜香",
    "五分钟快手",
    "素食高蛋白"
  ],
  "description": "千张豆皮滑嫩多汁，青尖椒脆辣提神，勾上薄芡汁润滑适口，百吃不厌。",
  "calories": "~220 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "千张/豆腐皮",
      "amount": 200,
      "unit": "克",
      "category": "菌菇豆品"
    },
    {
      "name": "青椒/彩椒",
      "amount": 2,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "焯水去豆腥",
      "desc": "千张切宽条，水沸加少许盐焯水1分钟捞出（能让豆皮格外滑嫩且除生豆味）。",
      "timer": 60
    },
    {
      "title": "炒香蒜片尖椒",
      "desc": "热锅倒油炒香葱姜蒜末，下尖椒块大火翻炒30秒出辣香味。"
    },
    {
      "title": "淋芡出锅",
      "desc": "倒入千张条，加半碗高汤或清水、生抽、蚝油煨煮1分钟，淋入水淀粉勾薄芡滑炒均匀出锅！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_027",
  "name": "经典虎皮青椒",
  "category": "家常小炒",
  "cover": "🫑",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 1,
  "tags": [
    "开胃神器",
    "酸甜微辣",
    "焦香虎皮",
    "配粥下饭"
  ],
  "description": "青椒表面煎出均匀褶皱的迷人虎皮，吸足了酸甜咸鲜的特调酱汁，软烂开胃。",
  "calories": "~130 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "青椒/彩椒",
      "amount": 6,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "香醋/陈醋",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "处理青椒",
      "desc": "青椒洗净去蒂去籽，用刀面轻轻拍扁便于受热煎出虎皮纹理。"
    },
    {
      "title": "干锅煸虎皮",
      "desc": "锅烧热不放油，放入青椒中小火慢煎，用锅铲不断按压，煎至两面起白焦皮起皱。",
      "timer": 240
    },
    {
      "title": "淋汁焖入味",
      "desc": "放少许油炒香蒜末，倒入生抽、香醋、糖和少许清水调成的酱汁，大火煮沸收汁至浓稠裹在青椒上关火！",
      "timer": 90
    }
  ]
},
{
  "id": "rec_028",
  "name": "四川麻辣水煮肉片",
  "category": "硬菜大餐",
  "cover": "🥘",
  "time": "25分钟",
  "timeMinutes": 25,
  "difficulty": 3,
  "tags": [
    "川味巨头",
    "滑嫩热辣",
    "红油翻滚",
    "下饭霸主"
  ],
  "description": "肉片滑嫩如绸缎，红油汤底麻辣厚重，豆芽与生菜垫底吸饱鲜辣肉汁。",
  "calories": "~490 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "猪里脊",
      "amount": 300,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "豆芽",
      "amount": 150,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "生菜",
      "amount": 100,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "郫县豆瓣酱",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "葱姜蒜",
      "amount": 30,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "辣椒油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切薄片上浆",
      "desc": "里脊肉切均匀大薄片，加盐、胡椒粉、料酒、蛋清和足量水淀粉抓匀上厚浆锁水嫩滑。"
    },
    {
      "title": "烫熟配菜垫底",
      "desc": "水沸焯熟豆芽与生菜，捞出沥干铺在大深海碗底部备用。"
    },
    {
      "title": "煮滑肉片",
      "desc": "油热炒香豆瓣酱与姜蒜碎出红油，加水煮沸调味，转小火逐片下入肉片，肉片定型变白（约1分钟）连汤倒入碗中。",
      "timer": 60
    },
    {
      "title": "热油激香出锅",
      "desc": "撒上蒜末、葱花、辣椒粉和花椒粉，淋入一大勺烧至滚烫的热油，滋啦作响香气满溢！",
      "timer": 20
    }
  ]
},
{
  "id": "rec_029",
  "name": "木须肉",
  "category": "家常小炒",
  "cover": "🥚",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 1,
  "tags": [
    "鲁菜经典",
    "荤素搭配",
    "营养均衡",
    "色泽鲜明"
  ],
  "description": "金黄鸡蛋配黑木耳与翠绿黄瓜片，肉片滑嫩清香，色彩悦目营养全能。",
  "calories": "~320 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "猪里脊",
      "amount": 150,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "鸡蛋",
      "amount": 2,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "黄瓜",
      "amount": 1,
      "unit": "根",
      "category": "时令蔬菜"
    },
    {
      "name": "木耳",
      "amount": 30,
      "unit": "克",
      "category": "菌菇豆品"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切片准备",
      "desc": "黄瓜切菱形片；木耳温水泡发撕小朵；里脊肉切薄片加生抽水淀粉抓匀腌制。"
    },
    {
      "title": "滑炒鸡蛋与肉片",
      "desc": "热油先滑炒鸡蛋盛出；再滑炒肉片至变白断生盛出备用。"
    },
    {
      "title": "合炒大火出锅",
      "desc": "底油爆香葱花，下木耳和黄瓜片翻炒1分钟，回入肉片和鸡蛋，加1勺生抽少许盐大火翻炒均匀出锅！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_030",
  "name": "老北京葱爆羊肉",
  "category": "硬菜大餐",
  "cover": "🥩",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 2,
  "tags": [
    "京味名菜",
    "葱香浓郁",
    "肉嫩多汁",
    "大火快炒"
  ],
  "description": "大葱的清甜与羊肉的鲜香在大火快炒中剧烈碰撞，肉片鲜嫩多汁毫无膻味。",
  "calories": "~380 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "羊肉",
      "amount": 300,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "小葱",
      "amount": 80,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 0.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "孜然",
      "amount": 1,
      "unit": "茶匙",
      "category": "调味常备"
    },
    {
      "name": "食用油",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切片腌制",
      "desc": "羊肉逆纹切薄片（或用羊肉卷），加生抽1勺、料酒半勺、少许白胡椒抓匀腌制5分钟；葱切大滚刀厚段。"
    },
    {
      "title": "猛火快滑",
      "desc": "铁锅烧至冒青烟倒油，立刻下羊肉大火快速滑炒至八成熟盛出（全程不超过30秒）。",
      "timer": 30
    },
    {
      "title": "合入大葱出镬气",
      "desc": "留底油倒入葱段大火煸出甜香，回入羊肉，沿锅边淋1勺生抽半勺香醋与少许孜然白糖，颠翻出锅！",
      "timer": 40
    }
  ]
},
{
  "id": "rec_031",
  "name": "清蒸鲜活鲈鱼",
  "category": "硬菜大餐",
  "cover": "🐟",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 1,
  "tags": [
    "粤菜经典",
    "原汁原味",
    "鲜甜细嫩",
    "宴客排面"
  ],
  "description": "鱼肉洁白如蒜瓣，肉质细嫩紧实，蒸鱼豉油与滚烫葱油将极致鲜甜瞬间激发。",
  "calories": "~220 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鲈鱼",
      "amount": 1,
      "unit": "条",
      "category": "水产海鲜"
    },
    {
      "name": "小葱",
      "amount": 30,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "葱姜蒜",
      "amount": 20,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 3,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "食用油",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "开刀摆盘",
      "desc": "鲈鱼两面斜划两刀，盘底垫葱段姜片架空鱼身（受热更均匀），鱼身摆葱姜丝淋半勺料酒。"
    },
    {
      "title": "大火足汽蒸",
      "desc": "蒸锅水烧大开，大火上锅蒸8分钟关火虚蒸2分钟。出锅倒掉盘中带有腥味的蒸鱼汤汁，拿掉旧葱姜。",
      "timer": 600
    },
    {
      "title": "热油激香淋豉油",
      "desc": "重新铺上新鲜的葱丝姜丝，淋入热滚油激发出浓烈葱香，最后沿盘边淋入3勺生抽即成！",
      "timer": 30
    }
  ]
},
{
  "id": "rec_032",
  "name": "开胃酸菜鱼",
  "category": "硬菜大餐",
  "cover": "🐟",
  "time": "25分钟",
  "timeMinutes": 25,
  "difficulty": 2,
  "tags": [
    "川味酸汤",
    "嫩滑少刺",
    "酸香开胃",
    "老坛风味"
  ],
  "description": "老坛酸菜酸爽醇厚，鱼片白嫩爽滑薄如蝉翼，汤酸味美喝上一口通体舒畅。",
  "calories": "~340 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "龙利鱼/巴沙鱼",
      "amount": 350,
      "unit": "克",
      "category": "水产海鲜"
    },
    {
      "name": "大白菜",
      "amount": 150,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 25,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "香醋/陈醋",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "片鱼上浆",
      "desc": "鱼肉斜刀片成薄片，加少许盐、白胡椒、蛋清和水淀粉轻轻抓拌至起粘性锁水备用。"
    },
    {
      "title": "炒香酸菜煮底汤",
      "desc": "热油炒香葱姜蒜与老坛酸菜碎出酸香味，加入大碗热水大火煮沸5分钟熬出奶白酸汤，捞出酸菜垫底大碗中。",
      "timer": 300
    },
    {
      "title": "下鱼片激油出锅",
      "desc": "汤保持微沸，分散滑入鱼片煮约40秒至卷曲变白捞出装碗，汤汁浇入，撒干辣椒蒜末淋滚油激香！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_033",
  "name": "香辣辣炒花甲",
  "category": "硬菜大餐",
  "cover": "🦪",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 1,
  "tags": [
    "大排档爆款",
    "鲜甜香辣",
    "绝妙下酒菜",
    "快手小海鲜"
  ],
  "description": "颗颗花甲饱满多汁无沙，裹满金黄蒜蓉与香辣酱汁，吸溜一口鲜美无比。",
  "calories": "~190 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "蛤蜊/花甲",
      "amount": 500,
      "unit": "克",
      "category": "水产海鲜"
    },
    {
      "name": "葱姜蒜",
      "amount": 25,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "郫县豆瓣酱",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "焯水开口",
      "desc": "花甲盐水吐沙洗净，冷水下锅加姜片料酒大火煮至逐个张开外壳，立刻捞出温水冲洗浮沙沥干。",
      "timer": 120
    },
    {
      "title": "炒香酱料",
      "desc": "热锅倒油，炒香姜蒜末、豆瓣酱与少许辣椒圈出红油和蒜香味。"
    },
    {
      "title": "大火翻炒出锅",
      "desc": "倒入开口花甲，沿锅边淋入生抽、蚝油和少许白糖，大火快速颠锅翻匀让酱汁裹满贝肉出锅！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_034",
  "name": "白灼生菜",
  "category": "快手减脂",
  "cover": "🥬",
  "time": "5分钟",
  "timeMinutes": 5,
  "difficulty": 1,
  "tags": [
    "低卡减脂",
    "清脆甘甜",
    "三分钟搞定",
    "刮油清肠"
  ],
  "description": "生菜翠绿脆嫩多汁，淋上豉油与蒜香滚油，清甜甘美无油腻负担。",
  "calories": "~85 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "生菜",
      "amount": 300,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 0.3,
      "unit": "茶匙",
      "category": "调味常备"
    },
    {
      "name": "食用油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "焯烫生菜",
      "desc": "水开加半勺油和少许盐（保持菜叶青翠），放入生菜焯烫15-20秒刚变软立刻捞出沥水摆盘。",
      "timer": 20
    },
    {
      "title": "淋酱汁泼油",
      "desc": "生菜表面铺上切碎的蒜末，淋入生抽与少许糖调和的汁水，烧热一勺油浇在蒜末上激香即食！",
      "timer": 20
    }
  ]
},
{
  "id": "rec_035",
  "name": "凉拌脆爽拍黄瓜",
  "category": "快手减脂",
  "cover": "🥒",
  "time": "5分钟",
  "timeMinutes": 5,
  "difficulty": 1,
  "tags": [
    "夏日开胃",
    "嘎嘣脆爽",
    "免开火",
    "五分钟凉菜"
  ],
  "description": "刀背拍裂的黄瓜吸饱了酸辣蒜香酱汁，冰凉爽脆，解腻第一名。",
  "calories": "~65 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "黄瓜",
      "amount": 2,
      "unit": "根",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "香醋/陈醋",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "调味常备"
    },
    {
      "name": "芝麻香油",
      "amount": 1,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "拍裂切块",
      "desc": "黄瓜洗净用菜刀拍扁拍裂（比刀切更容易入味），然后斜刀切小段装入大碗中。"
    },
    {
      "title": "拌汁入味",
      "desc": "加入蒜碎、生抽、香醋、糖、香油和少许盐，抓拌均匀冷藏10分钟风味最佳！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_036",
  "name": "玉米胡萝卜排骨汤",
  "category": "营养靓汤",
  "cover": "🥣",
  "time": "50分钟",
  "timeMinutes": 50,
  "difficulty": 1,
  "tags": [
    "清甜养胃",
    "老少咸宜",
    "零失败暖汤",
    "经典粤汤"
  ],
  "description": "甜玉米的自然清甜融入肉骨浓香，胡萝卜软糯回甘，汤清味美润燥滋养。",
  "calories": "~310 kcal",
  "servings": 3,
  "ingredients": [
    {
      "name": "排骨",
      "amount": 400,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "玉米",
      "amount": 1,
      "unit": "根",
      "category": "粮油主食与干货"
    },
    {
      "name": "胡萝卜",
      "amount": 1,
      "unit": "根",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "盐",
      "amount": 1,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "排骨焯水",
      "desc": "排骨冷水下锅加姜片料酒煮沸焯水3分钟捞出，温水冲洗干净沥水。"
    },
    {
      "title": "砂锅煲汤",
      "desc": "砂锅加足量水，下入排骨和拍散的姜块，大火烧开转微火慢煨35分钟。",
      "timer": 2100
    },
    {
      "title": "下玉米胡萝卜",
      "desc": "加入切段的甜玉米与滚刀胡萝卜块，继续慢炖15分钟，出锅前调入食盐即可。",
      "timer": 900
    }
  ]
},
{
  "id": "rec_037",
  "name": "韩式辣白菜嫩豆腐汤",
  "category": "营养靓汤",
  "cover": "🍲",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 1,
  "tags": [
    "暖心一人食",
    "酸辣过瘾",
    "低脂饱腹",
    "韩剧同款"
  ],
  "description": "酸辣发酵风味的辣白菜搭配滑嫩如脂的嫩豆腐，汤汁滚烫浓郁，暖身开胃。",
  "calories": "~210 kcal",
  "servings": 1,
  "ingredients": [
    {
      "name": "嫩豆腐",
      "amount": 1,
      "unit": "盒",
      "category": "菌菇豆品"
    },
    {
      "name": "鸡蛋",
      "amount": 1,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "大白菜",
      "amount": 120,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 10,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "炒香白菜",
      "desc": "砂锅底放少许油炒香蒜末与辣白菜2分钟散发酸辣香气。"
    },
    {
      "title": "煨煮豆腐",
      "desc": "倒入一碗高汤或开水煮沸，轻轻滑入切厚片的嫩豆腐，加1勺生抽中火煮4分钟。",
      "timer": 240
    },
    {
      "title": "窝生蛋出锅",
      "desc": "中心打入一颗新鲜鸡蛋，趁滚烫汤汁煮至溏心，撒上绿葱花端锅趁热享用！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_038",
  "name": "黄金扬州炒饭",
  "category": "懒人主食",
  "cover": "🍚",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 1,
  "tags": [
    "粒粒分明",
    "五彩缤纷",
    "经典炒饭",
    "碳水之光"
  ],
  "description": "米饭颗颗裹满金黄蛋液，搭配鲜虾仁、火腿肠与甜玉米粒，鲜香扑鼻。",
  "calories": "~460 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "米饭/大米",
      "amount": 2,
      "unit": "碗隔夜饭",
      "category": "粮油主食与干货"
    },
    {
      "name": "鸡蛋",
      "amount": 2,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "鲜虾/虾仁",
      "amount": 6,
      "unit": "只",
      "category": "水产海鲜"
    },
    {
      "name": "火腿肠",
      "amount": 1,
      "unit": "根",
      "category": "肉禽蛋品"
    },
    {
      "name": "小葱",
      "amount": 2,
      "unit": "根",
      "category": "调味常备"
    },
    {
      "name": "盐",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "米饭拌蛋黄",
      "desc": "隔夜米饭加一颗蛋黄抓匀，让米粒分散且均匀裹上一层金黄（黄金炒饭秘籍）。"
    },
    {
      "title": "炒熟虾仁火腿",
      "desc": "热油先下虾仁丁和火腿丁翻炒至断生盛出备用。"
    },
    {
      "title": "大火翻炒跳舞",
      "desc": "热锅倒油，下另一颗鸡蛋炒成碎蛋花，倒入金黄米饭大火快速翻炒拍散至米粒在锅中欢快跳跃，回入配料加盐葱花翻匀出锅！",
      "timer": 180
    }
  ]
},
{
  "id": "rec_039",
  "name": "肉末豆角焖面",
  "category": "懒人主食",
  "cover": "🍜",
  "time": "20分钟",
  "timeMinutes": 20,
  "difficulty": 2,
  "tags": [
    "北方经典",
    "面条吸汁",
    "一锅成席",
    "麦香浓郁"
  ],
  "description": "豆角软糯肉末酱香浓郁，生面条在浓郁汤汁蒸气中焖熟，根根劲道吸饱滋味。",
  "calories": "~480 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "面条",
      "amount": 200,
      "unit": "克生面条",
      "category": "粮油主食与干货"
    },
    {
      "name": "四季豆",
      "amount": 200,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "肉沫/肉馅",
      "amount": 120,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "葱姜蒜",
      "amount": 20,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "老抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "炒香肉末豆角",
      "desc": "热油煸炒肉末至吐油金黄，下蒜姜炒香，倒入去筋切段的豆角大火煸炒至翠绿表皮微皱。"
    },
    {
      "title": "调味加水留半碗汤",
      "desc": "加入生抽2勺、老抽1勺上色，倒入没过豆角的热水烧开煮2分钟，用小碗盛出一半汤汁备用。"
    },
    {
      "title": "铺面焖煮",
      "desc": "将面条抖散蓬松铺在豆角上方（不要浸入锅底防粘），盖紧锅盖中小火焖煮8分钟，中途沿锅边淋入留出的半碗汤汁，最后大火拌匀开吃！",
      "timer": 480
    }
  ]
},
{
  "id": "rec_040",
  "name": "冰糖雪梨银耳羹",
  "category": "烘焙甜品",
  "cover": "🥣",
  "time": "35分钟",
  "timeMinutes": 35,
  "difficulty": 1,
  "tags": [
    "润燥养颜",
    "胶质满满",
    "清甜甘润",
    "经典甜羹"
  ],
  "description": "银耳熬出浓稠胶质拉丝，雪梨晶莹清甜，润喉润燥，甜美暖心。",
  "calories": "~140 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "银耳",
      "amount": 20,
      "unit": "克",
      "category": "菌菇豆品"
    },
    {
      "name": "白糖",
      "amount": 25,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "牛奶",
      "amount": 100,
      "unit": "毫升",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "泡发撕碎",
      "desc": "银耳温水泡发30分钟，剪去硬根用手撕成细小碎片（碎片越小越容易快速出浓胶质）。"
    },
    {
      "title": "高火慢炖出胶",
      "desc": "锅中倒足量水下碎银耳，大火烧开转中火保持翻滚慢炖25分钟，直至汤水浓稠起丰富胶质。",
      "timer": 1500
    },
    {
      "title": "入雪梨冰糖",
      "desc": "加入去皮切小块的水梨与冰糖，继续慢炖10分钟至晶莹软烂，温热或冷藏享用均极妙。",
      "timer": 600
    }
  ]
},
{
  "id": "rec_041",
  "name": "湖南剁椒鱼头",
  "category": "硬菜大餐",
  "cover": "🐟",
  "time": "20分钟",
  "timeMinutes": 20,
  "difficulty": 2,
  "tags": [
    "湘菜招牌",
    "鸿运当头",
    "咸辣鲜浓",
    "拌面绝配"
  ],
  "description": "红亮剁椒铺满肥嫩鱼头，肉质嫩如凝脂，鲜辣汤汁拌上手工面条，堪称人间美味。",
  "calories": "~360 kcal",
  "servings": 3,
  "ingredients": [
    {
      "name": "鲈鱼",
      "amount": 1,
      "unit": "条(或大鱼头)",
      "category": "水产海鲜"
    },
    {
      "name": "葱姜蒜",
      "amount": 30,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "食用油",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "清洗开背",
      "desc": "鱼头从背部劈开洗净黑膜，抹少许盐、料酒和胡椒粉腌制10分钟，盘底垫葱姜摆好鱼头。"
    },
    {
      "title": "炒香红剁椒",
      "desc": "热油炒香蒜末姜末，倒入红剁椒炒出香辣红油，调入生抽蚝油拌匀，均匀厚铺在鱼头上。"
    },
    {
      "title": "大火蒸透激油",
      "desc": "入开水蒸锅大火蒸10分钟，关火虚蒸2分钟，撒上绿葱花，淋滚烫热油激香出锅！",
      "timer": 600
    }
  ]
},
{
  "id": "rec_042",
  "name": "滋补山药炖鸡汤",
  "category": "营养靓汤",
  "cover": "🍲",
  "time": "50分钟",
  "timeMinutes": 50,
  "difficulty": 1,
  "tags": [
    "温中健脾",
    "金黄鸡油",
    "软糯山药",
    "暖心养生"
  ],
  "description": "金黄鸡汤醇香浓郁，铁棍山药粉糯绵密，驱寒暖胃，满满元气。",
  "calories": "~320 kcal",
  "servings": 3,
  "ingredients": [
    {
      "name": "鸡腿",
      "amount": 2,
      "unit": "只",
      "category": "肉禽蛋品"
    },
    {
      "name": "山药",
      "amount": 200,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "盐",
      "amount": 1,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "斩块焯水",
      "desc": "鸡肉斩小块，冷水入锅加葱姜料酒煮沸2分钟撇去浮沫，捞出温水洗净。"
    },
    {
      "title": "文火慢煨",
      "desc": "砂锅加热水下鸡块和姜片，大火煮开转微火慢煨35分钟逼出金黄鸡油与浓香。"
    },
    {
      "title": "入山药出锅",
      "desc": "铁棍山药去皮切滚刀厚块下入汤中，继续焖煮12分钟至山药粉糯，出锅撒少许盐和葱花即成。",
      "timer": 720
    }
  ]
},
{
  "id": "rec_043",
  "name": "经典番茄牛肉罗宋汤",
  "category": "营养靓汤",
  "cover": "🥣",
  "time": "40分钟",
  "timeMinutes": 40,
  "difficulty": 2,
  "tags": [
    "酸甜浓郁",
    "时蔬荟萃",
    "西餐经典",
    "开胃健脾"
  ],
  "description": "大块牛肉软烂浓香，西红柿与洋葱胡萝卜熬至化境，酸甜红汤浓稠醇厚。",
  "calories": "~350 kcal",
  "servings": 3,
  "ingredients": [
    {
      "name": "牛肉",
      "amount": 250,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "西红柿",
      "amount": 2,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "土豆",
      "amount": 1,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "胡萝卜",
      "amount": 1,
      "unit": "根",
      "category": "时令蔬菜"
    },
    {
      "name": "洋葱",
      "amount": 0.5,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "番茄酱",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "牛肉切块焯水",
      "desc": "牛肉切2厘米方块冷水焯水撇净血沫；番茄去皮切丁；土豆胡萝卜切滚刀小块。"
    },
    {
      "title": "煸炒时蔬",
      "desc": "热油炒香洋葱碎与番茄丁出红沙，加2勺番茄酱翻匀，倒入焯好的牛肉块。"
    },
    {
      "title": "慢炖入味",
      "desc": "倒入足量热水大火煮开转小火炖煮30分钟，加入土豆与胡萝卜再炖10分钟至软烂，加盐与黑胡椒出锅！",
      "timer": 2400
    }
  ]
},
{
  "id": "rec_044",
  "name": "西湖牛肉羹",
  "category": "营养靓汤",
  "cover": "🥣",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 1,
  "tags": [
    "杭帮经典",
    "滑爽鲜美",
    "润喉开胃",
    "五星级国宴"
  ],
  "description": "碎牛肉末细嫩鲜香，豆腐与香菇如丝，蛋清漂浮如白云，鲜滑润口。",
  "calories": "~180 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "牛肉",
      "amount": 100,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "嫩豆腐",
      "amount": 0.5,
      "unit": "盒",
      "category": "菌菇豆品"
    },
    {
      "name": "香菇",
      "amount": 2,
      "unit": "朵",
      "category": "菌菇豆品"
    },
    {
      "name": "鸡蛋",
      "amount": 2,
      "unit": "个(取蛋清)",
      "category": "肉禽蛋品"
    },
    {
      "name": "淀粉",
      "amount": 3,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白胡椒粉",
      "amount": 1,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "食材切细粒",
      "desc": "牛肉剁成细肉碎加料酒水淀粉抓匀；嫩豆腐切极小细丁；香菇泡发切细碎粒。"
    },
    {
      "title": "清汤煮沸勾芡",
      "desc": "高汤煮沸，下香菇和豆腐丁煮1分钟，下牛肉碎快速搅散变白，淋水淀粉勾成浓稠玻璃芡。"
    },
    {
      "title": "泼入白云蛋清",
      "desc": "关微火，边旋转汤水边缓缓淋入蛋清划出白色云絮，撒香菜白胡椒香油出锅！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_045",
  "name": "清甜丝瓜蛤蜊鲜汤",
  "category": "营养靓汤",
  "cover": "🥣",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 1,
  "tags": [
    "鲜上加鲜",
    "清热润燥",
    "低脂零油",
    "十分钟快手"
  ],
  "description": "丝瓜碧绿清甜多汁，蛤蜊原汁天然鲜美，无需过多调料便鲜掉眉毛。",
  "calories": "~120 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "丝瓜",
      "amount": 1,
      "unit": "根",
      "category": "时令蔬菜"
    },
    {
      "name": "蛤蜊/花甲",
      "amount": 250,
      "unit": "克",
      "category": "水产海鲜"
    },
    {
      "name": "葱姜蒜",
      "amount": 10,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "芝麻香油",
      "amount": 0.5,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切块备料",
      "desc": "丝瓜刮去粗皮切滚刀块；花甲吐尽泥沙洗净沥水备用。"
    },
    {
      "title": "油炒丝瓜下开水",
      "desc": "少许油爆香姜丝，下丝瓜块大火快炒30秒（炒过的丝瓜汤汁白浓且不变黑），倒入两大碗沸水。"
    },
    {
      "title": "下蛤蜊出鲜",
      "desc": "汤水大开下入花甲，煮约2分钟至花甲全部欢快开口，加少许盐和香油关火盛出！",
      "timer": 120
    }
  ]
},
{
  "id": "rec_046",
  "name": "酱爆鸭肉片",
  "category": "家常小炒",
  "cover": "🦆",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "酱香浓郁",
    "外焦内嫩",
    "咸甜适口",
    "下饭好菜"
  ],
  "description": "甜面酱与黄豆酱炒出浓醇红油，包裹着焦香紧实的鸭肉薄片，滋味醇厚入骨。",
  "calories": "~410 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鸭肉",
      "amount": 300,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "青椒/彩椒",
      "amount": 1,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "黄豆酱",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切片腌制",
      "desc": "鸭胸肉逆纹切薄片，加黄豆酱半勺、生抽、料酒抓匀腌制10分钟。"
    },
    {
      "title": "热锅煸炒出油",
      "desc": "热锅倒少许油，下鸭肉片大火翻炒煸出鸭皮自带多余油脂，变色微焦盛出。"
    },
    {
      "title": "酱爆合锅",
      "desc": "底油爆香蒜末与1勺黄豆酱出酱香味，回入鸭肉与青椒块大火爆炒1分钟翻匀装盘！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_047",
  "name": "蒜蓉清炒西兰花",
  "category": "家常小炒",
  "cover": "🥦",
  "time": "8分钟",
  "timeMinutes": 8,
  "difficulty": 1,
  "tags": [
    "低卡高纤",
    "翠绿清脆",
    "健康减脂",
    "快手小菜"
  ],
  "description": "西兰花脆嫩甘甜，金黄蒜末香气四溢，清爽解腻营养丰富。",
  "calories": "~95 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "西兰花",
      "amount": 350,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 25,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "焯水保翠绿",
      "desc": "西兰花掰小朵淡盐水浸泡，沸水加几滴油和少许盐，下西兰花焯烫45秒捞出沥水（过油盐水能锁住亮绿）。"
    },
    {
      "title": "爆香金蒜",
      "desc": "油热爆香大半蒜末至微微金黄散发浓郁蒜香。"
    },
    {
      "title": "大火翻炒出锅",
      "desc": "倒入西兰花大火快炒30秒，调入生抽、蚝油与剩下生蒜末翻匀出锅！",
      "timer": 30
    }
  ]
},
{
  "id": "rec_048",
  "name": "蚂蚁上树 (肉末炒粉丝)",
  "category": "家常小炒",
  "cover": "🍝",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 1,
  "tags": [
    "经典川菜",
    "粉丝吸汁",
    "咸香微辣",
    "下饭快手"
  ],
  "description": "肉末如小蚂蚁般紧紧贴在晶莹剔透的粉丝上，吸饱了豆瓣酱红油香，软润爽滑。",
  "calories": "~340 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "粉丝",
      "amount": 100,
      "unit": "克",
      "category": "粮油主食与干货"
    },
    {
      "name": "肉沫/肉馅",
      "amount": 80,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "郫县豆瓣酱",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "泡软粉丝",
      "desc": "粉丝温水泡软15分钟，捞出剪成两段防止过长缠绕。"
    },
    {
      "title": "煸炒肉末出红油",
      "desc": "热油煸炒肉末至吐油泛白，加姜蒜碎与豆瓣酱炒出红油亮色。"
    },
    {
      "title": "粉丝焖煮吸汁",
      "desc": "倒入半碗高汤煮沸，倒入粉丝用筷子划散翻炒，加生抽小火焖煮1分钟至汤汁完全被粉丝吸饱，撒葱花出锅！",
      "timer": 90
    }
  ]
},
{
  "id": "rec_049",
  "name": "豆豉油麦菜",
  "category": "家常小炒",
  "cover": "🥬",
  "time": "6分钟",
  "timeMinutes": 6,
  "difficulty": 1,
  "tags": [
    "广式风味",
    "咸鲜微甜",
    "脆嫩多汁",
    "下饭小炒"
  ],
  "description": "豆豉的咸香醇厚融入脆嫩的油麦菜叶中，镬气十足，开胃下饭。",
  "calories": "~140 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "油麦菜",
      "amount": 350,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 0.3,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切段洗净",
      "desc": "油麦菜洗净沥干水分切长段；大蒜拍碎。"
    },
    {
      "title": "炒香豆豉大蒜",
      "desc": "热油炒香蒜末与豆豉酱出豉香味。"
    },
    {
      "title": "大火翻炒出锅",
      "desc": "猛火倒入油麦菜快速翻炒40秒至菜叶变软塌下，调入少许生抽白糖翻匀出锅！",
      "timer": 40
    }
  ]
},
{
  "id": "rec_050",
  "name": "香煎柠檬黑椒龙利鱼",
  "category": "快手减脂",
  "cover": "🐟",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 1,
  "tags": [
    "低卡高蛋白",
    "无刺滑嫩",
    "减脂健身",
    "免开大火"
  ],
  "description": "无骨无刺的龙利鱼排煎至两面金黄焦香，黑胡椒与柠檬清香四溢，鲜嫩爆汁。",
  "calories": "~190 kcal",
  "servings": 1,
  "ingredients": [
    {
      "name": "龙利鱼/巴沙鱼",
      "amount": 250,
      "unit": "克",
      "category": "水产海鲜"
    },
    {
      "name": "黑胡椒",
      "amount": 1,
      "unit": "茶匙",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "料酒",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "吸干水分腌制",
      "desc": "鱼排解冻用厨房纸彻底吸干表面水分，抹上生抽、料酒、海盐和大量现磨黑胡椒粒腌制10分钟。"
    },
    {
      "title": "少油两面慢煎",
      "desc": "平底不粘锅刷薄薄一层橄榄油，中小火放入鱼排慢煎3分钟至底面金黄，翻面再煎2分钟熟透微焦出锅！",
      "timer": 300
    }
  ]
},
{
  "id": "rec_051",
  "name": "鸡胸肉蒸老豆腐饼",
  "category": "快手减脂",
  "cover": "🥟",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 1,
  "tags": [
    "高蛋白",
    "无油蒸菜",
    "滑嫩鲜美",
    "减脂塑形"
  ],
  "description": "鸡肉泥与豆腐完美融合，蒸制后柔嫩多汁，高蛋白极低碳水，鲜美无比。",
  "calories": "~220 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鸡胸肉",
      "amount": 200,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "老豆腐",
      "amount": 150,
      "unit": "克",
      "category": "菌菇豆品"
    },
    {
      "name": "小葱",
      "amount": 2,
      "unit": "根",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "搅打肉泥",
      "desc": "鸡胸肉剁细泥；豆腐用勺子压碎成泥；两者混合加葱末、生抽、蚝油、黑胡椒顺一个方向搅拌上劲。"
    },
    {
      "title": "团成圆饼上锅蒸",
      "desc": "团成圆形小饼摆在盘中，蒸锅水开后大火蒸10分钟熟透出锅，淋少许生抽葱油即食！",
      "timer": 600
    }
  ]
},
{
  "id": "rec_052",
  "name": "彩椒炒嫩鸡丁",
  "category": "快手减脂",
  "cover": "🍗",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 1,
  "tags": [
    "色彩缤纷",
    "维C满满",
    "快手小炒",
    "滑嫩不柴"
  ],
  "description": "红黄绿三色甜椒清甜爽口，鸡肉丁滑嫩多汁，低卡饱腹颜值超高。",
  "calories": "~240 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鸡胸肉",
      "amount": 200,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "青椒/彩椒",
      "amount": 2,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切丁上浆",
      "desc": "鸡胸肉切小方丁加生抽、料酒、淀粉抓匀腌制；彩椒切同等大小方块。"
    },
    {
      "title": "滑熟鸡丁",
      "desc": "热油滑炒鸡丁至变白八成熟盛出。"
    },
    {
      "title": "合炒彩椒出锅",
      "desc": "底油爆香蒜片，下彩椒丁大火快炒30秒，回入鸡丁翻匀撒少许黑胡椒盐出锅！",
      "timer": 45
    }
  ]
},
{
  "id": "rec_053",
  "name": "鲜虾魔芋丝减脂拌菜",
  "category": "快手减脂",
  "cover": "🦐",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 1,
  "tags": [
    "负卡饱腹",
    "Q弹爽滑",
    "酸辣爽口",
    "无油低卡"
  ],
  "description": "魔芋丝Q弹滑爽如粉丝但几乎零热量，搭配爽脆大虾与黄瓜，酸辣过瘾。",
  "calories": "~130 kcal",
  "servings": 1,
  "ingredients": [
    {
      "name": "鲜虾/虾仁",
      "amount": 8,
      "unit": "只",
      "category": "水产海鲜"
    },
    {
      "name": "黄瓜",
      "amount": 1,
      "unit": "根",
      "category": "时令蔬菜"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "香醋/陈醋",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "焯熟虾仁",
      "desc": "虾仁开水焯烫变红熟透捞出过凉水；魔芋丝开水煮1分钟捞出过冷水沥干。"
    },
    {
      "title": "调酸辣汁抓拌",
      "desc": "大碗中放大蒜末、小米辣、生抽、香醋和少许代糖，放入魔芋丝、黄瓜丝和大虾充分抓匀享用！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_054",
  "name": "凉拌菠菜金针菇",
  "category": "快手减脂",
  "cover": "🥬",
  "time": "8分钟",
  "timeMinutes": 8,
  "difficulty": 1,
  "tags": [
    "刮油清肠",
    "爽口清香",
    "凉拌快手",
    "素食主义"
  ],
  "description": "菠菜柔滑嫩脆，金针菇滑爽有嚼劲，蒜香香油一浇，清香爽口。",
  "calories": "~90 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "菠菜",
      "amount": 250,
      "unit": "克",
      "category": "时令蔬菜"
    },
    {
      "name": "金针菇",
      "amount": 150,
      "unit": "克",
      "category": "菌菇豆品"
    },
    {
      "name": "葱姜蒜",
      "amount": 15,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "香醋/陈醋",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "芝麻香油",
      "amount": 1,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "焯水去草酸",
      "desc": "水沸加少许油，先下菠菜焯水30秒捞出挤去多余水分切段；再下金针菇焯烫1分钟捞出过凉水。"
    },
    {
      "title": "调味拌匀",
      "desc": "放入大碗中，加蒜碎、生抽、香醋、香油和少许盐搅拌均匀即成！",
      "timer": 45
    }
  ]
},
{
  "id": "rec_055",
  "name": "经典香葱蛋炒饭",
  "category": "懒人主食",
  "cover": "🍚",
  "time": "8分钟",
  "timeMinutes": 8,
  "difficulty": 1,
  "tags": [
    "国民炒饭",
    "葱香扑鼻",
    "金黄诱人",
    "深夜食堂"
  ],
  "description": "纯粹的鸡蛋与小葱，米饭粒粒分明，最简单却最抚凡人心的极致美味。",
  "calories": "~420 kcal",
  "servings": 1,
  "ingredients": [
    {
      "name": "米饭/大米",
      "amount": 1,
      "unit": "大碗隔夜饭",
      "category": "粮油主食与干货"
    },
    {
      "name": "鸡蛋",
      "amount": 2,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "小葱",
      "amount": 3,
      "unit": "根",
      "category": "调味常备"
    },
    {
      "name": "食用油",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "盐",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "炒香葱白嫩蛋花",
      "desc": "热油先下葱白爆香，倒入打散的蛋液快速划成松软碎蛋花。"
    },
    {
      "title": "猛火炒散米饭",
      "desc": "倒入米饭，用锅铲背面迅速推压拍散，大火颠翻让米粒受热跳跃，撒盐和足量葱绿翻匀出锅！",
      "timer": 120
    }
  ]
},
{
  "id": "rec_056",
  "name": "正宗武汉热干面",
  "category": "懒人主食",
  "cover": "🍜",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 1,
  "tags": [
    "荆楚名吃",
    "浓醇麻酱",
    "筋道爽口",
    "过早第一面"
  ],
  "description": "粗碱水面劲道弹牙，浓郁香醇的芝麻酱拌开后紧紧挂在每一根面条上，醇香扑鼻。",
  "calories": "~520 kcal",
  "servings": 1,
  "ingredients": [
    {
      "name": "面条",
      "amount": 150,
      "unit": "克碱面",
      "category": "粮油主食与干货"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "老抽",
      "amount": 0.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "香醋/陈醋",
      "amount": 0.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "芝麻香油",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "小葱",
      "amount": 2,
      "unit": "根",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "调制灵魂麻酱",
      "desc": "芝麻酱用芝麻香油慢慢化开调匀成丝滑流动状，加少许生抽调色。"
    },
    {
      "title": "烫熟面条",
      "desc": "水沸下碱面煮至八成熟（约2分钟无硬芯）捞出控干水分装入大碗中。"
    },
    {
      "title": "浇酱快速拌开",
      "desc": "倒入生抽、老抽、香醋、少许辣油，淋上两厚勺浓香麻酱，撒小葱与酸豆角，趁热疯狂拌匀开吃！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_057",
  "name": "意式经典番茄肉酱面",
  "category": "懒人主食",
  "cover": "🍝",
  "time": "20分钟",
  "timeMinutes": 20,
  "difficulty": 2,
  "tags": [
    "西餐经典",
    "浓郁多汁",
    "老少皆宜",
    "家庭意面"
  ],
  "description": "酸甜浓醇的番茄牛肉酱与劲道意面完美裹挟，每一口都奶香浓郁麦香十足。",
  "calories": "~490 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "意面",
      "amount": 160,
      "unit": "克",
      "category": "粮油主食与干货"
    },
    {
      "name": "肉沫/肉馅",
      "amount": 150,
      "unit": "克牛肉沫",
      "category": "肉禽蛋品"
    },
    {
      "name": "西红柿",
      "amount": 2,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "洋葱",
      "amount": 0.5,
      "unit": "个",
      "category": "时令蔬菜"
    },
    {
      "name": "番茄酱",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "煮意面",
      "desc": "沸水加一勺盐，下意面煮8-9分钟至断生有嚼劲，捞出拌少许橄榄油防粘。"
    },
    {
      "title": "熬番茄肉酱",
      "desc": "炒香洋葱碎与蒜末，下肉沫炒散发白，倒入去皮番茄丁和番茄酱，小火慢熬至浓稠红酱。"
    },
    {
      "title": "合面翻拌",
      "desc": "倒入煮好的意面大火翻拌，让每根面条均匀裹满浓厚肉酱，装盘撒黑胡椒即成！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_058",
  "name": "经典红烧牛肉面",
  "category": "懒人主食",
  "cover": "🍜",
  "time": "50分钟",
  "timeMinutes": 50,
  "difficulty": 3,
  "tags": [
    "大块牛肉",
    "浓油高汤",
    "软烂化渣",
    "面馆招牌"
  ],
  "description": "大块牛腩炖得软烂化渣，浓醇高汤浇在爽滑面条上，香气直冲天灵盖。",
  "calories": "~560 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "牛腩",
      "amount": 400,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "面条",
      "amount": 200,
      "unit": "克",
      "category": "粮油主食与干货"
    },
    {
      "name": "生菜",
      "amount": 2,
      "unit": "棵",
      "category": "时令蔬菜"
    },
    {
      "name": "郫县豆瓣酱",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "葱姜蒜",
      "amount": 25,
      "unit": "克",
      "category": "调味常备"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "老抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "牛腩焯水切块",
      "desc": "牛腩切3厘米大块，冷水焯水撇净血沫捞出温水冲洗干净。"
    },
    {
      "title": "炒香红油慢炖",
      "desc": "热油炒香豆瓣酱、葱姜蒜与香料，下牛腩块翻炒上色，加热水小火慢炖40分钟至牛肉软烂入味。"
    },
    {
      "title": "煮面浇牛肉汤",
      "desc": "另起锅水沸煮熟面条和生菜装大碗，舀上热腾腾的牛肉高汤，铺上大块软烂牛腩开吃！",
      "timer": 180
    }
  ]
},
{
  "id": "rec_059",
  "name": "金黄脆底鲜肉生煎锅贴",
  "category": "懒人主食",
  "cover": "🥟",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "焦脆金黄",
    "爆汁鲜香",
    "快手面点",
    "早餐爆款"
  ],
  "description": "锅底一圈焦香酥脆的雪花金黄脆皮，咬开肉馅鲜嫩爆汁，葱香芝麻香四溢。",
  "calories": "~450 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "饺子皮/水饺",
      "amount": 15,
      "unit": "个(速冻或手包)",
      "category": "粮油主食与干货"
    },
    {
      "name": "淀粉",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "小葱",
      "amount": 2,
      "unit": "根",
      "category": "调味常备"
    },
    {
      "name": "食用油",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "排锅煎底",
      "desc": "平底锅刷油烧热，将饺子整齐码入锅中，中火慢煎2分钟至底部定型微黄。"
    },
    {
      "title": "倒入面粉水焖熟",
      "desc": "调一小碗面粉水（1勺面粉加10勺水），倒入锅中没过饺子底面约小半指深，盖盖大火焖煮6分钟收水。"
    },
    {
      "title": "撒芝麻葱花出锅",
      "desc": "开盖水汽收干形成一层金黄酥脆的脆皮，撒上黑芝麻与葱花，倒扣盘中趁热嘎嘣脆享用！",
      "timer": 360
    }
  ]
},
{
  "id": "rec_060",
  "name": "软糯上海排骨年糕",
  "category": "懒人主食",
  "cover": "🥘",
  "time": "20分钟",
  "timeMinutes": 20,
  "difficulty": 2,
  "tags": [
    "老上海风味",
    "甜面酱香",
    "年糕软糯",
    "排骨焦香"
  ],
  "description": "排骨外焦里嫩肉香四溢，年糕条吸饱甜面酱浓汁软糯拉丝，地道沪上风味。",
  "calories": "~480 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "排骨",
      "amount": 300,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "年糕",
      "amount": 150,
      "unit": "克",
      "category": "粮油主食与干货"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "老抽",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "排骨焯煎",
      "desc": "排骨焯水后沥干，下平底锅两面煎至焦黄香脆。"
    },
    {
      "title": "下年糕同焖",
      "desc": "倒入调好的生抽、老抽、糖与一碗水，盖盖小火焖煮10分钟让排骨软烂入味，倒入年糕条同煨3分钟至年糕软糯拉丝。"
    },
    {
      "title": "大火收浓汁",
      "desc": "大火收干汤汁至酱汁红亮紧裹在排骨和年糕上出锅！",
      "timer": 90
    }
  ]
},
{
  "id": "rec_061",
  "name": "葡式经典香浓蛋挞",
  "category": "烘焙甜品",
  "cover": "🥧",
  "time": "20分钟",
  "timeMinutes": 20,
  "difficulty": 1,
  "tags": [
    "空气炸锅/烤箱",
    "酥脆层叠",
    "奶香四溢",
    "经典西点"
  ],
  "description": "起酥外皮层层酥脆，内馅如布丁般滑嫩，带有微微焦糖斑，奶香浓郁诱人。",
  "calories": "~180 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鸡蛋",
      "amount": 2,
      "unit": "个(取蛋黄)",
      "category": "肉禽蛋品"
    },
    {
      "name": "牛奶",
      "amount": 120,
      "unit": "毫升",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 1.5,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "调蛋挞液",
      "desc": "蛋黄加温牛奶、白糖搅拌至糖完全融化，过细筛两次滤去杂质气泡（更细腻无气孔）。"
    },
    {
      "title": "倒液入挞皮",
      "desc": "将蛋挞液缓缓倒入现成挞皮中，约八分满（防烤制膨胀溢出）。"
    },
    {
      "title": "空气炸锅烤制",
      "desc": "空气炸锅180度预热，放入蛋挞烤12-14分钟至表皮焦糖斑点凝固即可！",
      "timer": 720
    }
  ]
},
{
  "id": "rec_062",
  "name": "港式芒果椰汁西米露",
  "category": "烘焙甜品",
  "cover": "🥭",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 1,
  "tags": [
    "港风经典",
    "清凉解暑",
    "果香浓郁",
    "Q弹爽滑"
  ],
  "description": "晶莹剔透的西米Q弹爽滑，融入浓醇椰汁牛奶与清甜芒果大果肉，夏日神仙甜品。",
  "calories": "~190 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "牛奶",
      "amount": 200,
      "unit": "毫升",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "蜂蜜",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "煮透明西米",
      "desc": "水大开下小西米煮10分钟（中途搅拌防粘），关火盖盖焖10分钟至白芯完全消失透明，捞出过凉开水沥干。"
    },
    {
      "title": "椰奶调味装碗",
      "desc": "牛奶加少许椰汁和糖调匀，碗底铺煮好的Q弹西米，倒入椰奶，摆满芒果鲜果丁冷藏享用！",
      "timer": 60
    }
  ]
},
{
  "id": "rec_063",
  "name": "香甜拔丝红薯/地瓜",
  "category": "烘焙甜品",
  "cover": "🍠",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "金黄拉丝",
    "外酥里嫩",
    "宴席甜盘",
    "香甜童年"
  ],
  "description": "红薯外层裹着一层晶莹剔透的脆糖壳，一夹拉出长长的金色糖丝，酥脆香甜。",
  "calories": "~260 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "红薯/紫薯",
      "amount": 350,
      "unit": "克",
      "category": "粮油主食与干货"
    },
    {
      "name": "白糖",
      "amount": 3,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "食用油",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "切块炸熟",
      "desc": "红薯去皮切滚刀块，六成热油锅下红薯中小火炸4分钟至熟透外表金黄微硬捞出控油。"
    },
    {
      "title": "小火熬糖拉丝",
      "desc": "底油加白糖小火慢熬，直到白糖融化成浅黄色小泡变浅红琥珀色糖浆。"
    },
    {
      "title": "迅速裹匀出锅",
      "desc": "立刻关火倒入红薯块颠锅快速翻匀，装在抹油的盘中，趁热夹起丝长如金线！",
      "timer": 30
    }
  ]
},
{
  "id": "rec_064",
  "name": "云朵舒芙蕾松饼",
  "category": "烘焙甜品",
  "cover": "🥞",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "免烤箱",
    "入口即化",
    "空气感",
    "网红甜点"
  ],
  "description": "像云朵一样蓬松柔软，入口即化的轻盈口感，搭配蜂蜜与黄油，治愈心灵。",
  "calories": "~180 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鸡蛋",
      "amount": 2,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "牛奶",
      "amount": 25,
      "unit": "毫升",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 1,
      "unit": "勺(或低粉)",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "蜂蜜",
      "amount": 1,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "蛋黄糊调和",
      "desc": "蛋黄加牛奶与面粉划Z字拌匀无颗粒。"
    },
    {
      "title": "打发蛋白霜",
      "desc": "蛋白分两次加糖，用打蛋器打发至提起有直立坚挺小尖角的硬性发泡，分次与蛋黄糊轻柔翻拌均匀。"
    },
    {
      "title": "平底锅微火焖煎",
      "desc": "不粘锅微火刷油，高高舀入两层厚厚的松饼糊，锅边洒几滴清水盖盖焖煎3分钟，小心翻面再焖2分钟至松软弹跳出锅！",
      "timer": 300
    }
  ]
},
{
  "id": "rec_065",
  "name": "自制清凉椰汁红豆糕",
  "category": "烘焙甜品",
  "cover": "🍮",
  "time": "20分钟",
  "timeMinutes": 20,
  "difficulty": 1,
  "tags": [
    "免烤箱",
    "椰香浓郁",
    "层次分明",
    "软糯Q弹"
  ],
  "description": "下层是粒粒分明沙软的红豆，上层是雪白滑嫩的椰奶冻，冰凉爽口甜而不腻。",
  "calories": "~160 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "牛奶",
      "amount": 250,
      "unit": "毫升",
      "category": "调味常备"
    },
    {
      "name": "淀粉",
      "amount": 3,
      "unit": "勺",
      "category": "调味常备"
    },
    {
      "name": "白糖",
      "amount": 2,
      "unit": "勺",
      "category": "调味常备"
    }
  ],
  "steps": [
    {
      "title": "调和淀粉牛奶",
      "desc": "牛奶加白糖、淀粉充分搅拌溶解过筛至小奶锅中。"
    },
    {
      "title": "小火搅拌成糊",
      "desc": "开小火慢煮，用刮刀不断画圈搅拌至液体凝固变稠成顺滑厚浆糊状立即关火。"
    },
    {
      "title": "模具冷藏成型",
      "desc": "倒入铺有熟红豆的保鲜盒中抹平，放凉后冷藏2小时，脱模切成小方块撒椰蓉享用！",
      "timer": 180
    }
  ]
}
];

const PANTRY_ITEMS = [
  {
    category: "🥩 肉禽蛋品",
    items: [
      "鸡蛋", "鸡胸肉", "鸡翅", "鸡腿", "猪里脊", "五花肉", "排骨", "肥牛卷", 
      "腊肠", "牛肉", "牛腩", "羊肉", "肉沫/肉馅", "培根", "午餐肉", "火腿肠", 
      "鸭肉", "鸭蛋/皮蛋", "鹌鹑蛋", "鸡爪", "猪蹄"
    ]
  },
  {
    category: "🥬 时令蔬菜",
    items: [
      "西红柿", "青椒/彩椒", "黄瓜", "油麦菜", "冬瓜", "胡萝卜", "西兰花", 
      "土豆", "大白菜", "娃娃菜", "洋葱", "生菜", "菠菜", "茄子", "豆芽", 
      "芹菜", "莲藕", "南瓜", "莴笋", "韭菜", "苦瓜", "山药", "四季豆", 
      "包菜/卷心菜", "西葫芦", "丝瓜", "白萝卜", "玉米笋", "空心菜"
    ]
  },
  {
    category: "🍄 菌菇豆品",
    items: [
      "嫩豆腐", "老豆腐", "金针菇", "木耳", "香菇", "杏鲍菇", "平菇", 
      "白玉菇", "银耳", "千张/豆腐皮", "腐竹", "豆干", "油豆腐", "冻豆腐"
    ]
  },
  {
    category: "🦐 水产海鲜",
    items: [
      "鲜虾/虾仁", "鲈鱼", "龙利鱼/巴沙鱼", "蛤蜊/花甲", "鲫鱼", "鱿鱼", 
      "带鱼", "三文鱼", "草鱼", "生蚝", "扇贝", "蟹肉/螃蟹"
    ]
  },
  {
    category: "🍚 粮油主食与干货",
    items: [
      "面条", "米饭/大米", "米线", "粉丝", "年糕", "饺子皮/水饺", 
      "吐司/面包", "意面", "红薯/紫薯", "玉米", "燕麦"
    ]
  },
  {
    category: "🧄 调味常备",
    items: [
      "葱姜蒜", "小葱", "生抽", "老抽", "蚝油", "料酒", "白糖", "香醋/陈醋", 
      "番茄酱", "郫县豆瓣酱", "可乐", "牛奶", "淀粉", "食用油", "盐", 
      "白胡椒粉", "黑胡椒", "孜然", "花椒/花椒油", "芝麻香油", "辣椒油", "黄豆酱", "蜂蜜"
    ]
  }
];
