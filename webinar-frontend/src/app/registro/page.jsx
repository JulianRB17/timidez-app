'use client';
import './registro.css';
import Host from '@/app/registro/components/host/Host';
import Hero from './components/hero/Hero';
import Secrets from '@/components/secrets/Secrets';
import Bio from '@/components/bio/Bio';
import Form from './components/form/Form';

export default function Registro() {
  return (
    <section className="registro">
      <Hero />
      <Host />
      <Secrets />
      <Bio />
      <Form />
    </section>
  );
}
