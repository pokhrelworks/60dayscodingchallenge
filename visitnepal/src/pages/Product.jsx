import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav/>
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About Visit Nepal.</h2>
          <p>
            Welcome to Visit Nepal, your trusted companion for an unforgettable journey through the majestic landscapes and vibrant cultures of Nepal. At Visit Nepal, we are passionate about curating authentic experiences and providing personalized guidance to ensure every traveler discovers the heart and soul of this enchanting destination. 
          </p>
          <p>
          From ancient temples to snow-capped mountains, lush valleys to bustling markets, Nepal offers a tapestry of adventures waiting to be explored. Let us be your guide as you embark on a transformative voyage filled with awe-inspiring moments and lifelong memories. Start your adventure with Visit Nepal today!
          </p>
        </div>
      </section>
    </main>
  );
}
