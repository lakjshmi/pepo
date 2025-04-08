export interface Club {
    id: number;
    name: string;
    description: string;
    createdAt: string;
  }
  
  export interface AppEvent {
    id: number;
    club: Club;
    name: string;
    description: string;
    eventDate: string;
    registrationFeeMembers: number;
    registrationFeeNonMembers: number;
    imageUrl: string | null;
    createdAt: string;
    visibility: string;
  }
  