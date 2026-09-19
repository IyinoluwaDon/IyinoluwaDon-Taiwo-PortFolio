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
    description: 'A public Streamlit application for classifying ACL tears from sagittal-plane knee MRI. The ResNet18 transfer-learning model achieved 0.9719 AUC-ROC on 1,370 Stanford MRNet exams; a custom slice-aggregation pipeline supports variable-length DICOM, NIfTI, and NumPy scans.',
    stack: ['Python', 'PyTorch', 'ResNet18', 'Streamlit'],
    github: 'https://github.com/IyinoluwaDon/acl-tear-detection',
    demo: 'https://acl-tear-detection.streamlit.app/',
    result: '0.9719 AUC-ROC',
    accent: 'from-blue-500/20 via-blue-500/5 to-transparent',
  },
  {
    number: '02',
    title: 'E-commerce Listing Consistency Detector',
    type: 'Multimodal machine learning',
    description: 'A multimodal system for flagging mismatches between product images and listing text - a useful signal for recycled imagery and mislabeled catalog entries. It compares TF-IDF, ResNet18, and a DistilBERT-ResNet18 fusion approach on Rakuten France data.',
    stack: ['Python', 'DistilBERT', 'ResNet18', 'TF-IDF'],
    github: 'https://github.com/IyinoluwaDon/ecommerce-listing-consistency-detector',
    demo: 'https://huggingface.co/spaces/iyinoluwa/moderation-demo',
    accent: 'from-violet-500/20 via-violet-500/5 to-transparent',
  },
  {
    number: '03',
    title: 'African Folktale Language Model',
    type: 'Generative AI · Team project',
    description: 'A team fine-tuning project adapting Gemma 2 2B Instruct to generate African folktale narratives. I led a nine-person team to third place in the TRI AI Saturdays Cohort 10 capstone, reducing training loss from 2.19 to 0.0073 with a loss-masked LoRA configuration.',
    stack: ['Python', 'Gemma 2', 'Fine-tuning', 'NLP'],
    github: 'https://github.com/IyinoluwaDon/C10-team-Ethopie',
    result: '3rd place · 9-person team',
    accent: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
  },
]
