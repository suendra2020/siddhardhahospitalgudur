import { Doctor, Department, HealthPackage, Testimonial, BlogArticle, CareerJob, ServiceItem, GalleryItem } from '../types';
import dd5 from "./images/doctors/dd5.png";
import d1 from "../assets/images/doctors/d1.png";
import d2 from "./images/doctors/d2.png";
import d3 from "./images/doctors/d3.png";
import d4 from "./images/doctors/d4.png";

export const HOSPITAL_INFO = {
  name: 'Siddhardha Multispeciality Hospital',
  tagline: 'Compassionate Care, Advanced Medical Excellence',
  establishedYear: 2012,
  emergencyPhone: '+91 94402 26666',
  tollFreePhone: '08624 222 666',
  appointmentPhone: '+91 94402 78888',
  whatsappPhone: '+91 94402 26666',
  email: 'care@siddhardhahospital.org',
  appointmentsEmail: 'appointments@siddhardhahospital.org',
  address: 'ROAD NO 06, D.O-2/226-A, Narasingarao Pet, Narsingharao Pet, West Gudur Rural, Andhra Pradesh 524101, India',
  shortLocation: 'Gudur, Andhra Pradesh',
  googleRating: 4.5,
  totalReviews: 528,
  reviewTags: [
    { tag: 'All', count: 528 },
    { tag: 'efficient staff', count: 2 },
    { tag: 'reasonable cost', count: 2 },
    { tag: 'hygiene', count: 3 },
    { tag: 'caring staff', count: 4 },
  ],
  workingHours: 'OPD: 8:00 AM - 8:00 PM (Mon-Sat) | Emergency & Casualty: 24/7 (365 Days)',
  accreditations: [
    { name: 'NABH Accredited', code: 'National Accreditation Board for Hospitals' },
    { name: 'ISO 9001:2015', code: 'Quality Management Certification' },
    { name: '24/7 Multi-Speciality', code: 'Emergency & Critical Care' },
  ],
  stats: [
    { label: 'Hospital Beds', value: '250+', subtext: 'Including ICU & Emergency Beds' },
    { label: 'Google Rating', value: '4.5 ★', subtext: '528 Verified Google Reviews' },
    { label: 'Surgeries / Year', value: '15,000+', subtext: '99.4% Success Rate' },
    { label: 'Happy Patients', value: '100,000+', subtext: 'In Gudur & Surrounding Regions' },
    { label: 'Emergency Response', value: '24/7', subtext: 'Mobile ICU ACLS Ambulance' },
  ]
};

