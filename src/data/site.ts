// ─────────────────────────────────────────────────────────────
//  Everything personal lives here. Edit this file, not the layout.
//  Empty values render as a clearly marked "add this" slot.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Akshat Kacodia',
  first: 'Akshat',
  title: 'Akshat Kacodia — CS & AI student at NSUT, Software Engineer',
  description:
    'Personal website of Akshat Kacodia, a Computer Science & AI student at NSUT, Delhi. I build Android apps, ML systems and software people actually use: Campus Sphere (500+ downloads), the IEEE NSUT App, FarmAssist, BreakHis and more.',
  role: 'Android Developer · AI/ML Engineer · Builder',
  location: 'Delhi, India',
  school: 'NSUT',
  email: 'akshatkacodia42@gmail.com',

  github: 'https://github.com/Akshat-kacodia',
  linkedin: 'https://www.linkedin.com/in/akshat-kacodia-554450293/',
  leetcode: 'https://leetcode.com/u/Akshat_kacodia/',

  // Put the PDF at public/resume.pdf
  resume: '/resume.pdf',

  // Photos — drop files at these paths (jpg / png / webp all work, same name).
  photo: 'images/akshat',        // hero portrait (4:5 works best)
};

/** Proof strip. Only true numbers. */
export const metrics = [
  { value: '500+', label: 'App downloads', note: 'Campus Sphere', href: '/work/campus-sphere' },
  { value: '300+', label: 'IEEE members', note: 'IEEE NSUT App', href: '/work/ieee-nsut-app' },
  { value: '500+', label: 'LeetCode problems', note: 'Problem solving', href: 'https://leetcode.com/u/Akshat_kacodia/' },
  { value: '6+', label: 'Major projects', note: 'Mobile · AI/ML · Systems', href: '#work' },
];

export const nav = [
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'journey', label: 'Experience', href: '/#journey' },
  { id: 'stack', label: 'Stack', href: '/#stack' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

/** Experience & journey — chronological, left to right. */
export const journey = [
  { year: '2023', title: 'NSUT', lines: ['B.Tech · Computer Science & AI'], tag: 'Education' },
  { year: '2024', title: 'IEEE NSUT', lines: ['Vice Chairperson', 'Leadership · Engineering · Community'], tag: 'Leadership' },
  { year: '2024', title: 'Campus Sphere', lines: ['Built and launched', '500+ downloads'], tag: 'Product', href: '/work/campus-sphere' },
  { year: '2024', title: 'IEEE NSUT App', lines: ['Cross-platform app', 'Used by 300+ members'], tag: 'Product', href: '/work/ieee-nsut-app' },
  { year: '2025', title: 'AI / Research', lines: ['FarmAssist', 'BreakHis', 'Waste Segregation', 'RAG Research IDE'], tag: 'Research' },
  { year: '2026', title: 'Building', lines: ['Final year at NSUT', 'Open to internships and new projects'], tag: 'Now', now: true },
];

/** Toolkit — general, grouped by area. */
export const toolkit = [
  { group: 'Languages', note: 'What I think in', items: ['C++', 'Kotlin', 'Python', 'Dart'] },
  { group: 'Mobile', note: 'Native & cross-platform', items: ['Android', 'Jetpack Compose', 'Flutter'] },
  { group: 'AI / ML', note: 'Vision & learning', items: ['PyTorch', 'OpenCV', 'Scikit-learn', 'TensorFlow Lite'] },
  { group: 'Backend & data', note: 'Storage & APIs', items: ['Firebase', 'Room', 'MySQL', 'REST APIs'] },
  { group: 'AI systems', note: 'Retrieval & LLMs', items: ['RAG', 'FAISS', 'Embeddings', 'Gemini'] },
];
