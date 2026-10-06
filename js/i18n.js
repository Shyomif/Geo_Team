// Arabic / English switcher.
// English text stays in the HTML; this file maps each English string to its Arabic translation.
(function () {
  "use strict";

  var AR = {
    // Header / footer / nav
    "Geo Team": "فريق جيو",
    Home: "الرئيسية",
    "About Us": "من نحن",
    Services: "الخدمات",
    Project: "المشاريع",
    Contact: "اتصل بنا",
    "© GEO TEAM 2026. All rights reserved.":
      "© فريق جيو 2026. جميع الحقوق محفوظة.",
    "© 2026 GEO TEAM. All rights reserved.":
      "© 2026 فريق جيو. جميع الحقوق محفوظة.",
    "geo team logo": "شعار فريق جيو",
    "Earth observation collage: nebula, satellite, city map and code":
      "مجموعة صور لرصد الأرض: سديم وقمر صناعي وخريطة مدينة وكود برمجي",
    "Follow us on Instagram": "تابعنا على إنستغرام",

    // Home
    "Geospatial Science. Earth Observation. Intelligent Solutions.":
      "علوم جيومكانية. رصد الأرض. حلول ذكية.",
    "A team specializing in Earth and environmental sciences geographic information systems (GIS) remote sensing and GeoAI technologies We work to transform geographic and natural data into insights analyses and solutions that help people understand their surroundings and make data-driven decisions.":
      "فريق متخصص في علوم الأرض والبيئة ونظم المعلومات الجغرافية (GIS) والاستشعار عن بعد وتقنيات الذكاء الاصطناعي الجغرافي (GeoAI). نعمل على تحويل البيانات الجغرافية والطبيعية إلى رؤى وتحليلات وحلول تساعد الناس على فهم محيطهم واتخاذ قرارات مبنية على البيانات.",
    "Explore Services": "استكشف خدماتنا",
    "Areas of Work": "مجالات العمل",
    "Natural & Earth Sciences": "العلوم الطبيعية وعلوم الأرض",
    "Studies and analyses of natural phenomena and systems, including topography, water resources, natural hazards, and the environment.":
      "دراسات وتحليلات للظواهر والأنظمة الطبيعية، بما في ذلك التضاريس والموارد المائية والمخاطر الطبيعية والبيئة.",
    "GIS & Spatial Analysis": "نظم المعلومات الجغرافية والتحليل المكاني",
    "Management and analysis of spatial data, map production, spatial modeling, and geographic analysis to support projects and studies.":
      "إدارة وتحليل البيانات المكانية وإنتاج الخرائط والنمذجة المكانية والتحليل الجغرافي لدعم المشاريع والدراسات.",
    "Remote Sensing": "الاستشعار عن بعد",
    "Analysis of satellite imagery and remote sensing data to monitor environmental and land-use changes and extract geographic information.":
      "تحليل صور الأقمار الصناعية وبيانات الاستشعار عن بعد لرصد التغيرات البيئية وتغيرات استخدام الأراضي واستخراج المعلومات الجغرافية.",
    "Web GIS": "نظم المعلومات الجغرافية على الويب",
    "Developing interactive geographic platforms and maps for displaying, analyzing, and sharing data online.":
      "تطوير منصات وخرائط جغرافية تفاعلية لعرض البيانات وتحليلها ومشاركتها عبر الإنترنت.",
    GeoAI: "الذكاء الاصطناعي الجغرافي",
    "Applying artificial intelligence and machine learning to geographic data and remote sensing to identify patterns, perform classification, make predictions, and conduct spatial analysis.":
      "تطبيق الذكاء الاصطناعي والتعلم الآلي على البيانات الجغرافية والاستشعار عن بعد لاكتشاف الأنماط والتصنيف والتنبؤ وإجراء التحليل المكاني.",

    // About
    "ABOUT US": "من نحن",
    "Geo Team is a multidisciplinary team working at the intersection of Earth sciences, geography, geographic information systems (GIS), remote sensing, and geographic artificial intelligence (GeoAI).":
      "فريق جيو فريق متعدد التخصصات يعمل في نقطة التقاء علوم الأرض والجغرافيا ونظم المعلومات الجغرافية (GIS) والاستشعار عن بعد والذكاء الاصطناعي الجغرافي (GeoAI).",
    "Our goal is to develop solutions based on spatial and environmental data to understand natural systems, analyze spatial and temporal changes, and support planning and decision-making.":
      "هدفنا تطوير حلول قائمة على البيانات المكانية والبيئية لفهم الأنظمة الطبيعية وتحليل التغيرات المكانية والزمانية ودعم التخطيط واتخاذ القرار.",
    "We combine scientific knowledge with modern geographic technologies to create solutions that range from data collection and processing, through analysis and modeling, to maps, interactive platforms, and digital products.":
      "نجمع بين المعرفة العلمية والتقنيات الجغرافية الحديثة لنقدم حلولاً تمتد من جمع البيانات ومعالجتها، مروراً بالتحليل والنمذجة، وصولاً إلى الخرائط والمنصات التفاعلية والمنتجات الرقمية.",
    Vision: "الرؤية",
    "To be a team specializing in the development of cutting-edge geographic and environmental solutions that combine earth sciences, digital technologies, and artificial intelligence, and that contribute to building a deeper understanding of natural and spatial systems.":
      "أن نكون فريقاً متخصصاً في تطوير حلول جغرافية وبيئية متقدمة تجمع بين علوم الأرض والتقنيات الرقمية والذكاء الاصطناعي، وتسهم في بناء فهم أعمق للأنظمة الطبيعية والمكانية.",
    Mission: "المهمة",
    "Converting geographic and natural data into usable information.":
      "تحويل البيانات الجغرافية والطبيعية إلى معلومات قابلة للاستخدام.",
    "Using remote sensing technologies to monitor and analyze changes on the Earth’s surface.":
      "استخدام تقنيات الاستشعار عن بعد لرصد وتحليل التغيرات على سطح الأرض.",
    "Integrating artificial intelligence with geographic data to develop analytical and predictive models.":
      "دمج الذكاء الاصطناعي مع البيانات الجغرافية لتطوير نماذج تحليلية وتنبؤية.",
    "Building Web GIS platforms that make spatial data easier to access and explore.":
      "بناء منصات نظم معلومات جغرافية على الويب تسهّل الوصول إلى البيانات المكانية واستكشافها.",
    "Supporting environmental, natural resource, and planning projects through spatial analysis and modeling.":
      "دعم مشاريع البيئة والموارد الطبيعية والتخطيط من خلال التحليل المكاني والنمذجة.",

    // Services
    SERVICES: "الخدمات",
    "We provide geospatial and Earth observation solutions for natural, environmental, agricultural, and planning applications. Our work combines GIS, remote sensing, spatial analysis, modeling, Web GIS, and GeoAI to address sector-specific challenges.":
      "نقدم حلولاً جيومكانية ورصداً للأرض للتطبيقات الطبيعية والبيئية والزراعية والتخطيطية. يجمع عملنا بين نظم المعلومات الجغرافية والاستشعار عن بعد والتحليل المكاني والنمذجة والويب GIS والذكاء الاصطناعي الجغرافي لمعالجة تحديات كل قطاع.",
    "Water Resources & Hydrology": "الموارد المائية والهيدرولوجيا",
    "Geospatial analysis and Earth observation solutions for understanding, monitoring, and managing water resources and hydrological systems.":
      "تحليل جيومكاني وحلول رصد الأرض لفهم الموارد المائية والأنظمة الهيدرولوجية ومراقبتها وإدارتها.",
    "Watershed Delineation": "تحديد أحواض التصريف",
    "Drainage Network Analysis": "تحليل شبكات التصريف",
    "Flood Risk Mapping": "رسم خرائط مخاطر الفيضانات",
    "Surface Water Monitoring": "مراقبة المياه السطحية",
    "Hydrological Spatial Analysis": "التحليل المكاني الهيدرولوجي",
    "Water Resource Mapping": "رسم خرائط الموارد المائية",
    "Drought Analysis": "تحليل الجفاف",
    "Web GIS for Water Resources": "نظم معلومات جغرافية ويب للموارد المائية",
    Agriculture: "الزراعة",
    "Geospatial and satellite-based solutions for monitoring agricultural areas, vegetation dynamics, and land conditions.":
      "حلول جيومكانية وفضائية لمراقبة المناطق الزراعية وديناميكيات الغطاء النباتي وحالة الأراضي.",
    "Crop Mapping": "رسم خرائط المحاصيل",
    "Crop Classification": "تصنيف المحاصيل",
    "Vegetation Monitoring": "مراقبة الغطاء النباتي",
    "Agricultural Land Mapping": "رسم خرائط الأراضي الزراعية",
    "Crop Health Analysis": "تحليل صحة المحاصيل",
    "Yield Estimation": "تقدير الإنتاج",
    "Drought Monitoring": "مراقبة الجفاف",
    "Multi-temporal Satellite Analysis": "تحليل الصور الفضائية متعددة التواريخ",
    Environment: "البيئة",
    "Spatial and Earth observation solutions for environmental monitoring, assessment, and change detection.":
      "حلول مكانية ورصد للأرض للمراقبة البيئية والتقييم وكشف التغيرات.",
    "Environmental Monitoring": "المراقبة البيئية",
    "Land Cover Mapping": "رسم خرائط الغطاء الأرضي",
    "Land Use Change": "تغير استخدام الأراضي",
    "Environmental Change Detection": "كشف التغيرات البيئية",
    "Ecosystem Analysis": "تحليل النظم البيئية",
    "Pollution Spatial Analysis": "التحليل المكاني للتلوث",
    "Environmental Risk Mapping": "رسم خرائط المخاطر البيئية",
    "Interactive Environmental Dashboards": "لوحات معلومات بيئية تفاعلية",
    "Natural Hazards & Risk": "المخاطر الطبيعية",
    "Geospatial analysis and modeling for assessing spatial patterns and potential impacts of natural hazards.":
      "تحليل ونمذجة جيومكانية لتقييم الأنماط المكانية والآثار المحتملة للمخاطر الطبيعية.",
    "Flood Risk": "مخاطر الفيضانات",
    "Landslide Susceptibility": "قابلية الانهيارات الأرضية",
    "Wildfire Risk": "مخاطر حرائق الغابات",
    "Drought Assessment": "تقييم الجفاف",
    "Hazard Mapping": "رسم خرائط المخاطر",
    "Vulnerability Analysis": "تحليل القابلية للتأثر",
    "Risk Zonation": "تقسيم المناطق حسب الخطورة",
    "Early-Warning Support Systems": "أنظمة دعم الإنذار المبكر",
    "Urban & Regional Planning": "التخطيط الحضري والإقليمي",
    "Spatial data and geospatial analysis to support urban development, land-use planning, and regional analysis.":
      "بيانات مكانية وتحليل جيومكاني لدعم التطوير الحضري وتخطيط استخدام الأراضي والتحليل الإقليمي.",
    "Land Use / Land Cover Mapping": "رسم خرائط استخدام الأراضي والغطاء الأرضي",
    "Urban Growth Analysis": "تحليل النمو العمراني",
    "Site Suitability Analysis": "تحليل ملاءمة المواقع",
    "Spatial Planning": "التخطيط المكاني",
    "Accessibility Analysis": "تحليل إمكانية الوصول",
    "Infrastructure Mapping": "رسم خرائط البنية التحتية",
    "Urban Change Detection": "كشف التغيرات الحضرية",
    "Planning Web GIS Platforms": "منصات ويب GIS للتخطيط",
    "Geology & Geomorphology": "الجيولوجيا والجيومورفولوجيا",
    "Earth surface analysis using terrain data, remote sensing, and spatial modeling to investigate geological and geomorphological characteristics.":
      "تحليل سطح الأرض باستخدام بيانات التضاريس والاستشعار عن بعد والنمذجة المكانية لدراسة الخصائص الجيولوجية والجيومورفولوجية.",
    "Terrain Analysis": "تحليل التضاريس",
    "Geomorphological Mapping": "رسم الخرائط الجيومورفولوجية",
    "DEM Analysis": "تحليل نماذج الارتفاع الرقمية",
    "Landform Classification": "تصنيف الأشكال الأرضية",
    "Drainage and Morphometric Analysis": "التحليل المورفومتري وتحليل التصريف",
    "Surface Change Analysis": "تحليل تغير السطح",
    "Geological Data Visualization": "تصوير البيانات الجيولوجية",
    "3D Terrain Analysis": "تحليل التضاريس ثلاثي الأبعاد",
    "Climate & Atmospheric Application": "تطبيقات المناخ والغلاف الجوي",
    "Spatial analysis and visualization of climate and atmospheric datasets to understand temporal and geographical patterns.":
      "تحليل وتصوير مكاني لبيانات المناخ والغلاف الجوي لفهم الأنماط الزمنية والجغرافية.",
    "Climate Data Analysis": "تحليل البيانات المناخية",
    "Spatiotemporal Analysis": "التحليل المكاني الزماني",
    "Climate Mapping": "رسم الخرائط المناخية",
    "Temperature & Precipitation Analysis": "تحليل درجات الحرارة والهطول",
    "Drought Indicators": "مؤشرات الجفاف",
    "Air Quality Mapping": "رسم خرائط جودة الهواء",
    "Environmental Data Visualization": "تصوير البيانات البيئية",
    "Climate Data Platforms": "منصات البيانات المناخية",
    "Infrastructure & Engineering Support": "دعم البنية التحتية والهندسة",
    "Geospatial solutions for mapping, monitoring, and spatial analysis of infrastructure and engineering-related projects.":
      "حلول جيومكانية لرسم الخرائط والمراقبة والتحليل المكاني لمشاريع البنية التحتية والمشاريع الهندسية.",
    "Site Analysis": "تحليل المواقع",
    "Corridor Analysis": "تحليل المسارات",
    "Terrain Assessment": "تقييم التضاريس",
    "Drone Mapping": "المسح بالطائرات المسيّرة",
    "3D Mapping": "الخرائط ثلاثية الأبعاد",
    "Asset Mapping": "رسم خرائط الأصول",
    "Spatial Databases": "قواعد البيانات المكانية",
    "Powered by": "مدعوم بـ",
    GIS: "نظم المعلومات الجغرافية",
    "Earth Observation": "رصد الأرض",
    "Spatial Analysis": "التحليل المكاني",
    "3D Geospatial": "الجيومكانية ثلاثية الأبعاد",

    // Contact
    CONTACT: "اتصل بنا",
    "Let's Work With Geospatial Data": "لنعمل معاً على البيانات الجيومكانية",
    "Do you have geographic or environmental data that you need to analyze?":
      "هل لديك بيانات جغرافية أو بيئية تحتاج إلى تحليلها؟",
    "Are you working on a project that requires GIS, remote sensing, Web GIS, or GeoAI?":
      "هل تعمل على مشروع يتطلب نظم المعلومات الجغرافية أو الاستشعار عن بعد أو الويب GIS أو GeoAI؟",
    "Contact us to discuss your project and possible solutions.":
      "تواصل معنا لمناقشة مشروعك والحلول الممكنة.",
    "NAME:": "الاسم:",
    "COMPANY:": "الشركة:",
    EMAIL: "البريد الإلكتروني",
    PHONE: "الهاتف",
    SUBMIT: "إرسال",
    RESET: "إعادة تعيين",
  };

  var PLACEHOLDERS = {
    NAME: "الاسم",
    COMPANY: "الشركة",
    EMAIL: "البريد الإلكتروني",
    PHONE: "الهاتف",
    "PLEASE WRITE YOUR MESSAGE HERE...": "اكتب رسالتك هنا...",
  };

  var TITLES = {
    "Geo Team": "فريق جيو",
  };

  var STORAGE_KEY = "geo-lang";
  var original = new WeakMap(); // text node -> its English source text

  function norm(s) {
    return s.replace(/\s+/g, " ").trim();
  }

  function textNodes() {
    var walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (n) {
          var p = n.parentNode.nodeName;
          if (p === "SCRIPT" || p === "STYLE" || !norm(n.nodeValue))
            return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      },
    );
    var list = [];
    while (walker.nextNode()) list.push(walker.currentNode);
    return list;
  }

  function apply(lang) {
    var ar = lang === "ar";
    document.documentElement.lang = lang;
    document.documentElement.dir = ar ? "rtl" : "ltr";

    textNodes().forEach(function (node) {
      if (!original.has(node)) original.set(node, node.nodeValue);
      var src = original.get(node);
      var key = norm(src);
      if (ar && AR[key]) {
        // keep the surrounding whitespace, swap the (possibly line-wrapped) text
        var pad = src.match(/^(\s*)[\s\S]*?(\s*)$/);
        node.nodeValue = pad[1] + AR[key] + pad[2];
      } else {
        node.nodeValue = src;
      }
    });

    document
      .querySelectorAll("[placeholder], [alt], [title]")
      .forEach(function (el) {
        ["placeholder", "alt", "title"].forEach(function (attr) {
          if (!el.hasAttribute(attr)) return;
          var store = (el["_en_" + attr] =
            el["_en_" + attr] || el.getAttribute(attr));
          var map = attr === "placeholder" ? PLACEHOLDERS : AR;
          el.setAttribute(attr, ar && map[store] ? map[store] : store);
        });
      });

    var root = document.documentElement;
    root._enTitle = root._enTitle || document.title;
    document.title =
      ar && TITLES[root._enTitle] ? TITLES[root._enTitle] : root._enTitle;

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = ar ? "EN" : "عربي";
      btn.setAttribute(
        "aria-label",
        ar ? "Switch to English" : "التبديل إلى العربية",
      );
    }
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function init() {
    var nav = document.querySelector(".nav_menu ul");
    if (nav) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.id = "lang-toggle";
      btn.type = "button";
      btn.className = "lang-toggle";
      btn.addEventListener("click", function () {
        apply(document.documentElement.lang === "ar" ? "en" : "ar");
      });
      li.appendChild(btn);
      nav.appendChild(li);
    }
    var saved = "en";
    try {
      saved =
        localStorage.getItem(STORAGE_KEY) ||
        ((navigator.language || "").slice(0, 2) === "ar" ? "ar" : "en");
    } catch (e) {}
    apply(saved);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
