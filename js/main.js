// Internationalization messages
const messages = {
  en: {
    "nav.tools": "Tools",
    "nav.simulators": "Simulators",
    "nav.docs": "Docs",
    "hero.description": "A hub for Minecraft Bedrock Edition Display Entity command technology. Collecting simulators, converters, docs and resources to help you get started with FMBE.",
    "hero.exploreButton": "Browse Tools",
    "tools.title": "🛠️ Tools",
    "tools.subtitle": "Converters & utilities to boost your FMBE development efficiency",
    "tools.bfConverter.title": "BF Converter",
    "tools.bfConverter.desc": "BB-CVT-FMBE — Data format converter for FMBE",
    "tools.bfConverter.tag1": "Converter",
    "tools.bfConverter.tag2": "China",
    "tools.molangGrapher.desc": "Molang math function visualizer, real-time preview of math expressions",
    "tools.molangGrapher.tag2": "Visualizer",
    "simulators.title": "🎮 Simulators",
    "simulators.subtitle": "Multi-block simulation & command generation, covering Advanced, Basic and Dual editions",
    "simulators.advancedBadge": "Advanced",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "Multi-block Sim",
    "simulators.multiBlock.desc": "Auto-generate commands, supports import & simple expressions",
    "simulators.multiBlock.tag1": "Auto-gen",
    "simulators.multiBlock.tag2": "Import",
    "simulators.multiBlock.tag3": "Expression",
    "simulators.desmos3dJP1.desc": "EX/AD Edition online 3D graph simulation",
    "simulators.desmos3dCN1.desc": "Multi-block Sim — Advanced Edition",
    "simulators.desmos3dCN2.desc": "Multi-block Sim — Advanced Edition (Alternative)",
    "simulators.normalBadge": "Basic",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "Auto-generate assignment commands",
    "simulators.fmbeSim.tag1": "Auto-gen",
    "simulators.fmbeSim.tag2": "Assignment",
    "simulators.desmos3dJP2.desc": "Basic Edition online 3D graph simulation",
    "simulators.dualBadge": "Dual",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "FMBE simulator supporting both editions",
    "simulators.basicSim.tag1": "Dual",
    "simulators.basicSim.tag2": "Simulator",
    "docs.title": "📚 Docs & Resources",
    "docs.subtitle": "Molang docs, Query function references, FMBE Wiki and more learning resources",
    "docs.fmbeWiki.desc": "Bedrock Dev — Display Entities command reference",
    "docs.fmbeWiki.tag2": "Core",
    "docs.molangDoc1.title": "Bedrock Molang Docs (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Stable Molang official docs",
    "docs.molangDoc1.tag2": "Official",
    "docs.molangDoc2.title": "Bedrock Molang Docs (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Molang concepts explained",
    "docs.molangDoc2.tag2": "Concepts",
    "docs.molangDoc3.title": "Bedrock Molang Docs (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Molang query function list",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Molang query function list (Chinese mirror)",
    "docs.bedevMolang.tag2": "Chinese",
    "docs.queryRef.title": "Query Function Reference",
    "docs.queryRef.desc": "Microsoft Learn — Complete Molang Query function list",
    "docs.queryRef.tag2": "Official",
    "docs.queryRef.tag3": "Chinese",
    "footer.copyright": "🄯 {year} FMBE"
  },
  zh: {
    "nav.tools": "工具",
    "nav.simulators": "模拟器",
    "nav.docs": "文档",
    "hero.description": "Minecraft 基岩版 Display Entity 指令技术汇总站。收录模拟器、转换器、文档等工具与资料，助你快速上手 FMBE 技术。",
    "hero.exploreButton": "浏览工具",
    "tools.title": "🛠️ 工具",
    "tools.subtitle": "转换器与辅助工具，提升你的 FMBE 开发效率",
    "tools.bfConverter.title": "BF 转换器",
    "tools.bfConverter.desc": "BB-CVT-FMBE — 用于 FMBE 的数据格式转换工具",
    "tools.bfConverter.tag1": "转换器",
    "tools.bfConverter.tag2": "中国",
    "tools.molangGrapher.desc": "Molang math 函数可视化计算器，实时预览数学表达式",
    "tools.molangGrapher.tag2": "可视化",
    "simulators.title": "🎮 模拟器",
    "simulators.subtitle": "多方块模拟与指令生成，覆盖高级版、普通版和双版本",
    "simulators.advancedBadge": "高级版",
    "simulators.advancedLabel": "EX / AD 版",
    "simulators.multiBlock.title": "多方块模拟",
    "simulators.multiBlock.desc": "自动生成指令，支持导入、简单的表达式",
    "simulators.multiBlock.tag1": "自动生成",
    "simulators.multiBlock.tag2": "导入",
    "simulators.multiBlock.tag3": "表达式",
    "simulators.desmos3dJP1.desc": "EX/AD 版在线 3D 图形模拟",
    "simulators.desmos3dCN1.desc": "多方块模拟 — 高级版",
    "simulators.desmos3dCN2.desc": "多方块模拟 — 高级版（备选）",
    "simulators.normalBadge": "普通版",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "自动生成赋值指令",
    "simulators.fmbeSim.tag1": "自动生成",
    "simulators.fmbeSim.tag2": "赋值指令",
    "simulators.desmos3dJP2.desc": "普通版在线 3D 图形模拟",
    "simulators.dualBadge": "双版本",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "支持双版本的 FMBE 模拟器",
    "simulators.basicSim.tag1": "双版本",
    "simulators.basicSim.tag2": "模拟器",
    "docs.title": "📚 文档与资料",
    "docs.subtitle": "Molang 文档、Query 函数参考、FMBE Wiki 等学习资源",
    "docs.fmbeWiki.desc": "Bedrock Dev — Display Entities 命令详解",
    "docs.fmbeWiki.tag2": "核心",
    "docs.molangDoc1.title": "基岩版 Molang 文档 (一)",
    "docs.molangDoc1.desc": "bedrock.dev — Stable Molang 官方文档",
    "docs.molangDoc1.tag2": "官方",
    "docs.molangDoc2.title": "基岩版 Molang 文档 (二)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Molang 概念详解",
    "docs.molangDoc2.tag2": "概念",
    "docs.molangDoc3.title": "基岩版 Molang 文档 (三)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Molang 查询函数清单",
    "docs.molangDoc3.tag2": "查询函数",
    "docs.bedevMolang.desc": "bedev.cn — Molang 查询函数清单（中文镜像）",
    "docs.bedevMolang.tag2": "中文",
    "docs.queryRef.title": "Query 函数参考",
    "docs.queryRef.desc": "Microsoft Learn — Molang Query 函数完整清单",
    "docs.queryRef.tag2": "官方",
    "docs.queryRef.tag3": "中文",
    "footer.copyright": "🄯 {year} FMBE"
  },
  ja: {
    "nav.tools": "ツール",
    "nav.simulators": "シミュレーター",
    "nav.docs": "ドキュメント",
    "hero.description": "Minecraft Bedrock Edition Display Entity コマンド技術のハブ。シミュレーター、コンバーター、ドキュメントなどのツールとリソースを収集し、FMBE をすぐに始められます。",
    "hero.exploreButton": "ツールを見る",
    "tools.title": "🛠️ ツール",
    "tools.subtitle": "FMBE 開発効率を向上するコンバーターとユーティリティ",
    "tools.bfConverter.title": "BF コンバーター",
    "tools.bfConverter.desc": "BB-CVT-FMBE — FMBE 用データ形式変換ツール",
    "tools.bfConverter.tag1": "コンバーター",
    "tools.bfConverter.tag2": "中国",
    "tools.molangGrapher.desc": "Molang math 関数ビジュアライザー、数式のリアルタイムプレビュー",
    "tools.molangGrapher.tag2": "ビジュアライザー",
    "simulators.title": "🎮 シミュレーター",
    "simulators.subtitle": "マルチブロックシミュレーションとコマンド生成、Advanced/Basic/Dual エディション対応",
    "simulators.advancedBadge": "上級版",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "マルチブロック Sim",
    "simulators.multiBlock.desc": "コマンド自動生成、インポートと簡単な式に対応",
    "simulators.multiBlock.tag1": "自動生成",
    "simulators.multiBlock.tag2": "インポート",
    "simulators.multiBlock.tag3": "式",
    "simulators.desmos3dJP1.desc": "EX/AD Edition オンライン 3D グラフシミュレーション",
    "simulators.desmos3dCN1.desc": "マルチブロック Sim — Advanced Edition",
    "simulators.desmos3dCN2.desc": "マルチブロック Sim — Advanced Edition（代替）",
    "simulators.normalBadge": "基本版",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "代入コマンドの自動生成",
    "simulators.fmbeSim.tag1": "自動生成",
    "simulators.fmbeSim.tag2": "代入コマンド",
    "simulators.desmos3dJP2.desc": "Basic Edition オンライン 3D グラフシミュレーション",
    "simulators.dualBadge": "デュアル",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "両エディション対応の FMBE シミュレーター",
    "simulators.basicSim.tag1": "デュアル",
    "simulators.basicSim.tag2": "シミュレーター",
    "docs.title": "📚 ドキュメント & リソース",
    "docs.subtitle": "Molang ドキュメント、Query 関数リファレンス、FMBE Wiki などの学習リソース",
    "docs.fmbeWiki.desc": "Bedrock Dev — Display Entities コマンドリファレンス",
    "docs.fmbeWiki.tag2": "コア",
    "docs.molangDoc1.title": "Bedrock Molang ドキュメント (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Stable Molang 公式ドキュメント",
    "docs.molangDoc1.tag2": "公式",
    "docs.molangDoc2.title": "Bedrock Molang ドキュメント (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Molang 概念の解説",
    "docs.molangDoc2.tag2": "概念",
    "docs.molangDoc3.title": "Bedrock Molang ドキュメント (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Molang クエリ関数リスト",
    "docs.molangDoc3.tag2": "クエリ",
    "docs.bedevMolang.desc": "bedev.cn — Molang クエリ関数リスト（中国語ミラー）",
    "docs.bedevMolang.tag2": "中国語",
    "docs.queryRef.title": "Query 関数リファレンス",
    "docs.queryRef.desc": "Microsoft Learn — Molang Query 関数の完全なリスト",
    "docs.queryRef.tag2": "公式",
    "docs.queryRef.tag3": "中国語",
    "footer.copyright": "🄯 {year} FMBE"
  },
  ko: {
    "nav.tools": "도구",
    "nav.simulators": "시뮬레이터",
    "nav.docs": "문서",
    "hero.description": "Minecraft Bedrock Edition Display Entity 명령 기술 허브. 시뮬레이터, 변환기, 문서 등의 도구와 자료를 수집하여 FMBE를 빠르게 시작할 수 있습니다.",
    "hero.exploreButton": "도구 둘러보기",
    "tools.title": "🛠️ 도구",
    "tools.subtitle": "FMBE 개발 효율을 높이는 변환기 및 유틸리티",
    "tools.bfConverter.title": "BF 변환기",
    "tools.bfConverter.desc": "BB-CVT-FMBE — FMBE용 데이터 형식 변환 도구",
    "tools.bfConverter.tag1": "변환기",
    "tools.bfConverter.tag2": "중국",
    "tools.molangGrapher.desc": "Molang math 함수 시각화 도구, 수식 실시간 미리보기",
    "tools.molangGrapher.tag2": "시각화",
    "simulators.title": "🎮 시뮬레이터",
    "simulators.subtitle": "멀티블록 시뮬레이션 및 명령 생성, Advanced/Basic/Dual 에디션 지원",
    "simulators.advancedBadge": "고급판",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "멀티블록 Sim",
    "simulators.multiBlock.desc": "명령 자동 생성, 임포트 및 간단한 식 지원",
    "simulators.multiBlock.tag1": "자동 생성",
    "simulators.multiBlock.tag2": "임포트",
    "simulators.multiBlock.tag3": "식",
    "simulators.desmos3dJP1.desc": "EX/AD Edition 온라인 3D 그래프 시뮬레이션",
    "simulators.desmos3dCN1.desc": "멀티블록 Sim — Advanced Edition",
    "simulators.desmos3dCN2.desc": "멀티블록 Sim — Advanced Edition (대체)",
    "simulators.normalBadge": "기본판",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "할당 명령 자동 생성",
    "simulators.fmbeSim.tag1": "자동 생성",
    "simulators.fmbeSim.tag2": "할당 명령",
    "simulators.desmos3dJP2.desc": "Basic Edition 온라인 3D 그래프 시뮬레이션",
    "simulators.dualBadge": "듀얼",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "양 에디션을 지원하는 FMBE 시뮬레이터",
    "simulators.basicSim.tag1": "듀얼",
    "simulators.basicSim.tag2": "시뮬레이터",
    "docs.title": "📚 문서 & 자료",
    "docs.subtitle": "Molang 문서, Query 함수 참조, FMBE Wiki 등 학습 자료",
    "docs.fmbeWiki.desc": "Bedrock Dev — Display Entities 명령 참조",
    "docs.fmbeWiki.tag2": "핵심",
    "docs.molangDoc1.title": "Bedrock Molang 문서 (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Stable Molang 공식 문서",
    "docs.molangDoc1.tag2": "공식",
    "docs.molangDoc2.title": "Bedrock Molang 문서 (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Molang 개념 해설",
    "docs.molangDoc2.tag2": "개념",
    "docs.molangDoc3.title": "Bedrock Molang 문서 (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Molang 쿼리 함수 목록",
    "docs.molangDoc3.tag2": "쿼리",
    "docs.bedevMolang.desc": "bedev.cn — Molang 쿼리 함수 목록 (중국어 미러)",
    "docs.bedevMolang.tag2": "중국어",
    "docs.queryRef.title": "Query 함수 참조",
    "docs.queryRef.desc": "Microsoft Learn — Molang Query 함수 전체 목록",
    "docs.queryRef.tag2": "공식",
    "docs.queryRef.tag3": "중국어",
    "footer.copyright": "🄯 {year} FMBE"
  },
  fr: {
    "nav.tools": "Outils",
    "nav.simulators": "Simulateurs",
    "nav.docs": "Docs",
    "hero.description": "Un hub pour la technologie de commande Display Entity de Minecraft Bedrock Edition. Collecte de simulateurs, convertisseurs, docs et ressources pour vous aider à démarrer avec FMBE.",
    "hero.exploreButton": "Parcourir les outils",
    "tools.title": "🛠️ Outils",
    "tools.subtitle": "Convertisseurs et utilitaires pour booster votre efficacité de développement FMBE",
    "tools.bfConverter.title": "Convertisseur BF",
    "tools.bfConverter.desc": "BB-CVT-FMBE — Outil de conversion de format de données pour FMBE",
    "tools.bfConverter.tag1": "Convertisseur",
    "tools.bfConverter.tag2": "Chine",
    "tools.molangGrapher.desc": "Visualisateur de fonctions Molang math, aperçu en temps réel des expressions",
    "tools.molangGrapher.tag2": "Visualisateur",
    "simulators.title": "🎮 Simulateurs",
    "simulators.subtitle": "Simulation multi-blocs et génération de commandes, couvrant les éditions Advanced, Basic et Dual",
    "simulators.advancedBadge": "Avancé",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "Sim Multi-blocs",
    "simulators.multiBlock.desc": "Génération automatique de commandes, supporte l'import et les expressions simples",
    "simulators.multiBlock.tag1": "Auto-gen",
    "simulators.multiBlock.tag2": "Import",
    "simulators.multiBlock.tag3": "Expression",
    "simulators.desmos3dJP1.desc": "Simulation de graphiques 3D en ligne — Edition EX/AD",
    "simulators.desmos3dCN1.desc": "Sim Multi-blocs — Edition Advanced",
    "simulators.desmos3dCN2.desc": "Sim Multi-blocs — Edition Advanced (Alternative)",
    "simulators.normalBadge": "Basique",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "Génération automatique de commandes d'affectation",
    "simulators.fmbeSim.tag1": "Auto-gen",
    "simulators.fmbeSim.tag2": "Affectation",
    "simulators.desmos3dJP2.desc": "Simulation de graphiques 3D en ligne — Edition Basic",
    "simulators.dualBadge": "Double",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "Simulateur FMBE supportant les deux éditions",
    "simulators.basicSim.tag1": "Double",
    "simulators.basicSim.tag2": "Simulateur",
    "docs.title": "📚 Docs & Ressources",
    "docs.subtitle": "Docs Molang, références de fonctions Query, FMBE Wiki et autres ressources d'apprentissage",
    "docs.fmbeWiki.desc": "Bedrock Dev — Référence des commandes Display Entities",
    "docs.fmbeWiki.tag2": "Core",
    "docs.molangDoc1.title": "Docs Molang Bedrock (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Docs officielles Stable Molang",
    "docs.molangDoc1.tag2": "Officiel",
    "docs.molangDoc2.title": "Docs Molang Bedrock (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Concepts Molang expliqués",
    "docs.molangDoc2.tag2": "Concepts",
    "docs.molangDoc3.title": "Docs Molang Bedrock (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Liste des fonctions Query Molang",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Liste des fonctions Query Molang (miroir chinois)",
    "docs.bedevMolang.tag2": "Chinois",
    "docs.queryRef.title": "Référence des fonctions Query",
    "docs.queryRef.desc": "Microsoft Learn — Liste complète des fonctions Molang Query",
    "docs.queryRef.tag2": "Officiel",
    "docs.queryRef.tag3": "Chinois",
    "footer.copyright": "🄯 {year} FMBE"
  },
  es: {
    "nav.tools": "Herramientas",
    "nav.simulators": "Simuladores",
    "nav.docs": "Docs",
    "hero.description": "Un hub para la tecnología de comandos Display Entity de Minecraft Bedrock Edition. Recopilando simuladores, convertidores, docs y recursos para ayudarte a empezar con FMBE.",
    "hero.exploreButton": "Explorar herramientas",
    "tools.title": "🛠️ Herramientas",
    "tools.subtitle": "Convertidores y utilidades para potenciar tu eficiencia de desarrollo FMBE",
    "tools.bfConverter.title": "Convertidor BF",
    "tools.bfConverter.desc": "BB-CVT-FMBE — Herramienta de conversión de formato de datos para FMBE",
    "tools.bfConverter.tag1": "Convertidor",
    "tools.bfConverter.tag2": "China",
    "tools.molangGrapher.desc": "Visualizador de funciones Molang math, vista previa en tiempo real de expresiones",
    "tools.molangGrapher.tag2": "Visualizador",
    "simulators.title": "🎮 Simuladores",
    "simulators.subtitle": "Simulación multi-bloque y generación de comandos, cubriendo las ediciones Advanced, Basic y Dual",
    "simulators.advancedBadge": "Avanzado",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "Sim Multi-bloque",
    "simulators.multiBlock.desc": "Generación automática de comandos, soporta importación y expresiones simples",
    "simulators.multiBlock.tag1": "Auto-gen",
    "simulators.multiBlock.tag2": "Importar",
    "simulators.multiBlock.tag3": "Expresión",
    "simulators.desmos3dJP1.desc": "Simulación de gráficos 3D en línea — Edición EX/AD",
    "simulators.desmos3dCN1.desc": "Sim Multi-bloque — Edición Advanced",
    "simulators.desmos3dCN2.desc": "Sim Multi-bloque — Edición Advanced (Alternativa)",
    "simulators.normalBadge": "Básico",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "Generación automática de comandos de asignación",
    "simulators.fmbeSim.tag1": "Auto-gen",
    "simulators.fmbeSim.tag2": "Asignación",
    "simulators.desmos3dJP2.desc": "Simulación de gráficos 3D en línea — Edición Basic",
    "simulators.dualBadge": "Dual",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "Simulador FMBE que soporta ambas ediciones",
    "simulators.basicSim.tag1": "Dual",
    "simulators.basicSim.tag2": "Simulador",
    "docs.title": "📚 Docs & Recursos",
    "docs.subtitle": "Docs de Molang, referencias de funciones Query, FMBE Wiki y más recursos de aprendizaje",
    "docs.fmbeWiki.desc": "Bedrock Dev — Referencia de comandos Display Entities",
    "docs.fmbeWiki.tag2": "Core",
    "docs.molangDoc1.title": "Docs Molang Bedrock (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Docs oficiales Stable Molang",
    "docs.molangDoc1.tag2": "Oficial",
    "docs.molangDoc2.title": "Docs Molang Bedrock (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Conceptos de Molang explicados",
    "docs.molangDoc2.tag2": "Conceptos",
    "docs.molangDoc3.title": "Docs Molang Bedrock (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Lista de funciones Query de Molang",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Lista de funciones Query de Molang (espejo chino)",
    "docs.bedevMolang.tag2": "Chino",
    "docs.queryRef.title": "Referencia de funciones Query",
    "docs.queryRef.desc": "Microsoft Learn — Lista completa de funciones Molang Query",
    "docs.queryRef.tag2": "Oficial",
    "docs.queryRef.tag3": "Chino",
    "footer.copyright": "🄯 {year} FMBE"
  },
  pt: {
    "nav.tools": "Ferramentas",
    "nav.simulators": "Simuladores",
    "nav.docs": "Docs",
    "hero.description": "Um hub para a tecnologia de comandos Display Entity do Minecraft Bedrock Edition. Coletando simuladores, conversores, docs e recursos para ajudá-lo a começar com FMBE.",
    "hero.exploreButton": "Explorar ferramentas",
    "tools.title": "🛠️ Ferramentas",
    "tools.subtitle": "Conversores e utilitários para impulsionar sua eficiência de desenvolvimento FMBE",
    "tools.bfConverter.title": "Conversor BF",
    "tools.bfConverter.desc": "BB-CVT-FMBE — Ferramenta de conversão de formato de dados para FMBE",
    "tools.bfConverter.tag1": "Conversor",
    "tools.bfConverter.tag2": "China",
    "tools.molangGrapher.desc": "Visualizador de funções Molang math, pré-visualização em tempo real de expressões",
    "tools.molangGrapher.tag2": "Visualizador",
    "simulators.title": "🎮 Simuladores",
    "simulators.subtitle": "Simulação multi-bloco e geração de comandos, cobrindo as edições Advanced, Basic e Dual",
    "simulators.advancedBadge": "Avançado",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "Sim Multi-bloco",
    "simulators.multiBlock.desc": "Geração automática de comandos, suporta importação e expressões simples",
    "simulators.multiBlock.tag1": "Auto-gen",
    "simulators.multiBlock.tag2": "Importar",
    "simulators.multiBlock.tag3": "Expressão",
    "simulators.desmos3dJP1.desc": "Simulação de gráficos 3D online — Edição EX/AD",
    "simulators.desmos3dCN1.desc": "Sim Multi-bloco — Edição Advanced",
    "simulators.desmos3dCN2.desc": "Sim Multi-bloco — Edição Advanced (Alternativa)",
    "simulators.normalBadge": "Básico",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "Geração automática de comandos de atribuição",
    "simulators.fmbeSim.tag1": "Auto-gen",
    "simulators.fmbeSim.tag2": "Atribuição",
    "simulators.desmos3dJP2.desc": "Simulação de gráficos 3D online — Edição Basic",
    "simulators.dualBadge": "Dual",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "Simulador FMBE que suporta ambas as edições",
    "simulators.basicSim.tag1": "Dual",
    "simulators.basicSim.tag2": "Simulador",
    "docs.title": "📚 Docs & Recursos",
    "docs.subtitle": "Docs Molang, referências de funções Query, FMBE Wiki e mais recursos de aprendizado",
    "docs.fmbeWiki.desc": "Bedrock Dev — Referência de comandos Display Entities",
    "docs.fmbeWiki.tag2": "Core",
    "docs.molangDoc1.title": "Docs Molang Bedrock (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Docs oficiais Stable Molang",
    "docs.molangDoc1.tag2": "Oficial",
    "docs.molangDoc2.title": "Docs Molang Bedrock (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Conceitos de Molang explicados",
    "docs.molangDoc2.tag2": "Conceitos",
    "docs.molangDoc3.title": "Docs Molang Bedrock (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Lista de funções Query do Molang",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Lista de funções Query do Molang (espelho chinês)",
    "docs.bedevMolang.tag2": "Chinês",
    "docs.queryRef.title": "Referência de funções Query",
    "docs.queryRef.desc": "Microsoft Learn — Lista completa de funções Molang Query",
    "docs.queryRef.tag2": "Oficial",
    "docs.queryRef.tag3": "Chinês",
    "footer.copyright": "🄯 {year} FMBE"
  },
  de: {
    "nav.tools": "Werkzeuge",
    "nav.simulators": "Simulatoren",
    "nav.docs": "Docs",
    "hero.description": "Ein Hub für Minecraft Bedrock Edition Display Entity-Befehlstechnologie. Sammlung von Simulatoren, Konvertern, Docs und Ressourcen, um Ihnen den Einstieg in FMBE zu erleichtern.",
    "hero.exploreButton": "Werkzeuge durchsuchen",
    "tools.title": "🛠️ Werkzeuge",
    "tools.subtitle": "Konverter und Dienstprogramme zur Steigerung Ihrer FMBE-Entwicklungseffizienz",
    "tools.bfConverter.title": "BF-Konverter",
    "tools.bfConverter.desc": "BB-CVT-FMBE — Datenformat-Konverter für FMBE",
    "tools.bfConverter.tag1": "Konverter",
    "tools.bfConverter.tag2": "China",
    "tools.molangGrapher.desc": "Molang math Funktions-Visualizer, Echtzeit-Vorschau von Ausdrücken",
    "tools.molangGrapher.tag2": "Visualizer",
    "simulators.title": "🎮 Simulatoren",
    "simulators.subtitle": "Multi-Block-Simulation und Befehlsgenerierung, Advanced/Basic/Dual Editionen",
    "simulators.advancedBadge": "Fortgeschritten",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "Multi-Block-Sim",
    "simulators.multiBlock.desc": "Automatische Befehlsgenerierung, unterstützt Import und einfache Ausdrücke",
    "simulators.multiBlock.tag1": "Auto-gen",
    "simulators.multiBlock.tag2": "Import",
    "simulators.multiBlock.tag3": "Ausdruck",
    "simulators.desmos3dJP1.desc": "Online 3D-Grafiksimulation — EX/AD Edition",
    "simulators.desmos3dCN1.desc": "Multi-Block-Sim — Advanced Edition",
    "simulators.desmos3dCN2.desc": "Multi-Block-Sim — Advanced Edition (Alternative)",
    "simulators.normalBadge": "Basis",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "Automatische Generierung von Zuweisungsbefehlen",
    "simulators.fmbeSim.tag1": "Auto-gen",
    "simulators.fmbeSim.tag2": "Zuweisung",
    "simulators.desmos3dJP2.desc": "Online 3D-Grafiksimulation — Basic Edition",
    "simulators.dualBadge": "Dual",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "FMBE-Simulator mit Unterstützung für beide Editionen",
    "simulators.basicSim.tag1": "Dual",
    "simulators.basicSim.tag2": "Simulator",
    "docs.title": "📚 Docs & Ressourcen",
    "docs.subtitle": "Molang-Dokumente, Query-Funktionsreferenzen, FMBE Wiki und weitere Lernressourcen",
    "docs.fmbeWiki.desc": "Bedrock Dev — Display Entities Befehlsreferenz",
    "docs.fmbeWiki.tag2": "Kern",
    "docs.molangDoc1.title": "Bedrock Molang Docs (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Offizielle Stable Molang Docs",
    "docs.molangDoc1.tag2": "Offiziell",
    "docs.molangDoc2.title": "Bedrock Molang Docs (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Molang-Konzepte erklärt",
    "docs.molangDoc2.tag2": "Konzepte",
    "docs.molangDoc3.title": "Bedrock Molang Docs (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Molang Query-Funktionsliste",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Molang Query-Funktionsliste (Chinesischer Spiegel)",
    "docs.bedevMolang.tag2": "Chinesisch",
    "docs.queryRef.title": "Query-Funktionsreferenz",
    "docs.queryRef.desc": "Microsoft Learn — Vollständige Molang Query-Funktionsliste",
    "docs.queryRef.tag2": "Offiziell",
    "docs.queryRef.tag3": "Chinesisch",
    "footer.copyright": "🄯 {year} FMBE"
  },
  hi: {
    "nav.tools": "उपकरण",
    "nav.simulators": "सिम्युलेटर",
    "nav.docs": "दस्तावेज़",
    "hero.description": "Minecraft Bedrock Edition Display Entity कमांड तकनीक के लिए एक हब। सिम्युलेटर, कन्वर्टर, दस्तावेज़ और संसाधन एकत्र करना, FMBE को जल्दी शुरू करने में मदद।",
    "hero.exploreButton": "उपकरण ब्राउज़ करें",
    "tools.title": "🛠️ उपकरण",
    "tools.subtitle": "FMBE विकास दक्षता बढ़ाने के लिए कन्वर्टर और उपयोगिताएँ",
    "tools.bfConverter.title": "BF कन्वर्टर",
    "tools.bfConverter.desc": "BB-CVT-FMBE — FMBE के लिए डेटा प्रारूप रूपांतरण उपकरण",
    "tools.bfConverter.tag1": "कन्वर्टर",
    "tools.bfConverter.tag2": "चीन",
    "tools.molangGrapher.desc": "Molang math फलन विज़ुअलाइज़र, गणितीय अभिव्यक्तियों का रियल-टाइम पूर्वावलोकन",
    "tools.molangGrapher.tag2": "विज़ुअलाइज़र",
    "simulators.title": "🎮 सिम्युलेटर",
    "simulators.subtitle": "मल्टी-ब्लॉक सिम्युलेशन और कमांड जनरेशन, Advanced/Basic/Dual संस्करण",
    "simulators.advancedBadge": "उन्नत",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "मल्टी-ब्लॉक Sim",
    "simulators.multiBlock.desc": "कमांड स्वतः जनरेशन, इम्पोर्ट और सरल अभिव्यक्तियाँ समर्थित",
    "simulators.multiBlock.tag1": "स्वतः-जनरेशन",
    "simulators.multiBlock.tag2": "इम्पोर्ट",
    "simulators.multiBlock.tag3": "अभिव्यक्ति",
    "simulators.desmos3dJP1.desc": "EX/AD Edition ऑनलाइन 3D ग्राफ सिम्युलेशन",
    "simulators.desmos3dCN1.desc": "मल्टी-ब्लॉक Sim — Advanced Edition",
    "simulators.desmos3dCN2.desc": "मल्टी-ब्लॉक Sim — Advanced Edition (वैकल्पिक)",
    "simulators.normalBadge": "बेसिक",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "असाइनमेंट कमांड स्वतः जनरेशन",
    "simulators.fmbeSim.tag1": "स्वतः-जनरेशन",
    "simulators.fmbeSim.tag2": "असाइनमेंट",
    "simulators.desmos3dJP2.desc": "Basic Edition ऑनलाइन 3D ग्राफ सिम्युलेशन",
    "simulators.dualBadge": "डुअल",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "दोनों संस्करणों का समर्थन करने वाला FMBE सिम्युलेटर",
    "simulators.basicSim.tag1": "डुअल",
    "simulators.basicSim.tag2": "सिम्युलेटर",
    "docs.title": "📚 दस्तावेज़ और संसाधन",
    "docs.subtitle": "Molang दस्तावेज़, Query फलन संदर्भ, FMBE Wiki और अन्य सीखने के संसाधन",
    "docs.fmbeWiki.desc": "Bedrock Dev — Display Entities कमांड संदर्भ",
    "docs.fmbeWiki.tag2": "कोर",
    "docs.molangDoc1.title": "Bedrock Molang दस्तावेज़ (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Stable Molang आधिकारिक दस्तावेज़",
    "docs.molangDoc1.tag2": "आधिकारिक",
    "docs.molangDoc2.title": "Bedrock Molang दस्तावेज़ (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Molang अवधारणाएँ समझाई गई",
    "docs.molangDoc2.tag2": "अवधारणाएँ",
    "docs.molangDoc3.title": "Bedrock Molang दस्तावेज़ (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Molang Query फलन सूची",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Molang Query फलन सूची (चीनी मिरर)",
    "docs.bedevMolang.tag2": "चीनी",
    "docs.queryRef.title": "Query फलन संदर्भ",
    "docs.queryRef.desc": "Microsoft Learn — पूर्ण Molang Query फलन सूची",
    "docs.queryRef.tag2": "आधिकारिक",
    "docs.queryRef.tag3": "चीनी",
    "footer.copyright": "🄯 {year} FMBE"
  },
  tl: {
    "nav.tools": "Mga Tool",
    "nav.simulators": "Mga Simulator",
    "nav.docs": "Docs",
    "hero.description": "Isang hub para sa Minecraft Bedrock Edition Display Entity command technology. Nagtitipon ng mga simulator, converter, docs at resources para tulungan kang makapagsimula sa FMBE.",
    "hero.exploreButton": "Mag-browse ng mga Tool",
    "tools.title": "🛠️ Mga Tool",
    "tools.subtitle": "Mga converter at utility para pabilisin ang iyong FMBE development efficiency",
    "tools.bfConverter.title": "BF Converter",
    "tools.bfConverter.desc": "BB-CVT-FMBE — Tool sa pag-convert ng format ng data para sa FMBE",
    "tools.bfConverter.tag1": "Converter",
    "tools.bfConverter.tag2": "Tsina",
    "tools.molangGrapher.desc": "Molang math function visualizer, real-time preview ng mga expression",
    "tools.molangGrapher.tag2": "Visualizer",
    "simulators.title": "🎮 Mga Simulator",
    "simulators.subtitle": "Multi-block simulation at command generation, sumasaklaw sa Advanced, Basic at Dual editions",
    "simulators.advancedBadge": "Advanced",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "Multi-block Sim",
    "simulators.multiBlock.desc": "Auto-generate ng mga command, sumusuporta ng import at simpleng expression",
    "simulators.multiBlock.tag1": "Auto-gen",
    "simulators.multiBlock.tag2": "Import",
    "simulators.multiBlock.tag3": "Expression",
    "simulators.desmos3dJP1.desc": "EX/AD Edition online 3D graph simulation",
    "simulators.desmos3dCN1.desc": "Multi-block Sim — Advanced Edition",
    "simulators.desmos3dCN2.desc": "Multi-block Sim — Advanced Edition (Alternative)",
    "simulators.normalBadge": "Basic",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "Auto-generate ng mga assignment command",
    "simulators.fmbeSim.tag1": "Auto-gen",
    "simulators.fmbeSim.tag2": "Assignment",
    "simulators.desmos3dJP2.desc": "Basic Edition online 3D graph simulation",
    "simulators.dualBadge": "Dual",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "FMBE simulator na sumusuporta sa parehong editions",
    "simulators.basicSim.tag1": "Dual",
    "simulators.basicSim.tag2": "Simulator",
    "docs.title": "📚 Docs & Resources",
    "docs.subtitle": "Molang docs, Query function references, FMBE Wiki at iba pang learning resources",
    "docs.fmbeWiki.desc": "Bedrock Dev — Display Entities command reference",
    "docs.fmbeWiki.tag2": "Core",
    "docs.molangDoc1.title": "Bedrock Molang Docs (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Opisyal na Stable Molang docs",
    "docs.molangDoc1.tag2": "Opisyal",
    "docs.molangDoc2.title": "Bedrock Molang Docs (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Molang concepts explained",
    "docs.molangDoc2.tag2": "Concepts",
    "docs.molangDoc3.title": "Bedrock Molang Docs (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Molang query function list",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Molang query function list (Chinese mirror)",
    "docs.bedevMolang.tag2": "Chinese",
    "docs.queryRef.title": "Query Function Reference",
    "docs.queryRef.desc": "Microsoft Learn — Kumpletong Molang Query function list",
    "docs.queryRef.tag2": "Opisyal",
    "docs.queryRef.tag3": "Chinese",
    "footer.copyright": "🄯 {year} FMBE"
  },
  vi: {
    "nav.tools": "Công cụ",
    "nav.simulators": "Trình mô phỏng",
    "nav.docs": "Tài liệu",
    "hero.description": "Một hub cho công nghệ lệnh Display Entity của Minecraft Bedrock Edition. Thu thập các trình mô phỏng, bộ chuyển đổi, tài liệu và tài nguyên để giúp bạn bắt đầu với FMBE.",
    "hero.exploreButton": "Duyệt công cụ",
    "tools.title": "🛠️ Công cụ",
    "tools.subtitle": "Bộ chuyển đổi và tiện ích để tăng hiệu quả phát triển FMBE của bạn",
    "tools.bfConverter.title": "Bộ chuyển đổi BF",
    "tools.bfConverter.desc": "BB-CVT-FMBE — Công cụ chuyển đổi định dạng dữ liệu cho FMBE",
    "tools.bfConverter.tag1": "Bộ chuyển đổi",
    "tools.bfConverter.tag2": "Trung Quốc",
    "tools.molangGrapher.desc": "Trình trực quan hóa hàm Molang math, xem trước biểu thức theo thời gian thực",
    "tools.molangGrapher.tag2": "Trực quan hóa",
    "simulators.title": "🎮 Trình mô phỏng",
    "simulators.subtitle": "Mô phỏng đa khối và tạo lệnh, bao gồm các phiên bản Advanced, Basic và Dual",
    "simulators.advancedBadge": "Nâng cao",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "Mô phỏng Đa khối",
    "simulators.multiBlock.desc": "Tự động tạo lệnh, hỗ trợ nhập và biểu thức đơn giản",
    "simulators.multiBlock.tag1": "Tự động tạo",
    "simulators.multiBlock.tag2": "Nhập",
    "simulators.multiBlock.tag3": "Biểu thức",
    "simulators.desmos3dJP1.desc": "Mô phỏng đồ thị 3D trực tuyến — Phiên bản EX/AD",
    "simulators.desmos3dCN1.desc": "Mô phỏng Đa khối — Phiên bản Advanced",
    "simulators.desmos3dCN2.desc": "Mô phỏng Đa khối — Phiên bản Advanced (Thay thế)",
    "simulators.normalBadge": "Cơ bản",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "Tự động tạo lệnh gán",
    "simulators.fmbeSim.tag1": "Tự động tạo",
    "simulators.fmbeSim.tag2": "Gán lệnh",
    "simulators.desmos3dJP2.desc": "Mô phỏng đồ thị 3D trực tuyến — Phiên bản Basic",
    "simulators.dualBadge": "Kép",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "Trình mô phỏng FMBE hỗ trợ cả hai phiên bản",
    "simulators.basicSim.tag1": "Kép",
    "simulators.basicSim.tag2": "Trình mô phỏng",
    "docs.title": "📚 Tài liệu & Tài nguyên",
    "docs.subtitle": "Tài liệu Molang, tham chiếu hàm Query, FMBE Wiki và thêm tài nguyên học tập",
    "docs.fmbeWiki.desc": "Bedrock Dev — Tham chiếu lệnh Display Entities",
    "docs.fmbeWiki.tag2": "Cốt lõi",
    "docs.molangDoc1.title": "Tài liệu Molang Bedrock (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Tài liệu chính thức Stable Molang",
    "docs.molangDoc1.tag2": "Chính thức",
    "docs.molangDoc2.title": "Tài liệu Molang Bedrock (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Khái niệm Molang giải thích",
    "docs.molangDoc2.tag2": "Khái niệm",
    "docs.molangDoc3.title": "Tài liệu Molang Bedrock (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Danh sách hàm Query Molang",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Danh sách hàm Query Molang (phản chiếu Trung Quốc)",
    "docs.bedevMolang.tag2": "Trung Quốc",
    "docs.queryRef.title": "Tham chiếu hàm Query",
    "docs.queryRef.desc": "Microsoft Learn — Danh sách đầy đủ hàm Molang Query",
    "docs.queryRef.tag2": "Chính thức",
    "docs.queryRef.tag3": "Trung Quốc",
    "footer.copyright": "🄯 {year} FMBE"
  },
  ru: {
    "nav.tools": "Инструменты",
    "nav.simulators": "Симуляторы",
    "nav.docs": "Документация",
    "hero.description": "Хаб для технологии команд Display Entity Minecraft Bedrock Edition. Сборник симуляторов, конвертеров, документации и ресурсов, чтобы помочь вам начать работу с FMBE.",
    "hero.exploreButton": "Обзор инструментов",
    "tools.title": "🛠️ Инструменты",
    "tools.subtitle": "Конвертеры и утилиты для повышения эффективности разработки FMBE",
    "tools.bfConverter.title": "BF Конвертер",
    "tools.bfConverter.desc": "BB-CVT-FMBE — Инструмент конвертации формата данных для FMBE",
    "tools.bfConverter.tag1": "Конвертер",
    "tools.bfConverter.tag2": "Китай",
    "tools.molangGrapher.desc": "Визуализатор функций Molang math, предпросмотр выражений в реальном времени",
    "tools.molangGrapher.tag2": "Визуализатор",
    "simulators.title": "🎮 Симуляторы",
    "simulators.subtitle": "Мультиблочная симуляция и генерация команд, издания Advanced/Basic/Dual",
    "simulators.advancedBadge": "Продвинутый",
    "simulators.advancedLabel": "EX / AD Edition",
    "simulators.multiBlock.title": "Мультиблочный Sim",
    "simulators.multiBlock.desc": "Автогенерация команд, поддержка импорта и простых выражений",
    "simulators.multiBlock.tag1": "Автогенерация",
    "simulators.multiBlock.tag2": "Импорт",
    "simulators.multiBlock.tag3": "Выражение",
    "simulators.desmos3dJP1.desc": "Онлайн симуляция 3D-графиков — Издание EX/AD",
    "simulators.desmos3dCN1.desc": "Мультиблочный Sim — Advanced Edition",
    "simulators.desmos3dCN2.desc": "Мультиблочный Sim — Advanced Edition (Альтернатива)",
    "simulators.normalBadge": "Базовый",
    "simulators.normalLabel": "Basic Edition",
    "simulators.fmbeSim.desc": "Автогенерация команд присваивания",
    "simulators.fmbeSim.tag1": "Автогенерация",
    "simulators.fmbeSim.tag2": "Присваивание",
    "simulators.desmos3dJP2.desc": "Онлайн симуляция 3D-графиков — Издание Basic",
    "simulators.dualBadge": "Двойной",
    "simulators.dualLabel": "Dual Edition",
    "simulators.basicSim.desc": "Симулятор FMBE с поддержкой обоих изданий",
    "simulators.basicSim.tag1": "Двойной",
    "simulators.basicSim.tag2": "Симулятор",
    "docs.title": "📚 Документация & Ресурсы",
    "docs.subtitle": "Документация Molang, справочник функций Query, FMBE Wiki и другие ресурсы для обучения",
    "docs.fmbeWiki.desc": "Bedrock Dev — Справочник команд Display Entities",
    "docs.fmbeWiki.tag2": "Основа",
    "docs.molangDoc1.title": "Документация Molang Bedrock (I)",
    "docs.molangDoc1.desc": "bedrock.dev — Официальная документация Stable Molang",
    "docs.molangDoc1.tag2": "Официально",
    "docs.molangDoc2.title": "Документация Molang Bedrock (II)",
    "docs.molangDoc2.desc": "wiki.bedrock.dev — Концепции Molang объяснены",
    "docs.molangDoc2.tag2": "Концепции",
    "docs.molangDoc3.title": "Документация Molang Bedrock (III)",
    "docs.molangDoc3.desc": "mcbe-dev.net — Список функций Query Molang",
    "docs.molangDoc3.tag2": "Query",
    "docs.bedevMolang.desc": "bedev.cn — Список функций Query Molang (китайское зеркало)",
    "docs.bedevMolang.tag2": "Китайский",
    "docs.queryRef.title": "Справочник функций Query",
    "docs.queryRef.desc": "Microsoft Learn — Полный список функций Molang Query",
    "docs.queryRef.tag2": "Официально",
    "docs.queryRef.tag3": "Китайский",
    "footer.copyright": "🄯 {year} FMBE"
  }
};

