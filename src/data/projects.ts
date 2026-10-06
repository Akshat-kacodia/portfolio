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
    slug: 'campus-sphere',
    num: '01',
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
    num: '02',
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
    num: '03',
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
    slug: 'breakhis',
    num: '04',
    title: 'BreakHis Classification',
    category: 'AI / ML',
    type: 'Research',
    year: '2025',
    shots: 'wide',
    oneLiner: 'Breast cancer histopathology classification.',
    summary: 'EfficientNet-B5 with a Transformer encoder for 8-class classification on the BreakHis dataset (7,909 images).',
    stack: ['PyTorch', 'EfficientNet-B5', 'Transformer', 'OpenCV', 'Albumentations'],
    facts: [
      { k: 'Dataset', v: 'BreakHis · 7,909 images · 8 classes' },
      { k: 'Model', v: 'EfficientNet-B5 + Transformer encoder' },
      { k: 'Tech stack', v: 'PyTorch, OpenCV, Albumentations' },
    ],
    links: { github: '' },
    overview: 'A deep-learning project that classifies breast cancer histopathology images into eight benign and malignant subtypes.',
    problem:
      'Subtypes can look alike, slides are captured at several magnifications, and stain colour varies between samples. A model has to learn the tissue, not the scanner.',
    built:
      'A classifier on the BreakHis dataset (7,909 images, 8 classes) that pairs an EfficientNet-B5 backbone with a Transformer encoder, trained with preprocessing that is safe for pathology images.',
    engineering: [
      'EfficientNet-B5 for feature extraction, followed by a Transformer encoder, in PyTorch.',
      'Pathology-safe preprocessing and augmentation with OpenCV and Albumentations.',
      'Multi-magnification analysis.',
    ],
    features: ['8-class classification', 'Hybrid CNN + Transformer model', 'Multi-magnification analysis'],
    outcome: 'A research pipeline for multi-class histopathology classification.',
  },
  {
    slug: 'waste-segregation',
    num: '05',
    title: 'Waste Segregation',
    category: 'Computer Vision',
    type: 'Computer vision',
    year: '2025',
    shots: 'wide',
    oneLiner: 'Real-time waste detection and classification.',
    summary: 'Detects waste in a live camera feed and sorts it into recyclable, non-recyclable and organic.',
    stack: ['Python', 'Object detection', 'OpenCV', 'Deep learning'],
    facts: [
      { k: 'Task', v: 'Detection + classification' },
      { k: 'Classes', v: 'Recyclable · Non-recyclable · Organic' },
      { k: 'Runs on', v: 'Live camera feed' },
    ],
    links: { github: '' },
    overview: 'A computer vision system that looks at waste through a camera and tells you which bin it belongs in.',
    problem: 'Sorting waste at the source makes recycling work, but most people are not sure what goes where.',
    built: 'A real-time pipeline that detects items in the frame and classifies each one as recyclable, non-recyclable or organic.',
    engineering: ['Object detection to find each item in the frame.', 'Classification into three waste categories.', 'Real-time inference on a camera stream.'],
    features: ['Multi-object detection', 'Three-way classification', 'Real-time camera inference'],
    outcome: 'A working real-time prototype for sorting waste.',
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
