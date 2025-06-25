// /lib/servicesData.js
// This file exports the array of service objects
const services = [
  {
    slug: "cardiology",
    name: "Cardiology Services",
    overview:
      "Our Cardiology department offers comprehensive care for a wide range of heart conditions. From preventive screenings and early diagnosis to advanced treatments and rehabilitation, our expert cardiologists utilize the latest techniques and technology to ensure optimal heart health for our patients. We focus on personalized treatment plans and compassionate support throughout your journey.",
    conditionsTreated: [
      "Coronary Artery Disease (CAD)",
      "Heart Failure (CHF)",
      "Arrhythmias (Irregular Heartbeats)",
      "Hypertension (High Blood Pressure)",
      "Valvular Heart Disease",
      "Congenital Heart Defects",
    ],
    treatments: [
      "ECG & Stress Tests",
      "Angioplasty & Stenting",
      "Cardiac Catheterization",
      "Cardiac Rehabilitation Programs",
      "Pacemaker & Defibrillator Implantation",
      "Coronary Artery Bypass Graft (CABG) Surgery Referrals",
    ],
  },
  {
    slug: "neurology",
    name: "Neurology",
    overview:
      "Our Neurology department specializes in the diagnosis, treatment, and management of disorders affecting the brain, spinal cord, and nervous system. Our expert neurologists are dedicated to providing advanced care for conditions ranging from common headaches to complex neurological diseases, ensuring personalized treatment plans for each patient.",
    conditionsTreated: [
      "Stroke",
      "Epilepsy and Seizure Disorders",
      "Parkinson's Disease",
      "Alzheimer's Disease and Dementias",
      "Migraines and Chronic Headaches",
      "Multiple Sclerosis (MS)",
      "Neuropathies",
    ],
    treatments: [
      "Electroencephalogram (EEG)",
      "Electromyography (EMG) and Nerve Conduction Studies",
      "Botox Injections for Migraine/Spasticity",
      "Medication Management",
      "Rehabilitation Therapy Referrals (Physical, Occupational, Speech)",
      "Deep Brain Stimulation (DBS) Evaluation and Management (in coordination with neurosurgery)",
    ],
  },
  {
    slug: "pediatrics",
    name: "Pediatrics & Child Health",
    overview:
      "Uzima Hospital's Pediatrics department is dedicated to the health and well-being of children from infancy through adolescence. Our pediatricians provide compassionate and comprehensive medical care, focusing on preventive health, growth and development monitoring, vaccinations, and treatment of childhood illnesses.",
    conditionsTreated: [
      "Childhood Infections (e.g., flu, common cold, measles)",
      "Allergies and Asthma",
      "Developmental Delays",
      "Digestive Disorders in Children",
      "Skin Conditions (e.g., eczema, rashes)",
      "Childhood Obesity and Nutrition",
    ],
    treatments: [
      "Well-Child Check-ups & Immunizations",
      "Acute Illness Management",
      "Chronic Disease Management",
      "Growth & Development Assessments",
      "Nutritional Counseling",
      "Behavioral and Mental Health Support",
    ],
  },
  {
    slug: "diagnostics",
    name: "Diagnostic Imaging",
    overview:
      "Our Diagnostic Imaging department provides advanced, state-of-the-art imaging services to assist in the accurate and timely diagnosis of various medical conditions. Our highly skilled radiologists and technologists ensure precise results using modern technology in a comfortable environment.",
    conditionsTreated: [
      "Fractures and Bone Injuries",
      "Internal Organ Abnormalities",
      "Tumors and Cysts",
      "Vascular Conditions",
      "Soft Tissue Injuries",
      "Infections and Inflammations",
    ],
    treatments: [
      "X-rays (Radiography)",
      "Magnetic Resonance Imaging (MRI)",
      "Computed Tomography (CT) Scans",
      "Ultrasound",
      "Mammography",
      "Bone Densitometry (DEXA Scan)",
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy Services",
    overview:
      "Our Pharmacy Services ensure that patients have convenient and safe access to prescribed medications. Our licensed pharmacists provide expert advice on medication use, potential side effects, and drug interactions, contributing to effective treatment and patient safety.",
    conditionsTreated: [
      "Medication Management for Chronic Diseases",
      "Acute Pain Management",
      "Infection Management (Antibiotics)",
      "Diabetes Management",
      "Hypertension Management",
    ],
    treatments: [
      "Prescription Dispensing",
      "Medication Therapy Management (MTM)",
      "Medication Counseling and Education",
      "Over-the-Counter (OTC) Medication Advice",
      "Compounding Services (for specialized prescriptions)",
      "Vaccine Administration (e.g., Flu shots, Shingles)",
    ],
  },
  {
    slug: "dentistry",
    name: "Dentistry",
    overview:
      "Our Dentistry department offers comprehensive oral health care for the entire family. From routine preventive care to advanced restorative and cosmetic procedures, our experienced dentists are dedicated to maintaining your beautiful smile and overall oral health.",
    conditionsTreated: [
      "Dental Cavities (Dental Caries)",
      "Gum Disease (Gingivitis, Periodontitis)",
      "Toothaches and Dental Abscesses",
      "Tooth Loss",
      "Misaligned Teeth",
      "Oral Infections",
    ],
    treatments: [
      "Routine Dental Check-ups and Cleanings",
      "Dental Fillings and Restorations",
      "Root Canal Therapy",
      "Tooth Extractions",
      "Crowns, Bridges, and Dentures",
      "Cosmetic Dentistry (Whitening, Veneers)",
      "Orthodontic Consultations and Referrals",
    ],
  },
  {
    slug: "pulmonology",
    name: "Pulmonology",
    overview:
      "Our Pulmonology department specializes in the diagnosis and treatment of diseases affecting the lungs and respiratory system. Our pulmonologists provide expert care for a wide range of breathing disorders, from common conditions like asthma to complex lung diseases.",
    conditionsTreated: [
      "Asthma",
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Pneumonia",
      "Bronchitis",
      "Sleep Apnea",
      "Interstitial Lung Disease",
      "Lung Cancer (diagnosis and management)",
    ],
    treatments: [
      "Pulmonary Function Tests (PFTs)",
      "Bronchoscopy",
      "Oxygen Therapy Management",
      "Inhaler Technique Training",
      "Smoking Cessation Programs",
      "Pulmonary Rehabilitation",
      "Management of Pleural Effusions",
    ],
  },
  {
    slug: "orthopedics",
    name: "Orthopedics",
    overview:
      "Our Orthopedics department specializes in the diagnosis, treatment, and prevention of musculoskeletal conditions. Whether you're dealing with sports injuries, arthritis, or fractures, our orthopedic surgeons and specialists are committed to restoring your mobility and improving your quality of life through advanced surgical and non-surgical approaches.",
    conditionsTreated: [
      "Fractures and Dislocations",
      "Arthritis (Osteoarthritis, Rheumatoid Arthritis)",
      "Spine Conditions (e.g., back pain, sciatica)",
      "Sports Injuries (e.g., ACL tears, rotator cuff injuries)",
      "Joint Pain (Knee, Hip, Shoulder)",
      "Osteoporosis",
    ],
    treatments: [
      "Joint Replacement Surgery (Knee, Hip, Shoulder)",
      "Arthroscopy",
      "Spine Surgery",
      "Physiotherapy & Rehabilitation",
      "Pain Management",
      "Fracture Care & Casting",
    ],
  },
  {
    slug: "nursing-care",
    name: "Nursing Care",
    overview:
      "Our dedicated Nursing Care team provides compassionate, skilled, and patient-centered support 24 hours a day. From managing complex medical conditions to assisting with daily living activities, our nurses are committed to ensuring patient comfort, safety, and recovery.",
    conditionsTreated: [
      "Post-operative Recovery",
      "Chronic Disease Management (e.g., Diabetes, Hypertension)",
      "Wound Care and Dressing Changes",
      "Medication Management",
      "Palliative and End-of-Life Care",
      "Rehabilitation Support",
    ],
    treatments: [
      "Vital Signs Monitoring",
      "Medication Administration",
      "Pain Management",
      "Wound Care",
      "Patient and Family Education",
      "Personal Care Assistance (Bathing, Mobility)",
      "Emotional and Psychological Support",
    ],
  },
  {
    slug: "vaccinations",
    name: "Vaccination Services",
    overview:
      "Our Vaccination Services provide essential immunizations for all age groups, crucial for preventing infectious diseases and promoting community health. We offer a comprehensive range of vaccines administered by qualified healthcare professionals in a safe and friendly environment.",
    conditionsTreated: [
      "Prevention of Measles, Mumps, Rubella (MMR)",
      "Prevention of Influenza (Flu)",
      "Prevention of Tetanus, Diphtheria, Pertussis (Tdap)",
      "Prevention of Polio",
      "Prevention of Hepatitis A and B",
      "Prevention of Human Papillomavirus (HPV)",
      "Prevention of Pneumococcal Disease",
    ],
    treatments: [
      "Childhood Immunization Schedules",
      "Adult Vaccinations (e.g., Tdap, Shingles, Flu)",
      "Travel Vaccinations",
      "Vaccine Consultations",
      "Catch-up Immunizations",
      "Vaccine Record Management",
    ],
  },
];

export default services;
