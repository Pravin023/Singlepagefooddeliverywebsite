export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: 'non-veg' | 'tiffin' | 'drinks';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  pincode: string;
}

export interface PaymentMethod {
  type: 'cod' | 'upi' | 'card';
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
}
