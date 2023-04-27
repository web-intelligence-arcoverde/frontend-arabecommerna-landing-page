import { Course } from '@/components/molecules/AboutCourse';
import { Teacher } from '@/components/molecules/Teacher';

export const AboutUs = () => {
  return (
    <section id='about-us'>
      <Teacher />
      <Course />
    </section>
  );
};
