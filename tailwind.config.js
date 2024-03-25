/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        slabo : ["Slabo", 'serif'],
        poppins : ["Roboto", 'sans-serif'],
        sourceSerif :["Source Serif ", "serif"]
      },
      backgroundImage: theme => ({
        'hero-image' : "url('/background Images/63bbdce866c70346e86d68e6_mask_background.png')",
        // 'burger-image' :"url('./src/Images/63bbdce866c703a34c6d688e_image_here.png')",
        'Food-delivery-image' :"url('/Section5 image/63bbdce866c70344636d6894_Product_Delivery.png')",
        'footer-image' :"url('/Footer Images/63bbdce866c70331d26d6890_Footer Background.jpg')",
        'food-gallary-image':"url('/Food Gallary/63bbdce866c703cdc56d68fc_background_shape.png')"
      }),
      colors :{
        custom :{
            "blue" : '#21242C',
            "lightBlue": "#2A2E3E",
            
        } ,
      },
    },
  },
  plugins: [],
}

