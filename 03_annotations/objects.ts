const profile = {
  name2: "alex",
  age: 20,
  cords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { name2 }: { name2: string } = profile;
