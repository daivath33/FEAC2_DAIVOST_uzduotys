export interface Business {
  id: string;
  name: string;
  description?: number;
  address: string;
  category: string;
  contactPerson: string;
  email: string;
  photos: string[];
}

export interface BusinessQuery {
  page?: number;
  pageSize?: number;
  category?: string;
}