// Language names for display
const languageNames = {
  en: "English", zh: "中文", ja: "日本語", ko: "한국어",
  fr: "Français", es: "Español", pt: "Português", de: "Deutsch",
  hi: "हिन्दी", tl: "Tagalog", vi: "Tiếng Việt", ru: "Русский"
};

// Current locale
let currentLocale = 'en';

// Update all translations
function updateTranslations() {
  localStorage.setItem('locale', currentLocale);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = messages[currentLocale]?.[key];
    if (translation) {
      if (translation.includes('<')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });
  // Update copyright
  const copyrightEl = document.getElementById('copyright');
  if (copyrightEl) {
    const year = new Date().getFullYear();
    copyrightEl.textContent = (messages[currentLocale]?.["footer.copyright"] || messages.en["footer.copyright"]).replace('{year}', year);
  }
  // Update html lang
  document.documentElement.lang = currentLocale === 'zh' ? 'zh-CN' : currentLocale;
  // Update title
  const titleMap = {
    en: "FMBE | Tools & Resources",
    zh: "FMBE | 工具与资料汇总",
    ja: "FMBE | ツールとリソース",
    ko: "FMBE | 도구 및 자료",
    fr: "FMBE | Outils et Ressources",
    es: "FMBE | Herramientas y Recursos",
    pt: "FMBE | Ferramentas e Recursos",
    de: "FMBE | Werkzeuge & Ressourcen",
    hi: "FMBE | उपकरण और संसाधन",
    tl: "FMBE | Mga Tool at Resources",
    vi: "FMBE | Công cụ & Tài nguyên",
    ru: "FMBE | Инструменты и Ресурсы"
  };
  document.title = titleMap[currentLocale] || titleMap.en;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');
  const currentLangSpan = document.getElementById('currentLang');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
    langDropdown.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', () => {
        const newLocale = option.dataset.lang;
        if (newLocale !== currentLocale && messages[newLocale]) {
          langDropdown.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
          currentLocale = newLocale;
          localStorage.setItem('locale', newLocale);
          if (currentLangSpan) currentLangSpan.textContent = languageNames[newLocale];
          updateTranslations();
        }
        langDropdown.classList.remove('show');
      });
    });
  }

  // Detect browser language on first visit
  const savedLocale = localStorage.getItem('locale');
  let detectedLocale = 'en';
  if (savedLocale && messages[savedLocale]) {
    detectedLocale = savedLocale;
  } else {
    const browserLang = navigator.language.split('-')[0];
    if (messages[browserLang]) {
      detectedLocale = browserLang;
    }
  }
  currentLocale = detectedLocale;
  if (currentLangSpan) currentLangSpan.textContent = languageNames[currentLocale];
  if (langDropdown) {
    langDropdown.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === currentLocale);
    });
  }
  updateTranslations();

  // Show body after translations applied
  document.body.style.opacity = '1';

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Hero particles
  const heroParticles = document.getElementById('heroParticles');
  if (heroParticles) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      const duration = Math.random() * 10 + 15;
      particle.style.setProperty('--duration', `${duration}s`);
      const drift = (Math.random() - 0.5) * 200;
      particle.style.setProperty('--drift', `${drift}px`);
      particle.style.animationDelay = `${Math.random() * 20}s`;
      heroParticles.appendChild(particle);
    }
  }

  // Back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 300);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.card, .section-header, .edition-group').forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Dynamic copyright year
  const copyrightEl = document.getElementById('copyright');
  if (copyrightEl) {
    const year = new Date().getFullYear();
    copyrightEl.textContent = (messages[currentLocale]?.["footer.copyright"] || messages.en["footer.copyright"]).replace('{year}', year);
  }
});
