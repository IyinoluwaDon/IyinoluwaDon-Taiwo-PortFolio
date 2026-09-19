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
    title: 'ACL Tear Detection',
    type: 'Medical imaging · Computer vision',
    description: 'A Streamlit app that classifies knee MRI scans for ACL tears using ResNet18 transfer learning. It supports .npy, DICOM, and NIfTI inputs and achieved an AUC-ROC of 0.9719 on the Stanford MRNet dataset.',
    stack: ['Python', 'PyTorch', 'ResNet18', 'Streamlit'],
    github: 'https://github.com/IyinoluwaDon/acl-tear-detection',
    demo: 'https://acl-tear-detection.streamlit.app/',
    accent: 'from-blue-500/20 via-blue-500/5 to-transparent',
  },
  {
    number: '02',
    title: 'E-commerce Listing Consistency Detector',
    type: 'Multimodal machine learning',
    description: 'A multimodal system for flagging mismatches between product images and listing text — a useful signal for recycled imagery and mislabeled catalog entries. It compares TF-IDF, ResNet18, and a DistilBERT–ResNet18 fusion approach on Rakuten France data.',
    stack: ['Python', 'DistilBERT', 'ResNet18', 'TF-IDF'],
    github: 'https://github.com/IyinoluwaDon/ecommerce-listing-consistency-detector',
    demo: 'https://huggingface.co/spaces/iyinoluwa/moderation-demo',
    accent: 'from-violet-500/20 via-violet-500/5 to-transparent',
  },
  {
    number: '03',
    title: 'African Folktale Language Model',
    type: 'Generative AI · Team project',
    description: 'A team fine-tuning project that adapts Gemma 2 2B Instruct to generate African folktale narratives. Built during TRI AI Saturdays Cohort 10, it explores practical language-model adaptation for culturally grounded storytelling.',
    stack: ['Python', 'Gemma 2', 'Fine-tuning', 'NLP'],
    github: 'https://github.com/IyinoluwaDon/C10-team-Ethopie',
    accent: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
  },
  {
    number: '04',
    title: 'Student Grade Prediction System',
    type: 'Applied machine learning',
    description: 'An early-risk screening workflow built from 30 start-of-term features, intentionally excluding prior grades. It compares six classifiers and provides prediction, ROC, model-comparison, and feature-insight views.',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Streamlit'],
    github: 'https://github.com/IyinoluwaDon/gradePrediction-Model',
    accent: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
]
