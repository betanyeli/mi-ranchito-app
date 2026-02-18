import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@example/ui";

export default function Home() {
  return (
    <div className={styles.page}>
      <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
	    <div style={{backgroundColor: '#eee'}}>
	      <Button label="Hello from Web" />
          </div>
    </main>
    </div>
  );
}
