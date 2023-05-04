import Header from "@/blocks/Header";
import Article from "@/blocks/Article";
import Footer from "@/components/Footer";

export default function IndexPage() {
  return (
    <main>
      <Header />
      <Article hero='This is my Index page'>
        <p>Home page</p>
      </Article>
      <Footer />
    </main>
  );
};