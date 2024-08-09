import Hero from '../../../components/home/hero/Hero';
import Galery from "@/components/home/Galery";
import { How } from "@/components/home/How";
import Styles from '@/components/home/styles/Styles';

export default function Home() {
  return (
    <main className="max-w-7xl m-auto overflow-hidden">
      <Hero/>
     <Galery/>
     <Styles/>
      <How/>

    </main>
  );
}
