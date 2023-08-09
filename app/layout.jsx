import "@/styles/global.css";

export const metadata = {
  title: "js-consultancy",
  description: "Consultancy Services",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* <div className="main">
          <div className="bg-white"></div>
        </div> */}

        <main className="app">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
