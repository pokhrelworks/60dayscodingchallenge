// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just Rs 500/month.
          </h2>
          <p>
          Discover Nepal without breaking the bank with Visit Nepal's budget-friendly pricing. Our transparent pricing structure ensures you know exactly what you're paying for, with no hidden fees. Choose from a range of customizable packages tailored to suit your preferences and budget, and embark on an unforgettable journey through the breathtaking landscapes and rich culture of Nepal.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
