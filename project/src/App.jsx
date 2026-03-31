
import './App.css'
import Card from './assets/components/Cardcomponents/Card.jsx'
import CardCont from './assets/components/Cardcomponents/CardCont.jsx'

function App() {
  const DishImg = [
    {
      image: "https://images.unsplash.com/photo-1701579231378-3726490a407b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Paneer",
      tagline: "Rich Punjabi Paneer, creamy and full of flavor.",
      isAvailable: false
    }, // butter chicken
    {
      image: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.webp?a=1&b=1&s=612x612&w=0&k=20&c=nFSSNL37Rtl6brmMOMiBfaZy0itNgBEO2dnK5I1FlGU=",
      name: "Vadapav", tagline: "Spicy Marathi Vadapav, the ultimate street delight.", isAvailable: true
    }, // vada pav
    {
      image: "https://media.istockphoto.com/id/2189780817/photo/litti-chokha-with-raita-and-chutney.webp?a=1&b=1&s=612x612&w=0&k=20&c=7UCQlj2RJ22tiCvKiNqgw2rk65zQ0d4H-hDDZar4MH8=",
      name: "Litti Chokha", tagline: "Authentic Bihari Litti Chokha, full of rustic flavors.", isAvailable: true
    }, // dhokla
    {
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
      name: "Shahi Paneer", tagline: "Royal Shahi Paneer, rich, creamy, and indulgent.", isAvailable: true
    }, // dal baati
    {
      image: "https://media.istockphoto.com/id/1257018928/photo/gujarati-khaman-dhokla-or-steamed-gram-flour-puffy-snack-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=YQTu_3O4g7MJ7iRqXrl634_J_SajzmaF-E9W51YdAOs=",
      name: "Gujrati Dhokla", tagline: "Soft Gujarati Dhokla, light, fluffy, and tangy.", isAvailable: true
    }, // rasgulla
    {
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
      name: "Hydrabadi Biryani", tagline: "Aromatic Hyderabadi Biryani, a royal feast of spices.", isAvailable: true
    }, // dosa
    {
      image: "https://images.unsplash.com/photo-1630409351217-bc4fa6422075",
      name: "MadhyaPradeshi Upma", tagline: "Simple Madhya Pradeshi Upma, comforting and tasty.", isAvailable: false
    }, // appam
    {
      image: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Dosa", tagline: "Crispy South Indian Dosa, served with tradition.", isAvailable: false
    }, // biryani
    {
      image: "https://images.unsplash.com/photo-1625943555419-56a2cb596640",
      name: "Kerala Appam", tagline: "Soft Kerala Appam, with a hint of coconut goodness.", isAvailable: true
    }, // fish curry
    {
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143",
      name: "Tandoori Kabab", tagline: "Smoky Tandoori Kabab, grilled to perfection.", isAvailable: true
    }, // rogan josh
    {
      image: "https://media.istockphoto.com/id/695160838/photo/traditional-rajasthani-food-daal-baati-churma-indian-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=Uuzh1yVRVIgBxAYyHhCfMI5DJp4_XE5CuQk1Qz7hEfQ=",
      name: "Daal Baati Churma", tagline: "Traditional Rajasthani Daal Baati Churma, a desi feast.", isAvailable: true
    }, // kebab
    {
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWRsaXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Idli", tagline: "Fluffy South Indian Idli, light and comforting.", isAvailable: false
    },// litti chokha
  ];

  return <CardCont>
    {DishImg.map((currValue) => {
      return <Card img={currValue.image} name={currValue.name} tagline={currValue.tagline} isAvailable={currValue.isAvailable} />
    })}
  </CardCont>
}

export default App
