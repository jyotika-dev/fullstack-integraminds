const Profile = () => {
  const profile = {
    name: "John Doe",
    age: "25",
    email: "",
    occupation: "Software Engineer",
    hobbies: ["reading", "playing guitar", "singing"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  };

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Age: {profile.age}</p>
      <p>{profile.email || "No email provided"}</p>
      <p>Occupation: {profile.occupation}</p>
      <h2>Hobbies</h2>
      <ul>
        {profile.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <h2>Address</h2>
      <p>Street:{profile.address.street}</p>
      <p>City: {profile.address.city}</p>
      <p>State: {profile.address.state}</p>
      <p>Zip: {profile.address.zip}</p>
    </div>
  );
};

export default Profile
