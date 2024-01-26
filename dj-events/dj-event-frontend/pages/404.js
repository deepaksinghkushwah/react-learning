import Link from "next/link";
import React from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import {FaExclamationTriangle} from "react-icons/fa";
export default function NotFoundPage() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1><FaExclamationTriangle/> 404</h1>
        <h4>Page not found</h4>
        <Link href="/">Go back home</Link>
      </div>
    </Layout>
  );
}
