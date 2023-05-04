import Header from "@/blocks/Header";
import Article from "@/blocks/Article";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <Article hero='This is us!'>
        <p>About page</p>
      </Article>
      <Footer />
    </main>
  );
};
