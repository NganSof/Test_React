export interface User {
  cell: string | "";
  gender: string | "";
  nat: string | "";
  dob: { date: string | ""; age: number };
  id: { name: string | ""; value: string | "" };
  email: string | "";
  phone: string | "";
  name: { title: string | ""; first: string | ""; last: string | "" };
  picture: {
    large: string | "";
    medium: string | "";
    thumbnail: string | "";
  };
  location: {
    city: string | "";
    country: string | "";
    postcode: number;
    state: string | "";
    coordinates: {
      latitude: string | "";
      longitude: string | "";
    };
    street: { number: number; name: string | "" };
    imezone: { offset: string | ""; description: string | "" };
    registered: { date: string | ""; age: number };
  };
}
