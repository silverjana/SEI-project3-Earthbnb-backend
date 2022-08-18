import bcrypt from "bcrypt"

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

const users = {
  admin: {
    email: "admin@admin.com",
    userName: "FloriAarna",
    password: await hashPassword("1234"),
    role: "admin",
  },
  user: {
    email: "user@user.com",
    userName: "user",
    password: await hashPassword("1234"),
    role: "user",
    _id: "0fc2faa7725e24f505da6c3e",
  },
};


const properties = [
  {
    name: "Private Beach Front Property",
    type: "beach",
    description: "Peaceful, private & modern 1-bed cabin, tucked away in a gated courtyard, just off the main high street. The interior is contemporary, clean & includes a living room/kitchen, a bedroom with Simba mattress & a bathroom. Outside you can enjoy the private seating area with a nice glass of wine",
    price: 100,
    date_start: "04/11/2022",
    date_end: "11/12/2022"
    amenities: "",
    latitude: 51.21922392714151,
    longitude: 1.4038154175053164,
    images: ["url"],
    reviews: ["blahblahblah"]
  },

  {
    name: "Cosy Woodland Lodge",
    type: "cabin",
    description: "Embrace the quirky, cosy interiors in this romantic getaway. Open the doors to the terrace, and let the sounds of nature waft through the lodge. Fire up the BBQ, enjoy a good meal and then spend the evening in the hot tub gazing up at the stars."
    price: 100,
    date_start: "04/11/2022",
    date_end: "11/12/2022"
    amenities: "",
    latitude: 51.21922392714151,
    longitude: 1.4038154175053164,
    images: ["url"],
    reviews: ["blahblah"]
  }


]