import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Image
                className={styles.image}
                src="/images/planeta-rosa.gif"
                width={400}
                height={400}
                alt="Mundo Rosa Girando"
            />
            <h1 className={styles.title}>Bem-vindo ao Mundo dos Países</h1>
            <Link href="/countries">
                <button className={styles.button}>Acessar Países</button>
            </Link>
        </div>
    );
}