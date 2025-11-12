/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // 🎨 Colors (Design Tokens)
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(212, 45%, 89%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)',
        'attribution-link': 'hsl(228, 45%, 44%)',
      },
      
      // 📝 Typography
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'body': '15px',        // Paragraphe
        'title': '22px',       // H1
        'attribution': '11px', // Footer
      },
      fontWeight: {
        'normal': '400',
        'bold': '700',
      },
      lineHeight: {
        'tight': '1.3',        // Pour le titre
        'relaxed': '1.625',    // Pour le body
      },
      
      // 📏 Spacing
      spacing: {
        'card-padding': '16px',
        'card-padding-bottom': '40px',
        'image-spacing': '24px',
        'content-padding-x': '16px',
        'content-padding-bottom': '16px',
        'content-gap': '16px',
      },
      
      // 📦 Max Width
      maxWidth: {
        'card': '320px',
      },
      
      // 🔲 Border Radius
      borderRadius: {
        'card': '20px',
        'image': '10px',
      },
      
      // ✨ Box Shadow
      boxShadow: {
        'card': '0 25px 25px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}