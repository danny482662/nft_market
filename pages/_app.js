import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import NavBar from "../components/NavBar/NavBar";



export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
