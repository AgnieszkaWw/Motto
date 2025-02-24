import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import '../index.css';
import style from './Page.module.css';
export default function Page() {
  return (
    <div>
      <Layout />
      <Link to='gratitude' className={style.link}>Dodaj swoją listę wdzięczności</Link>
      </div>
  )
}