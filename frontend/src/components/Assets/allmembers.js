const members = [
    {
      "id": 1,
      "name": "Deepak Yadav",
      "role": "Web Developer",
      "description": "Hii, this is Deepak, a development enthusiast",
      "profileImg": "https://cdn.imgchest.com/files/345xck3w2z7.png",
      "socialHandles": {
        "whatsapp": 'https://wa.me/918779889761?text=Hello!',
        "linkedin": "https://www.linkedin.com/in/deepak-yadav-1280312a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMxLRwBMzTByWQDxSSJuXlw%3D%3D",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 2,
      "name": "John Doe",
      "role": "Software Engineer",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "profileImg": "https://i.pinimg.com/236x/9f/df/14/9fdf143640c90400914acdb950e45109.jpg",
      "socialHandles": {
        "whatsapp":'https://wa.me/919136833946?text=Hello!',
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 3,
      "name": "Alice Smith",
      "role": "Data Analyst",
      "description": "Passionate about analyzing data and deriving insights.",
      "profileImg": "https://i.pinimg.com/564x/b8/0f/b4/b80fb4721d08b3c94a68e359c45cd609.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 4,
      "name": "Emma Johnson",
      "role": "UI/UX Designer",
      "description": "Creating delightful user experiences with elegant designs.",
      "profileImg": "https://i.pinimg.com/564x/96/41/90/964190730a6c0ca16ad0e5edd97b180f.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 5,
      "name": "Michael Williams",
      "role": "Data Scientist",
      "description": "Exploring data science to solve real-world problems.",
      "profileImg": "https://i.pinimg.com/564x/96/41/90/964190730a6c0ca16ad0e5edd97b180f.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 6,
      "name": "Jessica Brown",
      "role": "Marketing Specialist",
      "description": "Passionate about crafting compelling marketing campaigns.",
      "profileImg": "https://i.pinimg.com/564x/40/61/41/406141df6f5411332574a8c5f659d9c7.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 7,
      "name": "David Garcia",
      "role": "Business Analyst",
      "description": "Analyzing market trends to drive business growth.",
      "profileImg": "https://i.pinimg.com/564x/90/b6/28/90b62828133670fdbd6a2f21972864b3.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 8,
      "name": "Emily Taylor",
      "role": "Graphic Designer",
      "description": "Creating visually stunning designs to captivate audiences.",
      "profileImg": "https://i.pinimg.com/564x/14/48/21/144821d3bc0f7ec70c5cf8b3efc97b9e.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 9,
      "name": "Daniel Martinez",
      "role": "Frontend Developer",
      "description": "Crafting intuitive user interfaces for web applications.",
      "profileImg": "https://i.pinimg.com/564x/e4/e5/4f/e4e54f34c79b12c07981ff6236fbc55c.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 10,
      "name": "Olivia Rodriguez",
      "role": "Content Writer",
      "description": "Crafting engaging content to connect with audiences.",
      "profileImg": "https://i.pinimg.com/564x/b4/78/59/b4785976ef63ea07c25e265e0dcb92d1.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 11,
      "name": "Olivia Rodriguez",
      "role": "Content Writer",
      "description": "Crafting engaging content to connect with audiences.",
      "profileImg": "https://i.pinimg.com/564x/b4/78/59/b4785976ef63ea07c25e265e0dcb92d1.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 12,
      "name": "Olivia Rodriguez",
      "role": "Content Writer",
      "description": "Crafting engaging content to connect with audiences.",
      "profileImg": "https://i.pinimg.com/564x/b4/78/59/b4785976ef63ea07c25e265e0dcb92d1.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    },
    {
      "id": 13,
      "name": "Olivia Rodriguez",
      "role": "Content Writer",
      "description": "Crafting engaging content to connect with audiences.",
      "profileImg": "https://i.pinimg.com/564x/b4/78/59/b4785976ef63ea07c25e265e0dcb92d1.jpg",
      "socialHandles": {
        "whatsapp": "https://example.com/whatsapp",
        "linkedin": "https://example.com/linkedin",
        "insta": "https://example.com/insta"
      }
    }
  ]


  export default members;
  