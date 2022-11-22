// Components==============
import React, { useState } from "react";
import Container from "../components/Container/Container";
import { useMediaQ } from "../components/useMediaQ";
import styles from "../styles/Home.module.scss";
// =========================

export default function Home() {
  // This is just a setup for retrieving the data with a useEffect hook, feel free to use your own state management solution if you prefer
  const [data, setData] = useState<NewsEntity[]>([]);

  const query = useMediaQ("min", 525);

  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <h1>This is where you should start working. Good luck!</h1>
          {/* Feel free to delete this */}
          {query && (
            <h2 className={styles["resize-warning"]}>
              This is responsive enough, resize to a smaller screen please
            </h2>
          )}
        </div>
      </Container>
    </div>
  );
}