export const DEPARTMENTS: Department[] = [
  {
    id: 'cardiology',
    name: 'Cardiology & Cardiac Surgery',
    category: 'Super Speciality',
    shortDescription: 'Comprehensive heart care featuring advanced cath labs, minimally invasive valve replacements, and 24/7 chest pain unit.',
    fullDescription: 'The Siddhartha Heart Institute is a premier tertiary care center equipped with state-of-the-art biplane digital cath labs, hybrid operating suites, and dedicated Cardiac Care Units (CCU). Our team of interventional cardiologists and cardiothoracic surgeons deliver cutting-edge treatments with high success rates.',
    iconName: 'HeartPulse',
      image:  "/images/doctors/d1.png",
    bannerImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['24/7 Primary Angioplasty (PPCI)', 'Robotic Assisted Cardiac Surgery', 'Electrophysiology & Pacemaker Clinic', 'Heart Failure Management Unit'],
    treatments: ['Coronary Angioplasty & Stenting', 'Coronary Artery Bypass Graft (CABG)', 'TAVI / TAVR (Transcatheter Valve Replacement)', 'Pacemaker & ICD Implantation', 'Pediatric Heart Surgery'],
    facilities: ['Flat-Panel Biplane Cath Lab', '16-Bed Dedicated CCU', 'Intra-Aortic Balloon Pump (IABP)', '3D Echocardiography & Strain Imaging'],
    headOfDepartment: 'Dr. R. K. Siddhartha, MD, DM (Cardiology)',
    stats: { surgeriesCompleted: '18,500+', bedCapacity: '45 CCU Beds', doctorCount: 12 },
    faqs: [
      { question: 'When should I visit the Emergency Chest Pain Clinic?', answer: 'Seek emergency medical attention immediately if you experience persistent chest tightness, radiating pain to the left jaw/arm, breathlessness, or cold sweats.' },
      { question: 'Is minimally invasive bypass surgery available?', answer: 'Yes, our surgeons specialize in Keyhole (Minimally Invasive Direct Coronary Artery Bypass) surgery which reduces hospital stay and speeds recovery.' }
    ]
  },
  {
    id: 'neurology',
    name: 'Neurology & Neurosurgery',
    category: 'Super Speciality',
    shortDescription: 'Expert brain & spine care with 24/7 Stroke Express protocol, intraoperative MRI, and neuro-rehabilitation.',
    fullDescription: 'The Siddhartha Institute of Neurosciences offers world-class diagnostic and surgical intervention for complex brain, spinal cord, and peripheral nerve disorders. Our 24/7 Stroke Express team guarantees thrombolysis within the golden hour.',
    iconName: 'Brain',
    image:  "/images/doctors/d1.png",
    bannerImage: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['Golden Hour Stroke Intervention', 'Intraoperative Neuro-Navigation', 'Comprehensive Epilepsy Center', 'Endoscopic Spine Surgery'],
    treatments: ['Brain Tumor Resection', 'Stroke Thrombolysis & Mechanical Thrombectomy', 'Microvascular Decompression', 'Minimally Invasive Spine Fusion', 'Parkinson Deep Brain Stimulation (DBS)'],
    facilities: ['Dedicated Neuro ICU with ICP Monitoring', 'Video EEG Monitoring Suite', 'Intraoperative 3T MRI', 'Neuronavigation System'],
    headOfDepartment: 'Dr. Ananya Murthy, M.Ch (Neurosurgery), Fellowship (Harvard)',
    stats: { surgeriesCompleted: '12,200+', bedCapacity: '30 Neuro ICU Beds', doctorCount: 10 },
    faqs: [
      { question: 'What is the Golden Hour in stroke care?', answer: 'The first 4.5 hours after stroke onset is critical. Receiving clot-busting treatment during this window can prevent permanent brain damage.' },
      { question: 'How safe is endoscopic spine surgery?', answer: 'Endoscopic spine surgery uses sub-centimeter incisions, minimizing tissue disruption and allowing most patients to go home within 24-48 hours.' }
    ]
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics & Joint Replacement',
    category: 'Surgical',
    shortDescription: 'Advanced robotic knee/hip replacements, sports injury management, complex trauma, and pediatric orthopaedics.',
    fullDescription: 'Our Orthopaedic Centre of Excellence pioneered robotic 3D-guided joint replacements in South India. From elite athlete sports injuries to complex revision surgeries, our surgeons restore mobility with minimal pain and quick rehabilitation.',
    iconName: 'Bone',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    bannerImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['Robotic Mako/NAVIO Joint Surgery', 'Keyhole Arthroscopy Suite', '24/7 Level-1 Trauma Care', 'Dedicated Sports Rehabilitation Lab'],
    treatments: ['Robotic Total Knee Replacement', 'Custom Fit Hip Replacement', 'ACL / PCL Ligament Reconstruction', 'Complex Fracture Stabilization', 'Spinal Decompression & Scoliosis Correction'],
    facilities: ['Ultra-Clean Laminar Airflow OTs', 'Robotic Surgical Navigation Unit', 'Gait Analysis & Biomechanics Lab', 'Hydrotherapy Recovery Pool'],
    headOfDepartment: 'Dr. Vikramaditya Rao, MS (Ortho), M.Ch (UK)',
    stats: { surgeriesCompleted: '22,000+', bedCapacity: '50 Beds', doctorCount: 14 },
    faqs: [
      { question: 'How long does a robotic knee replacement last?', answer: 'Modern implant materials combined with robotic alignment precision offer a life expectancy of 20 to 25+ years.' },
      { question: 'When can I walk after joint replacement?', answer: 'With our Rapid Recovery Protocol, most patients stand and walk with assistance on the same evening or the next morning.' }
    ]
  },
  {
    id: 'gastroenterology',
    name: 'Gastroenterology & Hepatology',
    category: 'Super Speciality',
    shortDescription: 'State-of-the-art digestive disease care, advanced therapeutic endoscopy, EUS, and Liver Transplant unit.',
    fullDescription: 'The Gastrointestinal Sciences department provides complete medical and surgical care for digestive system, pancreas, gall bladder, and liver diseases. Supported by a dedicated Liver Transplant ICU and Endosonography (EUS) suite.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    bannerImage: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['Endoscopic Ultrasound (EUS)', 'Third Space Endoscopy (POEM/ESD)', '24/7 Gastro Bleed Unit', 'Living Donor Liver Transplant Program'],
    treatments: ['ERCP & Biliary Stenting', 'Endoscopic Mucosal Resection (EMR)', 'Inflammatory Bowel Disease Management', 'Laparoscopic Gastro Surgeries', 'Liver Transplant (Living & Cadaveric)'],
    facilities: ['Advanced High-Definition Endoscopy Suites', 'Capsule Endoscopy System', 'FibroScan for Liver Fibrosis', 'Liver Transplant ICU'],
    headOfDepartment: 'Dr. S. V. Nageshwar, MD, DM (Gastro), FRCP',
    stats: { surgeriesCompleted: '14,000+', bedCapacity: '35 Beds', doctorCount: 8 },
    faqs: [
      { question: 'Is a colonoscopy painful?', answer: 'No, colonoscopies at Siddhartha Hospital are performed under mild conscious sedation, ensuring complete comfort throughout the procedure.' }
    ]
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics & Neonatology (NICU)',
    category: 'Medical',
    shortDescription: 'Comprehensive child healthcare from extreme premature infants (Level-3 NICU) to adolescent medicine.',
    fullDescription: 'Siddhartha Children’s Hospital is a compassionate sanctuary for infant, child, and adolescent health. Featuring a Level-3 Neonatal ICU (NICU) capable of caring for micro-preemies born as early as 24 weeks.',
    iconName: 'Baby',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&q=80&w=800',
    bannerImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['Level-3 Tertiary NICU & PICU', 'Pediatric Emergency 24/7', 'Child Development & Autism Clinic', 'Pediatric Cardiac & Neuro Care'],
    treatments: ['Neonatal Intensive Care & Ventilation', 'Growth & Endocrinology Disorders', 'Pediatric Allergy & Asthma Care', 'Vaccination & Immunization Services', 'Congenital Anomaly Surgeries'],
    facilities: ['High-Frequency Oscillatory Ventilators', 'Inhaled Nitric Oxide Therapy', 'Pediatric Transport Ambulance', 'Play Therapy & Family Rooms'],
    headOfDepartment: 'Dr. Meera Srinivas, MD (Pediatrics), DCH (London)',
    stats: { surgeriesCompleted: '8,900+', bedCapacity: '25 NICU / PICU Beds', doctorCount: 9 },
    faqs: [
      { question: 'What age group does pediatrics cover?', answer: 'We treat children from newborn infants up to 18 years of age.' }
    ]
  },
  {
    id: 'oncology',
    name: 'Oncology & Cancer Care',
    category: 'Super Speciality',
    shortDescription: 'Integrated Comprehensive Cancer Care with Immunotherapy, CyberKnife Precision Radiation, and Surgical Oncology.',
    fullDescription: 'The Siddhartha Comprehensive Cancer Centre adopts a multidisciplinary Tumor Board approach for tailored cancer therapies. We combine Surgical Oncology, Medical Oncology, Precision Radiation, and Palliative Medicine under one roof.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    bannerImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['Tumor Board Evaluation', 'TrueBeam Radiotherapy & SRS/SBRT', 'Daycare Chemotherapy Lounge', 'Bone Marrow Transplant Unit'],
    treatments: ['Targeted Immunotherapy & Chemotherapy', 'Minimally Invasive Cancer Surgeries', 'Stereotactic Radiosurgery', 'Organ-Preserving Oncological Procedures', 'Hematology & Leukemia Treatment'],
    facilities: ['TrueBeam STx Linear Accelerator', 'PET-CT Scan & Gamma Camera', 'Positive Pressure BMT Suite', 'Scalp Cooling Systems for Hair Loss Prevention'],
    headOfDepartment: 'Dr. Suresh Kumar Deshmukh, MD, DM (Onco), Fellow (Sloan Kettering)',
    stats: { surgeriesCompleted: '9,500+', bedCapacity: '40 Beds', doctorCount: 11 },
    faqs: [
      { question: 'What is a Tumor Board?', answer: 'A Tumor Board is a panel of surgical, medical, and radiation oncologists who meet to discuss each cancer case collectively to formulate the best custom treatment plan.' }
    ]
  },
  {
    id: 'obstetrics-gynecology',
    name: 'Obstetrics & Gynecology',
    category: 'Surgical',
    shortDescription: 'Complete women’s health center covering high-risk pregnancies, birthing suites, fetal medicine, and laparoscopic gynecology.',
    fullDescription: 'Dedicated to women’s wellness across all life stages. From luxury LDR (Labor, Delivery, Recovery) suites to advanced fetal medicine monitoring and painless water birthing choices.',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
    bannerImage: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['High-Risk Pregnancy Unit', 'Luxury LDR Birthing Suites', '3D/4D Fetal Ultrasound', 'Keyhole Hysterectomy & Myomectomy'],
    treatments: ['Painless Delivery (Epidural)', 'High-Risk Obstetrics Management', 'Advanced Laparoscopic Gynec Surgeries', 'Infertility Evaluation & IUI', 'Menopause & Cervical Cancer Screening'],
    facilities: ['Private LDR Suites', 'Fetal Tele-monitoring', 'Dedicated Neonatal Support OT', 'Pelvic Floor Rehab Unit'],
    headOfDepartment: 'Dr. Sunita Reddy, MD, DGO, FRCOG (London)',
    stats: { surgeriesCompleted: '16,000+', bedCapacity: '40 Beds', doctorCount: 10 },
    faqs: [
      { question: 'Are painless delivery options available?', answer: 'Yes, epidural analgesia is available 24/7 administered by specialist obstetric anesthetists.' }
    ]
  },
  {
    id: 'emergency-trauma',
    name: 'Emergency & Level-1 Trauma',
    category: 'Diagnostics & Emergency',
    shortDescription: '24/7 Level-1 Emergency and Critical Care with dedicated triage, resuscitation bays, and mobile ICU fleet.',
    fullDescription: 'Our Emergency Department operates 24 hours a day, 365 days a year with zero wait times for critical life-threatening conditions. Supported by immediate access to CT scans, cath labs, and emergency OTs.',
    iconName: 'Ambulance',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=800',
    bannerImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['Zero-Delay Critical Triage', 'Red Zone Resuscitation Bay', 'ACLS Fleet with GPS Telemetry', 'Polytrauma Surgical Response Team'],
    treatments: ['Cardiac Arrest Resuscitation', 'Poly-Trauma & Road Accident Care', 'Acute Poisoning & Overdose Antidotes', 'Severe Burn Stabilization', 'Stroke & Heart Attack Rapid Protocol'],
    facilities: ['18 Triage & Resuscitation Beds', 'Dedicated In-Emergency CT Scanner', 'Decontamination Suite', 'Direct Rooftop Helipad Access'],
    headOfDepartment: 'Dr. Arjun Varma, MD (Emergency Medicine), MEM (USA)',
    stats: { surgeriesCompleted: '30,000+', bedCapacity: '25 ER Beds', doctorCount: 15 },
    faqs: [
      { question: 'How quickly does an ambulance dispatch?', answer: 'Our dispatch center dispatches the nearest ACLS ambulance within 180 seconds of your call.' }
    ]
  },
  {
    id: 'urology-nephrology',
    name: 'Urology & Kidney Transplant',
    category: 'Super Speciality',
    shortDescription: 'Laser kidney stone removal, prostate laser surgery (HoLEP), 24/7 Dialysis, and Kidney Transplantation.',
    fullDescription: 'Offering comprehensive medical and surgical care for kidney, urinary bladder, and prostate conditions. Featuring 100% laser endourology and an active renal transplant clinic.',
    iconName: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    bannerImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1600',
    keyFeatures: ['Holmium Laser Stone Surgery (RIRC / PCNL)', 'HoLEP Prostate Surgery', 'Dialysis Center (30 Stations)', 'Laparoscopic Donor Nephrectomy'],
    treatments: ['Laser Lithotripsy for Kidney Stones', 'Live & ABO-Incompatible Kidney Transplant', 'Prostate Enucleation', 'Urodynamics & Incontinence Care', 'Pediatric Urology Surgeries'],
    facilities: ['30-Bed Hemodialysis Unit with CRRT', 'Modular Urology OT with Laser Units', 'Urodynamic Diagnostic Suite'],
    headOfDepartment: 'Dr. K. S. Ramesh, MS, M.Ch (Urology)',
    stats: { surgeriesCompleted: '15,400+', bedCapacity: '30 Beds + 30 Dialysis Stations', doctorCount: 8 },
    faqs: [
      { question: 'What is RIRC laser stone removal?', answer: 'Retrograde Intrarenal Surgery (RIRC) uses a flexible scope passed through natural pathways to break kidney stones without any skin cuts.' }
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-rk-siddhartha',
    name: 'Dr. R. K. Siddhartha',
    title: 'Senior Consultant & Chief Interventional Cardiologist',
    qualification: 'MBBS, MD (General Medicine), DM (Cardiology), FACC (USA)',
    departmentId: 'cardiology',
    departmentName: 'Cardiology & Cardiac Surgery',
    experience: 24,
    languages: ['English', 'Kannada', 'Hindi', 'Telugu'],
    image: '/images/doctors/d1.png',
    about: 'Dr. R. K. Siddhartha is a globally recognized interventional cardiologist who has performed over 12,000 coronary angioplasties and complex cardiac procedures. He trained at Mount Sinai Hospital, NY, and pioneered TAVI procedures in South India.',
    education: [
      'MBBS - Bangalore Medical College (1998)',
      'MD (Medicine) - AIIMS, New Delhi (2002)',
      'DM (Cardiology) - PGIMER, Chandigarh (2005)',
      'Fellowship in Interventional Cardiology - Mount Sinai, USA (2008)'
    ],
    specializations: ['Complex Coronary Angioplasty', 'Transcatheter Aortic Valve Implantation (TAVI)', 'Heart Failure & Cardiac Resynchronization', 'Radial Artery Stenting'],
    awards: [
      'Best Cardiologist Award - National Medical Council (2022)',
      'Pioneer in TAVI Award - Indian College of Cardiology',
      'Distinguished Alumnus Award - AIIMS New Delhi'
    ],
    opdTimings: '10:00 AM - 2:00 PM (Mon to Fri)',
    consultationFee: 1200,
    rating: 4.9,
    reviewCount: 420,
    availability: 'Today',
    roomNumber: 'OPD Tower A - Room 102'
  },
  {
    id: 'dr-ananya-murthy',
    name: 'Dr. Vinodh kumar',
    title: 'Director of Neurosciences & Chief Neurosurgeon',
    qualification: 'MBBS, M.Ch (Neurosurgery), Fellowship in Cerebrovascular (Harvard)',
    departmentId: 'neurology',
    departmentName: 'Neurology & Neurosurgery',
    experience: 19,
    languages: ['English', 'Kannada', 'Hindi', 'Tamil'],
    image: '/images/doctors/dd5.png',
    about: 'Dr. Ananya Murthy is a leading neurosurgeon specializing in brain tumor resections using intraoperative MRI and keyhole endoscopic spine surgeries. She has published over 40 research papers in international neurosurgical journals.',
    education: [
      'MBBS - Kasturba Medical College (2003)',
      'M.Ch Neurosurgery - NIMHANS, Bengaluru (2008)',
      'Cerebrovascular & Skull Base Fellowship - Harvard Medical School, USA (2011)'
    ],
    specializations: ['Keyhole Brain Surgery', 'Endoscopic Pituitary Tumor Surgery', 'Spine Reconstruction', 'Awake Craniotomy'],
    awards: [
      'Woman Achiever in Medicine Award 2023',
      'NIMHANS Gold Medal in Neurosurgery',
      'Excellence in Neuro Innovation Award'
    ],
    opdTimings: '11:00 AM - 4:00 PM (Mon, Wed, Sat)',
    consultationFee: 1500,
    rating: 4.95,
    reviewCount: 380,
    availability: 'Today',
    roomNumber: 'OPD Tower B - Room 204'
  },
  {
    id: 'dr-vikramaditya-rao',
    name: 'Dr. Vikramaditya Rao',
    title: 'Senior Consultant Joint Replacement & Robotic Surgeon',
    qualification: 'MBBS, MS (Ortho), M.Ch Ortho (Dundee, UK), FRCS',
    departmentId: 'orthopaedics',
    departmentName: 'Orthopaedics & Joint Replacement',
    experience: 21,
    languages: ['English', 'Hindi', 'Kannada'],
    image: '/images/doctors/d2.png',
    about: 'Dr. Vikramaditya Rao is a renowned orthopedic surgeon who pioneered Robotic Knee and Hip replacement in the region. He has successfully performed over 8,000 joint replacement surgeries with rapid rehabilitation protocols.',
    education: [
      'MBBS - St. John Medical College (2001)',
      'MS Orthopaedics - AIIMS, New Delhi (2005)',
      'M.Ch Orthopaedics - University of Dundee, UK (2008)',
      'Robotic Surgery Fellowship - Sydney, Australia (2012)'
    ],
    specializations: ['Robotic Mako Knee Replacement', 'Revision Hip Arthroplasty', 'Sports Knee Arthroscopy', 'Pelvic Fracture Fixation'],
    awards: [
      'Lifetime Achievement in Orthopedics - Asia Healthcare Summit',
      'Robotic Surgeon of the Year 2021'
    ],
    opdTimings: '9:00 AM - 1:00 PM (Mon to Sat)',
    consultationFee: 1100,
    rating: 4.88,
    reviewCount: 310,
    availability: 'Tomorrow',
    roomNumber: 'OPD Tower A - Room 108'
  },
  {
    id: 'dr-sunita-reddy',
    name: 'Dr. Sunita Reddy',
    title: 'Senior Consultant Obstetrician, Gynecologist & Laparoscopic Surgeon',
    qualification: 'MBBS, DGO, MD, FRCOG (London), FICOG',
    departmentId: 'obstetrics-gynecology',
    departmentName: 'Obstetrics & Gynecology',
    experience: 22,
    languages: ['English', 'Telugu', 'Kannada', 'Hindi'],
    image: '/images/doctors/d3.png',
    about: 'Dr. Sunita Reddy is a master in high-risk obstetrics, painless labor management, and advanced laparoscopic gynecology. She has assisted over 10,000 safe deliveries and specializes in fertility-sparing surgeries.',
    education: [
      'MBBS - Osmania Medical College (2000)',
      'MD (OBG) - AIIMS New Delhi (2004)',
      'FRCOG - Royal College of Obstetricians and Gynaecologists, London (2009)'
    ],
    specializations: ['High Risk Pregnancy Management', 'Laparoscopic Hysterectomy', 'Fetal Medicine', 'Infertility Management'],
    awards: [
      'Best Gynecologist of South India 2022',
      'Rotary Vocational Excellence Award'
    ],
    opdTimings: '10:00 AM - 3:00 PM (Mon to Sat)',
    consultationFee: 1000,
    rating: 4.92,
    reviewCount: 510,
    availability: 'Today',
    roomNumber: 'Women & Child Block - Room 301'
  },
  {
    id: 'dr-meera-srinivas',
    name: 'Dr. Meera Srinivas',
    title: 'Head of Pediatrics & Chief Neonatologist',
    qualification: 'MBBS, MD (Pediatrics), DCH (London), Fellowship in Neonatology (Toronto)',
    departmentId: 'pediatrics',
    departmentName: 'Pediatrics & Neonatology (NICU)',
    experience: 18,
    languages: ['English', 'Kannada', 'Tamil', 'Hindi'],
    image: '/images/doctors/dr-meera.svg',
    about: 'Dr. Meera Srinivas heads the Level-3 NICU unit at Siddhartha Hospital. She specializes in critical newborn care, extreme preterm survival, and childhood asthma management.',
    education: [
      'MBBS - BMCRI (2004)',
      'MD Pediatrics - PGIMER (2008)',
      'Neonatal Fellowship - Hospital for Sick Children, Toronto, Canada (2012)'
    ],
    specializations: ['Extreme Preterm Newborn Care', 'Pediatric Pulmonology & Asthma', 'Developmental Pediatrics'],
    awards: ['Best Neonatologist Award 2021', 'Indian Academy of Pediatrics Gold Medal'],
    opdTimings: '9:30 AM - 2:00 PM (Mon to Sat)',
    consultationFee: 900,
    rating: 4.9,
    reviewCount: 290,
    availability: 'Available in 2 Days',
    roomNumber: 'Women & Child Block - Room 102'
  },
  {
    id: 'dr-suresh-deshmukh',
    name: 'Dr. Suresh Kumar Deshmukh',
    title: 'Chief Medical Oncologist & Hemat-Oncologist',
    qualification: 'MBBS, MD (Medicine), DM (Medical Oncology), ECMO (Europe)',
    departmentId: 'oncology',
    departmentName: 'Oncology & Cancer Care',
    experience: 17,
    languages: ['English', 'Marathi', 'Hindi', 'Kannada'],
    image: '/images/doctors/dr-suresh.svg',
    about: 'Dr. Suresh Deshmukh leads the Oncology Center with expertise in Targeted Immunotherapy, Molecular Targeted Therapy, and Bone Marrow Transplantation.',
    education: [
      'MBBS - KEM Hospital Mumbai (2005)',
      'MD Medicine - Tata Memorial Hospital (2009)',
      'DM Medical Oncology - AIIMS New Delhi (2013)',
      'Observer Fellow - Memorial Sloan Kettering, NY (2016)'
    ],
    specializations: ['Targeted Immunotherapy', 'Breast & Lung Cancer Protocol', 'Lymphoma & Leukemia Management', 'Bone Marrow Transplant'],
    awards: ['Cancer Research Excellence Award', 'ASCO Young Investigator Award'],
    opdTimings: '11:00 AM - 4:00 PM (Mon to Fri)',
    consultationFee: 1400,
    rating: 4.87,
    reviewCount: 195,
    availability: 'Today',
    roomNumber: 'Cancer Care Block - Room 101'
  },
  {
    id: 'dr-sv-nageshwar',
    name: 'Dr. S. V. Nageshwar',
    title: 'Senior Consultant Gastroenterologist & Hepatologist',
    qualification: 'MBBS, MD, DM (Gastroenterology), FRCP (Edinburgh)',
    departmentId: 'gastroenterology',
    departmentName: 'Gastroenterology & Hepatology',
    experience: 23,
    languages: ['English', 'Telugu', 'Kannada', 'Hindi'],
    image: '/images/doctors/dr-nageshwar.svg',
    about: 'Dr. S. V. Nageshwar is a master endoscopist with over 20 years experience in ERCP, Endoscopic Ultrasound (EUS), and advanced therapeutic procedures.',
    education: [
      'MBBS - Andhra Medical College (1999)',
      'MD - AIIMS New Delhi (2003)',
      'DM Gastroenterology - NIMS Hyderabad (2006)'
    ],
    specializations: ['Therapeutic ERCP', 'Endoscopic Ultrasound (EUS)', 'IBD & Ulcerative Colitis', 'Fatty Liver & Cirrhosis Care'],
    awards: ['SGEI Lifetime Achievement Award', 'Baidyanath Oration Award'],
    opdTimings: '10:00 AM - 1:00 PM (Mon to Sat)',
    consultationFee: 1150,
    rating: 4.85,
    reviewCount: 260,
    availability: 'Tomorrow',
    roomNumber: 'OPD Tower A - Room 210'
  },
  {
    id: 'dr-arjun-varma',
    name: 'Dr. Arjun Varma',
    title: 'Head of Emergency Medicine & Trauma Care',
    qualification: 'MBBS, MD (Emergency Med), MEM (GWU, USA), FACC (Crit Care)',
    departmentId: 'emergency-trauma',
    departmentName: 'Emergency & Level-1 Trauma',
    experience: 15,
    languages: ['English', 'Kannada', 'Hindi', 'Malayalam'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    about: 'Dr. Arjun Varma directs the 24/7 Level-1 Emergency & Trauma protocol. He holds American credentials in emergency triage and rapid resuscitation.',
    education: ['MBBS - Calicut Medical College (2007)', 'MD Emergency Medicine - JIPMER (2011)', 'MEM - George Washington University USA (2014)'],
    specializations: ['Polytrauma Management', 'Toxicology & Poison Resuscitation', 'Airway Emergency Protocols'],
    awards: ['National Emergency Leadership Award'],
    opdTimings: '24/7 Shift Available',
    consultationFee: 800,
    rating: 4.96,
    reviewCount: 610,
    availability: 'Today',
    roomNumber: 'Emergency Casualty Bay 1'
  }
];

export const HEALTH_PACKAGES: HealthPackage[] = [
  {
    id: 'executive-master',
    name: 'Master Executive Health Checkup',
    badge: 'Most Popular',
    targetAudience: 'Men & Women above 30 years',
    price: 3999,
    originalPrice: 8500,
    testsIncluded: 78,
    parametersCount: 82,
    category: 'Executive',
    highlights: ['Complete Blood Profile', 'Kidney & Liver Function', 'Full Body Lipid & Heart Screening', 'Ultrasonography Abdomen', 'Dietary & Doctor Consultation'],
    testDetails: [
      'Complete Hemogram (24 Parameters)',
      'Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)',
      'Liver Function Test (11 Parameters)',
      'Kidney Function Test (BUN, Creatinine, Uric Acid)',
      'Thyroid Profile (T3, T4, TSH)',
      'Diabetes Screen (HbA1c + Fasting Blood Sugar)',
      'ECG 12-Lead + Chest X-Ray PA View',
      'Ultrasound Abdomen & Pelvis',
      'Urine Routine & Microscopic',
      'Physician & Cardiologist Consultation'
    ]
  },
  {
    id: 'cardiac-care-pro',
    name: 'Advanced Cardiac Wellness Package',
    badge: 'Heart Protection',
    targetAudience: 'Individuals with BP, Stress or Family History',
    price: 4999,
    originalPrice: 11000,
    testsIncluded: 42,
    parametersCount: 45,
    category: 'Cardiac',
    highlights: ['Treadmill Stress Test (TMT)', '2D Echo with Color Doppler', 'hs-CRP Heart Inflammatory Marker', 'Sr. Cardiologist Consultation'],
    testDetails: [
      '2D Echocardiogram with Color Doppler',
      'Treadmill Stress Test (TMT / Stress ECG)',
      'hs-CRP (High-Sensitivity Cardiac Risk Marker)',
      'Homocysteine & Vitamin D3 Level',
      'Advanced Lipid Subfractions',
      'HbA1c & Fasting Glucose',
      'Electrolytes & Serum Creatinine',
      'Comprehensive Cardiac Risk Assessment Report',
      '1-on-1 Consultation with Chief Cardiologist'
    ]
  },
  {
    id: 'senior-citizen-care',
    name: 'Senior Citizen Golden Wellness',
    badge: 'Comprehensive Senior Care',
    targetAudience: 'Seniors aged 60+ years',
    price: 3499,
    originalPrice: 7500,
    testsIncluded: 65,
    parametersCount: 70,
    category: 'Senior Citizen',
    highlights: ['Bone Mineral Density (DEXA Scan)', 'Joint & Rheumatoid Screen', 'Prostate / Pap Smear Screen', 'Geriatric Specialist Review'],
    testDetails: [
      'DEXA Bone Mineral Density Scan',
      'Serum Calcium, Phosphorus & Vitamin D3',
      'Prostate Specific Antigen (PSA for Males) / Pap Smear (Females)',
      'Complete Kidney & Liver Screen',
      'HbA1c & Lipid Panel',
      'Audiometry Hearing Assessment',
      'Ophthalmology Eye Screening',
      'Geriatric Specialist Consultation'
    ]
  },
  {
    id: 'womens-wellness',
    name: 'Comprehensive Women Wellness Care',
    badge: 'Designed for Her',
    targetAudience: 'Women of all age groups',
    price: 3299,
    originalPrice: 6800,
    testsIncluded: 58,
    parametersCount: 62,
    category: 'Women',
    highlights: ['Digital Mammography / Breast USG', 'Pap Smear Cervical Cancer Screen', 'Iron Deficiency & Vitamin Profile', 'Gynaecologist Consultation'],
    testDetails: [
      'Pap Smear Screening',
      'Digital Mammography / Breast Ultrasound',
      'Complete Iron & Anemia Profile (Ferritin, TIBC)',
      'Thyroid Profile (T3, T4, TSH)',
      'Vitamin B12 & D3 Levels',
      'Ultrasound Pelvis & Abdomen',
      'Complete Blood Count & Urine Analysis',
      'Senior Gynaecologist Consultation'
    ]
  },
  {
    id: 'diabetes-reversal',
    name: 'Diabetic Health & Organ Shield',
    badge: 'Diabetic Care',
    targetAudience: 'Diabetic & Pre-diabetic individuals',
    price: 2499,
    originalPrice: 5200,
    testsIncluded: 40,
    parametersCount: 42,
    category: 'Diabetes',
    highlights: ['HbA1c & Average Blood Glucose', 'Microalbuminuria Kidney Marker', 'Fundoscopy Diabetic Eye Screen', 'Podiatry Foot Examination'],
    testDetails: [
      'HbA1c (Glycated Hemoglobin)',
      'Fasting & Post-Prandial Blood Sugar',
      'Urine Microalbumin/Creatinine Ratio (Diabetic Nephropathy Screen)',
      'Diabetic Fundus Retinal Eye Examination',
      'Vibration Perception Threshold (Diabetic Foot Neuropathy Screen)',
      'Lipid Profile & Serum Creatinine',
      'Endocrinologist & Clinical Dietitian Consultation'
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'emergency-24x7',
    title: '24/7 Emergency & Level-1 Trauma Care',
    description: 'Fully equipped critical care emergency with immediate triage, dedicated resuscitation bays, and on-site CT/Cath Lab.',
    iconName: 'Siren',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=800',
    features: ['Zero Delay Triage', 'Dedicated Trauma OT', 'ACLS Ambulances with GPS', 'Point of Care Blood Testing'],
    isEmergency24x7: true
  },
  {
    id: 'icu-critical-care',
    title: '120-Bed Advanced ICU & Critical Care',
    description: 'Specialized intensive care units including MICU, SICU, CCU, NICU, and Neuro ICU monitored by full-time Intensivists.',
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    features: ['1:1 Nursing Ratio for Critical Patients', 'HEPA Filtered Isolation Pods', 'Continuous Invasive Hemodynamic Monitoring', 'CRRT & ECMO Support'],
    isEmergency24x7: true
  },
  {
    id: 'ambulance-fleet',
    title: '24/7 Advanced Life Support Ambulance',
    description: 'Fleet of mobile ICUs equipped with ventilators, defibrillators, telemetry, and doctor on board for swift transport.',
    iconName: 'Ambulance',
    image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=800',
    features: ['Response Time under 8-10 Mins', 'Live Patient Telemetry to ER', 'Portable Ventilator & Defibrillator', 'Accompanying Paramedic & ER Physician'],
    isEmergency24x7: true
  },
  {
    id: 'radiology-imaging',
    title: 'Advanced 3T MRI & 128-Slice CT Diagnostics',
    description: 'Comprehensive non-invasive imaging center with high-definition 3T Digital MRI, 128-Slice Cardiac CT, PET-CT, and 4D Ultrasound.',
    iconName: 'Scan',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    features: ['Silent Scan 3T MRI Technology', 'Low-Radiation Ultra-Fast CT', 'PET-CT for Cancer Staging', 'Digital Mammography'],
    isEmergency24x7: true
  },
  {
    id: 'nabl-pathology-lab',
    title: 'NABL Accredited Automated Laboratory',
    description: 'Fully automated robotics pathology lab offering over 1,000 diagnostic blood and tissue tests with quick digital reporting.',
    iconName: 'Microscope',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
    features: ['100% Barcoded Sample Processing', 'Home Sample Collection Facility', 'Online Report Portal & WhatsApp Delivery', 'Histopathology & Molecular Genetics'],
    isEmergency24x7: true
  },
  {
    id: '24x7-pharmacy',
    title: '24/7 In-House Hospital Pharmacy',
    description: 'Complete stock of genuine medicines, temperature-controlled cold chain biologics, emergency life-saving drugs, and home delivery.',
    iconName: 'Pill',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    features: ['100% Preserved Cold Chain Biologics', 'Digital E-Prescription Sync', 'Night Doorstep Delivery Available', 'Surgical Equipment & Aids'],
    isEmergency24x7: true
  },
  {
    id: 'operation-theatres',
    title: 'Modular Ultra-Clean Laminar Airflow OTs',
    description: '14 state-of-the-art operation suites equipped with robotic surgical arms, intraoperative imaging, and zero-infection air filtration.',
    iconName: 'Scissors',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    features: ['HEPA Filter Laminar Flow', 'Robotic Surgical Suites', 'Intraoperative C-Arm Fluoroscopy', 'Dedicated Recovery Lounges'],
    isEmergency24x7: false
  },
  {
    id: 'preventive-health',
    title: 'Comprehensive Preventive Health Pavilion',
    description: 'Dedicated floor for quiet, comfortable health checkups with fast-track consultations, gourmet lounge, and same-day reporting.',
    iconName: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    features: ['Single-Floor Diagnostic Completion', 'Complimentary Breakfast Lounge', 'Custom Corporate Wellness Packages', 'Personal Health Manager Support'],
    isEmergency24x7: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'g-review-1',
    patientName: 'Himabindu',
    age: 32,
    treatment: 'General Healthcare & Hospitalization',
    doctorName: 'Medical Team & Staff',
    rating: 5,
    comment: 'I recently visited Siddhardha Multispeciality Hospital in Gudur and was truly impressed by the quality of care and professionalism displayed by the entire staff. From the reception to the medical team, everyone was incredibly supportive, warm, and attentive.',
    date: 'a year ago',
    verified: true,
    location: 'Gudur, Andhra Pradesh',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'g-review-2',
    patientName: 'swayam arugunta',
    age: 29,
    treatment: 'Inpatient Medical Care',
    doctorName: 'Specialist Doctors',
    rating: 5,
    comment: 'I had an excellent experience at Siddhardha Multispeciality Hospital in Gudur. The hospital is clean, well-maintained, and offers top-notch medical services. The doctors are highly knowledgeable and take the time to explain everything clearly.',
    date: 'a year ago',
    verified: true,
    location: 'Gudur, AP',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'g-review-3',
    patientName: 'Pradeep Pandu1121',
    age: 35,
    treatment: 'Family Medical Care',
    doctorName: 'Clinical Faculty',
    rating: 5,
    comment: 'Best hospital sir, sontha family la treat chestaru! Hospital staff kuda chaala bhaga chusukunta ru, low price lo best treatment estaru. (Treat like own family, hospital staff took great care, best treatment at reasonable cost).',
    date: '9 months ago',
    verified: true,
    location: 'Gudur Rural',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'g-review-4',
    patientName: 'Devi Reddy',
    age: 41,
    treatment: 'Full Recovery Treatment',
    doctorName: 'Consultant Doctors',
    rating: 5,
    comment: 'I have been to this hospital for treatment and was completely satisfied with the service. The doctors were very considerate and patient during the process and made sure we recovered completely. Right from discovering the root cause, everything was handled masterfully.',
    date: 'a year ago',
    verified: true,
    location: 'Gudur',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'g-review-5',
    patientName: 'nagarjuna reddy (Local Guide)',
    age: 38,
    treatment: 'Diagnosis & Treatment',
    doctorName: 'Diagnostic Team',
    rating: 5,
    comment: 'Excellent care and attention throughout diagnosis. Cost is very much affordable with top class service. Clean and hygienic hospital.',
    date: 'a year ago',
    verified: true,
    location: 'Gudur',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'g-review-6',
    patientName: 'Varshitha Pemmareddy',
    age: 27,
    treatment: 'Outpatient Care',
    doctorName: 'Clinical Staff',
    rating: 5,
    comment: 'Very good hospital with excellent doctors and caring staff. Clean facilities and quick service. Highly recommended in Gudur!',
    date: 'a year ago',
    verified: true,
    location: 'Gudur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'g-review-7',
    patientName: 'lakshmi sudha reddy',
    age: 45,
    treatment: 'Multi-Department Consultations',
    doctorName: 'Hospital Faculty',
    rating: 5,
    comment: 'Providing best corporate services with nominal fee in all departments. Very satisfied!',
    date: 'a year ago',
    verified: true,
    location: 'Gudur',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'g-review-8',
    patientName: 'Aruguntareddy Reddy',
    age: 52,
    treatment: 'OPD Consultation',
    doctorName: 'Attentive Staff',
    rating: 5,
    comment: 'This is my very 1st visit to Siddhardha hospital and found the staff very warm, attentive and quick responding.',
    date: 'a year ago',
    verified: true,
    location: 'Gudur',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: '1',
    title: 'Recognizing Early Warning Signs of a Heart Attack vs. Acid Reflux',
    slug: 'warning-signs-heart-attack-vs-acid-reflux',
    excerpt: 'Chest discomfort is easy to confuse. Learn the key differences between angina pain and GERD, and when to rush to the ER.',
    content: `
      Chest pain is one of the most frequent reasons patients visit the Emergency Department. While heartburn (GERD) is non-life-threatening, a cardiac event requires immediate medical intervention within the golden hour.

      ### Key Differences in Pain Character:
      - **Cardiac Chest Pain:** Often feels like severe squeezing, heaviness, or an elephant sitting on your chest. It frequently radiates to the left jaw, shoulder, or arm. Accompanied by shortness of breath, unexplained cold sweats, and dizziness.
      - **Acid Reflux / GERD Pain:** Usually described as a burning sensation behind the breastbone that worsens after lying down or bending after a heavy meal. It often responds to antacids.

      ### When to Call Emergency Services Immediately:
      Never try to self-diagnose chest discomfort at home if you have risk factors such as high blood pressure, diabetes, smoking history, or elevated cholesterol. Call Siddhartha Hospital Emergency at +91 80 4900 9999 for immediate mobile ICU dispatch.
    `,
    category: 'Cardiology',
    authorName: 'Dr. R. K. Siddhartha',
    authorRole: 'Chief Interventional Cardiologist',
    authorAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200',
    publishDate: '15 Jan 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    tags: ['Heart Health', 'Emergency', 'Cardiology', 'Wellness']
  },
  {
    id: '2',
    title: 'How Robotic Knee Replacement Speeds Up Recovery and Restores Mobility',
    slug: 'robotic-knee-replacement-recovery-benefits',
    excerpt: 'Discover how 3D 3-dimensional computer mapping and robotic precision surgical arms ensure custom implant alignment and 20+ year longevity.',
    content: `
      Traditional knee replacement relied heavily on mechanical jigs and manual estimation. With the introduction of Robotic Surgical Systems at Siddhartha Hospital, joint replacement has transformed into a high-precision science.

      ### Advantages of Robotic Assistance:
      1. **Sub-millimeter Accuracy:** The robotic system creates a 3D digital model of your unique joint anatomy before making a single cut.
      2. **Bone & Ligament Preservation:** Protects surrounding healthy soft tissues, leading to significantly less post-operative pain and swelling.
      3. **Rapid Rehabilitation:** Most patients walk with light assistance within 12-24 hours of surgery and return home in 2-3 days.
    `,
    category: 'Orthopaedics',
    authorName: 'Dr. Vikramaditya Rao',
    authorRole: 'Chief Robotic Joint Surgeon',
    authorAvatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200',
    publishDate: '02 Feb 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    tags: ['Robotic Surgery', 'Joint Replacement', 'Orthopedics']
  },
  {
    id: '3',
    title: 'The Importance of Annual Preventive Health Checkups After Age 30',
    slug: 'importance-annual-health-checkups-after-30',
    excerpt: 'Silent killers like hypertension, fatty liver, pre-diabetes, and elevated lipids cause no symptoms in early stages. Here is why proactive screening saves lives.',
    content: `
      Modern lifestyle factors including prolonged sedentary sitting, chronic stress, irregular sleep patterns, and processed diets have accelerated the onset of metabolic disorders in younger adults.

      ### Essential Tests Every Adult Should Get Annually:
      - Lipid Subfractions & HbA1c
      - Complete Renal & Hepatic Function Panel
      - Ultrasound Abdomen for Fatty Liver Grading
      - Vitamin D3 & B12 Levels
      - Cardiac TMT / Stress Screening
    `,
    category: 'Preventive Care',
    authorName: 'Dr. S. V. Nageshwar',
    authorRole: 'Senior Consultant Physician',
    authorAvatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=200',
    publishDate: '20 Dec 2025',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    tags: ['Preventive Care', 'Wellness', 'Executive Health']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'State-of-the-Art Robotic Operation Theatre',
    category: 'Operation Theatre',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200',
    caption: 'Laminar airflow clean OT suite equipped with robotic surgical arm and intraoperative imaging.'
  },
  {
    id: '2',
    title: 'Biplane Digital Cath Lab',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    caption: 'Advanced flat-panel cath lab for 24/7 cardiac stenting and vascular interventions.'
  },
  {
    id: '3',
    title: '3T Digital MRI Diagnostic Suite',
    category: 'Diagnostics',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    caption: 'High-resolution silent 3T MRI scanner offering ultra-fast neuromuscular scanning.'
  },
  {
    id: '4',
    title: 'Level-3 Neonatal ICU (NICU)',
    category: 'ICU & Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&q=80&w=1200',
    caption: 'Warm, HEPA-filtered neonatal pods caring for preterm newborns with continuous monitoring.'
  },
  {
    id: '5',
    title: 'Presidential Patient Suite',
    category: 'ICU & Rooms',
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200',
    caption: 'Luxury inpatient room featuring private lounge, motorized bed, nurse call system, and city view.'
  },
  {
    id: '6',
    title: '24/7 Mobile ICU ACLS Ambulance Fleet',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&q=80&w=1200',
    caption: 'Advanced emergency ambulances equipped with telemetry link to hospital emergency room.'
  }
];

export const CAREER_JOBS: CareerJob[] = [
  {
    id: 'job-1',
    title: 'Senior Resident Doctor - Critical Care & ICU',
    department: 'Intensive Care Unit',
    experienceRequired: '2 - 5 years',
    location: 'Bengaluru Main Campus',
    type: 'Full-Time',
    description: 'We are seeking dedicated MD/DNB Anesthesia or General Medicine doctors to manage our 120-bed ICU and critical resuscitation protocols.',
    requirements: [
      'MD / DNB in Anesthesiology, Pulmonology, or General Medicine',
      'IDCCM or EDIC fellowship preferred',
      'Proven expertise in mechanical ventilation, central lines, and cardiac resuscitation'
    ],
    responsibilities: [
      'Conduct daily ICU rounds with senior Intensivists',
      'Manage patient mechanical ventilation and hemodynamic parameters',
      'Coordinate rapid response calls across hospital wards'
    ],
    deadline: '15 Aug 2026'
  },
  {
    id: 'job-2',
    title: 'Staff Nurse - Operation Theatre & Cath Lab',
    department: 'Surgical Services',
    experienceRequired: '1 - 4 years',
    location: 'Bengaluru Main Campus',
    type: 'Shift',
    description: 'Join our award-winning OT nursing team supporting robotic, neurosurgical, and cardiac bypass operations.',
    requirements: [
      'B.Sc Nursing or GNM with State Nursing Council Registration',
      'Minimum 1 year hands-on experience in scrub/circulating OT nurse role',
      'BLS and ACLS certification active'
    ],
    responsibilities: [
      'Prepare modular surgical suites and sterile instrument trays',
      'Assist surgical team during complex procedures',
      'Maintain strict infection control and inventory audits'
    ],
    deadline: '20 Aug 2026'
  },
  {
    id: 'job-3',
    title: 'Senior MRI / CT Radiology Technologist',
    department: 'Radiology & Imaging',
    experienceRequired: '3 - 6 years',
    location: 'Bengaluru Main Campus',
    type: 'Full-Time',
    description: 'Operate our Siemens 3T MRI and 128-slice Cardiac CT scanner systems with precision.',
    requirements: [
      'B.Sc in Medical Imaging Technology (BMIT)',
      'AERB certification and hands-on experience on 3T MRI systems'
    ],
    responsibilities: [
      'Perform specialized MRI angiograms, cardiac MRI, and MSK scans',
      'Maintain radiation safety standards and patient positioning comfort'
    ],
    deadline: '10 Aug 2026'
  }
];

export const FAQS = [
  {
    question: 'How do I book an OPD appointment with a specialist?',
    answer: 'You can easily book an appointment online using our 24/7 Appointment Booking tool, or call our dedicated helpline at +91 80 4900 8888. Walk-in appointments are also welcomed at our OPD registration desks.'
  },
  {
    question: 'Are cash-less insurance cashless facilities available?',
    answer: 'Yes! Siddhartha Multispeciality Hospital is empanelled with over 35+ major TPA and Health Insurance companies including Star Health, HDFC ERGO, ICICI Lombard, Niva Bupa, SBI General, Medi Assist, Paramount, and CGHS/EHS schemes.'
  },
  {
    question: 'What are the visiting hours for admitted inpatient wards and ICUs?',
    answer: 'General Ward Visiting Hours: 4:00 PM – 7:00 PM daily. Intensive Care Unit (ICU) Visiting Hours: 11:00 AM – 12:00 PM and 5:00 PM – 6:00 PM (Strictly 1 visitor allowed at a time with pass).'
  },
  {
    question: 'Is emergency ambulance service available 24/7?',
    answer: 'Yes. Our emergency hotline +91 80 4900 9999 operates 24/7. Our mobile ICU ACLS ambulances are dispatched within 3 minutes of your call with an ER doctor and paramedic team.'
  },
  {
    question: 'Can I request a second opinion on a surgery or diagnosis?',
    answer: 'Absoluty. You can upload your medical reports online or bring them to our OPD desk. Our senior Department Directors provide impartial second opinion reviews.'
  }
];

export const TIMELINE_EVENTS = [
  { year: '1998', title: 'Foundation of Siddhartha Hospital', desc: 'Started as a 50-bed community hospital with vision for ethical, accessible healthcare.' },
  { year: '2008', title: 'Expansion to 250 Beds & Heart Centre', desc: 'Launched South India’s first digital biplane cardiac cath lab and level-3 NICU.' },
  { year: '2015', title: 'NABH & JCI Accreditation', desc: 'Earned dual international quality accreditations for patient safety standards.' },
  { year: '2021', title: 'Robotic Surgery & 500-Bed Tertiary Hub', desc: 'Introduced 3D Robotic Knee and Laparoscopic surgical systems in a brand new 12-story health city tower.' },
  { year: '2026', title: 'AI-Powered Precision Health & Organ Transplant Hub', desc: 'Pioneering AI diagnostic triage, zero-wait emergency care, and multi-organ transplant center.' }
];
