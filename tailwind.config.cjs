/** @type {import('tailwindcss').Config} */





module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6F79ED",
        secondary: "#515151",
        twitter: "#1DA1F2",
        linkedin: "#0072b1",
        card1 : "#E173AA",
        card2 : "#33DDB4",
        card3 : "#738BE1",
        card4 : "#EE6E6E"
      },

      backgroundColor: {
        gradient1:
          "linear-gradient(100.89deg, rgba(108, 0, 159, 0.87) 49.02%, rgba(86, 244, 225, 0.83) 98.66%)",
      },

      fontSize: {
        heading: "2em",
        description: "1.2em",
      },

      padding: {
        p1: "34px",
        p2: "27px",
        p3: "16px",
        p4: "8px",
      },

      borderRadius: {
        b: "20px",
      },

      boxShadow: {
        bs: "4px 4px 8px rgba(0, 0, 0, 0.1), 0px 4px 40px 1px rgba(108, 0, 159, 0.12)",
      },

      screens: {
        xs: { min: "320px", max: "640px" },
      },

      backgroundImage : {
          
           hero: 'url("./src/assets/images/siddhi.jpg)',
      }
    },
  },
  plugins: [],
};
