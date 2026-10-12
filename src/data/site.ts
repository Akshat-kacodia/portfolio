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
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'work', label: 'Work', href: '/#work' },
  { id: 'stack', label: 'Stack', href: '/#stack' },
  { id: 'gallery', label: 'Gallery', href: '/#gallery' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
];

/** Gallery — drop photos in public/gallery/ named 1.jpg, 2.jpg … and describe each here, in the same order. */
export const gallery: { title: string; caption: string; date?: string }[] = [
  {
    title: 'AISYWLC 2025, Ahmedabad',
    caption: 'Represented the IEEE Delhi Section with the IEEE NSUT team at the All India Student, Young Professional, Women in Engineering and Life Members Congress, hosted by Adani University and Nirma University under the IEEE Gujarat Section. Three days of talks and conversations with mentors and speakers from IIT Patna, ERDA Vadodara and ISRO Ahmedabad.',
    date: 'Oct 31 – Nov 2, 2025',
  },
  {
    title: 'Outstanding Student Volunteer Award',
    caption: 'Received the Outstanding Student Volunteer Award from the IEEE Delhi Section for my contributions as Vice Chairperson of the IEEE NSUT Student Branch (2025–26), presented at DSSYWLC’25, hosted at NSUT.',
    date: '2025',
  },
  {
    title: 'Certificate of Appreciation, TENSYMP 2024',
    caption: 'Received a Certificate of Appreciation for my contributions as a member of the Student Organizing Committee for IEEE TENSYMP 2024, held at NSUT.',
    date: 'Sep 27 – 29, 2024',
  },
  {
    title: 'Team IEEE NSUT',
    caption: 'With the IEEE NSUT team during my tenure as Vice Chairperson of the student branch (2025–26).',
    date: '2025–26',
  },
  // { title: 'Next photo', caption: 'A line or two about the moment.', date: '2026' },
];

/** Experience & journey (not shown on the site right now) — chronological, left to right. */
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
