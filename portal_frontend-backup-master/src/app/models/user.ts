export interface User {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    year: number;
    department: string;
    active: boolean;
    role: 'ADMIN' | 'MEMBER' | 'COORDINATOR';
  }
  