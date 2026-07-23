export interface Doctor {
  id: string;
  name: string;
  title: string;
  qualification: string;
  departmentId: string;
  departmentName: string;
  experience: number; // years
  languages: string[];
  image: string;
  about: string;
  education: string[];
  specializations: string[];
  awards: string[];
  opdTimings: string;
  consultationFee: number;
  rating: number;
  reviewCount: number;
  availability: 'Today' | 'Tomorrow' | 'Available in 2 Days';
  roomNumber: string;
}

export interface Department {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Super Speciality' | 'Surgical' | 'Medical' | 'Diagnostics & Emergency';
  iconName: string;
  image: string;
  bannerImage: string;
  keyFeatures: string[];
  treatments: string[];
  facilities: string[];
  headOfDepartment: string;
  stats: {
    surgeriesCompleted: string;
    bedCapacity: string;
    doctorCount: number;
  };
  faqs: { question: string; answer: string }[];
}

export interface HealthPackage {
  id: string;
  name: string;
  badge: string;
  targetAudience: string;
  price: number;
  originalPrice: number;
  testsIncluded: number;
  parametersCount: number;
  highlights: string[];
  category: 'Executive' | 'Cardiac' | 'Women' | 'Senior Citizen' | 'Diabetes';
  testDetails: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  age: number;
  treatment: string;
  doctorName: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  location: string;
  avatar: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface CareerJob {
  id: string;
  title: string;
  department: string;
  experienceRequired: string;
  location: string;
  type: 'Full-Time' | 'Shift' | 'Locum';
  description: string;
  requirements: string[];
  responsibilities: string[];
  deadline: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  isEmergency24x7: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Infrastructure' | 'Operation Theatre' | 'ICU & Rooms' | 'Diagnostics' | 'Events';
  imageUrl: string;
  caption: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  preferredDate: string;
  preferredTimeSlot: string;
  symptoms: string;
  visitType: 'First Visit' | 'Follow Up' | 'Second Opinion';
}
