/**
 * Add new portfolio projects here.
 *
 * Required fields:
 * - number: display order
 * - title: project name
 * - type: short category shown above the title
 * - description: concise outcome-focused summary
 * - stack: array of technologies
 * - accent: Tailwind gradient classes
 *
 * Optional links:
 * - github: source repository URL
 * - demo: deployed app, API, notebook, or case-study URL
 */
export const projects = [
  {
    number: '01',
    title: 'Student Grade Prediction System',
    type: 'Applied machine learning',
    description: 'Built an early-risk screening workflow from 30 start-of-term features, deliberately excluding prior grades. The app compares six classifiers, tunes Random Forest and XGBoost with GridSearchCV, and exposes prediction, ROC, model comparison, and feature-insight views.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Streamlit'],
    github: 'https://github.com/IyinoluwaDon/gradePrediction-Model',
    accent: 'from-blue-500/20 via-blue-500/5 to-transparent',
  },
  {
    number: '02',
    title: 'String Analyzer API',
    type: 'Backend API',
    description: 'Built and documented a Flask API that turns raw strings into reusable analysis records: palindrome detection, character frequency, hashing, word counts, filtered retrieval, and natural-language queries.',
    stack: ['Python', 'Flask', 'SQLite', 'REST API'],
    github: 'https://github.com/IyinoluwaDon/HNG_backend_stage1',
    demo: 'https://web-production-219551.up.railway.app/strings',
    accent: 'from-violet-500/20 via-violet-500/5 to-transparent',
  },
  {
    number: '03',
    title: 'Shebamiles Employee Management System',
    type: 'Full-stack web application',
    description: 'Delivered a PHP and MySQL HR platform that brings authentication, role-based access, employee and department management, attendance, leave, payroll, and performance workflows into one operational system.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML / CSS'],
    github: 'https://github.com/IyinoluwaDon/shebamiles-ems-final',
    accent: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
  },
]
