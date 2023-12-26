import { useEffect, useState } from 'react';
import Loader from '@/components/loader/Loader';

export default function Numbers({ numbers, loading }) {
  return (
    <section className="numbers">
      <div className="numbers__element">
        <p className="numbers__label">Total</p>
        <div className="numbers__number">
          {loading ? <Loader /> : numbers.all - numbers.admin}
        </div>
      </div>
      <div className="numbers__element">
        <p className="numbers__label">Active</p>
        <div className="numbers__number">
          {loading ? <Loader /> : numbers.active - numbers.admin}
        </div>
      </div>
      <div className="numbers__element">
        <p className="numbers__label">Engaged</p>
        <div className="numbers__number">
          {loading ? <Loader /> : numbers.engaged - numbers.admin}
        </div>
      </div>
      <div className="numbers__element">
        <p className="numbers__label">Clients</p>
        <div className="numbers__number">
          {loading ? <Loader /> : numbers.client - numbers.admin}
        </div>
      </div>
      <div className="numbers__element">
        <p className="numbers__label">Admin</p>
        <div className="numbers__number">
          {loading ? <Loader /> : numbers.admin}
        </div>
      </div>
    </section>
  );
}
