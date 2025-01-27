export type Rating = {
  id: number;
  star: 1 | 2 | 3 | 4 | 5;
  count: number;
};

export const ratings: Rating[] = [
  {
    id: 1,
    star: 5,
    count: 18,
  },
  {
    id: 2,
    star: 4,
    count: 12,
  },
  {
    id: 3,
    star: 3,
    count: 6,
  },
  {
    id: 4,
    star: 2,
    count: 3,
  },
  {
    id: 5,
    star: 1,
    count: 1,
  },
];

export type Review = {
  rating: number;
  review: string;
  user: {
    name: string;
    avatar: string;
    title: string;
  };
};

export const reviews: Review[] = [
  {
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    user: {
      name: "Will Doe",
      avatar: "/user-profile-photo.jpg",
      title: "Web Developer",
    },
  },
  {
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    user: {
      name: "John Doe",
      avatar: "/user-profile-photo.jpg",
      title: "Web Developer",
    },
  },
  {
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    user: {
      name: "Jane Doe",
      avatar: "/user-profile-photo.jpg",
      title: "Web Developer",
    },
  },
];
