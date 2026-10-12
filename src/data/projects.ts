// ─────────────────────────────────────────────────────────────
//  Projects. Screenshots are picked up automatically from
//  public/work/<slug>/1.png, 2.png … (png / jpg / webp).
//  Until they exist, a marked placeholder shows where they go.
// ─────────────────────────────────────────────────────────────

export interface Project {
  slug: string;
  num: string;
  title: string;
  category: string;        // shown in lists: "Android", "AI / ML" …
  type: string;            // shown on the case study: "Mobile app"
  year: string;
  shots: 'phone' | 'wide'; // how screenshots are framed
  oneLiner: string;
  summary: string;
  metric?: string;         // verified only
  stack: string[];
  facts: { k: string; v: string }[];
  links: { github?: string | null; store?: string; demo?: string }; // github: null = no public repo // TODO(Akshat): add URLs
  overview: string;
  problem: string;
  built: string;
  engineering: string[];
  features: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: 'breakhis',
    num: '01',
    title: 'BreakHis Classification',
    category: 'AI / ML',
    type: 'Research',
    year: '2025',
    shots: 'wide',
    oneLiner: 'Breast cancer histopathology classification.',
    summary: 'A hybrid EfficientNet-B5 + Transformer model that classifies breast cancer histopathology images into 8 benign and malignant subtypes.',
    metric: '93.77% accuracy · 0.9936 macro-AUC',
    stack: ['PyTorch', 'EfficientNet-B5', 'Transformer', 'Grad-CAM', 'Albumentations'],
    facts: [
      { k: 'Dataset', v: 'BreakHis · 7,909 images · 8 classes · 4 magnifications' },
      { k: 'Model', v: 'EfficientNet-B5 + Transformer encoder' },
      { k: 'Results', v: '93.77% accuracy · 0.9379 weighted F1 · 0.9936 macro-AUC' },
      { k: 'Tech stack', v: 'PyTorch, OpenCV, Albumentations, Grad-CAM' },
    ],
    links: { github: '' },
    overview:
      'A research project on classifying breast cancer histopathology images into eight subtypes, four benign and four malignant, using a hybrid CNN + Transformer model.',
    problem:
      'Benign and malignant tissue can look very similar, the dataset is imbalanced (ductal carcinoma alone is 3,451 of 7,909 images), slides come at four magnifications (40X to 400X) and stain colour varies between samples. CNNs are good at local texture but miss wider tissue context.',
    built:
      'An EfficientNet-B5 backbone extracts features, which are pooled to a 7×7 grid and passed as 49 tokens through a Transformer encoder (8 attention heads) to model global context, then a classification head predicts one of 8 classes. One model was trained on all magnifications together and four more on each magnification separately, with Grad-CAM used to show which regions drive each prediction.',
    engineering: [
      'EfficientNet-B5 (ImageNet pretrained) + single-layer Transformer encoder, built in PyTorch.',
      'CLAHE-based normalisation and pathology-safe augmentation with OpenCV and Albumentations.',
      'Weighted sampling for class imbalance, plus label smoothing (ε = 0.1) and mixup (α = 0.4) against overfitting.',
      'AdamW with cosine warm restarts, mixed-precision training and test-time augmentation, trained on an NVIDIA T4.',
      'Grad-CAM heatmaps for interpretability.',
    ],
    features: [
      '8-class subtype classification',
      'Hybrid CNN + Transformer model',
      'All-magnification and per-magnification models',
      'Grad-CAM explanations',
    ],
    outcome:
      'The all-magnification model reached 93.77% test accuracy, a weighted F1 of 0.9379 and a macro-AUC of 0.9936. Among per-magnification models, 40X did best at 90.00% accuracy (AUC 0.9913). Tubular adenoma and papillary carcinoma were classified most reliably; lobular carcinoma was the hardest (F1 0.82).',
  },
  {
    slug: 'campus-sphere',
    num: '02',
    title: 'Campus Sphere',
    category: 'Android',
    type: 'Mobile app',
    year: '2024',
    shots: 'phone',
    oneLiner: 'A campus utility app for NSUT students.',
    summary: 'A campus utility app for NSUT students with attendance, timetable, results, notices and more.',
    metric: '500+ downloads',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Retrofit', 'Room', 'OkHttp'],
    facts: [
      { k: 'Platform', v: 'Android' },
      { k: 'Tech stack', v: 'Kotlin, Jetpack Compose, Firebase, Room, Retrofit, OkHttp' },
      { k: 'Users', v: '500+ downloads' },
    ],
    links: { github: null, store: 'https://play.google.com/store/apps/details?id=com.akshatkacodia.campussphere' },
    overview:
      'Campus Sphere is an Android app I built for students at NSUT. It brings the academic information we check every day into one place: attendance, timetable, results, notices, the academic calendar and project listings.',
    problem:
      'The information students needed was spread across multiple sources. Notices lived on the university website, timetables came as PDFs, results were on a separate portal. Checking one thing often meant opening three. I wanted the most frequently used academic workflows in one simple mobile app.',
    built:
      'A native Android app with a home screen built around what a student needs today, and dedicated screens for attendance, timetable, results and transcript, notices, the academic calendar and project listings, with search across all of it.',
    engineering: [
      'Kotlin with a UI written entirely in Jetpack Compose.',
      'Firebase as the backend for app data.',
      'Retrofit and OkHttp for networking, including collecting notices from the university website and organising them in the app.',
      'Room for storing data locally on the device.',
    ],
    features: ['Attendance tracking', 'Timetable', 'Results & transcript', 'Notices, collected and organised', 'Academic calendar', 'Project listings', 'Search'],
    outcome: 'Students started using it, and it has crossed 500 downloads.',
  },
  {
    slug: 'ieee-nsut-app',
    num: '03',
    title: 'IEEE NSUT App',
    category: 'Flutter',
    type: 'Mobile app',
    year: '2024',
    shots: 'phone',
    oneLiner: 'A cross-platform app for the IEEE NSUT community.',
    summary: 'Events, resources and community information for IEEE NSUT members, on Android and iOS.',
    metric: 'Used by 300+ members',
    stack: ['Flutter', 'Dart'],
    facts: [
      { k: 'Platform', v: 'Android & iOS' },
      { k: 'Tech stack', v: 'Flutter' },
      { k: 'Users', v: '300+ IEEE members' },
    ],
    links: { github: null },
    overview:
      'The IEEE NSUT App is a cross-platform app for our IEEE student branch. Members use it to keep up with events, find resources and know what is happening in the community.',
    problem:
      'A large student society runs on announcements, sign-ups and shared material. Spread across group chats and forms, things got lost, and new members had no single place to start.',
    built:
      'A Flutter app for Android and iOS with events, learning resources, community information and member-oriented features, built while I was part of the society’s leadership.',
    engineering: ['One Flutter codebase for both Android and iOS.', 'Structured around events, resources and community information.'],
    features: ['Events', 'Resources', 'Community information', 'Member features'],
    outcome: 'Used by 300+ IEEE NSUT members.',
  },
  {
    slug: 'farmassist',
    num: '04',
    title: 'FarmAssist',
    category: 'Computer Vision',
    type: 'Computer vision',
    year: '2025',
    shots: 'wide',
    oneLiner: 'Crop analysis from hyperspectral imagery.',
    summary: 'Machine learning on hyperspectral data (Indian Pines) with PCA and vegetation indices for agricultural analysis.',
    stack: ['Python', 'PyTorch', 'Computer Vision', 'Hyperspectral Imaging', 'PCA'],
    facts: [
      { k: 'Data', v: 'Indian Pines hyperspectral dataset' },
      { k: 'Methods', v: 'PCA, NDVI, NDWI, EVI, SAVI, NDRE' },
      { k: 'Area', v: 'Machine learning · Computer vision' },
    ],
    links: { github: '' },
    overview: 'FarmAssist is an agricultural analysis project built on hyperspectral imagery, where every pixel carries far more than three colour bands.',
    problem:
      'Crop stress, water content and soil differences show up in parts of the spectrum a normal camera cannot see. Hyperspectral data captures them, but it is high-dimensional and noisy, which makes it hard to use directly.',
    built:
      'A pipeline on the Indian Pines dataset that reduces the spectral dimension with PCA, computes vegetation and water indices, and uses machine learning to analyse the scene.',
    engineering: ['PCA to compress hundreds of spectral bands.', 'Spectral indices as features: NDVI, NDWI, EVI, SAVI and NDRE.', 'Machine learning models for land-cover analysis.'],
    features: ['Dimensionality reduction', 'Vegetation & water indices', 'Land-cover analysis'],
    outcome: 'A working path from raw hyperspectral data to interpretable crop-health information.',
  },
  {
    slug: 'waste-segregation',
    num: '05',
    title: 'Waste Segregation',
    category: 'Computer Vision',
    type: 'Research',
    year: '2025',
    shots: 'wide',
    oneLiner: 'Waste classification with a ResNet + Swin Transformer fusion.',
    summary: 'A hybrid ResNet-50 + Swin Transformer model that sorts waste images into 9 categories and groups them into waste types like recyclable, organic and hazardous.',
    metric: '94.73% accuracy on 36,408 images',
    stack: ['PyTorch', 'ResNet-50', 'Swin Transformer', 'U²-Net', 'Grad-CAM'],
    facts: [
      { k: 'Dataset', v: '36,408 images merged from public datasets · 9 classes' },
      { k: 'Model', v: 'ResNet-50 + Swin Transformer feature fusion' },
      { k: 'Results', v: '94.73% accuracy · 94.73% weighted F1 · AUC 0.9947–0.9999' },
      { k: 'Tech stack', v: 'PyTorch, Albumentations, U²-Net, Grad-CAM' },
    ],
    links: { github: '' },
    overview:
      'A computer vision system that looks at a piece of waste and tells you what it is and which kind of bin it belongs in.',
    problem:
      'Sorting waste at the source makes recycling work, but image classifiers often fail outside the lab: they lean on the background, break when lighting or setting changes, and confuse look-alike materials such as paper, cardboard and plastic.',
    built:
      'Two backbones run side by side: ResNet-50 picks up fine textures and Swin Transformer captures global context. Their features (2,048 + 768) are concatenated and classified into 9 categories (metal, glass, biological, paper, battery, cardboard, shoes, clothes, plastic), which map to broader waste types. A real-time inference demo shows Grad-CAM overlays on live predictions.',
    engineering: [
      'Merged several public datasets into 36,408 cleaned, de-duplicated images with a stratified 70/15/15 split.',
      'U²-Net foreground masks to swap backgrounds for indoor and outdoor scenes, reducing background bias.',
      'Heavy Albumentations pipeline plus CutMix and Remix batch mixing for robustness.',
      'AdamW with cosine annealing, 30 epochs, ImageNet-pretrained weights for both branches.',
      'Grad-CAM on the ResNet branch to check the model looks at the object, not the background.',
    ],
    features: [
      '9-class waste classification',
      'Grouping into waste types (recyclable, organic, hazardous and more)',
      'Background-agnostic training',
      'Real-time inference with Grad-CAM',
    ],
    outcome:
      'The fusion model reached 94.73% accuracy with 94.75% weighted precision and 94.73% weighted recall and F1, and per-class AUCs from 0.9947 to 0.9999. Batteries, clothes and biological waste scored above 96% F1; paper, plastic and cardboard were the hardest at around 92–94%.',
  },
  {
    slug: 'rag-research-ide',
    num: '06',
    title: 'RAG Research IDE',
    category: 'AI / RAG',
    type: 'AI system',
    year: '2025',
    shots: 'wide',
    oneLiner: 'A retrieval-augmented assistant for research papers.',
    summary: 'Semantic search over research papers with FAISS and sentence-transformers, and answers from Gemini grounded in what it retrieves.',
    stack: ['RAG', 'FAISS', 'Embeddings', 'Gemini', 'Python'],
    facts: [
      { k: 'Retrieval', v: 'FAISS + sentence-transformers' },
      { k: 'Generation', v: 'Gemini' },
      { k: 'For', v: 'Research-paper reading' },
    ],
    links: { github: '' },
    overview: 'A research assistant that lets you ask questions across a set of papers and get answers grounded in the papers themselves.',
    problem: 'Answering one question often means skimming many papers, and plain LLM answers about research can be confident and wrong.',
    built: 'An IDE-style tool that indexes papers, finds the most relevant passages by meaning, and has Gemini answer using those passages.',
    engineering: ['sentence-transformers embeddings for paper chunks.', 'A FAISS index for fast semantic search.', 'Gemini generates answers from the retrieved context.'],
    features: ['Semantic search', 'Research-paper retrieval', 'Grounded answers'],
    outcome: 'Faster literature reading, with answers you can trace back to a source.',
  },
];
