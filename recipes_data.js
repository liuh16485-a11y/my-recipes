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
,
  {
  "id": "rec_066",
  "name": "经典湖南辣椒炒肉",
  "category": "家常小炒",
  "cover": "🌶️",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 2,
  "tags": [
    "湘菜名菜",
    "下饭神菜",
    "香辣鲜香",
    "经典家常"
  ],
  "description": "湖南小炒的灵魂之作，选用螺丝椒与五花肉、前腿肉同炒，豆豉蒜香浓郁，酱汁包裹肉片，极度下饭！",
  "calories": "~380 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "五花肉",
      "amount": 150,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "猪瘦肉",
      "amount": 150,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "螺丝椒",
      "amount": 4,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "大蒜",
      "amount": 4,
      "unit": "瓣",
      "category": "常用调味"
    },
    {
      "name": "豆豉",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 0.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "盐",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "食材切配与腌制",
      "desc": "五花肉切薄片；瘦肉切薄片加半勺生抽、淀粉抓匀上浆；螺丝椒去蒂滚刀切斜段；大蒜拍碎备用。",
      "tip": "五花肉和瘦肉分开处理，五花肉煸油，瘦肉滑嫩。"
    },
    {
      "title": "干煸青椒擂出香气",
      "desc": "净锅不放油，下入切好的青椒段，加少许盐，用锅铲用力压擂煸炒至表皮出现微虎皮斑纹，盛出备用。",
      "tip": "干煸能去除青椒生涩味并激发出独特的焦香味。"
    },
    {
      "title": "煸炒五花肉出油脂",
      "desc": "锅热放少许油，先下五花肉片中小火慢煸，煸出油脂至边缘微卷微焦黄。",
      "tip": "逼出多余油脂吃起来香而不腻。"
    },
    {
      "title": "大火合炒调味出锅",
      "desc": "下入大蒜碎、豆豉爆香，倒入腌好的瘦肉片大火滑炒变色，烹入生抽、老抽、蚝油翻炒上色，最后倒入干煸好的青椒大火翻炒15秒即可装盘！",
      "timer": 15
    }
  ]
},
  {
  "id": "rec_067",
  "name": "农家一碗香",
  "category": "家常小炒",
  "cover": "🍳",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "湘西风味",
    "荷包蛋炒肉",
    "米饭杀手",
    "快手小炒"
  ],
  "description": "金黄焦香的溏心荷包蛋切块，与猪前腿肉、青红椒大火猛炒，蛋香混着肉香与辣香，每一口都超满足！",
  "calories": "~420 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鸡蛋",
      "amount": 3,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "前腿肉/五花肉",
      "amount": 200,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "青红线椒",
      "amount": 5,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "大蒜",
      "amount": 4,
      "unit": "瓣",
      "category": "常用调味"
    },
    {
      "name": "豆豉",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 0.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "煎金黄荷包蛋",
      "desc": "热锅多倒油，打入3个鸡蛋煎成两面金黄酥脆的荷包蛋，出锅用锅铲切成适口小块。",
      "tip": "荷包蛋煎得焦脆一点更能吸收肉汁与酱香。"
    },
    {
      "title": "煸炒肉片入味",
      "desc": "锅留底油，下入切好的肉片大火煸炒至出油断生，下入蒜片、豆豉爆出香味，加生抽、老抽翻炒上色。",
      "tip": "肉片切薄更易快速熟透入味。"
    },
    {
      "title": "青红椒合炒成菜",
      "desc": "下入切段的青红椒翻炒至断生，倒入切好的荷包蛋块，加入蚝油、少许白糖大火翻匀收汁即可出锅！",
      "timer": 30
    }
  ]
},
  {
  "id": "rec_068",
  "name": "爆炒小炒黄牛肉",
  "category": "家常小炒",
  "cover": "🥩",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 3,
  "tags": [
    "湘菜硬核",
    "嫩爽香辣",
    "秒杀饭馆",
    "大厨招牌"
  ],
  "description": "牛肉嫩滑弹牙，野山椒酸辣刺激，加入大把香菜段激发出独特香气，热气腾腾下饭下酒一绝。",
  "calories": "~310 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "牛里脊/黄牛肉",
      "amount": 250,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "香菜",
      "amount": 3,
      "unit": "棵",
      "category": "新鲜蔬菜"
    },
    {
      "name": "野山椒/小米辣",
      "amount": 6,
      "unit": "个",
      "category": "新鲜蔬菜"
    },
    {
      "name": "蒜末姜末",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 0.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "淀粉",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "食用油",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "逆纹切牛肉与上浆",
      "desc": "黄牛肉一定要横着纹理逆切成薄片；加入生抽、少许料酒、淀粉抓拌至发粘起胶，最后淋1勺食用油锁水腌制10分钟。",
      "tip": "顶刀逆纹切断牛肉纤维是滑嫩的关键秘诀。"
    },
    {
      "title": "高油温快速滑炒",
      "desc": "大火将锅烧至冒青烟，倒稍多食用油，倒入牛肉片快速划散，变色八成熟时（约15-20秒）迅速盛出。",
      "tip": "滑炒切忌时间过长，刚变色立即出锅才够嫩。"
    },
    {
      "title": "爆香料头合炒出锅",
      "desc": "锅留底油爆香蒜末、姜末和野山椒，倒入滑好的牛肉，加蚝油、老抽大火翻匀，关火倒入香菜段利用余温翻匀出锅！",
      "timer": 20
    }
  ]
},
  {
  "id": "rec_069",
  "name": "开胃擂椒皮蛋茄子",
  "category": "快手减脂",
  "cover": "🍆",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 1,
  "tags": [
    "湖南名小吃",
    "凉拌开胃",
    "擂茶钵风味",
    "夏日必做"
  ],
  "description": "烤软的青椒、蒸熟的软糯茄子与Q弹松花蛋放入擂钵中捣碎融合，蒜香浓郁，酸辣解腻，拌米饭能多吃两碗！",
  "calories": "~190 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "螺丝椒/青椒",
      "amount": 4,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "长茄子",
      "amount": 1,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "皮蛋",
      "amount": 2,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "大蒜",
      "amount": 5,
      "unit": "瓣",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "香醋",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "芝麻香油",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "盐",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "蒸熟茄子与烤青椒",
      "desc": "茄子切大段上汽蒸10分钟至筷子能轻松穿透；青椒去蒂在无油热平底锅中压扁小火干煸至两面出现大片虎皮焦点撕去表皮薄膜。",
      "tip": "撕去焦黑外皮口感更细腻爽滑。"
    },
    {
      "title": "准备调料汁",
      "desc": "大蒜压成蒜泥，加入生抽、香醋、香油、少许白糖和盐搅拌均匀成酸辣蒜泥汁。"
    },
    {
      "title": "装钵擂碎融合",
      "desc": "将蒸熟茄子撕成长条，放入碗或擂钵中，放入虎皮青椒、剥壳切半的皮蛋，倒入调料汁，用擀面杖用力捣擂均匀即可上桌！",
      "timer": 60
    }
  ]
},
  {
  "id": "rec_070",
  "name": "经典鱼香肉丝",
  "category": "家常小炒",
  "cover": "🥢",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "川菜传统",
    "经典三合油",
    "酸甜微辣",
    "宴客名菜"
  ],
  "description": "没有鱼却有迷人鱼香味的川菜传奇，滑嫩肉丝配上脆嫩木耳与笋丝，红亮油润，酸甜微辣层次分明。",
  "calories": "~340 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "猪里脊",
      "amount": 200,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "黑木耳",
      "amount": 30,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "胡萝卜/笋丝",
      "amount": 50,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "青椒",
      "amount": 1,
      "unit": "个",
      "category": "新鲜蔬菜"
    },
    {
      "name": "葱姜蒜末",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "剁椒/红泡椒",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "香醋/陈醋",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "白糖",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "淀粉",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "切丝与调制鱼香汁",
      "desc": "猪里脊切火柴棒粗细肉丝，加生抽、料酒、淀粉抓匀上浆；碗中调入生抽2勺、香醋2勺、白糖2勺、清水2勺、淀粉1勺调匀成万能鱼香汁。",
      "tip": "鱼香汁的精髓是糖醋比1:1，酸甜和谐。"
    },
    {
      "title": "滑炒肉丝",
      "desc": "油温四成热下肉丝快速划散至变色盛出；配菜（木耳、胡萝卜、青椒）切丝焯水控干。",
      "tip": "肉丝滑油不要太久，保持嫩滑。"
    },
    {
      "title": "爆炒出红油调合",
      "desc": "锅留底油下葱姜蒜末和泡椒/豆瓣酱炒出红油香气，倒入配菜和肉丝翻炒均匀，倒入调好的鱼香汁大火翻炒至汤汁浓稠红亮裹满肉丝出锅！",
      "timer": 30
    }
  ]
},
  {
  "id": "rec_071",
  "name": "正宗麻婆豆腐",
  "category": "家常小炒",
  "cover": "🍲",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "川菜之魂",
    "麻辣鲜香",
    "下饭神菜",
    "豆腐经典"
  ],
  "description": "具备麻、辣、烫、嫩、酥、鲜全套川味精髓，牛肉碎酥香，嫩豆腐吸饱浓郁红亮汤汁，撒上现磨花椒粉香气扑鼻。",
  "calories": "~310 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "嫩豆腐",
      "amount": 400,
      "unit": "克",
      "category": "豆制品"
    },
    {
      "name": "牛肉末/猪肉末",
      "amount": 80,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "郫县豆瓣酱",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "花椒粉",
      "amount": 1,
      "unit": "茶匙",
      "category": "常用调味"
    },
    {
      "name": "蒜末姜末",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "水淀粉",
      "amount": 3,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "青蒜苗",
      "amount": 2,
      "unit": "根",
      "category": "新鲜蔬菜"
    }
  ],
  "steps": [
    {
      "title": "豆腐切块焯淡盐水",
      "desc": "嫩豆腐切2厘米小方块，放入加了少许盐的沸水中焯烫1分钟捞出沥水（去豆腥且不易碎）。",
      "tip": "淡盐水焯豆腐能让豆腐更紧实滑嫩不散碎。"
    },
    {
      "title": "煸炒肉末与红油豆瓣",
      "desc": "锅热放油下肉末煸炒至酥脆金黄，下入郫县豆瓣酱、蒜姜末小火慢炒出红油。",
      "tip": "肉末煸得酥香是正宗麻婆豆腐的点睛之笔。"
    },
    {
      "title": "慢煨入味与三次勾芡",
      "desc": "加入大半碗清水烧开，下入豆腐块和生抽中小火煨煮3分钟；分三次淋入水淀粉收汁至汤汁红亮粘稠，撒入青蒜段，出锅装盘撒上满满花椒粉！",
      "timer": 180
    }
  ]
},
  {
  "id": "rec_072",
  "name": "宫保鸡丁",
  "category": "家常小炒",
  "cover": "🍗",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "传统名菜",
    "荔枝糊辣味",
    "脆嫩花生",
    "国宴经典"
  ],
  "description": "鸡丁嫩滑饱满，大葱段甘甜，油炸花生米酥脆，特制宫保荔枝汁酸甜适口带微辣，闻之垂涎三尺。",
  "calories": "~350 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "鸡胸肉/鸡腿肉",
      "amount": 250,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "熟花生米",
      "amount": 50,
      "unit": "克",
      "category": "干货粮油"
    },
    {
      "name": "大葱白",
      "amount": 2,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "干红辣椒",
      "amount": 8,
      "unit": "个",
      "category": "常用调味"
    },
    {
      "name": "花椒",
      "amount": 1,
      "unit": "茶匙",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "香醋",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "白糖",
      "amount": 1.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "水淀粉",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "鸡肉切丁上浆",
      "desc": "鸡胸肉拍松切1.5厘米方丁，加少许生抽、料酒、淀粉抓拌上浆腌制10分钟；大葱白切小圆段。",
      "tip": "肉丁切匀，受热更一致。"
    },
    {
      "title": "调制宫保荔枝碗汁",
      "desc": "碗中放生抽2勺、香醋2勺、白糖1.5勺、水淀粉1勺、清水1勺调匀备用。"
    },
    {
      "title": "糊辣炸香滑炒入味",
      "desc": "热锅凉油下干辣椒段和花椒小火炸出糊香味（变棕红前），下入鸡丁大火快速滑炒至发白散开，倒入葱段和碗汁大火翻炒收汁，关火下入酥脆花生米颠匀出锅！",
      "timer": 45
    }
  ]
},
  {
  "id": "rec_073",
  "name": "蒜苔炒肉丝",
  "category": "家常小炒",
  "cover": "🌱",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 1,
  "tags": [
    "经典家常",
    "爽脆鲜甜",
    "快手小炒",
    "营养丰富"
  ],
  "description": "春夏季节餐桌上最受欢迎的快手小炒，蒜苔清脆香甜，肉丝嫩滑多汁，简单咸香就无比下饭。",
  "calories": "~290 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "蒜苔",
      "amount": 250,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "猪里脊/瘦肉",
      "amount": 150,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 0.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "淀粉",
      "amount": 1,
      "unit": "茶匙",
      "category": "常用调味"
    },
    {
      "name": "食用油",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "食材切配与腌制",
      "desc": "蒜苔洗净掐去尾部切小段；肉丝加少许生抽、淀粉、食用油抓匀腌制5分钟。",
      "tip": "蒜苔切小段更容易快炒入味。"
    },
    {
      "title": "滑炒肉丝",
      "desc": "热锅倒油，先下肉丝快速翻炒至变色盛出。"
    },
    {
      "title": "炒蒜苔与合炒调味",
      "desc": "锅中倒少许油下蒜苔翻炒1分钟，沿锅边淋入2勺开水加盖焖30秒让蒜苔变翠绿软甜，倒入肉丝加生抽、老抽大火翻匀收汁即可！",
      "timer": 30
    }
  ]
},
  {
  "id": "rec_074",
  "name": "风味豆角茄子煲",
  "category": "家常小炒",
  "cover": "🍆",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 1,
  "tags": [
    "家常招牌",
    "软糯下饭",
    "双素组合",
    "浓油赤酱"
  ],
  "description": "茄子软烂吸汁，豆角焦香爽口，蒜香浓郁红亮，比肉还要受全家人欢迎的经典素菜之王！",
  "calories": "~250 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "长茄子",
      "amount": 1,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "长豆角/四季豆",
      "amount": 200,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "大蒜",
      "amount": 5,
      "unit": "瓣",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 0.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "白糖",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "茄子腌制防吸油",
      "desc": "茄子切条撒半勺盐腌制8分钟，挤出多余黑水撒上一层干淀粉拌匀；豆角切长段沥干水。",
      "tip": "盐杀水加拍淀粉，茄子炒出来不吸油不发黑。"
    },
    {
      "title": "煎炒豆角与茄子",
      "desc": "锅中放略多的油，先下豆角中小火煎炒至表皮起虎皮软熟捞出，再下茄子煎至软糯焦黄盛出。",
      "tip": "豆角一定要彻底熟透才安全美味。"
    },
    {
      "title": "爆香蒜末调味合炒",
      "desc": "留底油爆香蒜末，倒入豆角和茄子，加生抽、老抽、蚝油、白糖大火翻炒1分钟入味即可出锅！",
      "timer": 60
    }
  ]
},
  {
  "id": "rec_075",
  "name": "干豆角红烧肉",
  "category": "硬菜大餐",
  "cover": "🥩",
  "time": "50分钟",
  "timeMinutes": 50,
  "difficulty": 3,
  "tags": [
    "硬菜压轴",
    "陈香吸油",
    "肥而不腻",
    "秋冬暖胃"
  ],
  "description": "阳光晒制的农家干豆角吸饱了红烧五花肉溢出的浓醇油脂与肉汁，五花肉肥而不腻入口即化，干豆角比肉还香！",
  "calories": "~560 kcal",
  "servings": 3,
  "ingredients": [
    {
      "name": "优质五花肉",
      "amount": 500,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "农家干豆角",
      "amount": 80,
      "unit": "克",
      "category": "干货粮油"
    },
    {
      "name": "冰糖",
      "amount": 20,
      "unit": "克",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "八角桂皮香叶",
      "amount": 1,
      "unit": "组",
      "category": "常用调味"
    },
    {
      "name": "料酒",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "干豆角泡发与五花肉切块",
      "desc": "干豆角提前温水浸泡1小时洗净切段；五花肉切3厘米见方大块冷水焯水捞出沥干。",
      "tip": "干豆角泡发后剪成寸段更易入味。"
    },
    {
      "title": "炒糖色与红亮上色",
      "desc": "热锅下少许油和冰糖小火炒出琥珀色枣红泡，下入五花肉块翻炒挂上亮丽糖色，下八角香叶葱姜炒出香气。",
      "tip": "小火炒糖色能让红烧肉色泽红润诱人。"
    },
    {
      "title": "慢炖与加入干豆角收汁",
      "desc": "倒入没过肉块的热水和料酒、生抽、老抽，大火烧开转小火慢炖30分钟；加入泡好的干豆角继续慢炖15分钟，最后大火收汁至汤汁浓稠挂勺！",
      "timer": 1800
    }
  ]
},
  {
  "id": "rec_076",
  "name": "金针菇酸汤肥牛",
  "category": "硬菜大餐",
  "cover": "🍲",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "金汤酸辣",
    "餐厅必点",
    "开胃爽口",
    "快手大菜"
  ],
  "description": "金黄诱人的浓郁酸汤，金针菇爽滑吸汁，肥牛卷肉香嫩滑，一勺热油泼下香气四溢，连喝三碗汤都不够！",
  "calories": "~410 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "肥牛卷",
      "amount": 250,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "金针菇",
      "amount": 150,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "黄灯笼辣椒酱",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "蒜末姜末",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "白醋/泡椒水",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "白胡椒粉",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "常用调味"
    },
    {
      "name": "小葱小米椒",
      "amount": 2,
      "unit": "根",
      "category": "新鲜蔬菜"
    }
  ],
  "steps": [
    {
      "title": "焯熟金针菇与肥牛",
      "desc": "沸水中下金针菇焯烫1分钟捞出铺在碗底；肥牛卷下入沸水焯烫至变色（约15秒）立即捞出控水。",
      "tip": "肥牛焯水可去血沫，吃起来清爽无腥味。"
    },
    {
      "title": "熬制金汤底",
      "desc": "热锅倒油，爆香蒜末姜末和黄灯笼辣椒酱炒出金黄红亮油花，倒入2大碗热水大火煮沸，加白醋、盐、胡椒粉调出经典酸辣滋味，过滤掉酱渣使汤色清亮。",
      "tip": "黄灯笼辣椒酱是金汤金黄微辣的核心。"
    },
    {
      "title": "装碗泼热油出香",
      "desc": "将肥牛放入金汤中略微煨煮10秒，连汤带肉倒在金针菇上，顶部撒上蒜末、葱花、小米椒圈，淋上一勺滚烫热油激发出浓烈香气！",
      "timer": 15
    }
  ]
},
  {
  "id": "rec_077",
  "name": "秘制五香酱牛肉",
  "category": "硬菜大餐",
  "cover": "🥩",
  "time": "90分钟",
  "timeMinutes": 90,
  "difficulty": 3,
  "tags": [
    "熟食卤味",
    "宴席冷盘",
    "紧实弹牙",
    "高蛋白减脂"
  ],
  "description": "选用筋道牛腱子肉，秘制老卤浸润慢炖，放凉切片纹理如大理石般清晰，入口酱香浓郁，下酒看球绝配！",
  "calories": "~220 kcal",
  "servings": 4,
  "ingredients": [
    {
      "name": "牛腱子肉",
      "amount": 800,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "生抽",
      "amount": 4,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "黄豆酱",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "冰糖",
      "amount": 20,
      "unit": "克",
      "category": "常用调味"
    },
    {
      "name": "大葱生姜",
      "amount": 1,
      "unit": "份",
      "category": "常用调味"
    },
    {
      "name": "八角花椒桂皮香叶",
      "amount": 1,
      "unit": "份",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "腱子肉泡血水与焯水",
      "desc": "牛腱子冷水浸泡2小时析出血水洗净，冷水下锅加姜片料酒大火煮沸5分钟撇净浮沫捞出。",
      "tip": "泡透血水肉质更清香无腥味。"
    },
    {
      "title": "调卤汁慢炖",
      "desc": "锅中加入足量清水，放入焯好的牛肉、黄豆酱、生抽、老抽、冰糖和香料包，大火烧开转微火慢炖60-70分钟至筷子能勉强扎透。",
      "timer": 3600
    },
    {
      "title": "原汤浸泡冷藏切片",
      "desc": "关火后不要捞出，在卤汤中浸泡4小时以上甚至冷藏过夜充分入味，取出逆纹切薄片配蒜醋汁享用！",
      "tip": "冷藏后再切肉质紧实不散片。"
    }
  ]
},
  {
  "id": "rec_078",
  "name": "醇香经典啤酒鸭",
  "category": "硬菜大餐",
  "cover": "🦆",
  "time": "45分钟",
  "timeMinutes": 45,
  "difficulty": 2,
  "tags": [
    "大肉硬菜",
    "麦芽醇香",
    "酥烂脱骨",
    "秋冬滋补"
  ],
  "description": "一整罐啤酒慢煨炖煮，麦芽香气彻底融入鸭肉纤维中，鸭皮微焦微弹，肉质酥软脱骨，酱汁拌饭鲜香无比。",
  "calories": "~460 kcal",
  "servings": 3,
  "ingredients": [
    {
      "name": "半只鸭/鸭腿",
      "amount": 600,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "啤酒",
      "amount": 1,
      "unit": "听/500ml",
      "category": "常用调味"
    },
    {
      "name": "青红椒",
      "amount": 2,
      "unit": "个",
      "category": "新鲜蔬菜"
    },
    {
      "name": "大葱生姜大蒜",
      "amount": 1,
      "unit": "份",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "八角香叶干辣椒",
      "amount": 1,
      "unit": "组",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "鸭肉剁块焯水",
      "desc": "鸭肉斩成小块，冷水下锅加料酒、葱姜煮沸撇去浮沫捞出冲洗干净控干水分。"
    },
    {
      "title": "干煸鸭块出油脂",
      "desc": "热锅不放油或少许油，下入鸭块中火慢煸出鸭皮自带的油脂，炒至表面焦黄紧实，下入葱姜蒜、八角干辣椒煸炒出香味。",
      "tip": "充分煸出鸭油能彻底除腥并让鸭肉更加香醇。"
    },
    {
      "title": "倒入整罐啤酒慢炖",
      "desc": "倒入整听啤酒没过鸭肉，加生抽、老抽、少许冰糖，大火煮沸后盖盖转小火炖煮30分钟，开盖放入青红椒块大火收汁翻炒均匀出锅！",
      "timer": 1800
    }
  ]
},
  {
  "id": "rec_079",
  "name": "风味葱爆孜然羊肉",
  "category": "家常小炒",
  "cover": "🥩",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 2,
  "tags": [
    "烧烤风味",
    "大葱爆炒",
    "滋补暖胃",
    "快手硬菜"
  ],
  "description": "仿佛把夜市烧烤摊搬回厨房，大葱甘甜清爽，羊肉滑嫩香浓，粗粒孜然与熟白芝麻带来狂野复合香气。",
  "calories": "~360 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "羊肉卷/羊腿肉片",
      "amount": 300,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "大葱",
      "amount": 2,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "孜然粒/孜然粉",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "白芝麻",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "辣椒粉",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "食用油",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "食材切配与料汁准备",
      "desc": "羊肉片提前解冻吸干水分；大葱斜切滚刀粗马蹄段；碗中混合孜然粒、辣椒粉、白芝麻。",
      "tip": "用粗颗粒孜然在嘴里咬碎时香气最为浓烈。"
    },
    {
      "title": "大火滑炒羊肉散水气",
      "desc": "热锅放油，下入羊肉片大火翻炒至断生发白出水气，多余水气倒出或炒干盛出备用。"
    },
    {
      "title": "下大葱爆炒与撒料出锅",
      "desc": "锅留底油爆香大葱段炒出甜香味，倒入羊肉，淋入生抽快速翻炒，最后撒入满满的孜然辣椒芝麻料大火翻炒10秒装盘！",
      "timer": 15
    }
  ]
},
  {
  "id": "rec_080",
  "name": "黄金避风塘炒大虾",
  "category": "硬菜大餐",
  "cover": "🦐",
  "time": "15分钟",
  "timeMinutes": 15,
  "difficulty": 2,
  "tags": [
    "粤菜经典",
    "蒜香酥脆",
    "金黄诱人",
    "宴客排面"
  ],
  "description": "大虾开背炸至酥脆，配上炒至金黄酥香的面包糠与蒜蓉碎，每一口连虾壳都能嚼碎咽下，香脆无可挑剔。",
  "calories": "~320 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "大明虾/鲜虾",
      "amount": 10,
      "unit": "只",
      "category": "水产海鲜"
    },
    {
      "name": "面包糠",
      "amount": 50,
      "unit": "克",
      "category": "干货粮油"
    },
    {
      "name": "大蒜",
      "amount": 1,
      "unit": "头",
      "category": "常用调味"
    },
    {
      "name": "青红椒碎",
      "amount": 2,
      "unit": "勺",
      "category": "新鲜蔬菜"
    },
    {
      "name": "料酒生抽",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "胡椒粉淀粉",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "大虾开背腌制拍粉",
      "desc": "大虾剪去虾须挑去虾线，背部深划一刀加料酒、胡椒粉腌制5分钟，均匀裹上一层薄薄生粉。",
      "tip": "开背深一点炸出来形如蝴蝶且更加酥脆。"
    },
    {
      "title": "炸至金黄酥脆",
      "desc": "六成油温下大虾煎炸约2分钟至外壳金黄酥脆卷曲捞出沥油。"
    },
    {
      "title": "炒香蒜蓉面包糠合拌",
      "desc": "锅留少许油下大量蒜末小火炒至微黄，加入面包糠慢炒至金黄松脆，倒入炸好的大虾和青红椒碎翻炒均匀出锅！",
      "timer": 30
    }
  ]
},
  {
  "id": "rec_081",
  "name": "椒盐香酥基围虾",
  "category": "家常小炒",
  "cover": "🦐",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 1,
  "tags": [
    "下酒必选",
    "外酥里嫩",
    "咸香入味",
    "秒空光盘"
  ],
  "description": "外壳焦香酥脆，虾肉鲜甜紧致，裹上一层椒盐与葱姜碎，连壳带肉一口一个根本停不下来。",
  "calories": "~240 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "新鲜基围虾",
      "amount": 300,
      "unit": "克",
      "category": "水产海鲜"
    },
    {
      "name": "优质椒盐粉",
      "amount": 1.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "青红椒碎小葱",
      "amount": 2,
      "unit": "勺",
      "category": "新鲜蔬菜"
    },
    {
      "name": "蒜末姜末",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "淀粉",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "鲜虾处理与拍粉",
      "desc": "鲜虾剪须去虾线，用厨房纸吸干表面水分，薄薄拍上一层干淀粉。",
      "tip": "水吸干净炸的时候不爆油且更酥脆。"
    },
    {
      "title": "半煎半炸至酥脆",
      "desc": "平底锅倒稍多的油，将鲜虾两面煎炸至通体红亮、外皮干爽酥脆捞出控油。"
    },
    {
      "title": "椒盐调味合炒",
      "desc": "锅留底油爆香蒜末、青红椒碎，倒入炸虾，均匀撒入1.5勺椒盐粉大火颠锅翻炒15秒即可！",
      "timer": 15
    }
  ]
},
  {
  "id": "rec_082",
  "name": "本帮传统腌笃鲜",
  "category": "营养靓汤",
  "cover": "🍲",
  "time": "60分钟",
  "timeMinutes": 60,
  "difficulty": 2,
  "tags": [
    "江南春味",
    "汤白汁浓",
    "咸鲜合一",
    "鲜掉眉毛"
  ],
  "description": "春笋清脆微甜，咸肉陈香醇厚，鲜五花肉肉质酥软，百叶结吸满奶白浓汤，真正意义上的“鲜掉眉毛”。",
  "calories": "~380 kcal",
  "servings": 3,
  "ingredients": [
    {
      "name": "春笋/冬笋",
      "amount": 2,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "江南咸肉",
      "amount": 150,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "鲜五花肉/小排",
      "amount": 250,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "薄百叶结",
      "amount": 8,
      "unit": "个",
      "category": "豆制品"
    },
    {
      "name": "生姜料酒",
      "amount": 1,
      "unit": "份",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "食材切配与焯水",
      "desc": "春笋去壳切滚刀块焯水3分钟捞出去除涩味草酸；咸肉与鲜肉切块焯水洗净血沫。",
      "tip": "春笋焯水能彻底去除涩味口感爽脆清甜。"
    },
    {
      "title": "大火滚煮出白汤",
      "desc": "砂锅中加入足量温水、葱姜、料酒，放入咸肉和鲜肉大火烧开，保持大火沸腾滚煮15分钟使汤汁变奶白色。",
      "tip": "大火沸腾是熬出奶白靓汤的核心原理。"
    },
    {
      "title": "慢炖与加入百叶结",
      "desc": "转小火慢炖35分钟，加入春笋块和百叶结继续慢炖15分钟，咸肉自带盐分无需额外加盐即可出锅！",
      "timer": 3000
    }
  ]
},
  {
  "id": "rec_083",
  "name": "经典海派罗宋汤",
  "category": "营养靓汤",
  "cover": "🍅",
  "time": "40分钟",
  "timeMinutes": 40,
  "difficulty": 2,
  "tags": [
    "西餐中做",
    "酸甜浓醇",
    "老上海记忆",
    "开胃暖心"
  ],
  "description": "经过海派改良的西式经典浓汤，番茄与番茄酱翻炒出天然红亮，牛肉酥烂，卷心菜与土豆甜软浓郁，秋冬必备。",
  "calories": "~320 kcal",
  "servings": 3,
  "ingredients": [
    {
      "name": "牛腩肉",
      "amount": 300,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "成熟番茄",
      "amount": 3,
      "unit": "个",
      "category": "新鲜蔬菜"
    },
    {
      "name": "卷心菜/包菜",
      "amount": 150,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "土豆/胡萝卜",
      "amount": 1,
      "unit": "个",
      "category": "新鲜蔬菜"
    },
    {
      "name": "洋葱",
      "amount": 0.5,
      "unit": "个",
      "category": "新鲜蔬菜"
    },
    {
      "name": "番茄酱",
      "amount": 3,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "黄油/食用油",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "牛腩焯水先炖",
      "desc": "牛腩切小块焯水洗净，加足量水炖煮30分钟成清亮牛肉高汤备用。"
    },
    {
      "title": "炒制浓郁番茄红油底",
      "desc": "热锅化开黄油，下洋葱碎炒香，放入切块番茄和3勺番茄酱小火慢炒至番茄完全软烂出沙化成红汤。",
      "tip": "番茄酱炒过之后酸甜味更为醇厚浓郁。"
    },
    {
      "title": "加入蔬菜合煮至浓稠",
      "desc": "倒入牛肉及高汤，加入土豆块、胡萝卜块、卷心菜叶中火慢炖15分钟至土豆软糯粉绵，加盐和黑胡椒调味即可！",
      "timer": 900
    }
  ]
},
  {
  "id": "rec_084",
  "name": "泰式冬阴功海鲜汤",
  "category": "营养靓汤",
  "cover": "🍲",
  "time": "20分钟",
  "timeMinutes": 20,
  "difficulty": 2,
  "tags": [
    "异域风情",
    "酸辣鲜美",
    "椰香浓郁",
    "海鲜大合集"
  ],
  "description": "大虾熬出诱人红亮虾油，草菇爽滑鲜嫩，柠檬香茅与青柠汁酸爽解腻，椰浆柔滑中和，热带风味满满。",
  "calories": "~280 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "新鲜大虾",
      "amount": 8,
      "unit": "只",
      "category": "水产海鲜"
    },
    {
      "name": "草菇/白玉菇",
      "amount": 100,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "冬阴功底料",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "椰浆/牛奶",
      "amount": 50,
      "unit": "毫升",
      "category": "常用调味"
    },
    {
      "name": "柠檬/青柠",
      "amount": 1,
      "unit": "个",
      "category": "新鲜蔬菜"
    },
    {
      "name": "番茄",
      "amount": 1,
      "unit": "个",
      "category": "新鲜蔬菜"
    }
  ],
  "steps": [
    {
      "title": "剥虾炒出红润虾油",
      "desc": "虾头摘下洗净，虾身去壳留尾；热锅倒油下虾头慢压煸炒出满满红亮虾油，夹出虾头不用。",
      "tip": "虾头熬出的虾油是汤色红亮鲜香的秘诀。"
    },
    {
      "title": "煮汤底与放配料",
      "desc": "向虾油锅中倒入2大碗热水，加入冬阴功酱、切块番茄、草菇大火煮沸5分钟煮出鲜味。"
    },
    {
      "title": "下入虾仁椰浆出锅",
      "desc": "放入大虾煮至变红卷曲（约2分钟），倒入椰浆搅拌，关火淋入半个青柠挤出的新鲜汁液即可！",
      "timer": 120
    }
  ]
},
  {
  "id": "rec_085",
  "name": "清甜丝瓜炒鸡蛋",
  "category": "快手减脂",
  "cover": "🥒",
  "time": "8分钟",
  "timeMinutes": 8,
  "difficulty": 1,
  "tags": [
    "清爽解暑",
    "低卡饱腹",
    "翠绿嫩滑",
    "超快手菜"
  ],
  "description": "丝瓜翠绿鲜嫩、清甜多汁，鸡蛋蓬松金黄，汤汁鲜美自然，连一滴多余调料都不用放就极其鲜美。",
  "calories": "~180 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "丝瓜",
      "amount": 1,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "鸡蛋",
      "amount": 2,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "大蒜",
      "amount": 2,
      "unit": "瓣",
      "category": "常用调味"
    },
    {
      "name": "盐",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "常用调味"
    },
    {
      "name": "食用油",
      "amount": 1.5,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "丝瓜去皮切滚刀块",
      "desc": "丝瓜刮去外皮切滚刀块，用少许淡盐水泡着防止氧化发黑；鸡蛋打散加少许盐。"
    },
    {
      "title": "嫩炒鸡蛋盛出",
      "desc": "油热倒入蛋液，筷子快速划散炒至金黄凝固立刻盛出备用。"
    },
    {
      "title": "快炒丝瓜出清甜汁",
      "desc": "锅中倒油爆香蒜末，倒入丝瓜大火快速翻炒1分钟，沿锅边淋2勺清水加盖焖1分钟至丝瓜软透出汁，倒入鸡蛋翻匀加盐出锅！",
      "timer": 60
    }
  ]
},
  {
  "id": "rec_086",
  "name": "酱香虎皮青椒",
  "category": "家常小炒",
  "cover": "🌶️",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 1,
  "tags": [
    "开胃爽口",
    "酸甜微辣",
    "无肉也欢",
    "米饭搭子"
  ],
  "description": "青椒表皮煸出焦香虎皮纹，软烂多汁吸饱了糖醋蒜香酱汁，酸甜可口带微辣，素菜里的极品米饭杀手。",
  "calories": "~160 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "尖椒/薄皮青椒",
      "amount": 6,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "大蒜末",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "香醋/陈醋",
      "amount": 1.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "白糖",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "蚝油",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "去蒂与调糖醋蒜香汁",
      "desc": "青椒洗净去蒂去籽，用刀面轻轻拍扁；碗中放生抽2勺、香醋1.5勺、白糖1勺、蚝油1勺、清水2勺调匀。"
    },
    {
      "title": "干锅慢煸出虎皮",
      "desc": "净锅倒少许油，下入拍扁的青椒，用锅铲不断按压中火慢煎，煎至两面均出现大面积焦黄虎皮且青椒变软塌。",
      "tip": "按压能让青椒受热均匀起虎皮褶皱。"
    },
    {
      "title": "浇汁煨煮收汁",
      "desc": "将青椒推至一边下蒜末爆香，倒入调好的酱汁大火煮沸，煨煮1分钟至汤汁浓稠裹满青椒即可出锅！",
      "timer": 60
    }
  ]
},
  {
  "id": "rec_087",
  "name": "经典肉末蚂蚁上树",
  "category": "家常小炒",
  "cover": "🥢",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 1,
  "tags": [
    "川味名菜",
    "红亮诱人",
    "粉条爽滑",
    "老少皆宜"
  ],
  "description": "肉末点缀在根根透明爽滑的红薯粉丝之间，宛如蚂蚁攀爬绿树，酱香浓郁微辣，热气腾腾吸溜入口格外过瘾。",
  "calories": "~330 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "红薯粉丝/粉条",
      "amount": 100,
      "unit": "克",
      "category": "干货粮油"
    },
    {
      "name": "猪肉末",
      "amount": 80,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "豆瓣酱",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "葱姜蒜末",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "老抽",
      "amount": 0.5,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "泡软粉丝与剪段",
      "desc": "红薯粉丝用温水浸泡20分钟至变软，用剪刀剪成适口的长段沥水备用。"
    },
    {
      "title": "炒散肉末出红油",
      "desc": "热锅倒油下肉末煸炒散开发白，下入豆瓣酱、葱姜蒜末小火炒出红润油花。"
    },
    {
      "title": "下粉丝焖煮吸汁",
      "desc": "加入1碗高汤或清水，加生抽、老抽调色调味，下入泡软的粉丝大火煮开转中火翻炒焖煮2分钟至汤汁完全吸入粉丝中，撒葱花出锅！",
      "timer": 120
    }
  ]
},
  {
  "id": "rec_088",
  "name": "爽口脆嫩拍黄瓜",
  "category": "快手减脂",
  "cover": "🥒",
  "time": "5分钟",
  "timeMinutes": 5,
  "difficulty": 1,
  "tags": [
    "凉拌神菜",
    "开胃爽脆",
    "下酒解腻",
    "五分钟搞定"
  ],
  "description": "刀背猛力拍裂的黄瓜断裂面极易吸收调料，蒜香扑鼻，酸甜微辣爽脆透心，大鱼大肉旁不可或缺的解腻神器。",
  "calories": "~110 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "水果黄瓜/水黄瓜",
      "amount": 2,
      "unit": "根",
      "category": "新鲜蔬菜"
    },
    {
      "name": "大蒜",
      "amount": 4,
      "unit": "瓣",
      "category": "常用调味"
    },
    {
      "name": "香醋/陈醋",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "生抽",
      "amount": 1.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "芝麻香油",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "辣椒油/小米椒",
      "amount": 1,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "熟花生米",
      "amount": 20,
      "unit": "克",
      "category": "干货粮油"
    }
  ],
  "steps": [
    {
      "title": "刀拍黄瓜切斜块",
      "desc": "洗净黄瓜平放案板，用厚刀背用力拍扁拍裂，再切成适口斜小块放入大碗中。",
      "tip": "拍裂的比切的光滑表面更能吸附酱汁入味。"
    },
    {
      "title": "压蒜泥与调料拌匀",
      "desc": "大蒜压成细蒜泥，加入生抽、香醋、香油、白糖半茶匙、辣椒油搅拌均匀倒入黄瓜碗中。"
    },
    {
      "title": "颠拌均匀撒花生米",
      "desc": "颠拌均匀后撒上一把香脆熟花生米即可装盘开吃！",
      "timer": 30
    }
  ]
},
  {
  "id": "rec_089",
  "name": "鲜甜白灼广东菜心",
  "category": "快手减脂",
  "cover": "🥬",
  "time": "8分钟",
  "timeMinutes": 8,
  "difficulty": 1,
  "tags": [
    "广府经典",
    "原汁原味",
    "清脆碧绿",
    "健康低卡"
  ],
  "description": "广东老饕餐桌不可无青菜，菜心脆嫩甜美无渣，淋上热豉油滋滋作响，保持青菜最纯粹天然的鲜嫩脆甜。",
  "calories": "~95 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "广东菜心",
      "amount": 350,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "大蒜",
      "amount": 3,
      "unit": "瓣",
      "category": "常用调味"
    },
    {
      "name": "红椒丝",
      "amount": 1,
      "unit": "勺",
      "category": "新鲜蔬菜"
    },
    {
      "name": "蒸鱼豉油",
      "amount": 2.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "食用油",
      "amount": 1.5,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "盐",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "菜心修整洗净",
      "desc": "菜心去老根老叶洗净；大蒜切蒜蓉，红椒切细丝。"
    },
    {
      "title": "油盐水中焯至翠绿",
      "desc": "沸水中加入半勺盐和半勺食用油，下入菜心焯烫45-60秒至颜色碧绿立刻捞出控水整齐码盘。",
      "tip": "加盐和油能牢牢锁住叶绿素，青菜久放不发黄。"
    },
    {
      "title": "淋豉油泼热油出香",
      "desc": "菜心上码蒜蓉和红椒丝，淋入2.5勺蒸鱼豉油，烧滚热油淋在蒜蓉上激出扑鼻鲜香即可！",
      "timer": 15
    }
  ]
},
  {
  "id": "rec_090",
  "name": "广式经典腊味煲仔饭",
  "category": "懒人主食",
  "cover": "🍚",
  "time": "25分钟",
  "timeMinutes": 25,
  "difficulty": 2,
  "tags": [
    "广府名味",
    "黄金锅巴",
    "腊香浓郁",
    "一锅端省心"
  ],
  "description": "砂锅底部烘出金黄酥脆焦香锅巴，大米吸满广式腊肠与腊肉的油脂香气，淋上甜咸豉油拌匀，香气冲天！",
  "calories": "~540 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "丝苗米/大米",
      "amount": 180,
      "unit": "克",
      "category": "干货粮油"
    },
    {
      "name": "广式甜腊肠",
      "amount": 2,
      "unit": "根",
      "category": "肉禽蛋品"
    },
    {
      "name": "广式腊肉",
      "amount": 50,
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
      "name": "菜心",
      "amount": 3,
      "unit": "棵",
      "category": "新鲜蔬菜"
    },
    {
      "name": "煲仔饭豉油",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "大米浸泡与砂锅抹油",
      "desc": "大米提前浸泡30分钟沥干；砂锅内壁薄薄刷一层食用油，倒入大米和略少于平时的清水（水米比约1:1.2）。",
      "tip": "刷油是大米底部形成金黄酥脆锅巴的关键。"
    },
    {
      "title": "大火煮沸转小火焖饭",
      "desc": "大火煮沸至米饭表面冒小孔蜂窝状水气收干（约5分钟），码上切薄片的腊肠腊肉和打入一颗生鸡蛋。",
      "timer": 300
    }
  ]
},
  {
  "id": "rec_091",
  "name": "经典扬州炒饭",
  "category": "懒人主食",
  "cover": "🍚",
  "time": "12分钟",
  "timeMinutes": 12,
  "difficulty": 2,
  "tags": [
    "淮扬国宴",
    "金裹银",
    "粒粒分明",
    "营养美味"
  ],
  "description": "粒粒米饭裹着金黄蛋液炒至在锅里跳舞，配上Q弹虾仁、熟火腿丁与青翠葱花，色泽五彩缤纷，入口鲜香弹爽。",
  "calories": "~430 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "隔夜隔餐冷米饭",
      "amount": 1,
      "unit": "大碗",
      "category": "干货粮油"
    },
    {
      "name": "鸡蛋",
      "amount": 2,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "鲜虾仁",
      "amount": 6,
      "unit": "个",
      "category": "水产海鲜"
    },
    {
      "name": "熟火腿/火腿肠",
      "amount": 30,
      "unit": "克",
      "category": "肉禽蛋品"
    },
    {
      "name": "胡萝卜青豆玉米",
      "amount": 40,
      "unit": "克",
      "category": "新鲜蔬菜"
    },
    {
      "name": "小葱碎",
      "amount": 2,
      "unit": "勺",
      "category": "新鲜蔬菜"
    },
    {
      "name": "盐",
      "amount": 0.5,
      "unit": "茶匙",
      "category": "常用调味"
    }
  ],
  "steps": [
    {
      "title": "冷饭拌蛋黄上色",
      "desc": "1个全蛋加1个蛋黄打入冷米饭中抓拌均匀，使米粒颗颗裹上金黄蛋液（金裹银秘诀）；另一个蛋清炒碎备用。"
    },
    {
      "title": "炒熟配菜丁",
      "desc": "热锅放少许油，先下虾仁丁、火腿丁、青豆玉米粒炒熟盛出备用。"
    },
    {
      "title": "大火猛炒粒粒分明",
      "desc": "锅中倒油热透，倒入裹好蛋液的米饭大火快速翻炒拍散，炒至米粒在锅中欢快跳跃，倒入配菜丁和葱花加少许盐大火颠匀出锅！",
      "timer": 60
    }
  ]
},
  {
  "id": "rec_092",
  "name": "港式爆浆流心漏奶华",
  "category": "烘焙甜品",
  "cover": "🍞",
  "time": "10分钟",
  "timeMinutes": 10,
  "difficulty": 1,
  "tags": [
    "茶餐厅招牌",
    "网红爆款",
    "浓香甜蜜",
    "下午茶治愈"
  ],
  "description": "金黄松脆的法式煎吐司中间压出小窝，倒满香浓炼乳牛奶奶浆，撒上厚厚一层微苦阿华田可可粉，切开瞬间奶香熔岩爆浆！",
  "calories": "~390 kcal",
  "servings": 2,
  "ingredients": [
    {
      "name": "厚切吐司面包",
      "amount": 2,
      "unit": "片",
      "category": "干货粮油"
    },
    {
      "name": "鸡蛋",
      "amount": 1,
      "unit": "个",
      "category": "肉禽蛋品"
    },
    {
      "name": "纯牛奶",
      "amount": 50,
      "unit": "毫升",
      "category": "常用调味"
    },
    {
      "name": "甜炼乳",
      "amount": 2,
      "unit": "勺",
      "category": "常用调味"
    },
    {
      "name": "黄油",
      "amount": 15,
      "unit": "克",
      "category": "常用调味"
    },
    {
      "name": "阿华田/可可粉",
      "amount": 2,
      "unit": "勺",
      "category": "干货粮油"
    }
  ],
  "steps": [
    {
      "title": "吐司裹蛋液香煎",
      "desc": "鸡蛋加20ml牛奶打散成蛋液，厚吐司两面沾满蛋液；平底锅融化黄油，小火将吐司双面及四边煎至金黄微脆盛出叠放。"
    },
    {
      "title": "调制奶液与压小凹槽",
      "desc": "用勺背在顶部吐司正中心压出一个凹形小坑；锅中余温下30ml牛奶与2勺炼乳轻微加热搅匀成温热奶浆倒入凹槽中。"
    },
    {
      "title": "筛满可可粉爆浆开切",
      "desc": "用滤网在吐司表面均匀密密筛上一层厚厚的可可粉，用刀从中心切开，乳白奶浆汹涌流出，蘸着香脆吐司享用！",
      "timer": 30
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
