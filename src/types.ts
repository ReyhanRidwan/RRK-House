export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  comment: string;
}

export interface ServiceArea {
  name: string;
  isMain: boolean;
}
