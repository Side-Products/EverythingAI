const newObjects = [];

for (let i = 0; i < 100; i++) {
  const newObject = {
    name: `Tool ${i + 1}`,
    url: `https://example.com/tool${i + 1}`,
    oneLiner: `One-liner for Tool ${i + 1}`,
    image:
      "https://everythingai.s3.amazonaws.com/dba82405-541d-42ea-b523-bf2a0b059ee2.jpg",
    category: "",
    subCategory: "",
    pricing: "",
    twitter: "https://twitter.com/Pushpit07",
    instagram: "https://www.instagram.com/pushpit._.07",
    linkedin: "https://www.linkedin.com/in/pushpit-bhardwaj",
    youtube: "https://www.youtube.com/@pushpit07",
    verified: true,
  };

  newObjects.push(newObject);
}

console.log(newObjects);
